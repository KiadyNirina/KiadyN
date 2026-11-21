<script>
    import Icon from "@iconify/svelte";
    import { fade } from 'svelte/transition';

    // Données projets avec flag "featured" pour les meilleurs projets
    const projects = [
        {
            type: "Projet personnel",
            title: "KleoQuote",
            description: "Application web de création de devis et de factures professionnels avec aperçu en temps réel, calculs automatiques et export PDF.",
            tech: ["Nuxt 4", "Vue 3", "TypeScript", "Pinia", "Tailwind CSS", "shadcn-vue"],
            image: "/kleoquote1.jpg",
            link: "https://kleoquote.netlify.app/",
            details: "KleoQuote est une application web développée avec Nuxt 4 permettant de créer, modifier et gérer des devis et des factures professionnels. Elle propose un éditeur de documents avec gestion des lignes de prestation, calcul automatique des montants, des remises, des taxes et des acomptes, ainsi qu'un aperçu en temps réel. L'application intègre également la personnalisation des informations de l'entreprise, l'export PDF au format A4 et un système d'historique avec sauvegarde locale des documents et des paramètres.",
            functionalities: [
                "Création et modification de devis et de factures",
                "Gestion des lignes de prestations avec réorganisation par glisser-déposer",
                "Calcul automatique des sous-totaux, remises, taxes et acomptes",
                "Prise en charge de six devises",
                "Aperçu des documents en temps réel",
                "Export PDF au format A4",
                "Personnalisation des informations de l'entreprise, du logo et du cachet",
                "Historique des documents avec sauvegarde, ouverture, duplication et suppression",
                "Persistance locale des documents et des paramètres"
            ],
            gallery: [
                "/kleoquote1.jpg",
                "/kleoquote2.jpg",
                "/kleoquote3.jpg",
                "/kleoquote4.jpg",
                "/kleoquote5.jpg",
                "/kleoquote6.jpg",
            ],
            featured: true
        },
        {
            type: "Projet personnel",
            title: "CVita",
            description: "Créateur de CV gratuit, ATS-friendly et sans inscription, permettant de concevoir, personnaliser et exporter son CV directement depuis le navigateur.",
            tech: ["SvelteKit", "Svelte", "Tailwind CSS", "TypeScript"],
            image: "/cvita.jpg",
            link: "https://cvvita.netlify.app/",
            details: "CVita est une application web de création de CV conçue pour permettre aux utilisateurs de créer gratuitement un CV professionnel sans inscription. Les données sont stockées localement dans le navigateur afin de préserver la simplicité et la confidentialité du parcours utilisateur. L'application propose plusieurs templates, un éditeur de CV, un aperçu en temps réel, un score ATS, l'export PDF au format A4 ainsi que l'import et l'export des données au format JSON. L'interface est développée avec SvelteKit, Svelte, Tailwind CSS et TypeScript.",
            functionalities: [
                "Création de CV sans inscription",
                "Plusieurs templates professionnels",
                "Score ATS en temps réel",
                "Prévisualisation du CV en temps réel",
                "Export PDF au format A4",
                "Import et export des données en JSON",
                "Sauvegarde locale avec LocalStorage",
                "Application installable en PWA"
            ],
            // github: "https://github.com/KiadyNirina/CVita",
            gallery: [
                "/cvita1.jpg",
                "/cvita2.jpg",
                "/cvita3.jpg",
                "/cvita4.jpg",
                "/cvita5.jpg"
            ],
            featured: true
        },

        {
            type: "Projet personnel",
            title: "SekOra",
            description: "Plateforme de gestion scolaire qui facilite le suivi des élèves, l'organisation des cours et la gestion des établissements, avec une carte interactive pour localiser les écoles.",
            tech: ["Svelte","Tailwind CSS", "Django", "MySQL", "Redis", "Docker"],
            image: "/eboss.jpg",
            link: "https://sekoraa.netlify.app/",
            details: "SekOra est une plateforme conçue pour simplifier la gestion des établissements scolaires et faciliter le suivi de la vie scolaire. Elle permet de centraliser les informations des élèves, des professeurs et des parents, tout en facilitant l'organisation des cours et des évaluations. Grâce à sa carte interactive, les utilisateurs peuvent également découvrir et localiser les établissements scolaires. La plateforme propose ainsi un espace numérique destiné à mieux organiser les informations et à faciliter les échanges entre les différents acteurs de la communauté éducative.",
            functionalities: [
                "Gestion des établissements scolaires",
                "Suivi des élèves, des professeurs et des parents",
                "Organisation des cours et des évaluations",
                "Carte interactive pour localiser les établissements scolaires",
                "Affichage des établissements sur une carte",
                "Recherche et découverte des établissements scolaires",
                "Accès adapté aux différents profils d'utilisateurs",
                "Gestion sécurisée des comptes et des accès"
            ],
            gallery: [
                "/eboss 2.jpg",
                "/eboss 3.jpg",
                "/eboss 4.jpg",
                "/eboss 5.jpg",
                "/eboss 6.jpg",
                "/eboss 7.jpg",
            ],
            featured: true 
        },
        // {
        //     type: "Freelance",
        //     title: "Santatra",
        //     description: "Portfolio professionnel d'un technicien supérieur en construction civile et infrastructur.",
        //     tech: ["Nuxt", "Tailwind CSS", "Typescript"],
        //     image: "/santatra1.PNG",
        //     details: "Le site est construit comme une application web statique, optimisée pour la performance et le référencement. Il est développé avec Nuxt 3, utilisant son rendu côté serveur (SSR) pour un chargement rapide et une bonne indexation. Le style est géré avec Tailwind CSS, permettant un design responsive et épuré sans fichiers CSS externes. Le site est déployé sur Netlify, bénéficiant d’un déploiement continu et d’une diffusion via un CDN mondial pour une grande rapidité d’accès.",
        //     gallery: [
        //         "santatra2.PNG",
        //         "santatra3.PNG",
        //         "santatra4.PNG",
        //         "santatra5.PNG",
        //     ],
        //     link: "https://santatra.netlify.app"
        // },
        // {
        //     type: "Freelance",
        //     title: "Zavamix",
        //     description: "Zavamix – Site web de sourcing et d’importation Dubaï → Madagascar",
        //     tech: ["Nuxt", "Tailwind CSS", "Typescript"],
        //     image: "/zavamix.png",
        //     details: "Zavamix est un site vitrine développé avec Nuxt.js pour le rendu statique et Tailwind CSS pour le design utilitaire. Il présente une entreprise spécialisée dans l’importation de produits neufs et d’occasion depuis Dubaï vers Madagascar, en mettant l’accent sur un parcours client structuré et une expérience utilisateur claire.",
        //     gallery: [
        //         "zavamix1.png",
        //         "zavamix2.png",
        //         "zavamix3.png",
        //         "zavamix4.png",
        //         "zavamix5.png",
        //     ],
        //     link: "https://zavamix.netlify.app"
        // },
        // {
        //     type: "Freelance",
        //     title: "Mireille",
        //     description: "Portfolio professionnel d'une technicienne en génie civil.",
        //     tech: ["Nuxt", "Tailwind CSS", "Typescript"],
        //     image: "/mireille.png",
        //     details: "Le site est construit comme une application web statique, optimisée pour la performance et le référencement. Il est développé avec Nuxt 3, utilisant son rendu côté serveur (SSR) pour un chargement rapide et une bonne indexation. Le style est géré avec Tailwind CSS, permettant un design responsive et épuré sans fichiers CSS externes. Le site est déployé sur Netlify, bénéficiant d’un déploiement continu et d’une diffusion via un CDN mondial pour une grande rapidité d’accès.",
        //     gallery: [
        //         "mireille2.png",
        //         "mireille3.png",
        //         "mireille4.png",
        //         "mireille5.png",
        //         "mireille6.png",
        //     ],
        //     link: "https://mireillerane.netlify.app"
        // },
        // {
        //     type: "Freelance",
        //     title: "Kleonix",
        //     description: "Identité digitale pour une entreprise spécialisée dans la création de sites web, d’applications et de solutions informatiques sur mesure.",
        //     tech: ["Nuxt", "Tailwind", "TS"],
        //     image: "/kleonix.png",
        //     details: "Développé avec Nuxt pour un rendu performant côté serveur (SSR) et une génération de sites statiques optimisés, stylisé avec Tailwind CSS pour une interface moderne, réactive et hautement personnalisable. L'objectif était de créer une vitrine rapide, SEO-friendly et facile à maintenir, reflétant l'expertise technique de l'agence.",
        //     gallery: [
        //         "kleonix2.png",
        //         "kleonix3.png",
        //         "kleonix4.png",
        //         "kleonix5.png",
        //         "kleonix6.png",
        //     ],
        //     link: "https://kleonix.netlify.app"
        // },
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
            featured: true
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
            featured: true
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
    ];

    // 🎯 Filtres pour la section 2
    let filterType = 'All';
    let filterStatus = 'All'; // 🆕 Nouveau filtre statut

    $: filterOptions = [
        { key: 'All', label: 'Tous' },
        { key: 'Freelance', label: 'Freelance' },
        { key: 'Perso', label: 'Perso' }
    ];

    // 🆕 Options de filtre statut
    $: statusFilterOptions = [
        { key: 'All', label: 'Tous' },
        { key: 'En ligne', label: 'En ligne' },
        { key: 'En cours', label: 'En cours' }
    ];

    // 🆕 Helper statut
    function getProjectStatus(project) {
        return project.link ? 'En ligne' : 'En cours';
    }

    // 🎯 Filtrage combiné (type + statut)
    $: filteredProjects = projects.filter(p => {
        const matchType = filterType === 'All' 
            ? true 
            : filterType === 'Freelance' 
                ? p.type === 'Freelance' 
                : p.type === 'Projet personnel';
        
        const matchStatus = filterStatus === 'All' 
            ? true 
            : getProjectStatus(p) === filterStatus;
        
        return matchType && matchStatus;
    });

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

    function getStatusClasses(status) {
        return status === 'En ligne' 
            ? 'bg-emerald-500/10 text-emerald-300 border-emerald-300'
            : 'bg-amber-500/10 text-amber-300 border-amber-300';
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
        </div>
        
        <div>
            <!-- 🆕 Barre de filtres avec les deux groupes -->
            <div class="flex flex-col lg:flex-row lg:items-center justify-between mb-12 border-b border-zinc-100 dark:border-zinc-900 pb-6 gap-6">
                <h4 class="text-xl font-black uppercase tracking-tighter dark:text-white">Tous les Projets</h4>
                
                <div class="flex flex-col sm:flex-row gap-4">
                    <!-- Filtres Type -->
                    <!-- <div class="flex flex-col gap-2">
                        <span class="text-[9px] font-black uppercase tracking-widest text-zinc-400">Type</span>
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
                    </div> -->

                    <!-- 🆕 Filtres Statut -->
                    <div class="flex flex-col gap-2">
                        <span class="text-[9px] font-black uppercase tracking-widest text-zinc-400">Statut</span>
                        <div class="flex flex-wrap gap-2">
                            {#each statusFilterOptions as option}
                                <button
                                    on:click={() => filterStatus = option.key}
                                    class="px-4 py-2 text-[10px] font-black uppercase tracking-widest border transition-all
                                        {filterStatus === option.key 
                                            ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white' 
                                            : 'bg-transparent text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-black dark:hover:border-white'}"
                                >
                                    {option.label}
                                </button>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Grid des projets filtrés -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {#each filteredProjects as project, index}
                    {@const status = getProjectStatus(project)}
                    <article 
                        class="group relative flex flex-col justify-between cursor-pointer rounded-2xl p-3 -m-3 transition-all duration-500 hover:bg-zinc-50/80 dark:hover:bg-zinc-900/40"
                        on:click={() => openModal(project)}
                        on:keydown={(e) => e.key === 'Enter' && openModal(project)}
                        tabindex="0"
                        role="button"
                        aria-label="Voir les détails du projet {project.title}"
                    >
                        <div>
                            <!-- Conteneur Image -->
                            <div class="aspect-4/3 bg-zinc-100 dark:bg-zinc-900 overflow-hidden mb-5 relative rounded-xl border border-black/5 dark:border-white/10">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    class="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105" 
                                />
                                
                                <!-- Dégradé subtil au survol pour faire ressortir les actions -->
                                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <!-- Badge statut Glassmorphism (Lisible sur fond clair et sombre) -->
                                <div class="absolute top-3.5 left-3.5">
                                    <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest backdrop-blur-md bg-black/70 text-white border border-white/15 shadow-sm">
                                        <span class="relative flex h-1.5 w-1.5">
                                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 {status === 'En ligne' ? 'bg-emerald-400' : 'bg-amber-400'}"></span>
                                            <span class="relative inline-flex rounded-full h-1.5 w-1.5 {status === 'En ligne' ? 'bg-emerald-400' : 'bg-amber-400'}"></span>
                                        </span>
                                        {status}
                                    </span>
                                </div>

                                <!-- Badge Type (Discret en haut à droite) -->
                                <div class="absolute top-3.5 right-3.5">
                                    <span class="px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-widest backdrop-blur-md bg-white/85 dark:bg-black/70 text-black dark:text-zinc-200 border border-black/5 dark:border-white/10">
                                        {getTypeBadge(project.type)}
                                    </span>
                                </div>

                                <!-- Bouton d'accès rapide au site Live (apparaît au hover) -->
                                {#if project.link}
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        on:click|stopPropagation
                                        title="Ouvrir le site en direct"
                                        class="absolute bottom-3.5 right-3.5 flex items-center gap-1.5 px-3 py-2 rounded-full bg-white text-black text-[9px] font-black uppercase tracking-widest shadow-lg translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white"
                                    >
                                        <span>Live</span>
                                        <Icon icon="ph:arrow-up-right-bold" class="w-3.5 h-3.5" />
                                    </a>
                                {/if}
                            </div>

                            <!-- En-tête éditorial : Index + Titre -->
                            <div class="flex items-baseline justify-between gap-4 mb-2">
                                <h5 class="text-xl font-black uppercase tracking-tight text-black dark:text-white group-hover:translate-x-1 transition-transform duration-300">
                                    {project.title}
                                </h5>
                                <span class="font-mono text-[10px] font-bold text-zinc-400 dark:text-zinc-600">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>

                            <!-- Description -->
                            <p class="text-zinc-600 dark:text-zinc-400 text-xs line-clamp-2 leading-relaxed mb-5">
                                {project.description}
                            </p>
                        </div>

                        <!-- Pied de carte toujours aligné en bas -->
                        <div class="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between gap-2">
                            <!-- Stack technique compacte -->
                            <div class="flex flex-wrap items-center gap-1.5">
                                {#each project.tech.slice(0, 3) as t}
                                    <span class="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-800 rounded-md">
                                        {t}
                                    </span>
                                {/each}
                                {#if project.tech.length > 3}
                                    <span class="text-[9px] font-bold px-1.5 py-0.5 text-zinc-400 dark:text-zinc-500">
                                        +{project.tech.length - 3}
                                    </span>
                                {/if}
                            </div>

                            <!-- CTA Étude de cas -->
                            <div class="inline-flex items-center gap-1.5 text-black dark:text-white font-black uppercase text-[9px] tracking-widest shrink-0">
                                <span class="relative">
                                    Détails
                                    <span class="absolute left-0 -bottom-0.5 h-[1.5px] w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                                </span>
                                <Icon icon="ph:arrow-right-bold" class="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                        </div>
                    </article>
                {/each}
            </div>
            
            <!-- Message si aucun résultat -->
            {#if filteredProjects.length === 0}
                <div class="text-center py-20">
                    <p class="text-zinc-400 text-lg">Aucun projet ne correspond à ces filtres.</p>
                    <button 
                        on:click={() => { filterType = 'All'; filterStatus = 'All'; }} 
                        class="mt-4 text-sm font-bold underline hover:text-black dark:hover:text-white transition-colors"
                    >
                        Réinitialiser les filtres
                    </button>
                </div>
            {/if}
        </div>
    </div>

    <!-- 🪟 MODAL -->
    {#if showModal && selectedProject}
        <div 
            use:portal
            class="font-[Montserrat] fixed inset-0 z-[100] flex items-center justify-center p-6 bg-white/95 dark:bg-black/95 backdrop-blur-sm"
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
                            <p class="text-xs text-black dark:text-white font-light leading-relaxed">
                                {selectedProject.details}
                            </p>
                        </section>

                        <div class="flex flex-wrap gap-3">
                            {#each selectedProject.tech as tech}
                                <span class="px-4 py-2 border border-zinc-200 dark:border-zinc-700 text-[9px] font-semibold text-black dark:text-white uppercase tracking-tighter rounded-sm">
                                    {tech}
                                </span>
                            {/each}
                        </div>

                        {#if selectedProject.functionalities}
                            <section>
                                <h5 class="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">// Fonctionnalités</h5>
                                <ul class="space-y-2">
                                    {#each selectedProject.functionalities as f}
                                        <li class="flex items-center gap-2 text-black dark:text-white text-xs">
                                            <Icon icon="ph:check-bold" class="w-4 h-4 text-emerald-500 flex-shrink-0" /> {f}
                                        </li>
                                    {/each}
                                </ul>
                            </section>
                        {/if}

                        <div class="flex flex-wrap gap-4 pt-8 border-t border-zinc-200 dark:border-zinc-800">
                            {#if selectedProject.link}
                                <a href={selectedProject.link} target="_blank" class="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-black uppercase text-[10px] tracking-widest hover:invert transition-all">
                                    Visiter le site
                                </a>
                            {/if}
                            {#if selectedProject.github}
                                <a href={selectedProject.github} target="_blank" class="px-6 py-3 border border-black dark:border-white text-black dark:text-white font-black uppercase text-[10px] tracking-widest hover:bg-black hover:text-white transition-all">
                                    Lien
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