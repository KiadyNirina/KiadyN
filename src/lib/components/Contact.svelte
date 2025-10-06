<script>
  let loading = false;
  export let form;

  $: if (form?.success || form?.error) loading = false;
</script>

<section id="contact" class="py-20 mt-50">
    <div class="max-w-2xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">
        <span class="border-b-4 border-blue-500 pb-2 dark:text-gray-100">Contactez-moi</span>
      </h2>

      <p class="dark:text-gray-100 text-center mb-[50px] text-base">Prêt à collaborer sur votre prochain projet ?
      Remplissez le formulaire ou contactez-moi via mes réseaux sociaux !</p>

      {#if form?.success}
        <div class="p-[10px] bg-green-500 text-white rounded-lg mb-[20px] text-center">
          ✓ Message envoyé avec succès ! Une confirmation vous a été envoyée par email.
        </div>
      {:else if form?.error}
        <div class="p-[10px] bg-red-500 text-white rounded-lg mb-[20px] text-center">
          ⚠ {form?.error}
        </div>
      {/if}
      
      <form method="post" on:submit={() => (loading = true)} class="space-y-6 dark:text-gray-100">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block mb-2 font-medium">Nom *</label>
            <input 
              type="text" 
              id="name" 
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-900"
              placeholder="Votre nom"
              name="name"
              required
            />
          </div>
          <div>
            <label for="email" class="block mb-2 font-medium">Email *</label>
            <input 
              type="email" 
              id="email" 
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-900"
              placeholder="votre@email.com"
              name="email"
              required
            />
          </div>
        </div>
        
        <div>
          <label for="subject" class="block mb-2 font-medium">Sujet</label>
          <input 
            type="text" 
            id="subject" 
            class="w-full px-4 py-2 border border-gray-300 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-900"
            placeholder="Objet du message"
          />
        </div>
        
        <div>
          <label for="message" class="block mb-2 font-medium">Message *</label>
          <textarea 
            id="message" 
            rows="5"
            class="w-full px-4 py-2 border border-gray-300 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-900"
            placeholder="Votre message..."
            name="message"
            required
          ></textarea>
        </div>
        
        <button
          class="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed" 
          disabled={loading}
        >
          {#if loading}Envoie en cours...{/if}
          {#if !loading}Envoyer le message{/if}
        </button>
      </form>
    </div>
  </section>