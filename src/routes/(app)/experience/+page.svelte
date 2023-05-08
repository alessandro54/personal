<script lang="ts">
	import type { PageData } from './$types';

	import format from '$lib/helper/date/short';
	import urlFor from '$lib/helper/img/urlFor';
	import { t } from '$lib/stores/i18n';
	import Modal from '$components/shared/Modal.svelte';

	export let data: PageData;

	let showModal: boolean = false;
	let promise = Promise.resolve();
	const { experiences } = data;

	const handleClick = (id: string) => {
		fetch(`/api/experience/${id}`).then((res) => {
			if (res.ok) {
				console.log(res);
				showModal = true;
			}
		});
	};
</script>

<section class="w-full h-full p-5 flex flex-col">
	<header>
		<h1 class="text-6xl text-center">{$t('experience.title')}</h1>
		<p>
			{$t('experience.subtitle')}
		</p>
	</header>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="w-full flex justify-center">
		<ul>
			{#each experiences as experience, i}
				{@const startDate = experience.startDate}
				{@const endDate = experience.endDate}
				<li
					class="flex justify-between gap-x-6 p-5 cursor-pointer hover:bg-sky-100 dark:hover:bg-gray-100 rounded"
					on:click={() => handleClick(experience._id)}
				>
					<div class="flex gap-x-4">
						<img
							class="h-12 w-12 flex-none rounded-full bg-gray-50"
							src={urlFor(experience.company.logo).width(100).url()}
							alt={experience.company.name}
						/>
						<div class="flex-auto sm:w-[340px]">
							<p class="text-sm font-semibold leading-6 text-gray-900">
								{experience.name}
							</p>
							<span class="text-xs font-thin">
								{experience.company.name}
							</span>
							<p class="break-words mt-1 text-xs text-gray-500">
								{experience.company.description}
							</p>
						</div>
						<div class="hidden sm:flex sm:flex-col sm:items-end">
							<p class="text-sm leading-6 text-gray-900">
								{$t(`date.months.short.${format(startDate).month}`)}
								{format(startDate).year}
								{#if typeof endDate === 'undefined'}
									{' - '}
									{$t('date.present')}
								{:else}
									{' - '}
									{$t(`date.months.short.${format(endDate).month}`)}
									{format(endDate).year}
								{/if}
							</p>
							<div class="mt-1 flex items-center gap-x-1.5">
								<p class="text-xs leading-5 text-gray-500">
									{experience.company.location.city}
									{', '}
									{experience.company.location.country}
									{experience.company.location.emoji}
									{#if experience.isRemote}
										{`(${$t('experience.remote')})`}
									{/if}
								</p>
							</div>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<Modal bind:showModal>
	<h2 slot="header">
		modal
		<small><em>adjective</em> mod·al \ˈmō-dəl\</small>
	</h2>
	{#await promise}{/await}
</Modal>
