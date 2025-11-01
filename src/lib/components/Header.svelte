<script>
    import { onMount } from "svelte";
    import ThemeToggle from "$lib/ThemeToggle.svelte";
    import Icon from "@iconify/svelte";

    let isMenuOpen = false;
    let activeSection = "hero"; // par défaut

    const sections = ["hero", "about", "skills", "experiences", "projects", "contact"];
    let animated = {};

    let underlineStyle = { left: '0px', width: '0px' };

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function updateUnderline() {
        const container = document.querySelector('.desktop-links');
        const activeLink = container?.querySelector(`a[href="#${activeSection}"]`);
        if (activeLink && container) {
            const rect = activeLink.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            underlineStyle = {
                left: rect.left - containerRect.left + "px",
                width: rect.width + "px"
            };
        }
    }

    onMount(() => {
        // IntersectionObserver pour animation fade + section active
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animated = { ...animated, [entry.target.id]: true };
                        activeSection = entry.target.id;
                        updateUnderline();
                    } else {
                        animated = { ...animated, [entry.target.id]: false };
                    }
                });
            },
            { threshold: 0.4 }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        window.addEventListener('resize', updateUnderline);

        // initial
        updateUnderline();

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', updateUnderline);
        };
    });
</script>

<header class="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm dark:text-gray-100">
    <nav class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <!-- Logo -->
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

        <!-- Desktop links -->
        <div class="hidden md:flex items-center relative desktop-links space-x-6 overflow-hidden">
            {#each sections.slice(1) as section}
                <a 
                    href={"#" + section} 
                    class="flex items-center relative z-10 px-1 py-1 transition-colors hover:text-blue-500"
                    class:text-blue-600={activeSection === section}
                >
                    <Icon icon={
                        section === "about" ? "ix:about" :
                        section === "skills" ? "mdi:tools" :
                        section === "experiences" ? "pajamas:work" :
                        section === "projects" ? "tabler:code" :
                        "hugeicons:contact-02"
                    } width="15" class="mr-1"/>
                    {section === "about" ? "À propos" :
                     section === "skills" ? "Compétences" :
                     section === "experiences" ? "Expériences" :
                     section === "projects" ? "Projets" :
                     "Contact"}
                </a>
            {/each}
            <ThemeToggle/>

            <!-- Underline -->
            <span
                class="absolute bottom-0 h-[2px] bg-blue-600 transition-all duration-300"
                style="left: {underlineStyle.left}; width: {underlineStyle.width};"
            ></span>
        </div>

        {#if isMenuOpen}
        <div class="absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 shadow-lg md:hidden">
            <div class="flex flex-col items-center py-4 space-y-4">
                {#each sections.slice(1) as section}
                    <a 
                        href={"#" + section} 
                        class="flex items-center transition-colors hover:text-blue-500"
                        class:text-blue-600={activeSection === section}
                        on:click={toggleMenu}
                    >
                        <Icon icon={
                            section === "about" ? "ix:about" :
                            section === "skills" ? "mdi:tools" :
                            section === "experiences" ? "pajamas:work" :
                            section === "projects" ? "tabler:code" :
                            "hugeicons:contact-02"
                        } width="15" class="mr-1"/>
                        {section === "about" ? "À propos" :
                        section === "skills" ? "Compétences" :
                        section === "experiences" ? "Expériences" :
                        section === "projects" ? "Projets" :
                        "Contact"}
                    </a>
                {/each}
            </div>
        </div>
        {/if}
    </nav>
</header>