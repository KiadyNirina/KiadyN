<script>
    import Icon from "@iconify/svelte";

    const experiences = [
      {
        period: "Mars 2025 - Présent",
        position: "Développeur Web Junior",
        company: "Atout Service Mada",
        type: "CDI",
        img: "atout.png",
        localisation: "Ambohimiandra, Antananarivo, Madagascar",
        description: "Conception et développement d'applications web e-commerce basée sur Magento 2.",
        technologies: ["HTML / CSS", "PHP", "Magento", "MySQL", "Git"]
      },
      {
        period: "Nov. 2024 - Fev. 2025",
        position: "Stagiaire Développeur Web",
        company: "Atout Service Mada",
        type: "Stage",
        img: "atout.png",
        localisation: "Ambohimiandra, Antananarivo, Madagascar",
        description: "Contribué au développement et à la maintenance d'une plateforme e-commerce et d'une application web de gestion de stock, couvrant les aspects front-end et back-end.",
        technologies: ["HTML / CSS", "PHP", "Codeigniter", "Magento", "Wordpress", "MySQL", "Git"]
      },
      {
        period: "2022 - Présent",
        position: "Freelance Développeur Web",
        company: "Divers Clients",
        type: "Freelance",
        localisation: "Divers Lieux",
        description: "Développement d'applications web pour divers clients.",
        technologies: ["Wordpress", "HTML", "CSS", "JavaScript", "PHP", "MySQL"]
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

<section id="experiences" class="transition-colors duration-300 mt-50 mb-50 py-20">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12 dark:text-gray-100">
        <span class="border-b-4 border-blue-500 pb-2">Expériences Professionnelles</span>
      </h2>
  
      <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500 before:to-transparent dark:before:via-blue-400 md:before:ml-0 md:before:-left-[12.6px]">
        {#each experiences as exp}
          <div class="relative pl-10 md:pl-0">
            <div class="flex flex-col md:flex-row items-start md:items-center mb-15">
              <div class="flex items-center">
                <div class="absolute left-3 md:-left-5 h-4 w-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 z-10"></div>
                <h3 class="text-base font-bold ml-2 md:ml-0 md:w-32 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                  {exp.period}
                </h3>
              </div>
              <div class="md:ml-12 flex-1">
                <div class="flex flex-col md:flex-row md:items-center justify-between">
                  <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {exp.position}
                  </h4>
                  <span class="mr-auto md:mr-0 px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full mt-1 md:mt-0">
                    <span class="flex items-center"><Icon icon="pajamas:work" class="mr-2 animate-bounce" />
                      {exp.type}
                    </span>
                  </span>
                </div>

                <div class="flex items-center mt-2">
                  {#if exp.img}
                    <img src={`${exp.img}`} alt={exp.company} class="w-[30px] mr-3" />
                  {:else}
                    <Icon icon="mdi:company" class="text-sm text-gray-800 dark:text-gray-100 mr-3 animate-bounce" />
                  {/if}
                  <h4 class="text-sm font-semibold text-gray-800 dark:text-gray-100">
                    {exp.company}
                  </h4>
                </div>
                <div class="text-xs text-gray-800 dark:text-gray-400 flex items-center mt-2 mb-2">
                  <Icon icon="mdi:map-marker" class="mr-1 animate-bounce" />
                  <span>
                    {exp.localisation}
                  </span>
                </div>
                <div class="text-xs text-gray-800 dark:text-gray-400 flex items-center mt-2">
                  <Icon icon="mdi:clock-outline" class="mr-1 animate-bounce" />
                  <span>
                    {calculateDuration(exp.period)}
                  </span>
                </div>
                <p class="text-gray-600 dark:text-gray-300 mt-4 mb-4 text-sm">
                  {exp.description}
                </p>
                <div class="mt-3 flex flex-wrap gap-2">
                  {#each exp.technologies as tech}
                    <span class="px-2 py-1 bg-gray-200 dark:bg-gray-900 text-xs rounded-full dark:text-gray-200 text-gray-800">
                      {tech}
                    </span>
                  {/each}
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
</section>
  
  