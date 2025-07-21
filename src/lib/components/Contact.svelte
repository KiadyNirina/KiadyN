<script>
  import { supabase } from '$lib/supabaseClient'
  import emailjs from '@emailjs/browser';

  let form = {
    name: '',
    email: '',
    message: ''
  }
  let isSending = false
  let success = false
  let error = ''

  async function handleSubmit(event) {
    event.preventDefault()
    isSending = true
    error = ''
    success = false

    try {
      if (!form.name.trim()) throw new Error('Le nom est requis')
      if (!form.email.trim()) throw new Error('L\'email est requis')
      if (!form.message.trim()) throw new Error('Le message est requis')
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        throw new Error('Email invalide')
      }

      // 1. Email pour MOI (notification)
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_WELCOME,
        {
          name: form.name,
          email: form.email,
          message: form.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // 2. Email de confirmation pour L'UTILISATEUR
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT,
        {
          name: form.name,
          email: form.email,
          message: form.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Enregistrement dans Supabase 
      const { error: dbError } = await supabase
        .from('contacts')
        .insert([{ ...form }])

      if (dbError) throw dbError

      success = true
      form = { name: '', email: '', message: '' }

    } catch (err) {
      error = err.message
      console.error('Erreur:', err)
    } finally {
      isSending = false
    }
  }
</script>

<section id="contact" class="py-20 mt-50">
    <div class="max-w-2xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">
        <span class="border-b-4 border-blue-500 pb-2 dark:text-gray-100">Contactez-moi</span>
      </h2>

      <p class="dark:text-gray-100 text-center mb-[50px] text-sm">Prêt à collaborer sur votre prochain projet ?
      Remplissez le formulaire ou contactez-moi via mes réseaux sociaux !</p>

      {#if success}
        <div class="p-[10px] bg-green-500 text-white rounded-lg mb-[20px] text-center">
          ✓ Message envoyé avec succès ! Une confirmation vous a été envoyée par email.
        </div>
      {:else if error}
        <div class="p-[10px] bg-red-500 text-white rounded-lg mb-[20px] text-center">
          ⚠ {error}
        </div>
      {/if}
      
      <form on:submit|preventDefault={handleSubmit} class="space-y-6 dark:text-gray-100">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block mb-2 font-medium">Nom *</label>
            <input 
              type="text" 
              id="name" 
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-900"
              placeholder="Votre nom"
              bind:value={form.name}
              disabled={isSending}
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
              bind:value={form.email}
              disabled={isSending}
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
            bind:value={form.message}
            disabled={isSending}
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          class="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium" 
          disabled={isSending}
        >
          {isSending ? 'Envoie en cours...' : 'Envoyer le message'}
        </button>
      </form>
    </div>
  </section>