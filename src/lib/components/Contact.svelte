<script>
  import { fade, slide } from 'svelte/transition';
  import Icon from '@iconify/svelte';

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
        error = data.error || 'Une erreur est survenue lors de l\'envoi.';
        setTimeout(() => (error = ''), 3500);
      }
    } catch (err) {
      error = 'Échec de la transmission. Veuillez réessayer.';
      setTimeout(() => (error = ''), 5000);
    } finally {
      loading = false;
    }
  }
</script>

<section class="py-32">
    <div class="max-w-7xl mx-auto px-6">
        
        <!-- Header Brutaliste -->
        <div class="mb-24 flex flex-col md:flex-row justify-between items-end gap-6">
            <div class="max-w-2xl">
                <h2 class="text-xs font-black uppercase tracking-[0.5em] text-gray-800 dark:text-gray-200 mb-6">Contact</h2>
                <h3 class="text-6xl md:text-8xl font-black text-black dark:text-white tracking-tighter leading-none uppercase">
                    Get in <span class="text-gray-400 dark:text-gray-600">Touch</span>
                </h3>
            </div>
            <div class="text-right hidden md:block">
                <p class="text-[10px] font-mono text-gray-800 dark:text-white uppercase tracking-widest leading-relaxed">
                    Available for freelance & <br/> Full-time opportunities
                </p>
            </div>
        </div>

        <div class="grid lg:grid-cols-12 gap-16">
            
            <!-- Coordonnées Gauche (4 cols) -->
            <div class="lg:col-span-4 space-y-12">
                <div>
                    <h4 class="text-[10px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-300 mb-6">// Canaux directs</h4>
                    <div class="space-y-6">
                        <a href="mailto:kiady142ram@gmail.com" class="group block">
                            <span class="text-[10px] font-mono text-gray-600 dark:text-gray-300 block mb-1">Email</span>
                            <span class="text-xl font-bold text-black dark:text-white group-hover:underline decoration-1 underline-offset-8 transition-all">
                                kiady142ram@gmail.com
                            </span>
                        </a>
                        <div class="group block">
                            <span class="text-[10px] font-mono text-gray-600 dark:text-gray-300 block mb-1">Localisation</span>
                            <span class="text-xl font-bold text-black dark:text-white">
                                Antananarivo, Madagascar
                            </span>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 class="text-[10px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-300 mb-6">// Réseaux Sociaux</h4>
                    <div class="flex flex-wrap gap-4">
                        {#each [
                            { name: 'Github', icon: 'ph:github-logo-thin', href: 'https://github.com/KiadyNirina' },
                            { name: 'Linkedin', icon: 'ph:linkedin-logo-thin', href: 'https://www.linkedin.com/in/kiady-ram-5216592a9/' },
                            { name: 'Facebook', icon: 'ph:facebook-logo-thin', href: 'https://www.facebook.com/kiady.rambeloson/' },
                        ] as social}
                            <a 
                                href={social.href} 
                                class="p-4 text-black dark:dark:text-white border border-black/50 dark:border-white/50 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group"
                                aria-label={social.name}
                                target="_blank"
                            >
                                <Icon icon={social.icon} class="w-6 h-6" />
                            </a>
                        {/each}
                    </div>
                </div>

                <div class="p-8 bg-gray-200 dark:bg-gray-900 border border-black/5 dark:border-white/5">
                    <p class="text-xs text-gray-800 dark:text-gray-200 leading-relaxed font-mono italic">
                        "Toujours à la recherche de défis stimulants. Que vous ayez une idée précise ou juste l'envie de discuter d'une technologie, ma porte est ouverte."
                    </p>
                </div>
            </div>

            <!-- Formulaire Droite (8 cols) -->
            <div class="lg:col-span-8">
                {#if success}
                    <div class="p-12 bg-black text-white dark:bg-white dark:text-black text-center mb-8" transition:fade>
                        <Icon icon="ph:check-circle-thin" class="w-16 h-16 mx-auto mb-4" />
                        <h4 class="text-2xl font-black uppercase tracking-tighter mb-2">{success}</h4>
                        <p class="text-xs font-mono opacity-60">ID Transaction: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                    </div>
                {:else}
                    <form on:submit={handleSubmit} class="space-y-0">
                        <div class="grid md:grid-cols-2">
                            <!-- Nom -->
                            <div class="border-b border-t border-l border-black/40 dark:border-white/40 p-6 group focus-within:bg-gray-50 dark:focus-within:bg-white/5 transition-colors">
                                <label for="name" class="block text-[10px] font-black uppercase tracking-widest text-gray-800 dark:text-gray-200 mb-2">01. Votre Nom</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    bind:value={name}
                                    placeholder="John Doe"
                                    class="w-full bg-transparent border-none p-0 text-xl font-bold text-black dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-800 focus:ring-0"
                                    required
                                />
                            </div>
                            <!-- Email -->
                            <div class="border-b border-t border-l border-r border-black/40 dark:border-white/40 p-6 group focus-within:bg-gray-50 dark:focus-within:bg-white/5 transition-colors">
                                <label for="email" class="block text-[10px] font-black uppercase tracking-widest text-gray-800 dark:text-gray-200 mb-2">02. Votre Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    bind:value={email}
                                    placeholder="john@example.com"
                                    class="w-full bg-transparent border-none p-0 text-xl font-bold text-black dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-800 focus:ring-0"
                                    required
                                />
                            </div>
                        </div>

                        <!-- Sujet -->
                        <div class="border-b border-l border-r border-black/40 dark:border-white/40 p-6 group focus-within:bg-gray-50 dark:focus-within:bg-white/5 transition-colors">
                            <label for="subject" class="block text-[10px] font-black uppercase tracking-widest text-gray-800 dark:text-gray-200 mb-2">03. Sujet du projet</label>
                            <input 
                                type="text" 
                                id="subject" 
                                bind:value={subject}
                                placeholder="Développement Web / Consultant..."
                                class="w-full bg-transparent border-none p-0 text-xl font-bold text-black dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-800 focus:ring-0"
                            />
                        </div>

                        <!-- Message -->
                        <div class="border-b border-l border-r border-black/40 dark:border-white/40 p-6 group focus-within:bg-gray-50 dark:focus-within:bg-white/5 transition-colors">
                            <label for="message" class="block text-[10px] font-black uppercase tracking-widest text-gray-800 dark:text-gray-200 mb-2">04. Votre Message</label>
                            <textarea 
                                id="message" 
                                rows="6"
                                bind:value={message}
                                placeholder="Dites-m'en plus sur vos besoins..."
                                class="w-full bg-transparent border-none p-0 text-xl font-bold text-black dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-800 focus:ring-0 resize-none"
                                required
                            ></textarea>
                        </div>

                        <!-- Submit -->
                        <button
                            type="submit" 
                            disabled={loading}
                            class="w-full p-10 bg-black dark:bg-white text-white dark:text-black font-black uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-gray-900 dark:hover:bg-gray-100 transition-all disabled:opacity-50 group"
                        >
                            {#if loading}
                                <Icon icon="ph:spinner-gap-bold" class="animate-spin w-6 h-6" />
                                Cryptage en cours...
                            {:else}
                                Envoyer la demande
                                <Icon icon="ph:arrow-right-thin" class="w-8 h-8 group-hover:translate-x-4 transition-transform" />
                            {/if}
                        </button>
                    </form>
                {/if}
            </div>
        </div>
    </div>
</section>

<style>
    /* Focus effects */
    input:focus, textarea:focus {
        outline: none;
    }
</style>