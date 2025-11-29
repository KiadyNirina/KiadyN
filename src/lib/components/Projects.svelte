<script>
    import Icon from "@iconify/svelte";
    import { fade, blur, slide } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { onMount } from 'svelte';

    const projects = [
        {
            type: "Projet personnel",
            title: "Bookly",
            description: "Plateforme de lecture en streaming permettant aux utilisateurs de lire et de découvrir des œuvres en ligne, n'importe où et n'importe quand.",
            tech: ["Vue", "Tailwind CSS", "Laravel", "MySQL"],
            github: "https://github.com/KiadyNirina/Bookly",
            gradient: "from-blue-500 to-blue-600"
        },
        {
            type: "Projet personnel",
            title: "CookUp",
            description: "Application de suggestion de recettes de cuisine avec fonctionnalités de filtrage avancée",
            tech: ["SvelteKit", "Tailwind CSS", "Spoonacular API"],
            image: "/Cookup1.png",
            link: "https://cookuup.netlify.app/",
            details: "Application de suggestion de recettes de cuisine avec fonctionnalités de filtrage avancée. Utilise SvelteKit pour le front-end et l'API Spoonacular pour les données.",
            functionalities: [
                "Suggestions de recettes basées sur les préférences",
                "Affichage des recettes avec détails et images",
                "Export de recettes en PDF",
                "Partage de recettes via un lien et vers les réseaux sociaux",
                "Multi-langue (français, anglais)",
                "Mode sombre et clair",
            ],
            github: "https://github.com/KiadyNirina/CookUp",
            gallery: [
                "/Cookup2.png",
                "/Cookup3.png",
                "/Cookup4.png",
            ],
            gradient: "from-blue-500 to-blue-600"
        },
        {
            type: "Projet personnel",
            title: "Real-Talk",
            description: "Plateforme de chat en temps réel avec notifications et gestion des utilisateurs",
            tech: ["Svelte", "Laravel", "MySQL"],
            image: "/real_talk.jpg",
            details: "Application de chat en temps réel avec notifications instantanées et gestion des utilisateurs. Utilise Svelte pour le front-end et Laravel pour le back-end.",
            github: "https://github.com/KiadyNirina/Real_talk",
            gallery: [
                "/real_talk.jpg",
                "/real_talk 2.jpg",
            ],
            gradient: "from-blue-600 to-blue-700"
        },
        {
            type: "Projet personnel",
            title: "Datalens",
            description: "Application de visualisation et d'analyse de données",
            tech: ["Python", "Flask", "Plotly", "Tailwind CSS"],
            image: "/Datalens1.png",
            details: "Application de visualisation et d'analyse de données. Utilise Python pour le traitement des données et la génération de graphiques interactifs.",
            functionalities: [
                "Chargement de données depuis des fichiers CSV ou JSON",
                "Graphiques interactifs avec Plotly",
                "Export de graphiques en images",
                "Tableaux de données avec pagination et tri",
            ],
            github: "https://github.com/KiadyNirina/Datalens",
            gallery: [
                "/Datalens2.png",
                "/Datalens3.png",
                "/Datalens4.png",
            ],
            gradient: "from-blue-700 to-blue-800"
        },
        {
            type: "Projet personnel",
            title: "eBoss",
            description: "Application de gestion de projet avec suivi des tâches et collaboration en équipe",
            tech: ["Svelte", "Django", "PostgreSQL"],
            image: "/eboss.jpg",
            details: "Application de gestion de projet avec suivi des tâches et collaboration en équipe. Utilise Svelte pour le front-end et Django pour le back-end.",
            github: "https://github.com/KiadyNirina/eBoss",
            gallery: [
                "/eboss 2.jpg",
                "/eboss 3.jpg",
                "/eboss 4.jpg",
                "/eboss 5.jpg",
                "/eboss 6.jpg",
                "/eboss 7.jpg",
            ],
            gradient: "from-blue-800 to-blue-900"
        }
    ];

    let selectedProject = null;
    let showModal = false;

    let tilt = 0;
    let isDragging = false;
    
    let currentPage = 1;
    const projectsPerPage = 6;
    
    $: totalPages = Math.ceil(projects.length / projectsPerPage);
    
    $: paginatedProjects = projects.slice(
        (currentPage - 1) * projectsPerPage, 
        currentPage * projectsPerPage
    );
    
    let isMobile = false;
    let currentSlide = 0;
    let touchStartX = 0;
    let touchEndX = 0;
    let sliderDirection = 0;

    const defaultImage = '/pic.svg';
    
    onMount(() => {
        const checkMobile = () => {
            isMobile = window.innerWidth < 768;
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    });
    
    function nextPage() {
        if (currentPage < totalPages) {
            currentPage += 1;
        }
    }
    
    function prevPage() {
        if (currentPage > 1) {
            currentPage -= 1;
        }
    }
    
    function goToPage(page) {
        if (page >= 1 && page <= totalPages) {
            currentPage = page;
        }
    }
    
    function nextSlide() {
        sliderDirection = 1;
        currentSlide = (currentSlide + 1) % projects.length;
    }
    
    function prevSlide() {
        sliderDirection = -1;
        currentSlide = (currentSlide - 1 + projects.length) % projects.length;
    }
    
    function goToSlide(index) {
        sliderDirection = index > currentSlide ? 1 : -1;
        currentSlide = index;
    }
    
    function handleTouchStart(e) {
        isDragging = true;
        tilt = 0;
        touchStartX = e.changedTouches[0].clientX;
    }

    function handleTouchMove(e) {
        if (!isDragging) return;
        const currentX = e.changedTouches[0].clientX;
        const diff = currentX - touchStartX;

        // Inclinaison max 12°
        tilt = Math.max(-12, Math.min(12, diff / 10));
    }
    
    function handleTouchEnd(e) {
        isDragging = false;
        touchEndX = e.changedTouches[0].clientX;
        tilt = 0;
        handleSwipe();
    }
    
    function handleSwipe() {
        const minSwipeDistance = 50;
        
        if (touchStartX - touchEndX > minSwipeDistance) {
            nextSlide();
        } 
        
        if (touchEndX - touchStartX > minSwipeDistance) {
            prevSlide();
        }
    }

    function openModal(project) {
        selectedProject = project;
        showModal = true;
        document.body.classList.add('overflow-hidden');
    }

    function closeModal() {
        showModal = false;
        selectedProject = null;
        document.body.classList.remove('overflow-hidden');
    }

    function portal(node, target = 'body') {
        const targetNode = document.querySelector(target);
        targetNode.appendChild(node);
        return {
            destroy() {
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
            }
        };
    }
</script>

<section class="py-20">
    <!-- Header Section -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 animate-slide-up">
            <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                Mes Projets
            </h2>
            <div class="relative inline-block">
                <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto"></div>
                <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full animate-ping-slow"></div>
            </div>
        </div>
        
        <!-- Projects Grid -->
        <div class="relative">
            <!-- Main Slider -->
            <div class="overflow-hidden">
                <div 
                    class="flex transition-transform duration-700 ease-out"
                    style="transform: translateX(-{currentSlide * 100}%);"
                >
                    {#each projects as project, index}
                        <div class="w-full flex-shrink-0 px-1">
                            <div 
                                class="group relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800/30 rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-200/50 dark:border-blue-800/30 hover:border-blue-500/70 transition-all duration-500 max-w-5xl mx-auto"
                                style="height: 500px;"
                            >
                                <!-- Background Image with Overlay -->
                                <div class="absolute inset-0">
                                    <img 
                                        src={project.image ? project.image : defaultImage } 
                                        alt={project.title} 
                                        class="w-full h-full object-cover transition-opacity duration-500"
                                        on:error={(e) => e.target.src = defaultImage}
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 dark:from-gray-900 via-gray-900/90 to-transparent"></div>
                                </div>

                                <!-- Content -->
                                <div class="relative h-full flex flex-col justify-end p-10">
                                    <!-- Type Badge -->
                                    <div class="mb-4">
                                        <span class="inline-block px-4 py-2 bg-blue-500/10 backdrop-blur-sm text-blue-300 dark:text-blue-300 text-sm font-bold rounded-full border border-blue-500/30">
                                            {project.type}
                                        </span>
                                    </div>

                                    <!-- Title -->
                                    <h3 class="text-4xl md:text-5xl font-black text-blue-100 dark:text-blue-100 mb-4 tracking-tight">
                                        {project.title}
                                    </h3>

                                    <!-- Description -->
                                    <p class="text-blue-200/80 dark:text-blue-200/80 text-base mb-6 max-w-2xl">
                                        {project.description}
                                    </p>

                                    <!-- Technologies -->
                                    <div class="flex flex-wrap gap-2 mb-6">
                                        {#each project.tech as tech}
                                            <span class="px-3 py-1 bg-blue-500/10 backdrop-blur-sm text-blue-300 dark:text-blue-300 text-sm rounded-lg border border-blue-500/30">
                                                {tech}
                                            </span>
                                        {/each}
                                    </div>

                                    <!-- CTA Button -->
                                    <div>
                                        <button
                                            on:click={() => openModal(project)} 
                                            class="group/btn inline-flex items-center px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/40"
                                        >
                                            <span class="mr-2">Voir les détails</span>
                                            <Icon icon="mdi:arrow-right" class="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>

            <!-- Navigation Arrows -->
            <button
                on:click={prevSlide}
                class="absolute top-1/2 -left-6 -translate-y-1/2 p-4 bg-blue-500/10 backdrop-blur-md hover:bg-blue-500/20 rounded-full border border-blue-500/30 transition-all duration-300 hover:scale-110 z-10"
            >
                <Icon icon="mdi:chevron-left" class="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </button>

            <button
                on:click={nextSlide}
                class="absolute top-1/2 -right-6 -translate-y-1/2 p-4 bg-blue-500/10 backdrop-blur-md hover:bg-blue-500/20 rounded-full border border-blue-500/30 transition-all duration-300 hover:scale-110 z-10"
            >
                <Icon icon="mdi:chevron-right" class="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </button>

            <!-- Navigation Dots -->
            <div class="flex justify-center items-center mt-8 space-x-3">
                {#each projects as _, index}
                    <button 
                        on:click={() => goToSlide(index)}
                        class="transition-all duration-300 {index === currentSlide ? 'w-12 h-3 bg-blue-500' : 'w-3 h-3 bg-blue-300 hover:bg-blue-400'} rounded-full"
                    />
                {/each}
            </div>

            <!-- Counter -->
            <div class="text-center mt-4">
                <p class="text-blue-600 dark:text-blue-400 font-bold text-lg">
                    {currentSlide + 1} / {projects.length}
                </p>
            </div>
        </div>
    </div>

    <!-- Project Modal -->
    {#if showModal}
        <div 
            use:portal
            transition:fade={{ duration: 250 }} 
            class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            on:click|self={closeModal}
        >
            <div 
                transition:blur={{ amount: 10, duration: 300 }}
                class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800/30 rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl border-2 border-blue-200/50 dark:border-blue-800/30"
            >
                <!-- Header -->
                {#if selectedProject}
                    <div class="relative rounded-t-3xl overflow-hidden">        
                        <!-- Header Content -->
                        <div class="relative p-8">
                            <div class="flex justify-between items-start">
                                <div class="flex-1">
                                    <!-- Type Badge -->
                                    <div class="mb-4">
                                        <span class="inline-block px-4 py-2 bg-blue-500/10 backdrop-blur-sm text-blue-600 dark:text-blue-300 text-sm font-bold rounded-full border border-blue-500/30">
                                            {selectedProject.type}
                                        </span>
                                    </div>
                                    
                                    <!-- Title -->
                                    <h3 class="text-4xl md:text-5xl font-black text-gray-800 dark:text-blue-100 mb-4 tracking-tight">
                                        {selectedProject.title}
                                    </h3>

                                    <!-- Description -->
                                    <p class="text-gray-900/80 dark:text-blue-200/80 text-base mb-6 max-w-2xl">
                                        {selectedProject.description}
                                    </p>

                                    <!-- Technologies -->
                                    <div class="flex flex-wrap gap-2 mb-6">
                                        {#each selectedProject.tech as tech}
                                            <span class="px-3 py-1 bg-blue-500/10 backdrop-blur-sm text-blue-600 dark:text-blue-300 text-sm rounded-lg border border-blue-500/30">
                                                {tech}
                                            </span>
                                        {/each}
                                    </div>
                                </div>
                                
                                <!-- Close Button -->
                                <button 
                                    on:click={closeModal}
                                    class="p-3 bg-blue-500/10 backdrop-blur-md hover:bg-blue-500/20 text-blue-600 dark:text-blue-300 hover:text-white rounded-xl border border-blue-500/30 transition-all duration-300 hover:scale-110 ml-4 flex-shrink-0"
                                    aria-label="Fermer"
                                >
                                    <Icon icon="mdi:close" class="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                {/if}

                <!-- Content -->
                {#if selectedProject}
                    <div class="p-8">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <!-- Images Section -->
                            <div class="space-y-6">
                                <!-- Main Image -->
                                <div class="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-video group">
                                    <img 
                                        src={selectedProject.image ? selectedProject.image : defaultImage} 
                                        alt={selectedProject.title}
                                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        on:error={(e) => e.target.src = defaultImage}
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                <!-- Gallery -->
                                {#if selectedProject.gallery && selectedProject.gallery.length > 0}
                                    <div>
                                        <h4 class="text-lg font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                                            <div class="w-8 h-8 bg-gradient-to-r {selectedProject.gradient} rounded-lg flex items-center justify-center mr-3">
                                                <Icon icon="mdi:image-multiple" class="w-4 h-4 text-white" />
                                            </div>
                                            Galerie
                                        </h4>
                                        <div class="grid grid-cols-3 gap-3">
                                            {#each selectedProject.gallery as img, i}
                                                <div class="cursor-pointer group/gallery hover:opacity-80 transition-all duration-300">
                                                    <img 
                                                        src={img} 
                                                        alt={`Preview ${i+1}`}
                                                        class="w-full h-20 object-cover rounded-xl transition-transform duration-300 group-hover/gallery:scale-110 border border-blue-200/50 dark:border-blue-800/30"
                                                        on:error={(e) => e.target.src = defaultImage}
                                                    />
                                                </div>
                                            {/each}
                                        </div>
                                    </div>
                                {/if}
                            </div>

                            <!-- Details Section -->
                            <div class="space-y-6">
                                <!-- Technical Details -->
                                {#if selectedProject.details}
                                    <div>
                                        <h4 class="text-lg font-bold mb-3 flex items-center text-gray-900 dark:text-white">
                                            <div class="w-8 h-8 bg-gradient-to-r {selectedProject.gradient} rounded-lg flex items-center justify-center mr-3">
                                                <Icon icon="mdi:code-tags" class="w-4 h-4 text-white" />
                                            </div>
                                            Détails techniques
                                        </h4>
                                        <p class="text-gray-700 dark:text-gray-300 leading-relaxed bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-blue-200/30 dark:border-blue-800/30">
                                            {selectedProject.details}
                                        </p>
                                    </div>
                                {/if}

                                <!-- Functionalities -->
                                {#if selectedProject.functionalities && selectedProject.functionalities.length > 0}
                                    <div>
                                        <h4 class="text-lg font-bold mb-3 flex items-center text-gray-900 dark:text-white">
                                            <div class="w-8 h-8 bg-gradient-to-r {selectedProject.gradient} rounded-lg flex items-center justify-center mr-3">
                                                <Icon icon="mdi:check-circle-outline" class="w-4 h-4 text-white" />
                                            </div>
                                            Fonctionnalités
                                        </h4>
                                        <div class="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-blue-200/30 dark:border-blue-800/30 p-4">
                                            <ul class="space-y-2">
                                                {#each selectedProject.functionalities as feature, i}
                                                    <li 
                                                        in:slide={{ delay: i * 80, duration: 400 }}
                                                        class="flex items-start text-gray-700 dark:text-gray-300"
                                                    >
                                                        <div class="w-2 h-2 bg-gradient-to-r {selectedProject.gradient} rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse-gentle"></div>
                                                        <span>{feature}</span>
                                                    </li>
                                                {/each}
                                            </ul>
                                        </div>
                                    </div>
                                {/if}

                                <!-- Action Buttons -->
                                <div class="flex flex-col sm:flex-row gap-4 pt-4">
                                    {#if selectedProject.link}
                                        <a 
                                            href={selectedProject.link} 
                                            class="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border border-blue-500/50"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <Icon icon="mdi:web" class="w-5 h-5 mr-3 relative z-10" />
                                            <span class="relative z-10">Voir en ligne</span>
                                        </a>
                                    {/if}

                                    {#if selectedProject.github}
                                        <a 
                                            href={selectedProject.github} 
                                            class="group relative inline-flex items-center justify-center px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border border-gray-700/50"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Icon icon="mdi:github" class="w-5 h-5 mr-3" />
                                            Code source
                                        </a>
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div>
                {/if}
            </div>
        </div>
    {/if}
</section>

<style>
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(40px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

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

    @keyframes ping-slow {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        75%, 100% {
            transform: scale(2);
            opacity: 0;
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

    .animate-slide-up {
        animation: slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        opacity: 0;
    }

    .animate-pulse-gentle {
        animation: pulse-gentle 2s ease-in-out infinite;
    }

    .animate-ping-slow {
        animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
    }

    .animate-ping-fast {
        animation: ping-fast 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
    }

    .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>