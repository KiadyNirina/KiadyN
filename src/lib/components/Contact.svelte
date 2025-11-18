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
      console.error('Erreur réseau:', err);
      error = 'Impossible de contacter le serveur.';
      setTimeout(() => (error = ''), 3500);
    } finally {
      loading = false;
    }
  }
</script>

<section class="py-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header Section -->
        <div class="text-center mb-16 animate-slide-up">
            <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                Contactez-moi
            </h2>
            <div class="relative inline-block">
                <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto"></div>
                <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full animate-ping-slow"></div>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Illustration Section -->
            <div class="flex justify-center lg:justify-end">
                <div class="relative group" in:slide={{ delay: 200, duration: 600 }}>
                    <img 
                        src="order.svg" 
                        alt="Contact illustration" 
                        class="relative max-w-md w-full h-auto transform group-hover:scale-105 transition-transform duration-500" 
                    />
                    <!-- Floating Elements -->
                    <div class="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-ping-fast"></div>
                    <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse-gentle" style="animation-delay: 1s;"></div>
                </div>
            </div>

            <!-- Form Section -->
            <div class="flex justify-center lg:justify-start">
                <div class="w-full max-w-lg" in:slide={{ delay: 400, duration: 600, direction: 'right' }}>
                    <!-- Introduction Text -->
                    <div class="text-center lg:text-left mb-8">
                        <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
                            Prêt à collaborer sur votre prochain projet ?
                        </p>
                        <p class="text-gray-600 dark:text-gray-400">
                            Remplissez le formulaire ou contactez-moi via mes réseaux sociaux !
                        </p>
                    </div>

                    <!-- Status Messages -->
                    {#if success}
                        <div
                            class="p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl mb-6 shadow-lg border border-green-400/50 flex items-center space-x-3"
                            in:fade={{ duration: 300 }}
                            out:slide={{ duration: 400 }}
                        >
                            <div class="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                <Icon icon="mdi:check" class="text-green-600 text-sm font-bold" />
                            </div>
                            <span class="font-medium">{success}</span>
                        </div>
                    {:else if error}
                        <div
                            class="p-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl mb-6 shadow-lg border border-red-400/50 flex items-center space-x-3"
                            in:fade={{ duration: 300 }}
                            out:slide={{ duration: 400 }}
                        >
                            <Icon icon="mdi:alert-circle" class="text-xl" />
                            <span class="font-medium">{error}</span>
                        </div>
                    {/if}

                    <!-- Contact Form -->
                    <form on:submit={handleSubmit} class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <!-- Name Field -->
                            <div class="group">
                                <label for="name" class="block mb-3 font-semibold text-gray-900 dark:text-white flex items-center">
                                    <Icon icon="mdi:account" class="mr-2 text-blue-500" />
                                    Nom *
                                </label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    bind:value={name}
                                    class="dark:text-white dark:text-white w-full px-4 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500 shadow-sm hover:shadow-md focus:shadow-lg"
                                    placeholder="Votre nom complet"
                                    required
                                />
                            </div>

                            <!-- Email Field -->
                            <div class="group">
                                <label for="email" class="block mb-3 font-semibold text-gray-900 dark:text-white flex items-center">
                                    <Icon icon="mdi:email" class="mr-2 text-blue-500" />
                                    Email *
                                </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    class="dark:text-white w-full px-4 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500 shadow-sm hover:shadow-md focus:shadow-lg"
                                    placeholder="votre@email.com"
                                    name="email"
                                    bind:value={email}
                                    required
                                />
                            </div>
                        </div>
                        
                        <!-- Subject Field -->
                        <div class="group">
                            <label for="subject" class="block mb-3 font-semibold text-gray-900 dark:text-white flex items-center">
                                <Icon icon="mdi:tag" class="mr-2 text-blue-500" />
                                Sujet
                            </label>
                            <input 
                                type="text" 
                                id="subject" 
                                class="dark:text-white w-full px-4 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500 shadow-sm hover:shadow-md focus:shadow-lg"
                                placeholder="Objet de votre message"
                                name="subject"
                                bind:value={subject}
                            />
                        </div>
                        
                        <!-- Message Field -->
                        <div class="group">
                            <label for="message" class="block mb-3 font-semibold text-gray-900 dark:text-white flex items-center">
                                <Icon icon="mdi:message-text" class="mr-2 text-blue-500" />
                                Message *
                            </label>
                            <textarea 
                                id="message" 
                                rows="5"
                                class="dark:text-white w-full px-4 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500 shadow-sm hover:shadow-md focus:shadow-lg resize-none"
                                placeholder="Décrivez votre projet ou votre demande..."
                                name="message"
                                bind:value={message}
                                required
                            ></textarea>
                        </div>

                        <!-- Submit Button -->
                        <button
                            type="submit" 
                            class="group relative w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-lg" 
                            disabled={loading}
                        >
                            <!-- Animated Background -->
                            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div class="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                            
                            <!-- Button Content -->
                            <span class="relative z-10 flex items-center justify-center">
                                {#if loading}
                                    <Icon icon="mdi:loading" class="animate-spin mr-3" />
                                    Envoi en cours...
                                {:else}
                                    <Icon icon="mdi:send" class="mr-3 group-hover:scale-110 transition-transform duration-300" />
                                    Envoyer le message
                                {/if}
                            </span>
                        </button>
                    </form>

                    <!-- Additional Contact Info -->
                    <div class="mt-8 text-center lg:text-left">
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
                            Ou contactez-moi directement via :
                        </p>
                        <div class="flex justify-center lg:justify-start space-x-4">
                            {#each [
                                { icon: 'mdi:email', href: 'mailto:kiady142ram@gmail.com', color: 'hover:bg-red-500 hover:text-white' },
                                { icon: 'mdi:github', href: 'https://github.com/KiadyNirina', color: 'hover:bg-gray-900 hover:text-white' },
                                { icon: 'mdi:linkedin', href: 'https://www.linkedin.com/in/kiady-ram-5216592a9/', color: 'hover:bg-blue-600 hover:text-white' },
                                { icon: 'mdi:facebook', href: 'https://www.facebook.com/kiady.rambeloson', color: 'hover:bg-blue-500 hover:text-white' }
                            ] as social}
                                <a 
                                    href={social.href} 
                                    class="w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl flex items-center justify-center text-gray-500 dark:text-gray-400 border border-blue-200/50 dark:border-blue-800/50 shadow-sm transition-all duration-300 transform hover:scale-110 hover:shadow-lg {social.color}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon icon={social.icon} class="w-5 h-5" />
                                </a>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(40px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes pulse-gentle {
        0%, 100% {
            opacity: 1;
            transform: scale(1);
        }
        50% {
            opacity: 0.8;
            transform: scale(1.05);
        }
    }

    @keyframes ping-slow {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        75%, 100% {
            transform: scale(2);
            opacity: 0;
        }
    }

    @keyframes ping-fast {
        0% {
            transform: scale(0.8);
            opacity: 1;
        }
        75%, 100% {
            transform: scale(1.5);
            opacity: 0;
        }
    }

    .animate-slide-up {
        animation: slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        opacity: 0;
    }

    .animate-pulse-gentle {
        animation: pulse-gentle 3s ease-in-out infinite;
    }

    .animate-ping-slow {
        animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
    }

    .animate-ping-fast {
        animation: ping-fast 2s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
</style>