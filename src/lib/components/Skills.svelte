<script>
  import Icon from '@iconify/svelte';
    import { tick } from 'svelte';

  const skills = [
    { name: 'HTML', icon: 'simple-icons:html5' },
    { name: 'CSS', icon: 'simple-icons:css3' },
    { name: 'Tailwind', icon: 'simple-icons:tailwindcss' },
    { name: 'Javascript', icon: 'simple-icons:javascript' },
    { name: 'Vue', icon: 'simple-icons:vuedotjs' },
    { name: 'Nuxt', icon: 'simple-icons:nuxtdotjs' },
    { name: 'Svelte', icon: 'simple-icons:svelte' },
    { name: 'Sveltekit', icon: 'simple-icons:svelte' },
    { name: 'PHP', icon: 'simple-icons:php' },
    { name: 'Laravel', icon: 'simple-icons:laravel' },
    { name: 'Python', icon: 'simple-icons:python' },
    { name: 'Django', icon: 'simple-icons:django' },
    { name: 'Django REST', icon: 'simple-icons:django' },
    { name: 'API REST', icon: 'ph:framer-logo-bold' },
    { name: 'WordPress', icon: 'simple-icons:wordpress' },
    { name: 'Magento', icon: 'simple-icons:magento' },
    { name: 'WooCommerce', icon: 'simple-icons:woocommerce' },
    { name: 'SQLite', icon: 'simple-icons:sqlite' },
    { name: 'MySQL', icon: 'simple-icons:mysql' },
    { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
    { name: 'Supabase', icon: 'simple-icons:supabase' },
    { name: 'Git', icon: 'simple-icons:git' },
    { name: 'Trello', icon: 'simple-icons:trello' },
    { name: 'Postman', icon: 'simple-icons:postman' },
    { name: 'Docker', icon: 'simple-icons:docker' },
  ];

  const categories = [
    { 
        title: 'Frontend', 
        subsections: [
            { subtitle: 'Langages', items: ['HTML','CSS','Javascript'] },
            { subtitle: 'Frameworks', items: ['Vue','Nuxt','Svelte','Sveltekit','Tailwind'] },
        ]
    },
    { 
        title: 'Backend', 
        subsections: [
            { subtitle: 'Langages', items: ['PHP','Python'] },
            { subtitle: 'Frameworks & APIs', items: ['Laravel','Django','Django REST','API REST'] },
        ]
    },
    {
        title: 'CMS & E-commerce', 
        subsections: [
            { subtitle: 'Plateformes', items: ['WordPress','Magento','WooCommerce'] },
        ]
    },
    {
        title: 'Bases de Données',
        subsections: [
            { subtitle: 'SGBD', items: ['SQLite','MySQL','PostgreSQL','Supabase'] },
        ]
    },
    { 
        title: 'Outils', 
        subsections: [
            { subtitle: 'Dev & Prod', items: ['Git','Trello','Postman','Docker'] },
        ]
    }
  ];

  export function fadeInOnScroll(node) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.style.opacity = "1";
            node.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return { destroy() { observer.unobserve(node); } };
  }
</script>

<section class="py-32 overflow-hidden">
  <div class="max-w-7xl mx-auto px-6">
    
    <!-- Header Minimaliste -->
    <div class="mb-24 flex flex-col md:flex-row items-baseline gap-6 border-b border-black/50 dark:border-white/50 pb-12">
      <h2 class="text-7xl md:text-9xl font-black text-black dark:text-white tracking-tighter uppercase">
        Stack
      </h2>
      <p class="text-xl font-light text-gray-900 dark:text-gray-400 uppercase tracking-[0.3em]">
        Technique & Outils
      </p>
    </div>

    <!-- Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-black/50 dark:border-white/50">
      {#each categories as category, i}
        <div 
          class="group relative p-10 border-r border-b border-black/50 dark:border-white/50 transition-all duration-500 hover:bg-gray-50 dark:hover:bg-gray-900/40"
          use:fadeInOnScroll
          style="transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); opacity: 0; transform: translateY(40px); transition-delay: {i * 0.1}s"
        >
          <!-- Category Index -->
          <div class="mb-12 flex justify-between items-center">
            <h3 class="text-xs font-black uppercase tracking-[0.4em] text-black dark:text-white">
                {category.title}
            </h3>
            <span class="text-xs font-mono text-gray-300 dark:text-gray-700">0{i+1}</span>
          </div>

          {#each category.subsections as sub}
            <div class="mb-10 last:mb-0">
              <p class="text-[10px] uppercase font-bold text-gray-900 dark:text-gray-400 tracking-widest mb-6 flex items-center gap-2">
                <span class="w-2 h-2 bg-black dark:bg-white rounded-full"></span>
                {sub.subtitle}
              </p>
              
              <div class="flex flex-wrap gap-3">
                {#each sub.items as skillName}
                  {#each skills.filter(s => s.name === skillName) as skill}
                    <div class="group/item flex items-center gap-3 px-4 py-2 border border-black/30 dark:border-white/5 bg-white dark:bg-gray-900 rounded-full hover:border-black dark:hover:border-white hover:invert transition-all duration-300">
                      <Icon 
                        icon={skill.icon} 
                        class="text-xl text-black dark:text-gray-400 group-hover/item:text-white dark:group-hover/item:text-black" 
                      />
                      <span class="text-xs font-bold uppercase tracking-tighter text-black dark:text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  {/each}
                {/each}
              </div>
            </div>
          {/each}

          <!-- Hover Decoration -->
          <div class="absolute bottom-0 left-0 w-0 h-1 bg-black dark:bg-white group-hover:w-full transition-all duration-700"></div>
        </div>
      {/each}
    </div>

    <!-- Background Decoration (Brutalist Lines) -->
    <div class="mt-24 grid grid-cols-4 h-px bg-black/5 dark:bg-white/5">
        <div class="border-r border-black/5 dark:border-white/5"></div>
        <div class="border-r border-black/5 dark:border-white/5"></div>
        <div class="border-r border-black/5 dark:border-white/5"></div>
    </div>
  </div>
</section>

<style>
    :global(.group\/item:hover svg) {
        filter: invert(1);
    }
</style>