<script>
    import ThemeToggle from "$lib/ThemeToggle.svelte";
    import Icon from "@iconify/svelte";

    let isMenuOpen = false;
    let activeSection = ""; // par défaut

    const sections = ["about", "projects", "skills", "experiences", "contact"];

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    import { onMount } from "svelte";

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        activeSection = entry.target.id;
                    }
                });
            },
            { threshold: 0.4 } // 40% visible pour être actif
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    });
</script>

<header class="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm dark:text-gray-100">
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
            {#each sections as section}
                <a 
                    href={"#" + section} 
                    class="flex items-center transition-colors hover:text-blue-500"
                    class:text-blue-600={activeSection === section}
                >
                    <Icon icon={
                        section === "about" ? "ix:about" :
                        section === "projects" ? "tabler:code" :
                        section === "skills" ? "mdi:tools" :
                        section === "experiences" ? "pajamas:work" :
                        "hugeicons:contact-02"
                    } width="15" class="mr-1"/>
                    {section === "about" ? "À propos" :
                    section === "projects" ? "Projets" :
                    section === "skills" ? "Compétences" :
                    section === "experiences" ? "Expériences" :
                    "Contact"}
                </a>
            {/each}
            <ThemeToggle/>
        </div>

        {#if isMenuOpen}
            <div class="absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 shadow-lg md:hidden">
                <div class="flex flex-col items-center py-4 space-y-4">
                    {#each sections as section}
                        <a 
                            href={"#" + section} 
                            class="flex items-center transition-colors hover:text-blue-500"
                            class:text-blue-600={activeSection === section}
                            on:click={toggleMenu}
                        >
                            <Icon icon={
                                section === "about" ? "ix:about" :
                                section === "projects" ? "tabler:code" :
                                section === "skills" ? "mdi:tools" :
                                section === "experiences" ? "pajamas:work" :
                                "hugeicons:contact-02"
                            } width="15" class="mr-1"/>
                            {section === "about" ? "À propos" :
                            section === "projects" ? "Projets" :
                            section === "skills" ? "Compétences" :
                            section === "experiences" ? "Expériences" :
                            "Contact"}
                        </a>
                    {/each}
                </div>
            </div>
        {/if}
    </nav>
</header>