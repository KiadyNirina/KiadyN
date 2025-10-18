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
            ]
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
            ]
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
            ]
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
            ]
        },
        {
            type: "Projet freelance",
            title: "MCI",
            description: "Site vitrine pour une entreprise de comparateur d'agences immobilières",
            tech: ["wordpress", "PHP", "MySQL"],
            image: "/moncomparateurimmo.PNG",
            link: "https://www.moncomparateur-immo.com/",
            details: "Site vitrine pour une entreprise de comparateur d'agences immobilières. Utilise WordPress pour la gestion du contenu.",
        }
    ];

    let selectedProject = null;
    let showModal = false;
    
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
        touchStartX = e.changedTouches[0].screenX;
    }
    
    function handleTouchEnd(e) {
        touchEndX = e.changedTouches[0].screenX;
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

<section id="projects" class="py-20 mt-50 mb-50">
    <h2 class="text-3xl font-bold text-center mb-12">
        <span class="border-b-4 border-blue-500 pb-2 dark:text-gray-100">Mes Projets</span>
    </h2>
    
    {#if !isMobile}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 dark:text-gray-100">
            {#each paginatedProjects as project, index}
                <div 
                    in:slide={{ delay: index * 100, duration: 500, easing: quintOut }}
                    out:fade={{ duration: 300 }}
                    class="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 dark:shadow-gray-800"
                >
                    <img src={project.image} alt={project.title} class="w-full h-48 object-cover" />
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">{project.title}</h3>
                        <p class="text-gray-600 text-base dark:text-gray-400 mb-4">{project.description}</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            {#each project.tech as tech}
                                <span class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full">{tech}</span>
                            {/each}
                        </div>
                        <div 
                            on:click={() => openModal(project)} 
                            class="text-blue-500 hover:underline hover:cursor-pointer flex items-center"
                        >
                            <span>Voir les détails</span>
                            <Icon icon="mdi:chevron-right" class="ml-1" />
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    {:else}
        <div class="relative overflow-hidden rounded-xl md:hidden dark:text-gray-100">
            <div 
                class="flex transition-transform duration-500 ease-in-out"
                style="transform: translateX(-{currentSlide * 100}%);"
                on:touchstart={handleTouchStart}
                on:touchend={handleTouchEnd}
            >
                {#each projects as project, index}
                    <div class="w-full flex-shrink-0 px-4">
                        <div 
                            in:slide={{ 
                                delay: 100, 
                                duration: 500, 
                                easing: quintOut,
                                direction: sliderDirection > 0 ? 'right' : 'left'
                            }}
                            out:fade={{ duration: 300 }}
                            class="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg dark:shadow-gray-800"
                        >
                            <img src={project.image} alt={project.title} class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-2">{project.title}</h3>
                                <p class="text-gray-600 text-base dark:text-gray-400 mb-4">{project.description}</p>
                                <div class="flex flex-wrap gap-2 mb-4">
                                    {#each project.tech as tech}
                                        <span class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full">{tech}</span>
                                    {/each}
                                </div>
                                <div 
                                    on:click={() => openModal(project)} 
                                    class="text-blue-500 hover:underline hover:cursor-pointer flex items-center"
                                >
                                    <span>Voir les détails</span>
                                    <Icon icon="mdi:chevron-right" class="ml-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
            
            <div class="flex justify-center items-center mt-6 space-x-4">
                <button 
                    on:click={prevSlide}
                    class="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Projet précédent"
                >
                    <Icon icon="mdi:chevron-left" class="w-6 h-6" />
                </button>
                
                <div class="flex space-x-2">
                    {#each projects as _, index}
                        <button 
                            on:click={() => goToSlide(index)}
                            class="w-2 h-2 rounded-full transition-colors {index === currentSlide ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}"
                            aria-label="Aller au projet {index + 1}"
                        />
                    {/each}
                </div>
                
                <button 
                    on:click={nextSlide}
                    class="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Projet suivant"
                >
                    <Icon icon="mdi:chevron-right" class="w-6 h-6" />
                </button>
            </div>
            
            <div class="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
                {currentSlide + 1} / {projects.length}
            </div>
        </div>
    {/if}

    {#if totalPages > 1 && !isMobile}
        <div 
            in:fade={{ delay: 300, duration: 500 }}
            class="flex justify-center items-center mt-12 space-x-2 dark:text-gray-100"
        >
            <button 
                on:click={prevPage}
                disabled={currentPage === 1}
                class="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                <Icon icon="mdi:chevron-left" class="w-5 h-5" />
            </button>
            
            <span class="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-md font-medium">
                {currentPage} / {totalPages}
            </span>
            
            <button 
                on:click={nextPage}
                disabled={currentPage === totalPages}
                class="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                <Icon icon="mdi:chevron-right" class="w-5 h-5" />
            </button>
        </div>
    {/if}

    {#if showModal}
        <div 
            use:portal
            transition:fade={{ duration: 250 }} 
            class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            on:click|self={closeModal}
        >
            <div 
                transition:blur={{ amount: 10, duration: 300 }}
                class="bg-white dark:bg-gray-900 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-blue-500/20 dark:border-blue-400/20"
            >
                <div class="sticky top-0 bg-white dark:bg-gray-900 p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center z-10">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Détails du projet</h2>
                    <button 
                        on:click={closeModal}
                        class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
                        aria-label="Fermer"
                    >
                        <Icon icon="mdi:close" class="w-6 h-6" />
                    </button>
                </div>

                {#if selectedProject}
                    <div class="p-8">
                        <div class="flex justify-between items-start mb-6">
                            <div>
                                <h3 class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    {selectedProject.title}
                                </h3>
                                <div class="flex items-center mt-2 space-x-2">
                                    <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-sm font-medium rounded-full">
                                        {selectedProject.type || 'Projet'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div class="space-y-4">
                                <div class="relative rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-video">
                                    <img 
                                        src={selectedProject.image} 
                                        alt={selectedProject.title} 
                                        class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    </div>
                                </div>

                                {#if selectedProject.gallery && selectedProject.gallery.length > 0}
                                    <div class="grid grid-cols-3 gap-2">
                                        {#each selectedProject.gallery as img, i}
                                            <div class="cursor-pointer hover:opacity-80 transition-opacity duration-300">
                                                <img 
                                                    src={img} 
                                                    alt={`Preview ${i+1}`} 
                                                    class="w-full h-20 object-cover rounded-md transition-transform duration-300 hover:scale-110"
                                                />
                                            </div>
                                        {/each}
                                    </div>
                                {/if}
                            </div>

                            <div>
                                <div class="mb-6">
                                    <h4 class="text-base md:text-lg font-semibold mb-2 flex items-center text-gray-800 dark:text-gray-100">
                                        <Icon icon="mdi:information-outline" class="mr-2 text-blue-500" />
                                        Description
                                    </h4>
                                    <p class="text-gray-700 dark:text-gray-400 text-sm md:text-base">{selectedProject.description}</p>
                                </div>

                                {#if selectedProject.details}
                                    <div class="mb-6">
                                        <h4 class="text-base md:text-lg font-semibold mb-2 flex items-center text-gray-800 dark:text-gray-100">
                                            <Icon icon="mdi:file-document-outline" class="mr-2 text-blue-500" />
                                            Détails techniques
                                        </h4>
                                        <p class="text-gray-700 dark:text-gray-400 text-sm md:text-base">{selectedProject.details}</p>
                                    </div>
                                {/if}

                                {#if selectedProject.functionalities && selectedProject.functionalities.length > 0}
                                    <div class="mb-6">
                                        <h4 class="text-base md:text-lg font-semibold mb-2 flex items-center text-gray-800 dark:text-gray-100">
                                            <Icon icon="mdi:check-circle-outline" class="mr-2 text-blue-500" />
                                            Fonctionnalités
                                        </h4>
                                        <ul class="list-disc list-inside text-gray-700 dark:text-gray-400 text-sm md:text-base">
                                            {#each selectedProject.functionalities as feature, i}
                                                <li 
                                                    in:slide={{
                                                        delay: i * 100,
                                                        duration: 400
                                                    }}
                                                    class="mb-1"
                                                >
                                                    {feature}
                                                </li>
                                            {/each}
                                        </ul>
                                    </div>
                                {/if}

                                <div class="mb-6">
                                    <h4 class="text-base md:text-lg font-semibold mb-2 flex items-center text-gray-800 dark:text-gray-100">
                                        <Icon icon="mdi:code-tags" class="mr-2 text-blue-500" />
                                        Technologies
                                    </h4>
                                    <div class="flex flex-wrap gap-2">
                                        {#each selectedProject.tech as tech, i}
                                            <span 
                                                in:slide={{
                                                    delay: i * 80,
                                                    duration: 400
                                                }}
                                                class="px-3 py-1 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-600 dark:text-blue-300 text-sm md:text-base rounded-full border border-blue-200 dark:border-blue-800 transition-transform duration-300 hover:scale-105"
                                            >
                                                {tech}
                                            </span>
                                        {/each}
                                    </div>
                                </div>

                                <div class="flex flex-col sm:flex-row justify-end gap-4 mt-8">
                                    {#if selectedProject.link}
                                        <a 
                                            href={selectedProject.link} 
                                            class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-sm rounded-lg transition-all shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1 duration-300"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Icon icon="mdi:web" class="mr-2" />
                                            Voir en ligne
                                        </a>
                                    {/if}

                                    {#if selectedProject.github}
                                        <a 
                                            href={selectedProject.github} 
                                            class="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm rounded-lg transition-all shadow-lg hover:shadow-gray-500/20 transform hover:-translate-y-1 duration-300"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Icon icon="mdi:github" class="mr-2" />
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
    .fade-in {
        animation: fadeIn 0.5s ease-in-out;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .slide-transition {
        transition: transform 0.5s ease-in-out;
    }
</style>