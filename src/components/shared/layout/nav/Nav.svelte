<script lang="ts">
	import { Canvas } from '@threlte/core';

	import { page } from '$app/stores';
	import { webGL as webGLSupported } from '$/lib/stores/webGL';

	import Logo from './Logo.svelte';
	import Bars3Icon from '../../icons/Bars3Icon.svelte';
	import XMarkIcon from '../../icons/XMarkIcon.svelte';

	const buttons = [
		{ to: '/experience', label: 'Experience' },
		{ to: '/projects', label: 'Projects' },
		{ to: '/about', label: 'About Me' }
	];

	// Reactive variables
	$: open = false;

	$: isActive = (path: string): boolean => {
		return path === $page.url.pathname;
	};
</script>

<nav
	class="bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-800"
>
	<div class="mx-auto w-full px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<!-- Mobile menu button-->
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					aria-controls="mobile-menu"
					aria-expanded="false"
					on:click={() => {
						open = !open;
					}}
				>
					<span class="sr-only">Open main menu</span>
					{#if !open}
						<Bars3Icon />
					{:else}
						<XMarkIcon />
					{/if}
				</button>
			</div>
			<div
				class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
			>
				<div class="flex flex-shrink-0 items-center">
					<div class="block h-8 cursor-pointer w-[30px]">
						{#if $webGLSupported}
							<Canvas>
								<Logo />
							</Canvas>
						{/if}
					</div>
				</div>
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4 items-center">
						{#each buttons as button}
							<a
								href={button.to}
								class={isActive(button.to)
									? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
									: 'text-black dark:text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
								aria-current="page">{button.label}</a
							>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	{#if open}
		<div class="sm:hidden" id="mobile-menu">
			<div class="space-y-1 px-2 pb-3 pt-2">
				<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
				{#each buttons as button}
					<a
						href={button.to}
						class={isActive(button.to)
							? 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
							: 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'}
						aria-current="page">{button.label}</a
					>
				{/each}
			</div>
		</div>
	{/if}
</nav>
