<script lang="ts">
	import { t } from '../../lib/stores/i18n';
</script>

<section
	class="w-full h-full p-2 bg-gradient-to-br dark:bg-gradient-to-b from-transparent via-white to-cyan-200 dark:from-gray-800 dark:to-cyan-900"
>
	<div class="flex flex-col items-start justify-center">
		<h1 class="text-4xl font-bold text-center text-gray-800 dark:text-gray-100">Alessandro</h1>
		<h2 class="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">Chumpitaz</h2>
		<p>
			{$t('home.intro', { name: 'tu vieja' })}
		</p>
	</div>
</section>
