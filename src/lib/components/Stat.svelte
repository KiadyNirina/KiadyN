<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import Icon from '@iconify/svelte';

  // Données des statistiques
  const stats = [
    { 
      label: "Projets livrés", 
      value: "3", 
      suffix: "+", 
      icon: "ph:check-circle-thin",
      description: "Solutions déployées avec succès"
    },
    { 
      label: "Clients satisfaits", 
      value: "98", 
      suffix: "%", 
      icon: "ph:smiley-thin",
      description: "Engagement et qualité garantis"
    },
    { 
      label: "Années d'expérience", 
      value: "2", 
      suffix: " ans", 
      icon: "ph:clock-thin",
      description: "Expertise technique continue"
    }
  ];

  let visible = false;
  onMount(() => {
    visible = true;
  });
</script>

<section class="py-24">
  <div class="max-w-7xl mx-auto px-6">
    <!-- En-tête de section discret -->
    <div class="flex items-center gap-4 mb-16 opacity-50">
      <span class="text-[10px] font-black uppercase tracking-[0.4em] text-black dark:text-white">Performance Metrics</span>
      <div class="h-px flex-1 bg-black dark:bg-white"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
      {#each stats as stat, i}
        <div 
          class="relative flex flex-col items-center md:items-start md:px-12 {i !== stats.length - 1 ? 'md:border-r border-black/5 dark:border-white/5' : ''}"
          in:fly={{ y: 30, duration: 800, delay: i * 200 }}
        >
          <!-- Icône subtile -->
          <div class="mb-6 text-gray-400 dark:text-gray-600">
            <Icon icon={stat.icon} class="w-10 h-10" />
          </div>

          <!-- Chiffre principal -->
          <div class="flex items-baseline gap-1 mb-2">
            <span class="text-6xl md:text-7xl font-black text-black dark:text-white tracking-tighter">
              {stat.value}
            </span>
            <span class="text-2xl font-bold text-gray-400">
              {stat.suffix}
            </span>
          </div>

          <!-- Libellé et description -->
          <div class="text-center md:text-left">
            <h3 class="text-xs font-black uppercase tracking-[0.2em] text-black dark:text-white mb-2">
              {stat.label}
            </h3>
            <p class="text-[10px] font-mono uppercase text-gray-400 leading-relaxed max-w-[200px]">
              {stat.description}
            </p>
          </div>

          <!-- Décoration technique en arrière-plan -->
          <div class="absolute -bottom-4 -right-4 text-[60px] font-black opacity-[0.02] dark:opacity-[0.05] pointer-events-none select-none">
            0{i + 1}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  /* Optimisation du rendu du texte pour les grands chiffres */
  span {
    -webkit-font-smoothing: antialiased;
  }
</style>