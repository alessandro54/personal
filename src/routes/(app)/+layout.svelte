<script lang="ts">
	import { onMount } from 'svelte';

	import '$/app.css';
	import { theme } from '$lib/stores/theme';
	import { webGL } from '$lib/stores/webGL';
	import supportsWebGL from '$lib/helper/supportsWebGL';
	import Nav from '$components/shared/layout/nav/Nav.svelte';

	onMount(() => {
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', () => {
				if ($theme === 'auto') theme!.set('auto');
			});
		webGL.set(supportsWebGL(window.document));
	});
</script>

<svelte:head>
	<script>
		if(document){let e=localStorage.theme||"light",t=document.documentElement.classList;if("dark"===e)t.add("dark"),localStorage.theme="dark";else if("light"===e)t.remove("dark"),localStorage.theme="light";else if("auto"===e){let a=window.matchMedia("(prefers-color-scheme: dark)").matches;localStorage.theme="auto",a?t.add("dark"):t.remove("dark")}}
	</script>
</svelte:head>
<Nav />
<main id="content" class="h-[calc(100%_-_65px)]">
	<slot />
</main>
