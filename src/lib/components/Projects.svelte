<script>
    import Icon from "@iconify/svelte";
    import { fade } from 'svelte/transition';

    // Données projets avec flag "featured" pour les meilleurs projets
    const projects = [
        {
            type: "Freelance",
            title: "Zavamix",
            description: "Zavamix – Site web de sourcing et d’importation Dubaï → Madagascar",
            tech: ["Nuxt", "Tailwind CSS", "Typescript"],
            image: "/zavamix.png",
            details: "Zavamix est un site vitrine développé avec Nuxt.js pour le rendu statique et Tailwind CSS pour le design utilitaire. Il présente une entreprise spécialisée dans l’importation de produits neufs et d’occasion depuis Dubaï vers Madagascar, en mettant l’accent sur un parcours client structuré et une expérience utilisateur claire.",
            gallery: [
                "zavamix1.png",
                "zavamix2.png",
                "zavamix3.png",
                "zavamix4.png",
                "zavamix5.png",
            ],
            link: "https://zavamix.netlify.app"
        },
        {
            type: "Freelance",
            title: "Mireille",
            description: "Portfolio professionnel d'une technicienne en génie civil.",
            tech: ["Nuxt", "Tailwind CSS", "Typescript"],
            image: "/mireille.png",
            details: "Le site est construit comme une application web statique, optimisée pour la performance et le référencement. Il est développé avec Nuxt 3, utilisant son rendu côté serveur (SSR) pour un chargement rapide et une bonne indexation. Le style est géré avec Tailwind CSS, permettant un design responsive et épuré sans fichiers CSS externes. Le site est déployé sur Netlify, bénéficiant d’un déploiement continu et d’une diffusion via un CDN mondial pour une grande rapidité d’accès.",
            gallery: [
                "mireille2.png",
                "mireille3.png",
                "mireille4.png",
                "mireille5.png",
                "mireille6.png",
            ],
            link: "https://mireillerane.netlify.app"
        },
        {
            type: "Freelance",
            title: "Kleonix",
            description: "Identité digitale pour une entreprise de solutions informatiques.",
            tech: ["Nuxt", "Tailwind", "TS"],
            image: "/kleonix.png",
            details: "Développé avec Nuxt pour un rendu performant côté serveur (SSR) et une génération de sites statiques optimisés, stylisé avec Tailwind CSS pour une interface moderne, réactive et hautement personnalisable. L'objectif était de créer une vitrine rapide, SEO-friendly et facile à maintenir, reflétant l'expertise technique de l'agence.",
            gallery: [
                "kleonix2.png",
                "kleonix3.png",
                "kleonix4.png",
                "kleonix5.png",
            ],
            link: "https://kleonix.netlify.app"
        },
        {
            type: "Projet personnel",
            title: "Bookly",
            description: "Une plateforme permettant aux utilisateurs de lire des livres en streaming, de partager leurs propres œuvres (romans, poèmes, nouvelles) et de découvrir les créations d'autres passionnés.",
            tech: ["Vue", "Tailwind CSS", "Laravel", "MySQL"],
            image:  "/1bookly.png",
            details: `La plateforme utilise une architecture SPA + API avec Vue.js pour le frontend et Laravel pour le backend. L’authentification se fait via Sanctum et les livres sont stockés localement ou sur le cloud, avec un système de lecture en streaming paginée. La base de données (MySQL) gère les œuvres, auteurs, interactions (notes, favoris, commentaires) et la plateforme intègre un moteur de recherche ainsi qu’un module de recommandation basé sur les catégories.`,
            functionalities: [
                "Lecture progressive haute performance",
                "Gestion de profil créateur avancée",
                "Moteur de recherche plein texte"
            ],
            github: "https://github.com/KiadyNirina/Bookly",
            gallery: [
                "/2bookly.png", "/3bookly.png", "/4bookly.png", "/5bookly.png", "/6bookly.png", "/7bookly.png"
            ],
            featured: true // ⭐ Meilleur projet
        },
        {
            type: "Projet personnel",
            title: "CookUp",
            description: "Intelligence culinaire : suggérez, filtrez et exportez vos recettes préférées en un clic.",
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
            featured: true // ⭐ Meilleur projet
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
                "/real_talk.jpg", "/real_talk 2.jpg",
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
                "/Datalens2.png", "/Datalens3.png", "/Datalens4.png",
            ]
        },
        {
            type: "Projet personnel",
            title: "eBoss",
            description: "Application de gestion d'établissement scolaire avec suivi des étudiants et des cours",
            tech: ["Svelte", "Django", "PostgreSQL"],
            image: "/eboss.jpg",
            details: "Application de gestion d'établissement scolaire avec suivi des étudiants et des cours. Utilise Svelte pour le front-end et Django pour le back-end.",
            github: "https://github.com/KiadyNirina/eBoss",
            gallery: [
                "/eboss 2.jpg",
                "/eboss 3.jpg",
                "/eboss 4.jpg",
                "/eboss 5.jpg",
                "/eboss 6.jpg",
                "/eboss 7.jpg",
            ]
        }
    ];

    // 🎯 Filtres pour la section 2
    let filterType = 'All';
    $: filterOptions = [
        { key: 'All', label: 'Tous' },
        { key: 'Freelance', label: 'Freelance' },
        { key: 'Perso', label: 'Perso' }
    ];
    
    $: filteredProjects = filterType === 'All' 
        ? projects 
        : projects.filter(p => filterType === 'Freelance' ? p.type === 'Freelance' : p.type === 'Projet personnel');
    
    // 🌟 Section 1 : Meilleurs projets (featured)
    $: featuredProjects = projects.filter(p => p.featured);
    
    let currentFeaturedIdx = 0;
    let selectedProject = null;
    let showModal = false;

    function openModal(project) {
        selectedProject = project;
        showModal = true;
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        showModal = false;
        document.body.style.overflow = 'auto';
    }

    function portal(node, target = 'body') {
        const targetNode = document.querySelector(target);
        if (targetNode) targetNode.appendChild(node);
        return { 
            destroy() { 
                if (node.parentNode) node.parentNode.removeChild(node); 
            } 
        };
    }
    
    // 🏷️ Helper pour le badge type court
    function getTypeBadge(type) {
        return type === 'Projet personnel' ? 'Perso' : 'Freelance';
    }
    
    // 🎨 Helper pour couleur du badge selon le type
    function getBadgeClasses(type) {
        return type === 'Freelance' 
            ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
            : 'bg-violet-100 text-violet-800 border-violet-200';
    }
