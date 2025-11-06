<section class="transition-colors duration-300 mt-10 mb-10 py-20">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-4xl font-bold text-center mb-12 dark:text-gray-100">
      <span class="border-b-4 border-blue-500 pb-2">Mes Compétences</span>
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each [
        { title: 'Frontend', color: 'bg-blue-500', category: 'frontend', subsections: [
            { subtitle: 'Langages', items: ['HTML','CSS','Javascript'] },
            { subtitle: 'Frameworks / Libs', items: ['Vue','Svelte','Tailwind'] },
          ]
        },
        { title: 'Backend', color: 'bg-green-500', category: 'backend', subsections: [
            { subtitle: 'Langages', items: ['PHP','Python'] },
            { subtitle: 'Frameworks / API', items: ['Laravel','Django','Django REST','API REST'] },
          ]
        },
        { title: 'CMS', color: 'bg-purple-500', category: 'cms', subsections: [
            { subtitle: 'CMS', items: ['WordPress','Magento'] },
            { subtitle: 'Extensions / Plugins', items: ['WooCommerce'] },
          ]
        },
        { title: 'Bases de données', color: 'bg-red-500', category: 'bdd', subsections: [
            { subtitle: 'SGBD', items: ['SQLite','MySQL','PostgreSQL','Supabase'] },
          ]
        },
        { title: 'Outils', color: 'bg-orange-500', category: 'tools', subsections: [
            { subtitle: 'Versioning & Collaboration', items: ['Git','Trello'] },
            { subtitle: 'API & Conteneurs', items: ['Postman','Docker'] },
          ]
        },
      ] as section}
        <div
          class="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 dark:shadow-gray-800"
          use:fadeInOnScroll
        >
          <h3 class="text-base font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
            <span class={`w-3 h-3 ${section.color} rounded-full mr-3`}></span>
            {section.title}
          </h3>

          {#each section.subsections as sub}
            <h4 class="text-sm font-semibold text-gray-600 dark:text-gray-300 mt-5 mb-3">{sub.subtitle}</h4>
            <div class="grid grid-cols-2 gap-2">
              {#each sub.items as skillName}
                {#each skills.filter(skill => skill.name === skillName) as skill}
                  <div
                    class="skill-card bg-gray-50 dark:bg-gray-800 p-2 rounded-4xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center"
                    use:fadeInOnScroll
                  >
                    <Icon icon={skill.icon} class="text-lg {skill.color} transition-transform duration-300 hover:scale-110" />
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
    { name: 'HTML', icon: 'simple-icons:html5', color: 'text-orange-400', category: 'frontend' },
    { name: 'CSS', icon: 'simple-icons:css3', color: 'text-blue-400', category: 'frontend' },
    { name: 'Tailwind', icon: 'simple-icons:tailwindcss', color: 'text-cyan-400', category: 'frontend' },
    { name: 'Javascript', icon: 'simple-icons:javascript', color: 'text-yellow-400', category: 'frontend' },
    { name: 'Vue', icon: 'mdi:vuejs', color: 'text-green-500', category: 'frontend' },
    { name: 'Svelte', icon: 'simple-icons:svelte', color: 'text-orange-500', category: 'frontend' },
    { name: 'PHP', icon: 'simple-icons:php', color: 'text-violet-800', category: 'backend' },
    { name: 'Laravel', icon: 'simple-icons:laravel', color: 'text-orange-500', category: 'backend' },
    { name: 'Python', icon: 'material-icon-theme:python', color: 'text-blue-600', category: 'backend' },
    { name: 'Django', icon: 'simple-icons:django', color: 'text-green-800', category: 'backend' },
    { name: 'Django REST', icon: 'simple-icons:django', color: 'text-green-700', category: 'backend' },
    { name: 'API REST', icon: 'akar-icons:api', color: 'text-gray-700', category: 'backend' },
    { name: 'WordPress', icon: 'simple-icons:wordpress', color: 'text-blue-600', category: 'cms' },
    { name: 'Magento', icon: 'simple-icons:magento', color: 'text-orange-500', category: 'cms' },
    { name: 'WooCommerce', icon: 'simple-icons:woocommerce', color: 'text-purple-600', category: 'cms' },
    { name: 'SQLite', icon: 'simple-icons:sqlite', color: 'text-blue-700', category: 'bdd' },
    { name: 'MySQL', icon: 'logos:mysql', color: 'text-blue-500', category: 'bdd' },
    { name: 'PostgreSQL', icon: 'akar-icons:postgresql-fill', color: 'text-blue-700', category: 'bdd' },
    { name: 'Supabase', icon: 'simple-icons:supabase', color: 'text-green-500', category: 'bdd' },
    { name: 'Git', icon: 'simple-icons:git', color: 'text-red-500', category: 'tools' },
    { name: 'Trello', icon: 'simple-icons:trello', color: 'text-blue-500', category: 'tools' },
    { name: 'Postman', icon: 'simple-icons:postman', color: 'text-orange-600', category: 'tools' },
    { name: 'Docker', icon: 'simple-icons:docker', color: 'text-blue-400', category: 'tools' },
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