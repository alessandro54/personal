<script lang="ts">
	import { t } from '$lib/stores/i18n';
	import format from '$lib/helper/date/short';
	import urlFor from '$lib/helper/img/urlFor';

	export let experience: Experience,
		company: Company,
		startDate: string,
		endDate: string;
</script>

<div class="flex gap-x-4 w-full">
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
			{company.name}
		</span>
		<p class="break-words mt-1 text-xs text-gray-500">
			{company.description}
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
				{company.location.city}
				{', '}
				{company.location.country}
				{company.location.emoji}
				{#if experience.isRemote}
					{`(${$t('experience.remote')})`}
				{/if}
			</p>
		</div>
	</div>
</div>
