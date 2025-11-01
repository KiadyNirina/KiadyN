<section id="skills" class="transition-colors duration-300 mt-50 mb-50 py-20">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-center mb-12 dark:text-gray-100">
        <span class="border-b-4 border-blue-500 pb-2">Mes Compétences</span>
      </h2>
  
      <!-- Filtres -->
      <div class="flex flex-wrap justify-center gap-3 mb-8">
        <button 
          class="filter-btn px-3 py-1.5 rounded-full text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 {activeFilter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'}" 
          on:click={() => setFilter('all')}
        >
          Tous
        </button>
        <button 
          class="filter-btn px-3 py-1.5 rounded-full text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 {activeFilter === 'frontend' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'}" 
          on:click={() => setFilter('frontend')}
        >
          Frontend
        </button>
        <button 
          class="filter-btn px-3 py-1.5 rounded-full text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 {activeFilter === 'backend' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'}" 
          on:click={() => setFilter('backend')}
        >
          Backend
        </button>
        <button 
          class="filter-btn px-3 py-1.5 rounded-full text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 {activeFilter === 'cms' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'}" 
          on:click={() => setFilter('cms')}
        >
          CMS
        </button>
        <button 
          class="filter-btn px-3 py-1.5 rounded-full text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 {activeFilter === 'bdd' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'}" 
          on:click={() => setFilter('bdd')}
        >
          Bases de données
        </button>
        <button 
          class="filter-btn px-3 py-1.5 rounded-full text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 {activeFilter === 'tools' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'}" 
          on:click={() => setFilter('tools')}
        >
          Outils
        </button>
      </div>
  
      <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
        {#each filteredSkills as skill}
          <div class="bg-white dark:bg-gray-900 p-3 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center dark:shadow-gray-800 w-[150px]" data-category={skill.category}>
            <Icon icon={skill.icon} class="text-2xl {skill.color} transition-transform duration-300 hover:scale-110" />
            <h3 class="text-sm text-gray-900 dark:text-gray-100 text-center ml-2">{skill.name}</h3>
          </div>
        {/each}
      </div>
    </div>
</section>

<script>
    import { onMount } from 'svelte';
    import Icon from '@iconify/svelte';

    const skills = [
        { name: 'HTML', icon: 'simple-icons:html5', color: 'text-orange-400', category: 'frontend' },
        { name: 'CSS', icon: 'simple-icons:css3', color: 'text-blue-400', category: 'frontend'},
        { name: 'Tailwind', icon: 'simple-icons:tailwindcss', color: 'text-cyan-400', category: 'frontend' },
        { name: 'Javascript', icon: 'simple-icons:javascript', color: 'text-yellow-400', category: 'frontend' },
        { name: 'Vue', icon: 'mdi:vuejs', color: 'text-green-500', category: 'frontend' },
        { name: 'Svelte', icon: 'simple-icons:svelte', color: 'text-orange-500', category: 'frontend' },
        { name: 'PHP', icon: 'simple-icons:php', color: 'text-violet-800', category: 'backend' },
        { name: 'Laravel', icon: 'simple-icons:laravel', color: 'text-orange-500', category: 'backend' },
        { name: 'Python', icon: 'material-icon-theme:python', color: 'text-blue-600', category: 'backend' },
        { name: 'Django', icon: 'simple-icons:django', color: 'text-green-800', category: 'backend' },
        { name: 'wordpress', icon: 'simple-icons:wordpress', color: 'text-blue-600', category: 'cms' },
        { name: 'magento', icon: 'simple-icons:magento', color: 'text-orange-500', category: 'cms' },
        { name: 'MySQL', icon: 'logos:mysql', color: 'text-blue-500', category: 'bdd' },
        { name: 'PostgreSQL', icon: 'akar-icons:postgresql-fill', color: 'text-blue-700', category: 'bdd' },
        { name: 'Supabase', icon: 'simple-icons:supabase', color: 'text-green-500', category: 'bdd' },
        { name: 'Git', icon: 'simple-icons:git', color: 'text-red-500', category: 'tools' },
        { name: 'Postman', icon: 'simple-icons:postman', color: 'text-orange-600', category: 'tools' },
        { name: 'Docker', icon: 'simple-icons:docker', color: 'text-blue-400', category: 'tools' },
    ];

    let filteredSkills = skills;
    let activeFilter = 'all';

    function setFilter(filter) {
        activeFilter = filter;
        if (filter === 'all') {
        filteredSkills = skills;
        } else {
        filteredSkills = skills.filter(skill => skill.category === filter);
        }
    }
</script>

<style>
    .skill-card {
        animation: fadeIn 0.5s ease-out;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>