<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import Icon from '@iconify/svelte';
  import { fade } from 'svelte/transition';
  
  // État pour le popup
  let showChat = false;
  let isTyping = false;
  let initialLoad = true;
  
  // Message à envoyer
  let userMessage = '';
  
  // Historique du chat
  const chatHistory = writable([]);
  
  // Référence pour l'auto-scroll
  let messagesContainer;
  
  const HF_API_KEY = import.meta.env.VITE_HF_API_KEY;
  const SYSTEM_PROMPT = import.meta.env.VITE_AI_SYSTEM_PROMPT;
  const AI_MODEL = import.meta.env.VITE_AI_MODEL;
  
  // Fonction pour scroller automatiquement vers le bas
  function scrollToBottom() {
    if (messagesContainer) {
      setTimeout(() => {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }, 100);
    }
  }
  
  // Fonction pour envoyer le message
  async function sendMessage() {
    if (!userMessage.trim()) return;
    
    const currentMessage = userMessage;
    userMessage = '';
    isTyping = true;
    
    // Ajouter le message utilisateur à l'historique
    chatHistory.update(history => [...history, { 
      from: 'user', 
      text: currentMessage,
      timestamp: new Date()
    }]);
    
    scrollToBottom();
    
    // Préparer le body de la requête
    const body = {
      model: AI_MODEL,
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT
        },
        {
          role: "user",
          content: currentMessage
        }
      ]
    };
    
    try {
      const res = await fetch('https://router.huggingface.co/v1/chat/completions', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${HF_API_KEY}`
        },
        body: JSON.stringify(body)
      });
      
      if (!res.ok) {
        throw new Error(`Erreur HTTP ${res.status}`);
      }
      
      const data = await res.json();
      const aiResponse = data.choices?.[0]?.message?.content || "Pas de réponse 😅";
      
      // Simuler le délai de frappe
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Ajouter la réponse de l'IA à l'historique
      chatHistory.update(history => [...history, { 
        from: 'ai', 
        text: aiResponse,
        timestamp: new Date()
      }]);
      
      isTyping = false;
      scrollToBottom();
      
    } catch (err) {
      console.error('Erreur:', err);
      chatHistory.update(history => [...history, { 
        from: 'ai', 
        text: 'Oups 😅 problème de connexion avec l\'IA. Veuillez réessayer.',
        timestamp: new Date()
      }]);
      isTyping = false;
      scrollToBottom();
    }
  }
  
  // Effet pour le scroll automatique
  $: if (showChat) {
    scrollToBottom();
  }
  
  // Message de bienvenue initial
  onMount(() => {
    setTimeout(() => {
      if (initialLoad && $chatHistory.length === 0) {
        chatHistory.set([{ 
          from: 'ai', 
          text: 'Bonjour ! Je suis Kiady AI, votre assistant virtuel. 🤖\n\nComment puis-je vous aider aujourd\'hui ?',
          timestamp: new Date()
        }]);
        initialLoad = false;
      }
    }, 1000);
  });
</script>

<!-- Bouton flottant avec animation -->
<div class="fixed bottom-6 left-4 sm:left-6 z-50 group">
  <!-- Effet de halo -->
  <div class="absolute -inset-2 bg-blue-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>
  
  <!-- Bouton principal -->
  <button
    class="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl hover:shadow-blue-500/40 dark:from-blue-500 dark:to-blue-600 dark:hover:shadow-blue-400/40"
    on:click={() => showChat = !showChat}
    aria-label={showChat ? 'Fermer le chat' : 'Ouvrir le chat'}
  >
    <!-- Point de notification -->
    <div class="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full border-2 border-white dark:border-gray-900 animate-ping-fast"></div>
    
    <!-- Icone animée -->
    <div class="relative">
      {#if showChat}
        <Icon icon="material-symbols:close" class="h-6 w-6 sm:h-7 sm:w-7" />
      {:else}
        <Icon icon="material-symbols:chat" class="h-6 w-6 sm:h-7 sm:w-7" />
      {/if}
      
      <!-- Effet de pulsation -->
      <div class="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-30 animate-pulse-gentle"></div>
    </div>
  </button>
  
  <!-- Label flottant -->
  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block">
    <div class="bg-gray-800 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
      Discuter avec Kiady AI
      <div class="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
    </div>
  </div>
</div>

<!-- Popup chat -->
{#if showChat}
  <div
    class="fixed sm:bottom-0 sm:left-6 z-60 flex flex-col overflow-hidden bg-white/95 backdrop-blur-md dark:bg-gray-900/95 sm:rounded-3xl sm:border sm:border-blue-200/50 dark:sm:border-blue-800/50 sm:shadow-2xl sm:w-96"
    style="height: 100dvh;"
    transition:fade={{ duration: 300 }}
  >
    <!-- En-tête avec animation -->
    <div class="relative bg-gradient-to-r from-blue-600 to-blue-700 px-4 sm:px-6 py-4 sm:py-5 dark:from-blue-700 dark:to-blue-800 overflow-hidden">
      <!-- Effet de vague animée -->
      <div class="absolute -bottom-10 left-0 right-0 h-10 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full blur-lg animate-wave"></div>
      
      <div class="flex items-center justify-between relative z-10">
        <div class="flex items-center gap-3 sm:gap-4">
          <!-- Avatar animé -->
          <div class="relative group/avatar">
            <div class="absolute -inset-1 sm:-inset-2 bg-white/20 rounded-full blur opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-500"></div>
            <div class="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Icon icon="material-symbols:robot-2" class="h-5 w-5 sm:h-7 sm:w-7 text-white" />
              <!-- Point de statut -->
              <div class="absolute -bottom-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full border-2 border-blue-600 animate-pulse-gentle"></div>
            </div>
          </div>
          
          <div>
            <h3 class="font-bold text-white text-base sm:text-lg">Kiady AI</h3>
            <p class="text-blue-100 text-xs sm:text-sm flex items-center">
              <span class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse-gentle"></span>
              Assistant intelligent
            </p>      
          </div>
        </div>
        
        <div class="flex items-center gap-2">
          <!-- Bouton plein écran (mobile) -->
          <button
            on:click={() => showChat = false}
            class="sm:hidden rounded-lg p-2 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            aria-label="Fermer"
          >
            <Icon icon="material-symbols:close" class="h-5 w-5 text-white" />
          </button>
          
          <!-- Bouton réduire (desktop) -->
          <button
            on:click={() => showChat = false}
            class="hidden sm:block rounded-xl p-2 hover:bg-white/20 transition-all duration-300 hover:rotate-90 hover:scale-110"
            aria-label="Fermer"
          >
            <Icon icon="material-symbols:close" class="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </div>

    <!-- Messages -->
    <div
      bind:this={messagesContainer}
      class="flex-1 space-y-3 sm:space-y-4 overflow-y-auto p-3 sm:p-5 bg-gradient-to-b from-white/50 to-transparent dark:from-gray-800/50"
    >
      {#each $chatHistory as msg, i}
        <div
          class="flex {msg.from === 'user' ? 'justify-end' : 'justify-start'}"
          in:fade={{ delay: i * 50, duration: 400 }}
        >
          <div class="group/message relative max-w-[90%] sm:max-w-[85%]">
            <!-- Effet de bordure animée pour les messages AI -->
            {#if msg.from === 'ai'}
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-0 group-hover/message:opacity-20 transition-opacity duration-300"></div>
            {/if}
            
            <div
              class="relative rounded-2xl px-3 py-2 sm:px-4 sm:py-3 {msg.from === 'user'
                ? 'rounded-br-none bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                : 'rounded-bl-none bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-100/50 dark:border-blue-800/50 text-gray-800 dark:text-gray-200 shadow-sm'}"
            >
              <p class="whitespace-pre-wrap text-xs sm:text-sm leading-relaxed">{msg.text}</p>
              <div class="flex items-center justify-between mt-1 sm:mt-2">
                <p class="text-xs opacity-60">
                  {msg.timestamp?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
                {#if msg.from === 'ai'}
                  <Icon icon="material-symbols:robot-2-outline" class="w-3 h-3 sm:w-4 sm:h-4 opacity-40" />
                {:else}
                  <Icon icon="mdi:account" class="w-3 h-3 sm:w-4 sm:h-4 opacity-40" />
                {/if}
              </div>
            </div>
          </div>
        </div>
      {/each}
      
      <!-- Indicateur de frappe -->
      {#if isTyping}
        <div class="flex justify-start animate-fade-in">
          <div class="group/message relative max-w-[90%] sm:max-w-[85%]">
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-0 group-hover/message:opacity-20 transition-opacity duration-300"></div>
            <div class="relative rounded-2xl rounded-bl-none bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-100/50 dark:border-blue-800/50 px-3 py-2 sm:px-4 sm:py-3 shadow-sm">
              <div class="flex items-center space-x-1 sm:space-x-2">
                {#each [0, 1, 2] as i}
                  <div 
                    class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-bounce"
                    style="animation-delay: {i * 0.2}s;"
                  ></div>
                {/each}
                <span class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 ml-2">Kiady AI réfléchit...</span>
              </div>
            </div>
          </div>
        </div>
      {/if}
    </div>

    <!-- Zone de saisie -->
    <div class="border-t border-blue-200/50 bg-gradient-to-t from-blue-50/50 to-transparent p-3 sm:p-4 dark:border-blue-800/50 dark:from-blue-900/20 safe-area-pb">
      <form
        on:submit|preventDefault={sendMessage}
        class="flex items-center gap-2 sm:gap-3"
      >
        <!-- Champ de saisie -->
        <div class="flex-1 relative group/input">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur opacity-0 group-hover/input:opacity-30 transition-opacity duration-300"></div>
          <input
            type="text"
            bind:value={userMessage}
            placeholder="Votre message..."
            class="relative w-full rounded-xl border border-blue-200/50 bg-white/90 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-blue-800/50 dark:bg-gray-800/90 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400 transition-all duration-300"
            on:keydown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
          />
        </div>
        
        <!-- Bouton d'envoi -->
        <button
          type="submit"
          disabled={!userMessage.trim() || isTyping}
          class="group relative rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-2 sm:p-3 text-white transition-all hover:shadow-lg hover:shadow-blue-500/40 disabled:cursor-not-allowed disabled:opacity-50 dark:from-blue-500 dark:to-blue-600 dark:hover:shadow-blue-400/40 min-w-[44px] min-h-[44px]"
          aria-label="Envoyer le message"
        >
          <div class="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          <Icon icon="material-symbols:send" class="h-4 w-4 sm:h-5 sm:w-5 relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
        </button>
      </form>
      
      <!-- Indicateur de raccourci -->
      <p class="mt-2 sm:mt-3 text-center text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center">
        <Icon icon="mdi:keyboard" class="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 animate-bounce-slow" />
        <span class="hidden sm:inline">Appuyez sur </span>
        <kbd class="mx-1 px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono">Entrée</kbd>
        <span class="hidden sm:inline"> pour envoyer</span>
        <span class="sm:hidden"> pour envoyer</span>
      </p>
    </div>
  </div>
{/if}

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
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

  @keyframes pulse-slow {
    0%, 100% {
      opacity: 0.1;
      transform: scale(1);
    }
    50% {
      opacity: 0.3;
      transform: scale(1.2);
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

  @keyframes bounce-slow {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-3px);
    }
    60% {
      transform: translateY(-2px);
    }
  }

  @keyframes wave {
    0%, 100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(20px);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.3s ease-out;
  }

  .animate-pulse-gentle {
    animation: pulse-gentle 2s ease-in-out infinite;
  }

  .animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
  }

  .animate-ping-fast {
    animation: ping-fast 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  .animate-bounce-slow {
    animation: bounce-slow 3s infinite;
  }

  .animate-wave {
    animation: wave 8s ease-in-out infinite;
  }

  /* Scrollbar personnalisée */
  .overflow-y-auto {
    scrollbar-width: thin;
    scrollbar-color: rgba(59, 130, 246, 0.3) transparent;
  }

  .overflow-y-auto::-webkit-scrollbar {
    width: 4px;
  }

  @media (min-width: 640px) {
    .overflow-y-auto::-webkit-scrollbar {
      width: 6px;
    }
  }

  .overflow-y-auto::-webkit-scrollbar-track {
    background: transparent;
  }

  .overflow-y-auto::-webkit-scrollbar-thumb {
    background-color: rgba(59, 130, 246, 0.3);
    border-radius: 20px;
    transition: background-color 0.3s;
  }

  .overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background-color: rgba(59, 130, 246, 0.5);
  }

  /* Safe area pour les mobiles avec notch */
  .safe-area-pb {
    padding-bottom: calc(env(safe-area-inset-bottom, 0px) + 0.75rem);
  }

  /* Effet de brillance sur le bouton */
  .shadow-3xl {
    box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.4);
  }

  /* Style pour les tailles d'écran spécifiques */
  @media (max-height: 700px) {
    .fixed.inset-0 {
      height: calc(100dvh - 80px);
      top: 80px;
    }
  }

  @media (max-height: 600px) {
    .fixed.inset-0 {
      height: calc(100dvh - 60px);
      top: 60px;
    }
  }

  @media (max-width: 639px) {
    .fixed.inset-0 {
      /* Supprime les bordures arrondies et ombres sur mobile pour un look plein écran */
      border-radius: 0 !important;
      border: none !important;
      box-shadow: none !important;
    }
  }

  /* Pour les écrans très larges */
  @media (min-width: 1536px) {
    .sm\:w-96 {
      width: 28rem;
    }
  }
</style>