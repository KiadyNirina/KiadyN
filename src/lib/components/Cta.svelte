<script>
  import { fly } from "svelte/transition";
  import Icon from "@iconify/svelte";

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
</script>

<section class="py-40 relative overflow-hidden">

  <div class="max-w-7xl mx-auto px-6 relative z-10">
    <div class="flex flex-col items-center text-center">
      
      <!-- Label minimaliste -->
      <div class="flex items-center gap-4 mb-12">
        <div class="h-px w-8 bg-black dark:bg-white"></div>
        <span class="text-[10px] font-black uppercase tracking-[0.4em] text-gray-800 dark:text-gray-200">Phase Finale</span>
        <div class="h-px w-8 bg-black dark:bg-white"></div>
      </div>

      <!-- Titre Brutaliste -->
      <h2 
        class="text-5xl md:text-8xl font-black text-black dark:text-white tracking-tighter leading-none uppercase mb-12 max-w-4xl"
        in:fly={{ y: 50, duration: 1000 }}
      >
        Prêt à <span class="text-gray-400 dark:text-gray-600">matérialiser</span> vos idées ?
      </h2>

      <!-- Description type éditorial -->
      <p 
        class="text-sm md:text-lg font-mono text-gray-500 dark:text-gray-400 max-w-xl mb-16 leading-relaxed uppercase tracking-tight"
        in:fly={{ y: 30, duration: 1000, delay: 200 }}
      >
        Discutons de vos objectifs et transformons-les en une infrastructure digitale solide, évolutive et esthétique.
      </p>

      <!-- Bouton CTA Signature -->
      <button
        on:click={scrollToContact}
        class="group relative px-12 py-6 bg-black dark:bg-white text-white dark:text-black overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95"
      >
        <!-- Effet de reflet au survol -->
        <div class="absolute inset-0 w-1/2 h-full bg-white/20 -skew-x-[30deg] -translate-x-full group-hover:translate-x-[250%] transition-transform duration-700 ease-in-out"></div>
        
        <span class="relative z-10 flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em]">
          Démarrer la collaboration
          <Icon icon="ph:arrow-right-thin" class="w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </span>
      </button>

    </div>
  </div>
</section>

<style>
  h2 {
    word-spacing: -0.1em;
  }
</style>