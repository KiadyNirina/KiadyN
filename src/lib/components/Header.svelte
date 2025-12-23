<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import ThemeToggle from "../ThemeToggle.svelte";
    import Icon from "@iconify/svelte";

    let isMenuOpen = false;
    let activeSection = "hero";
    let isScrolled = false;

    const sections = ["hero", "about", "services", "skills", "experiences", "projects", "contact"];
    
    const sectionLabels = {
        about: "À Propos",
        services: "Services",
        skills: "Compétences",
        experiences: "Expériences",
        projects: "Projets",
        contact: "Contact"
    };

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    onMount(() => {
        const handleScroll = () => {
            isScrolled = window.scrollY > 20;
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        activeSection = entry.target.id;
                        console.log("Section active :", activeSection); 
                        console.log("📊 Toutes les sections :", sections);
                    }
                });
            },
            { threshold: 0.3 }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    });
</script>

<header 
    class="fixed top-0 left-0 right-0 z-[100] transition-all duration-700 py-1"
>
    <div class="max-w-7xl mx-auto px-6">
        <div 
            class="relative flex items-center justify-between px-6 py-3 transition-all duration-500 rounded-full border border-black/5 dark:border-white/5 {isScrolled ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-xl' : 'bg-transparent'}"
        >
            <!-- Logo -->
            <a href="#hero" class="flex items-center gap-3 group">
                <div class="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center transition-transform group-hover:rotate-[360deg] duration-700">
                    <span class="text-white dark:text-black font-black text-xs">KN</span>
                </div>
            </a>

            <!-- Desktop Nav -->
            <nav class="hidden md:flex items-center gap-2">
                {#each Object.entries(sectionLabels) as [id, label]}
                    <a 
                        href={`#${id}`}
                        class="px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all duration-300 relative group {activeSection === id ? 'text-black dark:text-white' : 'text-gray-400 hover:text-black dark:hover:text-white'}"
                    >
                        {label}
                        {#if activeSection === id}
                            <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-black dark:bg-white rounded-full"></div>
                        {/if}
                    </a>
                {/each}
                
                <div class="w-px h-4 bg-black/10 dark:white/10 mx-2"></div>
                <ThemeToggle />
            </nav>

            <!-- Mobile Actions -->
            <div class="flex md:hidden items-center gap-4">
                <ThemeToggle />
                <button 
                    on:click={toggleMenu}
                    class="p-2 text-black dark:text-white"
                >
                    <Icon icon={isMenuOpen ? "ph:x-thin" : "ph:list-thin"} class="w-8 h-8" />
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Menu Overlay -->
    {#if isMenuOpen}
        <div 
            class="fixed inset-0 bg-white dark:bg-gray-950 z-[-1] flex flex-col items-center justify-center gap-8"
            transition:fade={{ duration: 300 }}
        >
            {#each Object.entries(sectionLabels) as [id, label]}
                <a 
                    href="#{id}" 
                    on:click={toggleMenu}
                    class="text-4xl font-black uppercase tracking-tighter text-black dark:text-white hover:text-transparent transition-all"
                    style="-webkit-text-stroke: 1px currentColor;"
                >
                    {label}
                </a>
            {/each}
        </div>
    {/if}
</header>

<style>
    :global(html) {
        scroll-behavior: smooth;
    }
</style>