<script lang="ts">
  import { t } from '$lib/stores/i18n';
</script>
<div class="text-center">
  <p class="text-9xl font-semibold text-indigo-600">404</p>
  <h1
    class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
  >
    {$t('error.404.title')}
  </h1>
  <p class="mt-6 text-base leading-7 text-gray-600">
    {$t('error.404.description')}
  </p>
  <div class="mt-10 flex items-center justify-center gap-x-6">
    <a
      href="/"
      class="rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >{$t('error.404.goBack')}</a
    >
  </div>
</div>
