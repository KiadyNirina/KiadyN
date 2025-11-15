<section class="transition-colors duration-300 mt-10 mb-10 py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-4xl font-bold text-center mb-12 dark:text-gray-100">
      <span class="border-b-4 border-blue-500 pb-2">Mes Compétences</span>
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {#each [
        { title: 'Frontend', color: 'text-blue-500', category: 'frontend', subsections: [
            { subtitle: 'Langages', items: ['HTML','CSS','Javascript'] },
            { subtitle: 'Frameworks / Libs', items: ['Vue','Svelte','Tailwind'] },
          ]
        },
        { title: 'Backend', color: 'text-green-500', category: 'backend', subsections: [
            { subtitle: 'Langages', items: ['PHP','Python'] },
            { subtitle: 'Frameworks / API', items: ['Laravel','Django','Django REST','API REST'] },
          ]
        },
        { title: 'CMS', color: 'text-purple-500', category: 'cms', subsections: [
            { subtitle: 'CMS', items: ['WordPress','Magento'] },
            { subtitle: 'Extensions / Plugins', items: ['WooCommerce'] },
          ]
        },
        { title: 'Bases de données', color: 'text-red-500', category: 'bdd', subsections: [
            { subtitle: 'SGBD', items: ['SQLite','MySQL','PostgreSQL','Supabase'] },
          ]
        },
        { title: 'Outils', color: 'text-orange-500', category: 'tools', subsections: [
            { subtitle: 'Versioning & Collaboration', items: ['Git','Trello'] },
            { subtitle: 'API & Conteneurs', items: ['Postman','Docker'] },
          ]
        },
      ] as section}
        <div
          class="bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          use:fadeInOnScroll
        >
          <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-4 flex items-center">
            <span class={`text-lg ${section.color} mr-2`}>•</span>
            {section.title}
          </h3>

          {#each section.subsections as sub}
            <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400 mt-4 mb-2">{sub.subtitle}</h4>
            <div class="flex flex-wrap gap-2">
              {#each sub.items as skillName}
                {#each skills.filter(skill => skill.name === skillName) as skill}
                  <div
                    class="skill-card bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-lg flex items-center transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    use:fadeInOnScroll
                  >
                    <Icon icon={skill.icon} class="text-base {skill.color} dark:{skill.dark}" />
                    <span class="text-xs text-gray-700 dark:text-gray-300 ml-2">{skill.name}</span>
                  </div>
                {/each}
              {/each}
            </div>
          {/each}

        </div>
      {/each}
    </div>
  </div>
</section>

<script>
  import Icon from '@iconify/svelte';

  const skills = [
    { name: 'HTML', icon: 'simple-icons:html5', color: 'text-gray-700', dark: 'text-gray-300', category: 'frontend' },
    { name: 'CSS', icon: 'simple-icons:css3', color: 'text-gray-700', dark: 'text-gray-300', category: 'frontend' },
    { name: 'Tailwind', icon: 'simple-icons:tailwindcss', color: 'text-gray-700', dark: 'text-gray-300', category: 'frontend' },
    { name: 'Javascript', icon: 'simple-icons:javascript', color: 'text-gray-700', dark: 'text-gray-300', category: 'frontend' },
    { name: 'Vue', icon: 'mdi:vuejs', color: 'text-gray-700', dark: 'text-gray-300', category: 'frontend' },
    { name: 'Svelte', icon: 'simple-icons:svelte', color: 'text-gray-700', dark: 'text-gray-300', category: 'frontend' },
    { name: 'PHP', icon: 'simple-icons:php', color: 'text-gray-700', dark: 'text-gray-300', category: 'backend' },
    { name: 'Laravel', icon: 'simple-icons:laravel', color: 'text-gray-700', dark: 'text-gray-300', category: 'backend' },
    { name: 'Python', icon: 'simple-icons:python', color: 'text-gray-700', dark: 'text-gray-300', category: 'backend' },
    { name: 'Django', icon: 'simple-icons:django', color: 'text-gray-700', dark: 'text-gray-300', category: 'backend' },
    { name: 'Django REST', icon: 'simple-icons:django', color: 'text-gray-700', dark: 'text-gray-300', category: 'backend' },
    { name: 'API REST', icon: 'akar-icons:api', color: 'text-gray-700', dark: 'text-gray-300', category: 'backend' },
    { name: 'WordPress', icon: 'simple-icons:wordpress', color: 'text-gray-700', dark: 'text-gray-300', category: 'cms' },
    { name: 'Magento', icon: 'simple-icons:magento', color: 'text-gray-700', dark: 'text-gray-300', category: 'cms' },
    { name: 'WooCommerce', icon: 'simple-icons:woocommerce', color: 'text-gray-700', dark: 'text-gray-300', category: 'cms' },
    { name: 'SQLite', icon: 'simple-icons:sqlite', color: 'text-gray-700', dark: 'text-gray-300', category: 'bdd' },
    { name: 'MySQL', icon: 'simple-icons:mysql', color: 'text-gray-700', dark: 'text-gray-300', category: 'bdd' },
    { name: 'PostgreSQL', icon: 'akar-icons:postgresql-fill', color: 'text-gray-700', dark: 'text-gray-300', category: 'bdd' },
    { name: 'Supabase', icon: 'simple-icons:supabase', color: 'text-gray-700', dark: 'text-gray-300', category: 'bdd' },
    { name: 'Git', icon: 'simple-icons:git', color: 'text-gray-700', dark: 'text-gray-300', category: 'tools' },
    { name: 'Trello', icon: 'simple-icons:trello', color: 'text-gray-700', dark: 'text-gray-300', category: 'tools' },
    { name: 'Postman', icon: 'simple-icons:postman', color: 'text-gray-700', dark: 'text-gray-300', category: 'tools' },
    { name: 'Docker', icon: 'simple-icons:docker', color: 'text-gray-700', dark: 'text-gray-300', category: 'tools' },
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
      { threshold: 0.2 }
    );

    observer.observe(node);
    return { destroy() { observer.unobserve(node); } };
  }
</script>

<style>
  .skill-card {
    opacity: 0;
    transform: translateY(15px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    will-change: opacity, transform;
  }

  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
</style>