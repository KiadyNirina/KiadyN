<script>
    import Icon from "@iconify/svelte";
    import { fade, scale, slide } from 'svelte/transition';
    import { onMount } from 'svelte';

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
            description: "Portfolio professionnel d'une technicienne en génie civil. Focus sur la précision et l'élégance structurelle.",
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
            description: "Identité digitale pour une agence moderne. Performance et esthétique minimaliste au cœur du projet.",
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
            type: "Personnel",
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
                "/2bookly.png",
                "/3bookly.png",
                "/4bookly.png",
                "/5bookly.png",
                "/6bookly.png",
                "/7bookly.png"
            ]
        },
        {
            type: "Personnel",
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
        }
    ];

    let currentSlide = 0;
    let selectedProject = null;
    let showModal = false;
    let totalProject = projects.length;

    function nextSlide() {
        currentSlide = (currentSlide + 1) % projects.length;
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + projects.length) % projects.length;
    }

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

<section class="relative min-h-screen py-32 overflow-hidden">
    <!-- Fond décoratif : Numéro de slide géant -->
    <div class="absolute top-0 right-0 p-12 overflow-hidden pointer-events-none select-none">
        <span class="text-[30vw] font-black text-gray-300 dark:text-gray-800 leading-none translate-x-1/4">
            0{currentSlide + 1}
        </span>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
        <!-- Header -->
        <div class="mb-20">
            <h2 class="text-xs font-black uppercase tracking-[0.5em] text-gray-800 dark:text-gray-200 mb-4">Portfolio</h2>
            <h3 class="text-6xl md:text-8xl font-black text-black dark:text-white tracking-tighter uppercase leading-none">
                Selected <br/> <span class="text-gray-500" style="-webkit-text-stroke: 1px;">Works</span>
            </h3>
        </div>

        <!-- Slider Main View -->
        <div class="grid lg:grid-cols-12 gap-12 items-center">
            <!-- Image Showcase (8 cols) -->
            <div class="lg:col-span-7 relative group cursor-pointer" on:click={() => openModal(projects[currentSlide])}>
                <div class="absolute inset-0 bg-black translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                <div class="relative aspect-[16/10] overflow-hidden border border-black dark:border-white">
                    {#key currentSlide}
                        <img 
                            src={projects[currentSlide].image} 
                            alt={projects[currentSlide].title}
                            class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                            in:fade={{ duration: 800 }}
                        />
                    {/key}
                    
                    <!-- Overlay interactif -->
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span class="px-8 py-4 bg-white text-black font-black uppercase text-xs tracking-widest">
                            Explorer le projet
                        </span>
                    </div>
                </div>
            </div>

            <!-- Content Details (5 cols) -->
            <div class="lg:col-span-5 space-y-8">
                {#key currentSlide}
                    <div in:slide={{ duration: 600 }}>
                        <div class="flex items-center gap-4 mb-4">
                            <span class="text-[12px] font-mono text-gray-500"> 0{currentSlide + 1} / 0{totalProject}</span>
                            <span class="h-px w-12 bg-gray-400"></span>
                            <span class="text-[10px] font-black uppercase tracking-widest text-black dark:text-white">
                                {projects[currentSlide].type}
                            </span>
                        </div>
                        
                        <h4 class="text-5xl md:text-6xl font-black text-black dark:text-white tracking-tighter uppercase mb-6">
                            {projects[currentSlide].title}
                        </h4>
                        
                        <p class="text-lg text-gray-500 dark:text-gray-400 leading-relaxed italic">
                            "{projects[currentSlide].description}"
                        </p>

                        <div class="flex flex-wrap gap-3 mt-8">
                            {#each projects[currentSlide].tech as tech}
                                <span class="px-3 py-1 border border-black/50 dark:border-white/50 text-[10px] font-black text-black dark:text-white uppercase tracking-tighter">
                                    {tech}
                                </span>
                            {/each}
                        </div>
                    </div>
                {/key}

                <!-- Navigation Controls -->
                <div class="flex items-center gap-8 pt-12">
                    <button 
                        on:click={prevSlide}
                        class="p-4 border text-black dark:text-white border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                    >
                        <Icon icon="ph:arrow-left-thin" class="w-8 h-8" />
                    </button>
                    <button 
                        on:click={nextSlide}
                        class="p-4 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 transition-all"
                    >
                        <Icon icon="ph:arrow-right-thin" class="w-8 h-8" />
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Moderne (Portal-like) -->
    {#if showModal && selectedProject}
        <div 
            use:portal
            class="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-white dark:bg-black"
            transition:fade
        >
            <div class="w-full max-w-7xl h-full flex flex-col md:flex-row gap-12 overflow-y-auto pt-24 md:pt-0">
                <!-- Close -->
                <button 
                    on:click={closeModal}
                    class="absolute top-12 right-12 z-[110] text-black dark:text-white hover:rotate-90 transition-transform"
                >
                    <Icon icon="ph:x-thin" class="w-12 h-12" />
                </button>

                <!-- Left: Big Images -->
                <div class="flex-1 space-y-6">
                    <img src={selectedProject.image} alt="" class="w-full border border-black/10 dark:border-white/10" />
                    {#if selectedProject.gallery}
                        {#each selectedProject.gallery as g}
                            <img src={g} alt="" class="w-full grayscale hover:grayscale-0 transition-all" />
                        {/each}
                    {/if}
                </div>

                <!-- Right: Detailed Info -->
                <div class="flex-1 md:sticky md:top-0 h-fit py-12">
                    <h2 class="text-6xl font-black text-black dark:text-white uppercase tracking-tighter mb-8">
                        {selectedProject.title}
                    </h2>
                    
                    <div class="space-y-12">
                        <section>
                            <h5 class="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">// Aperçu</h5>
                            <p class="text-base text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                                {selectedProject.details}
                            </p>
                        </section>

                        <div class="flex flex-wrap gap-3 mt-8">
                            {#each projects[currentSlide].tech as tech}
                                <span class="px-3 py-1 border border-black/50 dark:border-white/50 text-[10px] font-black text-black dark:text-white uppercase tracking-tighter">
                                    {tech}
                                </span>
                            {/each}
                        </div>

                        {#if selectedProject.functionalities}
                            <section>
                                <h5 class="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">// Fonctionnalités</h5>
                                <ul class="space-y-4">
                                    {#each selectedProject.functionalities as f}
                                        <li class="flex items-center gap-4 text-black dark:text-white font-bold uppercase text-xs tracking-widest">
                                            <div class="h-1 w-4 bg-black dark:bg-white"></div> {f}
                                        </li>
                                    {/each}
                                </ul>
                            </section>
                        {/if}

                        <div class="flex flex-wrap gap-4 pt-12">
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
    /* Typographies et lissages */
    :global(body) {
        font-family: 'Inter', sans-serif;
    }
</style>