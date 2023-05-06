<script lang="ts">
  import { renderStudio } from "sanity";
  import { onMount } from "svelte";
  import config from "$root/sanity.config";

  onMount(() => {
    renderStudio(document.getElementById("content"), config);
  });
</script>
