<script lang="ts">
	import type { PageData } from './$types';
	import imageUrlBuilder from '@sanity/image-url';

	import { client } from '$lib/sanity';
	import format from '$lib/helper/date/short';
	import { t } from '$lib/stores/i18n';

	export let data: PageData;

	const { experiences } = data;
	const builder = imageUrlBuilder(client);

	const urlFor = (source: string) => {
		return builder.image(source);
	};
</script>

<ul>
	{#each experiences as experience}
		{@const startDate = experience.startDate}
		{@const endDate = experience.endDate}
		<li class="flex justify-between gap-x-6 py-5">
			<div class="flex gap-x-4">
				<img
					class="h-12 w-12 flex-none rounded-full bg-gray-50"
					src={urlFor(experience.company.logo).width(100).url()}
					alt={experience.company.name}
				/>
				<div class="min-w-0 flex-auto">
					<p class="text-sm font-semibold leading-6 text-gray-900">
						{experience.name}
					</p>
					<p class="mt-1 truncate text-xs leading-5 text-gray-500">
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
