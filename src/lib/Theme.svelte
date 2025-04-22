<script>
    import { Sun, Moon } from 'lucide-svelte';
    export let theme = 'light'; // ou dark, selon ton système
  </script>
  
  <div class="icon-container group">
    {#if theme === 'light'}
      <Sun class="w-6 h-6 text-yellow-500 dark:text-gray-200 transition-transform duration-300 group-hover:rotate-12" />
    {:else}
      <Moon class="w-6 h-6 text-gray-800 dark:text-yellow-400 transition-transform duration-300 group-hover:-rotate-12" />
    {/if}
  </div>
  