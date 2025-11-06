<script>
  import { fade, slide } from 'svelte/transition';

  let name = '';
  let email = '';
  let subject = '';
  let message = '';

  let loading = false;
  let success = '';
  let error = '';

  async function handleSubmit(event) {
    event.preventDefault();
    loading = true;
    success = '';
    error = '';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      });

      let data;
      try {
        data = await res.json();
      } catch (err) {
        data = { error: 'Réponse invalide du serveur.' };
      }

      if (res.ok) {
        success = data.success || 'Message envoyé avec succès ✅';
        setTimeout(() => {
          name = '';
          email = '';
          subject = '';
          message = '';
        }, 300);

        setTimeout(() => (success = ''), 3500);
      } else {
        error = data.error || 'Une erreur est survenue lors de l’envoi.';
        setTimeout(() => (error = ''), 3500);
      }
    } catch (err) {
      console.error('Erreur réseau:', err);
      error = 'Impossible de contacter le serveur.';
      setTimeout(() => (error = ''), 3500);
    } finally {
      loading = false;
    }
  }
</script>

<section class="py-20 mt-10">
    <div class="">
      <h2 class="text-4xl font-bold text-center mb-12">
        <span class="border-b-4 border-blue-500 pb-2 dark:text-gray-100">Contactez-moi</span>
      </h2>

    <div class="flex flex-col md:flex-row items-center gap-10">
      <!-- Image -->
      <div class="max-w-2xl md:w-1/2 flex justify-center">
        <img src="order.svg" alt="Contact illustration" class="max-w-[400px] w-full h-auto" />
      </div>

      <!-- Formulaire -->
      <div class="max-w-2xl md:w-1/2">
        <p class="dark:text-gray-100 text-center mb-[50px] text-sm md:text-base">
          Prêt à collaborer sur votre prochain projet ? <br>
          Remplissez le formulaire ou contactez-moi via mes réseaux sociaux !
        </p>

        {#if success}
          <div
            class="p-[10px] bg-green-500 text-white rounded-lg mb-[20px] text-center shadow-md"
            in:fade={{ duration: 300 }}
            out:slide={{ duration: 400 }}
          >
            ✓ {success}
          </div>
        {:else if error}
          <div
            class="p-[10px] bg-red-500 text-white rounded-lg mb-[20px] text-center shadow-md"
            in:fade={{ duration: 300 }}
            out:slide={{ duration: 400 }}
          >
            ⚠ {error}
          </div>
        {/if}

        <form on:submit={handleSubmit} class="space-y-6 dark:text-gray-100 text-sm md:text-base">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block mb-2 font-medium">Nom *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                bind:value={name}
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800"
                placeholder="Votre nom"
                required
              />
            </div>
            <div>
              <label for="email" class="block mb-2 font-medium">Email *</label>
              <input 
                type="email" 
                id="email" 
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800"
                placeholder="votre@email.com"
                name="email"
                bind:value={email}
                required
              />
            </div>
          </div>
          
          <div>
            <label for="subject" class="block mb-2 font-medium">Sujet</label>
            <input 
              type="text" 
              id="subject" 
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800"
              placeholder="Objet du message"
              name="subject"
              bind:value={subject}
            />
          </div>
          
          <div>
            <label for="message" class="block mb-2 font-medium">Message *</label>
            <textarea 
              id="message" 
              rows="5"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800"
              placeholder="Votre message..."
              name="message"
              bind:value={message}
              required
            ></textarea>
          </div>
          <button
            type="submit" 
            class="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed" 
            disabled={loading}
          >
            {#if loading}Envoi en cours...{:else}Envoyer le message{/if}
          </button>
        </form>
      </div>
    </div>
  </div>
</section>