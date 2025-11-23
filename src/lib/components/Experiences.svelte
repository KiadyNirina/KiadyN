<script>
    import Icon from "@iconify/svelte";
    import { fade } from "svelte/transition";

    const experiences = [
      {
        period: "Mars 2025 - Présent",
        position: "Développeur PHP",
        company: "Atout Service Mada",
        type: "CDI",
        workSchedule: "Temps plein",
        img: "atout.png",
        localisation: "Ambohimiandra, Antananarivo, Madagascar",
        description: [
        "Intégration de maquettes et développement de nouvelles fonctionnalités pour sites e-commerce Magento 2.",
        "Maintenance, correction de bugs.",
        "Déploiement via SSH et collaboration avec l'équipe de développeurs pour assurer la cohérence des projets."
        ],
        technologies: ["Magento", "HTML / CSS", "Javascript", "PHP", "MySQL", "Git"],
        gradient: "from-blue-500 to-blue-600"
      },
      {
        period: "Nov. 2024 - Fev. 2025",
        position: "Stagiaire Développeur Web",
        company: "Atout Service Mada",
        type: "Stage",
        workSchedule: "Temps plein",
        img: "atout.png",
        localisation: "Ambohimiandra, Antananarivo, Madagascar",
        description: [
        "Développement et intégration front-end/back-end d'une plateforme e-commerce et d'une application de gestion de stock.",
        "Maintenance, correction de bugs des fonctionnalités existantes.",
        "Collaboration avec l'équipe de développeurs."
        ],
        technologies: ["HTML / CSS", "Javascript", "PHP", "Codeigniter", "Magento", "Wordpress", "MySQL", "Git"],
        gradient: "from-blue-600 to-blue-700"
      },
      {
        period: "2022 - Présent",
        position: "Freelance Développeur Web",
        company: "Divers Clients",
        type: "Freelance",
        workSchedule: "Variable",
        localisation: "Divers Lieux",
        description: "Développement d'applications web pour divers clients.",
        technologies: ["Wordpress", "Sveltekit", "Vue", "Nuxt", "Tailwind", "Laravel", "Django"],
        gradient: "from-blue-700 to-blue-800"
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

<section class="py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header Section -->
        <div class="text-center mb-16 animate-slide-up">
            <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                Expériences Professionnelles
            </h2>
            <div class="relative inline-block">
                <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto"></div>
                <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full animate-ping-slow"></div>
            </div>
        </div>

        <!-- Timeline -->
        <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500 transform md:-translate-x-1/2 shadow-lg"></div>
            
            <!-- Timeline Items -->
            <div class="space-y-12">
                {#each experiences as exp, i}
                    <div class="relative group" in:fade={{ duration: 600, delay: i * 200 }}>
                        <!-- Timeline Dot -->
                        <div class="absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-to-r {exp.gradient} rounded-full border-4 border-white dark:border-gray-800 shadow-lg transform md:-translate-x-1/2 -translate-y-2 z-20 animate-pulse-gentle"></div>
                        
                        <!-- Content Card -->
                        <div class="ml-12 md:ml-0 md:flex md:items-center md:justify-between md:space-x-8 {i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}">
                            <!-- Date Section -->
                            <div class="md:w-1/3 mb-4 md:mb-0 {i % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}">
                                <div class="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200/50 dark:border-blue-800/50">
                                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-ping-fast"></div>
                                    <span class="text-sm font-bold bg-gradient-to-r {exp.gradient} bg-clip-text text-transparent">
                                        {exp.period}
                                    </span>
                                </div>
                                <div class="mt-2 text-xs text-blue-600 dark:text-blue-400 font-medium">
                                    {calculateDuration(exp.period)}
                                </div>
                            </div>

                            <!-- Experience Card -->
                            <div class="md:w-2/3">
                                <div class="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-blue-200/50 dark:border-blue-800/50 transition-all duration-500 hover:-translate-y-1">
                                    <!-- Animated Border -->
                                    <div class="absolute inset-0 rounded-2xl bg-gradient-to-r {exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                                        <div class="absolute inset-[2px] rounded-2xl bg-white dark:bg-gray-800"></div>
                                    </div>

                                    <!-- Header -->
                                    <div class="flex items-start justify-between mb-4">
                                        <div class="flex-1">
                                            <div class="flex items-center mb-2">
                                                {#if exp.img}
                                                    <img src={exp.img} alt={exp.company} class="w-8 h-auto mr-3 rounded-lg shadow-sm" />
                                                {:else}
                                                    <div class="w-8 h-8 bg-gradient-to-r {exp.gradient} rounded-lg flex items-center justify-center mr-3 shadow-sm">
                                                        <Icon icon="mdi:company" class="w-4 h-4 text-white" />
                                                    </div>
                                                {/if}
                                                <div>
                                                    <h3 class="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                                        {exp.position}
                                                    </h3>
                                                    <p class="text-sm font-semibold text-blue-600 dark:text-blue-400">
                                                        {exp.company}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="px-3 py-1 bg-gradient-to-r {exp.gradient} text-white text-xs font-bold rounded-full shadow-lg animate-pulse-gentle">
                                            {exp.type}
                                        </span>
                                    </div>

                                    <!-- Details -->
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-sm">
                                        <div class="flex items-center text-gray-600 dark:text-gray-400">
                                            <Icon icon="mdi:map-marker" class="w-4 h-4 mr-2 text-blue-500" />
                                            <span>{exp.localisation}</span>
                                        </div>
                                        <div class="flex items-center text-gray-600 dark:text-gray-400">
                                            <Icon icon="mdi:calendar-clock" class="w-4 h-4 mr-2 text-blue-500" />
                                            <span>{exp.workSchedule}</span>
                                        </div>
                                    </div>

                                    <!-- Description -->
                                    <div class="mb-4">
                                        <ul class="space-y-2">
                                            {#each Array.isArray(exp.description) ? exp.description : [exp.description] as desc, j}
                                                <li class="flex items-start text-sm text-gray-700 dark:text-gray-300">
                                                    <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse-gentle" style="animation-delay: {j * 0.3}s;"></div>
                                                    <span>{@html desc}</span>
                                                </li>
                                            {/each}
                                        </ul>
                                    </div>

                                    <!-- Technologies -->
                                    <div class="flex flex-wrap gap-2">
                                        {#each exp.technologies as tech, k}
                                            <span 
                                                class="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-800 transition-all duration-300 hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:shadow-sm"
                                                style="animation-delay: {k * 0.1}s;"
                                            >
                                                {tech}
                                            </span>
                                        {/each}
                                    </div>

                                    <!-- Hover Effect -->
                                    <div class="absolute inset-0 rounded-2xl bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
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
</style>