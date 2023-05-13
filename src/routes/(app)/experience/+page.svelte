<script lang="ts">
	import _ from 'lodash';
	import type { PageData } from './$types';

	import { t } from '$lib/stores/i18n';
	import { experience as store } from '$lib/stores/experience';
	import urlFor from '$lib/helper/img/urlFor';

	import Modal from '$components/shared/Modal.svelte';
	import ExperienceCard from '$components/experience/ExperienceCard.svelte';
	import Scene from '$components/experience/Scene.svelte';
	import { Canvas } from '@threlte/core';

	export let data: PageData;

	let showModal: boolean = false;
	let experiences: Array<Experience> = [];
	let selectedExperience: Experience | undefined;

	let innerWidth: number = 0;

	store.set(data.experiences);

	store.subscribe((v) => {
		experiences = v;
	});

	const setExperience = async (id: string) => {
		selectedExperience = _(experiences).filter({ _id: id }).first();
	};

	const handleClick = () => {
		if (innerWidth < 1024) showModal = true;
	};

	const handleMouseLeave = () => {
		if (innerWidth > 1024) selectedExperience = undefined;
	};
</script>

<svelte:window bind:innerWidth />

<section class="w-full h-full p-5 flex flex-col">
	<header>
		<h1 class="text-4xl text-center">{$t('experience.title')}</h1>
		<p>
			{$t('experience.subtitle')}
		</p>
	</header>
	<div class="h-full grid place-items-center">
		<div class="mx-auto w-full px-4 sm:px-6 2xl:max-w-[75%] lg:px-8">
			<div
				class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8 min-h-[calc(100vh_*_0.55)]"
			>
				<!-- Left column -->
				<div class="grid grid-cols-1 gap-4 lg:col-span-2 h-full">
					<section aria-labelledby="experiences">
						<h2 class="sr-only" id="experiences">Experiences</h2>
						<div class="overflow-hidden rounded-lg bg-white shadow h-full">
							<div class="p-6 h-full">
								<ul class="w-full h-full flex flex-col justify-center">
									{#each experiences as experience, i}
										<!-- svelte-ignore a11y-click-events-have-key-events -->
										<li
											class="w-full flex justify-between gap-x-6 p-5 cursor-pointer hover:bg-sky-100 dark:hover:bg-gray-100 rounded"
											on:mouseenter={() => setExperience(experience._id)}
											on:mouseleave={() => handleMouseLeave()}
											on:click={() => handleClick()}
										>
											<ExperienceCard
												{experience}
												company={experience.company}
												startDate={experience.startDate}
												endDate={experience.endDate}
											/>
										</li>
									{/each}
								</ul>
							</div>
						</div>
					</section>
				</div>

				<!-- Right column -->
				<div class="lg:grid hidden grid-cols-1 gap-4 h-full">
					<section aria-labelledby="selected">
						<h2 class="sr-only" id="selected">Selected experience</h2>
						<div class="h-full overflow-hidden rounded-lg bg-white shadow">
							<div class="p-6 h-full relative">
								<!-- Your content -->
								{#if selectedExperience}
									<h3 class="text-xl font-bold">
										{selectedExperience.name}
										<span class="text-xs">
											{$t('experience.at')}
											{selectedExperience.company.name}</span
										>
									</h3>
								{:else}
								<Canvas>
									<Scene />
								</Canvas>
								{/if}
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	</div>
</section>

{#if selectedExperience && innerWidth <= 1024}
	<Modal bind:showModal>
		<header slot="header">
			<h3 class="text-xl font-bold">
				{selectedExperience.name}
			</h3>
			<p class="flex items-center justify-start">
				<span class="mr-2">{selectedExperience.company.name}</span>
				<img
					class="h-6 w-6 flex-none rounded-full bg-gray-50"
					src={urlFor(selectedExperience.company.logo).width(100).url()}
					alt={selectedExperience.company.name}
				/>
				<span class="text-xs italic text-gray-500"
					>{selectedExperience.company.description}</span
				>
			</p>
		</header>
		<div>sad</div>
	</Modal>
{/if}
