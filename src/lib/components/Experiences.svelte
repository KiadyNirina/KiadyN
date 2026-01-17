<script>
    import Icon from "@iconify/svelte";

    const experiences = [
      {
        period: "Mars 2025 - Présent",
        position: "Développeur PHP",
        company: "Atout Service Mada",
        type: "CDI",
        workSchedule: "Temps plein",
        img: "atout.png",
        localisation: "Ambohimiandra, Antananarivo, MG",
        type_work: "Présentiel",
        description: [
            "Intégration de maquettes et développement de nouvelles fonctionnalités pour sites e-commerce Magento 2.",
            "Maintenance corrective et optimisation des performances.",
            "Déploiement via SSH et collaboration technique agile."
        ],
        technologies: ["Magento", "PHP", "MySQL", "Git"]
      },
      {
        period: "Nov. 2024 - Fev. 2025",
        position: "Stagiaire Développeur Web",
        company: "Atout Service Mada",
        type: "Stage",
        workSchedule: "Temps plein",
        img: "atout.png",
        localisation: "Ambohimiandra, Antananarivo, MG",
        type_work: "Présentiel",
        description: [
            "Développement front-end/back-end d'une plateforme e-commerce et gestion de stock.",
            "Correction de bugs et maintenance des fonctionnalités existantes.",
            "Collaboration avec l'équipe de développeurs."
        ],
        technologies: ["Codeigniter", "Magento", "Wordpress", "PHP"]
      },
      {
        period: "2024 - Présent",
        position: "Freelance Développeur Web",
        company: "Divers Clients",
        type: "Freelance",
        workSchedule: "Variable",
        localisation: "Divers Lieux",
        type_work: "Télétravail",
        description: [
            "Conception d'applications web sur mesure pour divers clients.",
        ],
        technologies: ["Sveltekit", "Vue", "Nuxt", "Laravel", "Django", "Wordpress"]
      }
    ];

    function calculateDuration(period) {
        if (period.includes("Présent")) {
            const startDateStr = period.split(" - ")[0];
            const startDate = parseDate(startDateStr);
            const currentDate = new Date();
            return getDuration(startDate, currentDate);
        } else if (period.includes(" - ")) {
            const [startStr, endStr] = period.split(" - ");
            const startDate = parseDate(startStr);
            const endDate = parseDate(endStr);
            return getDuration(startDate, endDate);
        }
        return "Durée non spécifiée";
    }

    function parseDate(dateStr) {
        if (/^\d{4}$/.test(dateStr)) {
            return new Date(parseInt(dateStr), 0, 1);
        }
        
        const months = {
            "Jan.": 0, "Fev.": 1, "Mars": 2, "Avr.": 3, "Mai": 4, "Juin": 5,
            "Juil.": 6, "Août": 7, "Sept.": 8, "Oct.": 9, "Nov.": 10, "Déc.": 11
        };
        
        const parts = dateStr.split(" ");
        if (parts.length === 2 && months[parts[0]] !== undefined) {
            return new Date(parseInt(parts[1]), months[parts[0]], 1);
        }
        
        return new Date();
    }

    function getDuration(startDate, endDate) {
        const diffInMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                            (endDate.getMonth() - startDate.getMonth());
        
        if (diffInMonths < 12) {
            return `${diffInMonths} mois`;
        } else {
            const years = Math.floor(diffInMonths / 12);
            const remainingMonths = diffInMonths % 12;
            if (remainingMonths === 0) {
                return `${years} an${years > 1 ? 's' : ''}`;
            } else {
                return `${years} an${years > 1 ? 's' : ''} ${remainingMonths} mois`;
            }
        }
    }
</script>

