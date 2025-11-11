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

<section class="py-50 text-center flex flex-col items-center justify-center">
  <div class="animate-bounce mb-8">
    <Icon
      icon="ph:rocket-launch-duotone"
      class="text-6xl text-blue-500 dark:text-blue-400"
    />
  </div>

  <!-- Texte principal avec fly-in -->
  <h2
    class="text-4xl sm:text-5xl font-extrabold mb-6 text-gray-900 dark:text-gray-100"
    transition:fly={{ y: 20, duration: 800 }}
  >
    Prêt à propulser votre projet ?
  </h2>

  <!-- Sous-texte -->
  <p
    class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8"
    transition:fly={{ y: 20, duration: 800, delay: 200 }}
  >
    Discutons ensemble de vos idées et transformons-les en solutions concrètes et performantes.
  </p>

  <!-- Bouton CTA -->
  <button
    on:click={scrollToContact}
    class="px-8 py-3 rounded-2xl bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105 hover:cursor-pointer"
  >
    Me contacter 🚀
  </button>
</section>

<style>
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .animate-bounce {
    animation: bounce 2s ease-in-out infinite;
  }
</style>
