<script lang="ts">
	import { onMount } from 'svelte';
	import { theme, type Theme } from '$lib/stores/theme';
	import SunIcon from '$icons/SunIcon.svelte';
	import MoonIcon from '$icons/MoonIcon.svelte';
	import EyeIcon from '$root/src/assets/icons/EyeIcon.svelte';

	let state: Theme;
	let states: Array<Theme> = ['light', 'auto', 'dark'];
	onMount(() => {
		state = $theme!;
	});

	const handleClick = () => {
		changeState();
	};

	const changeState = () => {
		const index = states.indexOf(state) + 1;
		state = states[((index % 3) + 3) % 3]; // Hardcoded to 3 because of states
		theme?.set(state);
	};
</script>

<button
	type="button"
	class="bg-gray-200 dark:bg-sky-900 relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0"
	role="switch"
	aria-checked="mixed"
	on:click={handleClick}
>
	{#if state === 'light'}
		<span
			class="translate-x-0 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white dark:bg-cyan-700 dark:text-white shadow ring-0 transition duration-200 ease-in-out"
		>
			<span
				class="opacity-100 duration-100 absolute inset-0 flex h-full w-full items-center justify-center transition-opacity p-1"
				aria-hidden="true"
			>
				<SunIcon />
			</span>
		</span>
	{:else if state === 'auto'}
		<span
			class="translate-x-3 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white dark:bg-cyan-700 dark:text-white shadow ring-0 transition duration-200 ease-in-out"
		>
			<span
				class="opacity-100 duration-100 ease-out absolute inset-0 flex h-full w-full items-center justify-center transition-opacity p-1"
				aria-hidden="true"
			>
				<EyeIcon />
			</span>
		</span>
	{:else if state === 'dark'}
		<span
			class="translate-x-6 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white dark:bg-cyan-700 dark:text-white shadow ring-0 transition duration-200 ease-in-out"
		>
			<span
				class="opacity-100 duration-100 ease-out absolute inset-0 flex h-full w-full items-center justify-center transition-opacity p-1"
				aria-hidden="true"
			>
				<MoonIcon />
			</span>
		</span>
	{/if}
</button>