</script>

<section class="min-h-screen py-24 px-6 overflow-hidden transition-colors duration-500">
    <div class="max-w-7xl mx-auto">
        
        <!-- HEADER -->
        <div class="mb-24 flex justify-between items-end">
            <div>
                <h2 class="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 mb-2">Portfolio</h2>
                <h3 class="text-6xl md:text-8xl font-black text-black dark:text-white tracking-tighter uppercase leading-[0.8]">
                    Selected <br/> <span class="text-zinc-200 dark:text-zinc-800" style="-webkit-text-stroke: 1px;">Works</span>
                </h3>
            </div>
            <div class="hidden md:block text-right">
                <span class="text-5xl font-black text-zinc-300 dark:text-zinc-700">{projects.length}</span>
                <p class="text-[10px] font-bold dark:text-white uppercase tracking-widest">Total Projets</p>
            </div>
        </div>

        <!-- 🔥 SECTION 1: MEILLEURS PROJETS (STACKED SLIDER) -->
        {#if featuredProjects.length > 0}
        <div class="mb-40">
            <div class="flex items-center justify-between mb-12 border-b border-zinc-100 dark:border-zinc-900 pb-6">
                <h4 class="text-2xl font-black uppercase tracking-tighter dark:text-white flex items-center gap-3">
                    <span class="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                    Meilleurs Projets
                </h4>
                <span class="font-mono text-zinc-400">({featuredProjects.length})</span>
            </div>

            <div class="relative h-[500px] flex items-center justify-center">
                <!-- Navigation Gauche -->
                <button 
                    on:click={() => currentFeaturedIdx = (currentFeaturedIdx - 1 + featuredProjects.length) % featuredProjects.length}
                    class="absolute left-0 md:left-10 z-30 p-4 bg-white dark:bg-zinc-800 border border-black dark:border-white shadow-xl hover:scale-110 transition-transform"
                    aria-label="Projet précédent"
                >
                    <Icon icon="ph:arrow-left-bold" class="w-6 h-6 dark:text-white" />
                </button>

                <!-- Stacked Cards Container -->
                <div class="relative w-full max-w-2xl h-full flex items-center justify-center">
                    {#each featuredProjects as project, i}
                        {@const offset = i - currentFeaturedIdx}
                        {@const absOffset = Math.abs(offset)}
                        {#if absOffset <= 2}
                            <div 
                                class="absolute w-full h-[400px] transition-all duration-700 ease-out cursor-pointer"
                                style="
                                    transform: translateX({offset * 40}px) scale({1 - absOffset * 0.1}) translateZ({-absOffset * 50}px);
                                    z-index: {10 - absOffset};
                                    opacity: {absOffset === 0 ? 1 : 0.3};
                                    pointer-events: {absOffset === 0 ? 'auto' : 'none'};
                                "
                                on:click={() => openModal(project)}
                                on:keydown={(e) => e.key === 'Enter' && openModal(project)}
                                tabindex="0"
                            >
                                <div class="w-full h-full relative group bg-black border border-black dark:border-zinc-700 shadow-2xl overflow-hidden">
                                    <!-- Badge Type -->
                                    <div class="absolute top-4 left-4 z-20">
                                        <span class="px-3 py-1 text-[9px] font-black uppercase tracking-widest border {getBadgeClasses(project.type)}">
                                            {getTypeBadge(project.type)}
                                        </span>
                                    </div>
                                    
                                    <img src={project.image} alt={project.title} class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                                        <h5 class="text-3xl font-black text-white uppercase tracking-tighter">{project.title}</h5>
                                        <p class="text-zinc-300 text-xs mt-2 font-medium line-clamp-2">{project.description}</p>
                                        <div class="flex gap-2 mt-3">
                                            {#each project.tech.slice(0, 3) as t}
                                                <span class="text-[8px] font-bold uppercase px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white rounded">{t}</span>
                                            {/each}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/if}
                    {/each}
                </div>

                <!-- Navigation Droite -->
                <button 
                    on:click={() => currentFeaturedIdx = (currentFeaturedIdx + 1) % featuredProjects.length}
                    class="absolute right-0 md:right-10 z-30 p-4 bg-black dark:bg-white border border-black dark:border-white shadow-xl hover:scale-110 transition-transform"
                    aria-label="Projet suivant"
                >
                    <Icon icon="ph:arrow-right-bold" class="w-6 h-6 text-white dark:text-black" />
                </button>
            </div>
        </div>
        {/if}

        <!-- 📁 SECTION 2: TOUS LES PROJETS AVEC FILTRES -->
        <div>
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-zinc-100 dark:border-zinc-900 pb-6 gap-6">
                <h4 class="text-2xl font-black uppercase tracking-tighter dark:text-white">Tous les Projets</h4>
                
                <!-- Filtres -->
                <div class="flex flex-wrap gap-2">
                    {#each filterOptions as option}
                        <button
                            on:click={() => filterType = option.key}
                            class="px-4 py-2 text-[10px] font-black uppercase tracking-widest border transition-all
                                {filterType === option.key 
                                    ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white' 
                                    : 'bg-transparent text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-black dark:hover:border-white'}"
                        >
                            {option.label}
                        </button>
                    {/each}
                </div>
            </div>

            <!-- Grid des projets filtrés -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each filteredProjects as project}
                    <div 
                        class="group cursor-pointer border border-zinc-200 dark:border-zinc-800 p-4 hover:border-black dark:hover:border-white hover:shadow-lg transition-all duration-300"
                        on:click={() => openModal(project)}
                        on:keydown={(e) => e.key === 'Enter' && openModal(project)}
                        tabindex="0"
                    >
                        <div class="aspect-video bg-zinc-100 dark:bg-zinc-900 overflow-hidden mb-6 relative">
                            <img src={project.image} alt={project.title} class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                            
                            <!-- Badge Type (Freelance / Perso) -->
                            <div class="absolute top-4 right-4">
                                <span class="px-3 py-1 text-[9px] font-black uppercase tracking-widest border {getBadgeClasses(project.type)}">
                                    {getTypeBadge(project.type)}
                                </span>
                            </div>
                            
                            <!-- Badge Featured si applicable -->
                            {#if project.featured}
                                <div class="absolute top-4 left-4">
                                    <span class="px-2 py-1 text-[8px] font-black uppercase tracking-wider bg-amber-500 text-white rounded-sm flex items-center gap-1">
                                        <Icon icon="ph:star-fill" class="w-3 h-3" /> Top
                                    </span>
                                </div>
                            {/if}
                        </div>
                        
                        <h5 class="text-lg font-black uppercase tracking-tighter mb-2 dark:text-white">{project.title}</h5>
                        <p class="text-zinc-500 dark:text-zinc-400 text-sm line-clamp-2 italic leading-relaxed">"{project.description}"</p>
                        
                        <div class="mt-6 flex flex-wrap gap-2">
                            {#each project.tech.slice(0, 3) as t}
                                <span class="text-[9px] font-bold uppercase px-2 py-1 bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-400 rounded-sm">{t}</span>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
            
            <!-- Message si aucun résultat -->
            {#if filteredProjects.length === 0}
                <div class="text-center py-20">
                    <p class="text-zinc-400 text-lg">Aucun projet ne correspond à ce filtre.</p>
                    <button on:click={() => filterType = 'All'} class="mt-4 text-sm font-bold underline hover:text-black dark:hover:text-white transition-colors">
                        Voir tous les projets
                    </button>
                </div>
            {/if}
        </div>
    </div>

    <!-- 🪟 MODAL -->
    {#if showModal && selectedProject}
        <div 
            use:portal
            class="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-white/95 dark:bg-black/95 backdrop-blur-sm"
            transition:fade={{ duration: 200 }}
            on:click={closeModal}
        >
            <div 
                class="w-full max-w-7xl h-full flex flex-col md:flex-row gap-12 overflow-y-auto pt-24 md:pt-0 max-h-[90vh]"
                on:click|stopPropagation
            >
                <!-- Close -->
                <button 
                    on:click={closeModal}
                    class="absolute top-6 right-6 md:top-12 md:right-12 z-[110] text-black dark:text-white hover:rotate-90 transition-transform p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full"
                    aria-label="Fermer"
                >
                    <Icon icon="ph:x-thin" class="w-8 h-8 md:w-12 md:h-12" />
                </button>

                <!-- Left: Images -->
                <div class="flex-1 space-y-6">
                    <img src={selectedProject.image} alt="" class="w-full border border-black/10 dark:border-white/10 rounded-lg" />
                    {#if selectedProject.gallery}
                        {#each selectedProject.gallery as g}
                            <img src={g} alt="" class="w-full grayscale hover:grayscale-0 transition-all rounded-lg cursor-zoom-in" />
                        {/each}
                    {/if}
                </div>

                <!-- Right: Detailed Info -->
                <div class="flex-1 md:sticky md:top-6 h-fit py-6 md:py-12">
                    <!-- Badge Type dans le modal -->
                    <div class="mb-6">
                        <span class="px-4 py-2 text-[10px] font-black uppercase tracking-widest border {getBadgeClasses(selectedProject.type)}">
                            {getTypeBadge(selectedProject.type)}
                        </span>
                    </div>
                    
                    <h2 class="text-5xl md:text-6xl font-black text-black dark:text-white uppercase tracking-tighter mb-8">
                        {selectedProject.title}
                    </h2>
                    
                    <div class="space-y-10">
                        <section>
                            <h5 class="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">// Aperçu</h5>
                            <p class="text-base text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                                {selectedProject.details}
                            </p>
                        </section>

                        <div class="flex flex-wrap gap-3">
                            {#each selectedProject.tech as tech}
                                <span class="px-4 py-2 border border-zinc-200 dark:border-zinc-700 text-[10px] font-black text-zinc-700 dark:text-zinc-300 uppercase tracking-tighter rounded-sm">
                                    {tech}
                                </span>
                            {/each}
                        </div>

                        {#if selectedProject.functionalities}
                            <section>
                                <h5 class="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">// Fonctionnalités</h5>
                                <ul class="space-y-3">
                                    {#each selectedProject.functionalities as f}
                                        <li class="flex items-center gap-3 text-zinc-700 dark:text-zinc-300 font-medium text-sm">
                                            <Icon icon="ph:check-bold" class="w-4 h-4 text-emerald-500 flex-shrink-0" /> {f}
                                        </li>
                                    {/each}
                                </ul>
                            </section>
                        {/if}

                        <div class="flex flex-wrap gap-4 pt-8 border-t border-zinc-200 dark:border-zinc-800">
                            {#if selectedProject.link}
                                <a href={selectedProject.link} target="_blank" class="px-12 py-6 bg-black dark:bg-white text-white dark:text-black font-black uppercase text-[10px] tracking-widest hover:invert transition-all">
                                    Visiter le site
                                </a>
                            {/if}
                            {#if selectedProject.github}
                                <a href={selectedProject.github} target="_blank" class="px-12 py-6 border border-black dark:border-white text-black dark:text-white font-black uppercase text-[10px] tracking-widest hover:bg-black hover:text-white transition-all">
                                    Source Code
                                </a>
                            {/if}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</section>

<style>
    :global(body) {
        font-family: 'Inter', system-ui, -apple-system, sans-serif;
    }
    
    .absolute {
        will-change: transform, opacity;
    }
    
    /* Smooth scroll pour le modal */
    :global(.modal-scroll) {
        scrollbar-width: thin;
        scrollbar-color: #71717a transparent;
    }
    :global(.modal-scroll::-webkit-scrollbar) {
        width: 6px;
    }
    :global(.modal-scroll::-webkit-scrollbar-track) {
        background: transparent;
    }
    :global(.modal-scroll::-webkit-scrollbar-thumb) {
        background-color: #71717a;
        border-radius: 3px;
    }
</style>