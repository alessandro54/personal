<script lang="ts">
	import { onMount } from 'svelte';
	import '$/app.css';
	import { theme } from '$lib/stores/theme';
	import { webGL } from '$lib/stores/webGL'
	import supportsWebGL from '$lib/helper/supportsWebGL';
	import Nav from '$components/shared/layout/nav/Nav.svelte';

	const store = theme();

	onMount(() => {
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
			//Listen if a user changes their OS color scheme
			const newColorScheme = event.matches ? 'dark' : 'light';
			store.set(newColorScheme);
		});
		webGL.set(supportsWebGL(window.document));
	});
</script>

<Nav />
<main id="content" class="h-[calc(100%_-_65px)] bg-slate-100">
	<slot />
</main>