<section class="py-32 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
        
        <!-- Header Brutaliste -->
        <div class="mb-24 border-b border-black dark:border-white pb-12 flex flex-col md:flex-row justify-between items-end gap-6">
            <div class="max-w-2xl">
                <h2 class="text-xs font-black uppercase tracking-[0.5em] text-gray-900 dark:text-gray-400 mb-6">Parcours</h2>
                <h3 class="text-6xl md:text-8xl font-black text-black dark:text-white tracking-tighter leading-none uppercase">
                    Expériences
                </h3>
            </div>
            <div class="text-right">
                <p class="text-[10px] font-mono text-gray-800 dark:text-gray-400 uppercase tracking-widest leading-relaxed">
                    Logiciels • Systèmes • Architecture <br/>
                    Professional Timeline / 001
                </p>
            </div>
        </div>

        <!-- Experience List -->
        <div class="space-y-0">
            {#each experiences as exp, i}
                <div class="group relative grid md:grid-cols-12 border-b border-black/50 dark:border-white/50 hover:bg-black dark:hover:bg-white transition-colors duration-500 ease-expo">
                    
                    <!-- Time Column -->
                    <div class="md:col-span-3 p-10 border-r border-black/50 dark:border-white/50 flex flex-col justify-between">
                        <div>
                            <span class="text-xs font-black uppercase tracking-widest text-gray-900 dark:text-gray-200 group-hover:text-gray-200 dark:group-hover:text-gray-700 transition-colors">
                                {exp.period}
                            </span>
                            <div class="mt-2 text-[10px] font-mono text-gray-800 dark:text-gray-300 group-hover:text-white/70 dark:group-hover:text-black/70">
                                // {calculateDuration(exp.period)}
                            </div>
                        </div>
                        <div class="hidden md:block">
                            <span class="text-4xl font-thin text-gray-900 dark:text-gray-200 group-hover:text-white/70 dark:group-hover:text-black/70 italic">0{i+1}</span>
                        </div>
                    </div>

                    <!-- Content Column -->
                    <div class="md:col-span-6 p-10">
                        <div class="flex items-center gap-4 mb-6">
                            <h4 class="text-3xl font-bold text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors tracking-tighter">
                                {exp.position}
                            </h4>
                            <span class="px-2 py-0.5 border border-black dark:border-white text-[10px] font-bold uppercase tracking-tighter text-black dark:text-white group-hover:bg-white group-hover:text-black dark:group-hover:bg-black dark:group-hover:text-white transition-all">
                                {exp.type}
                            </span>
                        </div>

                        <div class="mb-8">
                            <div class="py-2 border-t border-b border-black/20 dark:border-white/20 mb-6">
                                <p class="text-xs font-bold uppercase tracking-widest text-gray-800 dark:text-gray-300 group-hover:text-gray-300 dark:group-hover:text-gray-800 mb-4 flex items-center gap-2">
                                    <Icon icon="ph:buildings-bold" /> {exp.company} — {exp.localisation}
                                </p>
                                <p class="text-xs font-bold uppercase tracking-widest text-gray-800 dark:text-gray-300 group-hover:text-gray-300 dark:group-hover:text-gray-800 mb-4 flex items-center gap-2">
                                    <Icon icon="ph:clock-bold" /> {exp.workSchedule} — {exp.type_work}
                                </p>
                            </div>
                            <ul class="space-y-4">
                                {#each exp.description as desc}
                                    <li class="text-lg font-light text-gray-900 dark:text-gray-200 group-hover:text-white dark:group-hover:text-black leading-relaxed flex gap-4">
                                        <span class="text-black dark:text-white group-hover:text-white dark:group-hover:text-black">—</span>
                                        {desc}
                                    </li>
                                {/each}
                            </ul>
                        </div>
                    </div>

                    <!-- Tech Column -->
                    <div class="md:col-span-3 p-10 flex flex-col justify-end">
                        <div class="flex flex-wrap gap-2 justify-end">
                            {#each exp.technologies as tech}
                                <span class="text-[10px] font-black uppercase tracking-widest px-3 py-1 border border-black/50 dark:border-white/50 text-gray-800 dark:text-gray-300 group-hover:text-white dark:group-hover:text-black group-hover:border-white/20 dark:group-hover:border-black/50">
                                    {tech}
                                </span>
                            {/each}
                        </div>
                    </div>

                    <!-- Absolute Arrow (Mobile hide) -->
                    <div class="absolute top-10 right-10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                        <Icon icon="ph:arrow-up-right-thin" class="w-12 h-12 text-white dark:text-black" />
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .ease-expo {
        transition-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
    }

    /* Suppression des barres de défilement pour la grille */
    :global(body) {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    :global(body::-webkit-scrollbar) {
        display: none;
    }
</style>