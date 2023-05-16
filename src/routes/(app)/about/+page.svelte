<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<section class="w-full h-full bg-gray-50 dark:bg-gray-800 grid place-items-center">
  <div>
    {data.hero.firstName}
  </div>
</section>
