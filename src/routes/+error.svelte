<script>
	import { page } from '$app/stores';
</script>

{#if $page.status === 404}
  <div class="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-center px-6">
    <h1 class="text-8xl font-black tracking-tighter leading-none text-black dark:text-white">404</h1>
    <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">Page introuvable</p>
    <a href="/" class="mt-8 inline-block px-6 py-3 border border-black dark:border-white rounded-full text-sm uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
      Retour à l’accueil
    </a>
  </div>
{:else}
  <div class="min-h-screen flex items-center justify-center bg-white dark:bg-black">
    <h1 class="text-9xl font-black text-black dark:text-white">{$page.status}</h1>
  </div>
{/if}