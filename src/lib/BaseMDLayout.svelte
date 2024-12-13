<script lang="ts">
  // Base wrapper for MD content:
  // it will be used to wrap the content of all *.md files
  let { children } = $props();
</script>

<article class="content">
  {@render children()}
</article>