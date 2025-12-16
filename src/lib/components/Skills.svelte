<section class="py-20">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header avec animation -->
    <div class="text-center mb-16 animate-slide-up">
      <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
        Mes Compétences
      </h2>
      <div class="relative inline-block">
        <div class="w-24 h-1 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full mx-auto"></div>
        <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-600 rounded-full animate-ping-slow"></div>
      </div>
    </div>

    <!-- Grid des compétences -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each [
        { title: 'Frontend', color: 'from-gray-600 to-gray-700', category: 'frontend', subsections: [
            { subtitle: 'Langages', items: ['HTML','CSS','Javascript'] },
            { subtitle: 'Frameworks / Libs', items: ['Vue','Nuxt','Svelte','Sveltekit','Tailwind'] },
          ]
        },
        { title: 'Backend', color: 'from-gray-700 to-gray-800', category: 'backend', subsections: [
            { subtitle: 'Langages', items: ['PHP','Python'] },
            { subtitle: 'Frameworks / API', items: ['Laravel','Django','Django REST','API REST'] },
          ]
        },
        { title: 'CMS', color: 'from-gray-800 to-gray-900', category: 'cms', subsections: [
            { subtitle: 'CMS', items: ['WordPress','Magento'] },
            { subtitle: 'Extensions / Plugins', items: ['WooCommerce'] },
          ]
        },
        { title: 'Bases de données', color: 'from-gray-900 to-gray-700', category: 'bdd', subsections: [
            { subtitle: 'SGBD', items: ['SQLite','MySQL','PostgreSQL','Supabase'] },
          ]
        },
        { title: 'Outils', color: 'from-gray-700 to-gray-800', category: 'tools', subsections: [
            { subtitle: 'Versioning & Collaboration', items: ['Git','Trello'] },
            { subtitle: 'API & Conteneurs', items: ['Postman','Docker'] },
          ]
        },
      ] as section}
        <div
          class="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          use:fadeInOnScroll
        >
          <!-- Effet de fond au hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-gray-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <!-- Point animé -->
          <div class="absolute -top-2 -right-2 w-4 h-4 bg-gray-600 rounded-full animate-pulse-gentle"></div>

          <div class="relative z-10">
            <!-- Titre avec icône -->
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span class={`flex items-center justify-center`}>
                
              </span>
              {section.title}
            </h3>

            {#each section.subsections as sub, index}
              <div class="mb-6 last:mb-0">
                <h4 class="text-sm font-semibold text-gray-800 dark:text-gray-300 mb-3 flex items-center">
                  <span class="w-1 h-4 bg-gray-600 rounded-full mr-2 animate-pulse-gentle" style="animation-delay: {index * 0.2}s;"></span>
                  {sub.subtitle}
                </h4>
                <div class="flex flex-wrap gap-2">
                  {#each sub.items as skillName, skillIndex}
                    {#each skills.filter(skill => skill.name === skillName) as skill}
                      <div
                        class="skill-card bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 px-3 py-2 rounded-xl flex items-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800/50 group/card"
                        use:fadeInOnScroll
                        style="animation-delay: {skillIndex * 0.1}s;"
                      >
                        <!-- Flash au hover -->
                        <div class="absolute inset-0 bg-gray-500 rounded-xl opacity-0 group-hover/card:opacity-10 transition-opacity duration-300"></div>
                        
                        <Icon 
                          icon={skill.icon} 
                          class="text-lg text-gray-700 dark:text-gray-400 relative z-10 transition-transform duration-300 group-hover/card:scale-110 group-hover/card:text-gray-800 dark:group-hover/card:text-gray-300" 
                        />
                        <span class="text-sm font-medium text-gray-700 dark:text-gray-300 ml-2 relative z-10">
                          {skill.name}
                        </span>
                      </div>
                    {/each}
                  {/each}
                </div>
              </div>
            {/each}
          </div>

          <!-- Bordure animée au hover -->
          <div class="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
            <div class="absolute inset-[2px] rounded-2xl bg-white dark:bg-gray-800"></div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<script>
  import Icon from '@iconify/svelte';

  const skills = [
    { name: 'HTML', icon: 'simple-icons:html5', category: 'frontend' },
    { name: 'CSS', icon: 'simple-icons:css3', category: 'frontend' },
    { name: 'Tailwind', icon: 'simple-icons:tailwindcss', category: 'frontend' },
    { name: 'Javascript', icon: 'simple-icons:javascript', category: 'frontend' },
    { name: 'Vue', icon: 'mdi:vuejs', category: 'frontend' },
    { name: 'Nuxt', icon: 'mdi:nuxt', category: 'frontend' },
    { name: 'Svelte', icon: 'simple-icons:svelte', category: 'frontend' },
    { name: 'Sveltekit', icon: 'simple-icons:svelte', category: 'frontend' },
    { name: 'PHP', icon: 'simple-icons:php', category: 'backend' },
    { name: 'Laravel', icon: 'simple-icons:laravel', category: 'backend' },
    { name: 'Python', icon: 'simple-icons:python', category: 'backend' },
    { name: 'Django', icon: 'simple-icons:django', category: 'backend' },
    { name: 'Django REST', icon: 'simple-icons:django', category: 'backend' },
    { name: 'API REST', icon: 'akar-icons:api', category: 'backend' },
    { name: 'WordPress', icon: 'simple-icons:wordpress', category: 'cms' },
    { name: 'Magento', icon: 'simple-icons:magento', category: 'cms' },
    { name: 'WooCommerce', icon: 'simple-icons:woocommerce', category: 'cms' },
    { name: 'SQLite', icon: 'simple-icons:sqlite', category: 'bdd' },
    { name: 'MySQL', icon: 'simple-icons:mysql', category: 'bdd' },
    { name: 'PostgreSQL', icon: 'akar-icons:postgresql-fill', category: 'bdd' },
    { name: 'Supabase', icon: 'simple-icons:supabase', category: 'bdd' },
    { name: 'Git', icon: 'simple-icons:git', category: 'tools' },
    { name: 'Trello', icon: 'simple-icons:trello', category: 'tools' },
    { name: 'Postman', icon: 'simple-icons:postman', category: 'tools' },
    { name: 'Docker', icon: 'simple-icons:docker', category: 'tools' },
  ];

  export function fadeInOnScroll(node) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.remove('visible');
            void node.offsetWidth;
            node.classList.add('visible');
          } else {
            node.classList.remove('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return { destroy() { observer.unobserve(node); } };
  }
</script>

<style>
  .skill-card {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out, all 0.3s ease;
    will-change: opacity, transform;
  }

  .visible {
    opacity: 1 !important;
    transform: translateY(0) scale(1) !important;
  }

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

  @keyframes fadeIn {
    from { 
      opacity: 0; 
    }
    to { 
      opacity: 1; 
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

  .animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
    opacity: 0;
  }

  .animate-pulse-gentle {
    animation: pulse-gentle 3s ease-in-out infinite;
  }

  .animate-ping-slow {
    animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  .animate-ping-fast {
    animation: ping-fast 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
</style>