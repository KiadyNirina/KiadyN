<script>
    import { onMount } from 'svelte';
    import Icon from '@iconify/svelte'

    let isDark = false;

    onMount(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            isDark = true;
            document.documentElement.classList.add('dark');
        }
    });

    function toggleTheme() {
        isDark = !isDark;
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }
</script>

<button on:click={toggleTheme} class="p-2 rounded hover:bg-gray-200 hover:cursor-pointer dark:hover:bg-gray-700 text-xl active:scale-70">
    {#if isDark}
        <Icon icon="mdi:weather-night" class="text-yellow-600" />
    {:else}
        <Icon icon="mdi:weather-sunny" class="text-yellow-600" />
    {/if}
</button>
