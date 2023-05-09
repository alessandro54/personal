<script lang="ts">
	import _ from 'lodash';
	import type { PageData } from './$types';

	import { t } from '$lib/stores/i18n';
	import { experience as store } from '$lib/stores/experience';
	import format from '$lib/helper/date/short';
	import urlFor from '$lib/helper/img/urlFor';

	import Modal from '$components/shared/Modal.svelte';

	export let data: PageData;

	let showModal: boolean = false;
	let experiences: Array<Experience> = [];
	let selectedExperience: Experience | undefined;

	store.set(data.experiences);

	store.subscribe((v) => {
		experiences = v;
	});

	const setExperience = async (id: string) => {
		selectedExperience = _(experiences).filter({ _id: id }).first();
	};

	const handleClick = () => {
		showModal = true;
	};
</script>

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
				class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8 min-h-[800px]"
			>
				<!-- Left column -->
				<div class="grid grid-cols-1 gap-4 lg:col-span-2 h-full">
					<section aria-labelledby="section-1-title">
						<h2 class="sr-only" id="section-1-title">Experiences</h2>
						<div class="overflow-hidden rounded-lg bg-white shadow h-full">
							<div class="p-6 h-full">
								<ul class="w-full h-full flex flex-col justify-center">
									{#each experiences as experience, i}
										{@const startDate = experience.startDate}
										{@const endDate = experience.endDate}
										<!-- svelte-ignore a11y-click-events-have-key-events -->
										<li
											class="w-full flex justify-between gap-x-6 p-5 cursor-pointer hover:bg-sky-100 dark:hover:bg-gray-100 rounded"
											on:mouseenter={() => setExperience(experience._id)}
											on:mouseleave={() => (selectedExperience = undefined)}
											on:click={() => handleClick()}
										>
											<div class="flex gap-x-4 w-full">
												<img
													class="h-12 w-12 flex-none rounded-full bg-gray-50"
													src={urlFor(experience.company.logo).width(100).url()}
													alt={experience.company.name}
												/>
												<div class="flex-auto sm:w-[340px]">
													<p
														class="text-sm font-semibold leading-6 text-gray-900"
													>
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
						</div>
					</section>
				</div>

				<!-- Right column -->
				<div class="lg:grid hidden grid-cols-1 gap-4 h-full">
					<section aria-labelledby="section-2-title">
						<h2 class="sr-only" id="section-2-title">Selected experience</h2>
						<div class="h-full overflow-hidden rounded-lg bg-white shadow">
							<div class="p-6">
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
									tu vieja
								{/if}
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	</div>
</section>

{#if selectedExperience}
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
