<script>
    const experiences = [
      {
        period: "Mars 2025 - Présent",
        position: "Développeur Full-Stack",
        company: "Atout Service Mada",
        type: "CDI",
        description: "Conception et développement d'applications web e-commerce basée sur Magento 2.",
        technologies: ["HTML / CSS", "PHP", "Codeigniter", "Magento", "Wordpress", "MySQL", "Git"]
      },
      {
        period: "Nov. 2024 - Fev. 2025",
        position: "Stagiaire Développeur Full-Stack",
        company: "Atout Service Mada",
        type: "Stage",
        description: "Participation au développement et à la maintenance des fonctionnalités front-end et back-end d'une plateforme e-commerce.",
        technologies: ["HTML / CSS", "PHP", "Codeigniter", "Magento", "Wordpress", "MySQL", "Git"]
      },
      {
        period: "2022 - Présent",
        position: "Freelance Développeur Web",
        company: "Divers Clients",
        type: "Freelance",
        description: "Développement d'applications web pour divers clients.",
        technologies: ["Wordpress", "HTML", "CSS", "JavaScript", "PHP", "MySQL"]
      }
    ];
</script>

<section id="experiences" class="transition-colors duration-300 mt-50 mb-50 py-20">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12 dark:text-gray-100">
        <span class="border-b-4 border-blue-500 pb-2">Expériences Professionnelles</span>
      </h2>
  
      <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500 before:to-transparent dark:before:via-blue-400 md:before:ml-0 md:before:-left-[12.6px]">
        {#each experiences as exp}
          <div class="relative pl-10 md:pl-0">
            <div class="flex flex-col md:flex-row items-start md:items-center mb-1">
              <div class="flex items-center">
                <div class="absolute left-3 md:-left-5 h-4 w-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 z-10"></div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white ml-2 md:ml-0 md:w-32">
                  {exp.period}
                </h3>
              </div>
              <div class="md:ml-12 flex-1">
                <div class="flex flex-col md:flex-row md:items-center justify-between">
                  <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {exp.position} • {exp.company}
                  </h4>
                  <span class="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full mt-1 md:mt-0">
                    {exp.type}
                  </span>
                </div>
                <p class="text-gray-600 dark:text-gray-300 mt-2 text-sm">
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
  
  