<script>
	import { page } from '$app/stores';
	import NotFound from '$components/error/NotFound.svelte';

	let error = $page.error?.message;
</script>

<section
	class="grid h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8"
>
	{#if error === 'Not Found'}
		<NotFound />
	{:else if error === 'Internal Error'}
		<p>Server Error</p>
	{:else}
		<p>Unknown Error</p>
	{/if}
</section>
