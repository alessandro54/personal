<script lang="ts">
	import { onMount } from 'svelte';
	import '$/app.css';
	import { theme } from '../../lib/stores/theme';
	import Nav from '../../components/shared/layout/nav/Nav.svelte';

	const store = theme();

	onMount(() => {
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
			//Listen if a user changes their OS color scheme
			const newColorScheme = event.matches ? 'dark' : 'light';
			store.set(newColorScheme);
		});
	});
</script>

<Nav />
<main id="content" class="h-[calc(100%_-_64px)] overflow-y-auto">
	<slot />
</main>
