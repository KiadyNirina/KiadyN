<script>
    import Icon from "@iconify/svelte";
    import { fade, blur, slide } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { onMount } from 'svelte';

    const projects = [
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
        {#if !isMobile}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each paginatedProjects as project, index}
                    <div 
                        in:slide={{ delay: index * 100, duration: 500, easing: quintOut }}
                        out:fade={{ duration: 300 }}
                        class="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-blue-200/50 dark:border-blue-800/50 transition-all duration-500 hover:-translate-y-2"
                    >
                        <!-- Animated Border -->
                        <div class="absolute inset-0 rounded-2xl bg-gradient-to-r {project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                            <div class="absolute inset-[2px] rounded-2xl bg-white dark:bg-gray-800"></div>
                        </div>

                        <!-- Project Image -->
                        <div class="relative overflow-hidden">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                                on:error={(e) => e.target.src = defaultImage}
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span class="text-white text-sm font-medium bg-blue-500 px-3 py-1 rounded-full">
                                    {project.type}
                                </span>
                            </div>
                            <!-- Floating Dot -->
                            <div class="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full animate-pulse-gentle"></div>
                        </div>

                        <!-- Project Content -->
                        <div class="p-6 relative z-10">
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                {project.description}
                            </p>
                            
                            <!-- Technologies -->
                            <div class="flex flex-wrap gap-2 mb-4">
                                {#each project.tech as tech, i}
                                    <span 
                                        class="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full border border-blue-200 dark:border-blue-800 transition-all duration-300 hover:scale-105"
                                        style="animation-delay: {i * 0.1}s;"
                                    >
                                        {tech}
                                    </span>
                                {/each}
                            </div>

                            <!-- CTA Button -->
                            <div 
                                on:click={() => openModal(project)} 
                                class="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 group/btn cursor-pointer"
                            >
                                <span class="mr-2">Voir les détails</span>
                                <Icon icon="mdi:arrow-right" class="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </div>
                        </div>

                        <!-- Hover Effect -->
                        <div class="absolute inset-0 rounded-2xl bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                {/each}
            </div>
        {:else}
            <!-- Mobile Slider avec Effet 3D -->
            <div class="relative overflow-hidden md:hidden select-none">
                <div 
                    class="flex transition-transform duration-500 ease-out"
                    style="transform: translateX(-{currentSlide * 100}%);"
                    on:touchstart={handleTouchStart}
                    on:touchmove={handleTouchMove}
                    on:touchend={handleTouchEnd}
                >
                    {#each projects as project, index}
                        <div class="w-full flex-shrink-0 px-5">
                            <div 
                                class="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-200/50 dark:border-blue-800/50 transition-transform duration-300"
                                style="transform: perspective(900px) rotateY({index === currentSlide ? tilt : 0}deg) scale({index === currentSlide ? 1 : 0.9});"
                            >
                                <!-- Image -->
                                <div class="relative overflow-hidden rounded-t-2xl">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        class="w-full h-48 object-cover"
                                        on:error={(e) => e.target.src = defaultImage}
                                    />
                                    <div class="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full animate-pulse-gentle"></div>
                                </div>

                                <!-- Content -->
                                <div class="p-6">
                                    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        {project.title}
                                    </h3>

                                    <p class="text-gray-600 dark:text-gray-400 mb-4">
                                        {project.description}
                                    </p>

                                    <div class="flex flex-wrap gap-2 mb-5">
                                        {#each project.tech as tech}
                                            <span class="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full border border-blue-200 dark:border-blue-800">
                                                {tech}
                                            </span>
                                        {/each}
                                    </div>

                                    <div 
                                        on:click={() => openModal(project)} 
                                        class="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer transition-all duration-300"
                                    >
                                        <span class="mr-2">Voir les détails</span>
                                        <Icon icon="mdi:arrow-right" class="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>

                <button
                    on:click={prevSlide}
                    class="absolute top-1/2 left-3 -translate-y-1/2 
                        p-3 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-md 
                        hover:scale-110 transition z-20">
                    <Icon icon="mdi:chevron-left" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </button>

                <button
                    on:click={nextSlide}
                    class="absolute top-1/2 right-3 -translate-y-1/2 
                        p-3 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-md 
                        hover:scale-110 transition z-20">
                    <Icon icon="mdi:chevron-right" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </button>

                <!-- Navigation Dots + Controls -->
                <div class="flex flex-col items-center mt-6 space-y-3">

                    <div class="flex space-x-2">
                        {#each projects as _, index}
                            <button 
                                on:click={() => goToSlide(index)}
                                class="w-2.5 h-2.5 rounded-full transition-all duration-300 {index === currentSlide ? 'bg-blue-600 scale-125' : 'bg-gray-400 dark:bg-gray-600'}"
                            />
                        {/each}
                    </div>

                    <p class="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {currentSlide + 1} / {projects.length}
                    </p>
                </div>
            </div>
            {/if}

        <!-- Pagination -->
        {#if totalPages > 1 && !isMobile}
            <div 
                in:fade={{ delay: 300, duration: 500 }}
                class="flex justify-center items-center mt-12 space-x-4"
            >
                <button 
                    on:click={prevPage}
                    disabled={currentPage === 1}
                    class="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200/50 dark:border-blue-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
                >
                    <Icon icon="mdi:chevron-left" class="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </button>
                
                <div class="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg border border-blue-200/50 dark:border-blue-800/50">
                    <span class="text-blue-600 dark:text-blue-400 font-bold">{currentPage}</span>
                    <span class="text-gray-400">/</span>
                    <span class="text-gray-600 dark:text-gray-400">{totalPages}</span>
                </div>
                
                <button 
                    on:click={nextPage}
                    disabled={currentPage === totalPages}
                    class="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200/50 dark:border-blue-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
                >
                    <Icon icon="mdi:chevron-right" class="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </button>
            </div>
        {/if}
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
                class="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl border border-blue-200/50 dark:border-blue-800/50"
            >
                <div class="sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-6 border-b border-blue-200/50 dark:border-blue-800/50 flex justify-between items-center z-10">
                    <h2 class="text-2xl font-black bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                        Détails du projet
                    </h2>
                    <button 
                        on:click={closeModal}
                        class="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all duration-300 hover:scale-110"
                        aria-label="Fermer"
                    >
                        <Icon icon="mdi:close" class="w-6 h-6" />
                    </button>
                </div>

                {#if selectedProject}
                    <div class="p-8">
                        <!-- Header -->
                        <div class="flex justify-between items-start mb-8">
                            <div>
                                <h3 class="text-3xl font-black bg-gradient-to-r {selectedProject.gradient} bg-clip-text text-transparent mb-2">
                                    {selectedProject.title}
                                </h3>
                                <div class="flex items-center space-x-3">
                                    <span class="px-4 py-2 bg-gradient-to-r {selectedProject.gradient} text-white text-sm font-bold rounded-full shadow-lg animate-pulse-gentle">
                                        {selectedProject.type}
                                    </span>
                                    <div class="w-2 h-2 bg-blue-500 rounded-full animate-ping-fast"></div>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <!-- Images Section -->
                            <div class="space-y-4">
                                <div class="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-video group">
                                    <img 
                                        src={selectedProject.image} 
                                        alt={selectedProject.title} 
                                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        on:error={(e) => e.target.src = defaultImage}
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {#if selectedProject.gallery && selectedProject.gallery.length > 0}
                                    <div class="grid grid-cols-3 gap-3">
                                        {#each selectedProject.gallery as img, i}
                                            <div class="cursor-pointer group/gallery hover:opacity-80 transition-all duration-300">
                                                <img 
                                                    src={img} 
                                                    alt={`Preview ${i+1}`} 
                                                    class="w-full h-20 object-cover rounded-xl transition-transform duration-300 group-hover/gallery:scale-110"
                                                    on:error={(e) => e.target.src = defaultImage}
                                                />
                                            </div>
                                        {/each}
                                    </div>
                                {/if}
                            </div>

                            <!-- Details Section -->
                            <div class="space-y-6">
                                <!-- Description -->
                                <div>
                                    <h4 class="text-lg font-bold mb-3 flex items-center text-gray-900 dark:text-white">
                                        <div class="w-8 h-8 bg-gradient-to-r {selectedProject.gradient} rounded-lg flex items-center justify-center mr-3">
                                            <Icon icon="mdi:information-outline" class="w-4 h-4 text-white" />
                                        </div>
                                        Description
                                    </h4>
                                    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedProject.description}</p>
                                </div>

                                <!-- Technical Details -->
                                {#if selectedProject.details}
                                    <div>
                                        <h4 class="text-lg font-bold mb-3 flex items-center text-gray-900 dark:text-white">
                                            <div class="w-8 h-8 bg-gradient-to-r {selectedProject.gradient} rounded-lg flex items-center justify-center mr-3">
                                                <Icon icon="mdi:code-tags" class="w-4 h-4 text-white" />
                                            </div>
                                            Détails techniques
                                        </h4>
                                        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedProject.details}</p>
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
                                {/if}

                                <!-- Technologies -->
                                <div>
                                    <h4 class="text-lg font-bold mb-3 flex items-center text-gray-900 dark:text-white">
                                        <div class="w-8 h-8 bg-gradient-to-r {selectedProject.gradient} rounded-lg flex items-center justify-center mr-3">
                                            <Icon icon="mdi:hammer-wrench" class="w-4 h-4 text-white" />
                                        </div>
                                        Technologies
                                    </h4>
                                    <div class="flex flex-wrap gap-2">
                                        {#each selectedProject.tech as tech, i}
                                            <span 
                                                in:slide={{ delay: i * 60, duration: 400 }}
                                                class="px-4 py-2 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 font-medium rounded-xl border border-blue-200 dark:border-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                            >
                                                {tech}
                                            </span>
                                        {/each}
                                    </div>
                                </div>

                                <!-- Action Buttons -->
                                <div class="flex flex-col sm:flex-row gap-4 pt-4">
                                    {#if selectedProject.link}
                                        <a 
                                            href={selectedProject.link} 
                                            class="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
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
                                            class="group relative inline-flex items-center justify-center px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
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