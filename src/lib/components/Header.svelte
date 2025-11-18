<script>
    import { onMount } from "svelte";
    import ThemeToggle from "$lib/ThemeToggle.svelte";
    import Icon from "@iconify/svelte";

    let isMenuOpen = false;
    let activeSection = "hero";

    const sections = ["hero", "about", "services", "skills", "experiences", "projects", "contact"];
    let animated = {};

    let underlineStyle = { left: '0px', width: '0px' };
    let isScrolled = false;

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
        // Scroll effect
        const handleScroll = () => {
            isScrolled = window.scrollY > 20;
        };
        window.addEventListener('scroll', handleScroll);

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
        updateUnderline();

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', updateUnderline);
            window.removeEventListener('scroll', handleScroll);
        };
    });
</script>

<header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md {isScrolled ? 'bg-white/90 dark:bg-gray-900/90 shadow-lg border-b border-blue-200/50 dark:border-blue-800/50' : 'bg-white/70 dark:bg-gray-900/70'}"
>
    <nav class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <!-- Logo avec animation -->
        <a 
            href="/" 
            class="group relative flex items-center space-x-3"
        >
            <div class="relative">
                <div class="absolute -inset-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-20 blur group-hover:opacity-30 transition-all duration-500"></div>
                <img 
                    src="/logo.png" 
                    class="w-12 h-12 bg-gray-900/80 rounded-full border-2 border-white/20 group-hover:border-blue-500/30 transition-all duration-300 group-hover:scale-110" 
                    alt="Logo"
                />
                <!-- Point animé -->
                <div class="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-ping-fast"></div>
            </div>
        </a>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center space-x-3">
            <ThemeToggle/>
            <button 
                class="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all duration-300"
                on:click={toggleMenu}
                aria-label="Toggle menu"
            >
                <Icon 
                    icon={isMenuOpen ? 'mdi:close' : 'mdi:menu'} 
                    width="24" 
                    class="transition-transform duration-300 {isMenuOpen ? 'rotate-90' : ''}"
                />
            </button>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center relative desktop-links space-x-1 overflow-hidden">
            {#each sections.slice(1) as section, i}
                <a 
                    href={"#" + section} 
                    class="group relative flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 {activeSection === section ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}"
                >
                    <!-- Icone pour chaque lien -->
                    <Icon 
                        icon={
                            section === "about" ? "mdi:user" :
                            section === "services" ? "mdi:briefcase" :
                            section === "skills" ? "mdi:cog" :
                            section === "experiences" ? "mdi:timeline" :
                            section === "projects" ? "mdi:folder" :
                            "mdi:email"
                        } 
                        class="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110"
                    />
                    
                    {section === "about" ? "À propos" :
                     section === "services" ? "Services" :
                     section === "skills" ? "Compétences" :
                     section === "experiences" ? "Expériences" :
                     section === "projects" ? "Projets" :
                     "Contact"}

                    <!-- Point actif -->
                    {#if activeSection === section}
                        <div class="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-ping-fast"></div>
                    {/if}
                </a>
            {/each}

            <!-- Séparateur -->
            <div class="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2"></div>

            <!-- Theme Toggle -->
            <div class="pl-2">
                <ThemeToggle/>
            </div>

            <!-- Underline animé -->
            <div
                class="absolute bottom-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 shadow-lg shadow-blue-500/30"
                style="left: {underlineStyle.left}; width: {underlineStyle.width};"
            ></div>

            <!-- Effet de fond au survol -->
            <div class="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10 pointer-events-none"></div>
        </div>

        <!-- Mobile Menu -->
        {#if isMenuOpen}
            <div 
                class="absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-2xl border-t border-blue-200/50 dark:border-blue-800/50 md:hidden"
            >
                <div class="flex flex-col py-4 space-y-1 px-4">
                    {#each sections.slice(1) as section, i}
                        <a 
                            href={"#" + section} 
                            class="group flex items-center px-4 py-3 rounded-xl transition-all duration-300 {activeSection === section ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20'}"
                            on:click={() => {
                                toggleMenu();
                                setTimeout(updateUnderline, 100);
                            }}
                        >
                            <Icon 
                                icon={
                                    section === "about" ? "mdi:user" :
                                    section === "services" ? "mdi:briefcase" :
                                    section === "skills" ? "mdi:cog" :
                                    section === "experiences" ? "mdi:timeline" :
                                    section === "projects" ? "mdi:folder" :
                                    "mdi:email"
                                } 
                                class="w-5 h-5 mr-3 transition-transform duration-300 group-hover:scale-110"
                            />
                            
                            <span class="font-medium">
                                {section === "about" ? "À propos" :
                                section === "services" ? "Services" :
                                section === "skills" ? "Compétences" :
                                section === "experiences" ? "Expériences" :
                                section === "projects" ? "Projets" :
                                "Contact"}
                            </span>

                            <!-- Indicateur actif -->
                            {#if activeSection === section}
                                <div class="ml-auto w-2 h-2 bg-blue-500 rounded-full animate-pulse-gentle"></div>
                            {/if}
                        </a>
                    {/each}
                </div>
            </div>
        {/if}
    </nav>
</header>

<style>
    @keyframes pulse-gentle {
        0%, 100% {
            opacity: 1;
            transform: scale(1);
        }
        50% {
            opacity: 0.8;
            transform: scale(1.05);
        }
    }

    @keyframes ping-fast {
        0% {
            transform: scale(0.8);
            opacity: 1;
        }
        75%, 100% {
            transform: scale(1.5);
            opacity: 0;
        }
    }

    .animate-pulse-gentle {
        animation: pulse-gentle 2s ease-in-out infinite;
    }

    .animate-ping-fast {
        animation: ping-fast 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
</style>