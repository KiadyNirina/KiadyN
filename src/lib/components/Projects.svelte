<section id="projects" class="py-20 mt-50 mb-50">
    <h2 class="text-3xl font-bold text-center mb-12">
        <span class="border-b-4 border-blue-500 pb-2  dark:text-gray-100">Mes Projets</span>
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  dark:text-gray-100">
        {#each projects as project}
            <div class="bg-white dark:bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 dark:shadow-gray-900">
                <img src={project.image} alt={project.title} class="w-full h-48 object-cover" />
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2">{project.title}</h3>
                    <p class="text-gray-600 text-sm dark:text-gray-400 mb-4">{project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        {#each project.tech as tech}
                            <span class="px-2 py-1 bg-gray-100 dark:bg-gray-900 text-xs rounded-full">{tech}</span>
                        {/each}
                    </div>
                    <a href={project.link} class="text-blue-500 hover:underline">Voir le projet →</a>
                </div>
            </div>
        {/each}
    </div>
</section>

<script>
    const projects = [
        {
            title: "Real-Talk",
            description: "Plateforme de chat en temps réel avec notifications et gestion des utilisateurs",
            tech: ["Svelte", "Laravel", "MySQL"],
            image: "/real_talk.jpg",
            link: "#"
        },
        {
            title: "Datalens",
            description: "Application de visualisation et d'analyse de données",
            tech: ["Python"],
            image: "/datalens.jpg",
            link: "#"
        },
        {
            title: "eBoss",
            description: "Application de gestion de projet avec suivi des tâches et collaboration en équipe",
            tech: ["Svelte", "Django", "PostgreSQL"],
            image: "/eboss.jpg",
            link: "#"
        },
        {
            title: "E-Stock",
            description: "Application de centralisation et automatisation de la gestion des ressources internes",
            tech: ["Html", "Css", "MySQL"],
            image: "/e_stock.jpg",
            link: "#"
        },
        {
            title: "MCI",
            description: "Site vitrine pour une entreprise de comparateur d'agences immobilières",
            tech: ["wordpress", "PHP", "MySQL"],
            image: "/moncomparateurimmo.PNG",
            link: "#"
        }
    ];
</script>