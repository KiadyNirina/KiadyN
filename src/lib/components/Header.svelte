<script>
    import ThemeToggle from "$lib/ThemeToggle.svelte";
    import Icon from "@iconify/svelte";
    let isMenuOpen = false;
    
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<header class="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/10 shadow-sm dark:text-gray-100">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="/" class="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent">
            <img src="/logo.png" class="w-[50px] bg-gray-900/80 rounded-full" alt="">
        </a>

        <div class="md:hidden flex items-center space-x-4">
            <button 
                class="text-gray-600 dark:text-gray-300"
                on:click={toggleMenu}
                aria-label="Toggle menu"
            >
                <Icon icon={isMenuOpen ? 'mdi:close' : 'mdi:menu'} width="24" />
            </button>
            <ThemeToggle/>
        </div>

        <div class="hidden md:flex items-center space-x-6">
            <a href="#about" class="hover:text-blue-500 transition-colors">À propos</a>
            <a href="#projects" class="hover:text-blue-500 transition-colors">Projets</a>
            <a href="#skills" class="hover:text-blue-500 transition-colors">Compétences</a>
            <a href="#experiences" class="hover:text-blue-500 transition-colors">Expériences</a>
            <a href="#contact" class="hover:text-blue-500 transition-colors">Contact</a>
            <ThemeToggle/>
        </div>

        {#if isMenuOpen}
            <div class="absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 shadow-lg md:hidden">
                <div class="flex flex-col items-center py-4 space-y-4">
                    <a 
                        href="#about"
                        class="hover:text-blue-500 transition-colors"
                        on:click={toggleMenu}
                    >
                        À propos
                    </a>
                    <a 
                        href="#projects" 
                        class="hover:text-blue-500 transition-colors"
                        on:click={toggleMenu}
                    >
                        Projets
                    </a>
                    <a 
                        href="#skills" 
                        class="hover:text-blue-500 transition-colors"
                        on:click={toggleMenu}
                    >
                        Compétences
                    </a>
                    <a 
                        href="#experiences"
                        class="hover:text-blue-500 transition-colors"
                        on:click={toggleMenu}
                    >
                        Expériences
                    </a>
                    <a 
                        href="#contact" 
                        class="hover:text-blue-500 transition-colors"
                        on:click={toggleMenu}
                    >
                        Contact
                    </a>
                </div>
            </div>
        {/if}
    </nav>
</header>