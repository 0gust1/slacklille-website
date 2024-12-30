<script lang="ts">
  // Base wrapper for MD content:
  // it will be used to wrap the content of all *.md files
  let { children, title, author, description } = $props();
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content="{description}" />
  <meta name="author" content="{author}" />
</svelte:head>

<article class="content">
  {@render children()}
</article>

<style lang="postcss">
  .content {
    @apply bg-white/30;
  }
</style>