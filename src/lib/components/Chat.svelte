<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import Icon from '@iconify/svelte';
  import { fade, fly, scale } from 'svelte/transition';
  import { marked } from 'marked';

  let entranceDone = false;
  onMount(() => {
    setTimeout(() => entranceDone = true, 300);
  });

  // État pour le popup
  let showChat = false;
  let isTyping = false;
  let initialLoad = true;
  
  // Message à envoyer
  let userMessage = '';

  // Messages prédéfinis
  const predefinedMessages = [
    "Qui est Kiady ?",
    "Quel est son parcours professionnel et académique ?",
    "Quelles sont ses compétences ?",
    "Quels services propose Kleonix ?"
  ];
  
  // Historique du chat
  const chatHistory = writable([]);
  
  // Référence pour l'auto-scroll
  let messagesContainer;
  
  const HF_API_KEY = import.meta.env.VITE_HF_API_KEY;

  let systemPrompt = ""
  let promptReady = false;
  
  onMount(async () => {
    const res = await fetch("/.netlify/functions/getPrompt")
    const data = await res.json()
    systemPrompt = data.systemPrompt
    promptReady = true;
  })

  onMount(async () => {
    try {
      const res = await fetch("/.netlify/functions/getPrompt");
      const data = await res.json();
      systemPrompt = data.systemPrompt;
    } catch (err) {
      console.error("Impossible de charger le prompt système:", err);
      systemPrompt = "Tu es Kleo, l'assistant de Kiady...";
    } finally {
      promptReady = true;
      chatHistory.set([{ 
        from: 'ai', 
        text: 'Bonjour ! Je suis Kleo, votre assistant virtuel. 🤖\n\nComment puis-je vous aider aujourd\'hui ?',
        timestamp: new Date()
      }]);
      initialLoad = false; 
    }
  });

  //const SYSTEM_PROMPT = import.meta.env.VITE_AI_SYSTEM_PROMPT;
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
  async function sendMessage(predefinedText = null) {

    if (!promptReady) {
      chatHistory.update(history => [...history, { 
        from: 'ai', 
        text: 'Je suis encore en train de me préparer... un instant !',
        timestamp: new Date()
      }]);
      return;
    }

    const messageToSend = predefinedText || userMessage;

    if (!messageToSend.trim()) return;

    if (predefinedText) userMessage = '';
    
    const currentMessage = messageToSend;
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
          content: systemPrompt
        },
        {
          role: "user",
          content: currentMessage
        }
      ]
    };
    
    try {

      const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json'
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

  const renderer = new marked.Renderer();

  renderer.link = ({ href, text }) => {
    return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="chat-link">${text}</a>`;
  };

  function renderMarkdown(text) {
    return marked.parse(text, { renderer });
  }
</script>

<!-- Bouton Flottant Noir & Blanc Époustouflant -->
<div class="fixed bottom-8 left-8 z-50" class:entrance-done={entranceDone}>
  <!-- Animation d'entrée saisissante -->
  <div class="btn-entrance-wrapper">
    <!-- Pulsations "sonar" en nuances de gris -->
    <div class="sonar-ring"></div>
    <div class="sonar-ring delay-1"></div>
    <div class="sonar-ring delay-2"></div>
    
    <!-- Halo lumineux tournoyant (noir/blanc) -->
    <div class="absolute -inset-4 bg-gradient-to-r from-black/10 via-gray-400/20 to-white/10 dark:from-white/10 dark:via-gray-400/20 dark:to-black/10 blur-2xl rounded-full animate-spin-slow"></div>
    
    <button
      class="relative h-16 w-16 flex items-center justify-center rounded-full 
             bg-black dark:bg-white border-2 border-transparent
             text-white dark:text-black 
             shadow-[0_0_30px_rgba(0,0,0,0.4)] dark:shadow-[0_0_30px_rgba(255,255,255,0.3)]
             transition-all duration-500 hover:scale-125 active:scale-90
             overflow-visible"
      on:click={() => showChat = !showChat}
    >
      <!-- Bordure tournoyante en dégradé noir/blanc -->
      <span class="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-black via-gray-400 to-white dark:from-white dark:via-gray-500 dark:to-black animate-spin-slow">
        <span class="block h-full w-full rounded-full bg-black dark:bg-white"></span>
      </span>
      
      <!-- Scanline effet conservé -->
      <div class="absolute inset-0 rounded-full overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[200%] w-full animate-scanline pointer-events-none"></div>
      </div>
      
      {#if showChat}
        <div in:scale={{duration: 400}}>
          <Icon icon="ph:x-bold" class="h-7 w-7 relative z-10" />
        </div>
      {:else}
        <div class="relative flex items-center justify-center" in:scale={{duration: 400}}>
          <Icon icon="ph:robot-light" class="h-8 w-8 relative z-10" />
          <!-- Badge de notification monochrome -->
          <span class="absolute -top-1 -right-5 flex p-1 items-center justify-center rounded-full bg-white dark:bg-black text-black dark:text-white text-[10px] font-bold ring-2 ring-black dark:ring-white z-20 animate-bounce-slow">
            new
          </span>
        </div>
      {/if}
    </button>

    <!-- Label élégant -->
    <div class="absolute left-20 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-3 transition-all duration-500 pointer-events-none hidden sm:block">
      <div class="bg-white/90 dark:bg-black/90 backdrop-blur-md border border-black/10 dark:border-white/10 text-black dark:text-white py-2 px-5 rounded-full text-xs tracking-[0.15em] uppercase font-medium shadow-2xl animate-label-bounce">
        ✨ Parlez à Kleo
      </div>
    </div>
  </div>
</div>

<!-- Interface de Chat Époustouflante (mode jour) -->
{#if showChat}
  <div
    class="fixed inset-0 sm:inset-auto sm:bottom-28 sm:left-8 z-500 flex flex-col overflow-hidden bg-white sm:bg-white dark:bg-black dark:sm:bg-black backdrop-blur-2xl sm:rounded-[2rem] sm:border sm:border-black/20 dark:sm:border-white/20 sm:shadow-[0_40px_100px_rgba(0,0,0,0.15)] dark:sm:shadow-[0_40px_100px_rgba(0,0,0,0.8)] w-full sm:w-[400px] h-full sm:h-[600px] sm:max-h-[80vh]"
    transition:fly={{ y: 50, duration: 600, opacity: 0 }}
  >
    <!-- En-tête Monochrome -->
    <div class="p-6 border-b border-black/5 dark:border-white/5 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <div class="relative">
          <div class="w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.15)] dark:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            <Icon icon="ph:sparkle-fill" class="h-6 w-6 text-white dark:text-black" />
          </div>
          <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-black"></span>
        </div>
        <div>
          <h3 class="text-black dark:text-white font-medium tracking-wide">Kleo</h3>
          <p class="text-black/40 dark:text-white/40 text-[10px] uppercase tracking-widest">Intelligence Artificielle</p>
        </div>
      </div>
      
      <button on:click={() => showChat = false} class="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
        <Icon icon="ph:minus-light" class="h-6 w-6" />
      </button>
    </div>

    <!-- Container des messages -->
    <div
      bind:this={messagesContainer}
      class="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
    >
      {#each $chatHistory as msg, i}
        <div
          class="flex {msg.from === 'user' ? 'justify-end' : 'justify-start'}"
          in:fly={{ y: 20, duration: 500, delay: 100 }}
        >
          <div class="max-w-[85%] group">
            <div
              class="relative p-4 text-sm leading-relaxed prose max-w-none
              {msg.from === 'user'
                ? 'bg-black dark:bg-white text-white dark:text-black rounded-[1.5rem] rounded-tr-none shadow-xl'
                : 'bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black/90 dark:text-white/90 rounded-[1.5rem] rounded-tl-none'}"
            >
              {@html renderMarkdown(msg.text)}
              
              <div class="mt-2 flex items-center gap-2 text-[10px] opacity-30">
                {msg.timestamp?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                {#if msg.from === 'ai'}
                  <div class="h-px flex-1 bg-black/20 dark:bg-white/20"></div>
                  <span>AI SYSTEM</span>
                {/if}
              </div>
            </div>
          </div>
        </div>
      {/each}
      
      {#if isTyping}
        <div class="flex justify-start" in:fade>
          <div class="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-4 rounded-2xl flex gap-1">
            <span class="w-1.5 h-1.5 bg-black/40 dark:bg-white/40 rounded-full animate-pulse"></span>
            <span class="w-1.5 h-1.5 bg-black/40 dark:bg-white/40 rounded-full animate-pulse [animation-delay:0.2s]"></span>
            <span class="w-1.5 h-1.5 bg-black/40 dark:bg-white/40 rounded-full animate-pulse [animation-delay:0.4s]"></span>
          </div>
        </div>
      {/if}

      <!-- Suggestions prédéfinies (toujours visibles) -->
      <div class="px-2 space-y-2" in:fade={{ delay: 600, duration: 400 }}>
        <p class="text-[11px] uppercase tracking-widest text-black/30 dark:text-white/30 mb-3">
          Suggestions
        </p>
        <div class="flex flex-wrap gap-2">
          {#each predefinedMessages as msg}
            <button
              on:click={() => sendMessage(msg)}
              disabled={!promptReady}
              class="px-4 py-2 text-xs rounded-full border border-black/10 dark:border-white/10 
                    bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 
                    hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black 
                    transition-all duration-300 hover:scale-105 active:scale-95 
                    whitespace-nowrap {!promptReady ? 'opacity-50 cursor-not-allowed' : ''}"
            >
              {msg}
            </button>
          {/each}
        </div>
      </div>
    </div>

    <!-- Zone de Saisie Minimaliste -->
    <div class="p-6">
      <form
        on:submit|preventDefault={sendMessage(userMessage)}
        class="relative flex items-center"
      >
        <input
          type="text"
          bind:value={userMessage}
          placeholder={promptReady ? "Écrivez quelque chose..." : "Chargement du contexte..."}
          disabled={!promptReady}
          class="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl py-4 pl-5 pr-14 text-black dark:text-white placeholder-black/20 dark:placeholder-white/20 focus:outline-none focus:border-black/30 dark:focus:border-white/30 focus:bg-black/10 dark:focus:bg-white/10 transition-all"
        />
        
        <button
          type="submit"
          disabled={!userMessage.trim() || isTyping || !promptReady}
          class="absolute right-3 p-2 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-20 disabled:grayscale"
        >
          <Icon icon="ph:arrow-up-bold" class="h-5 w-5" />
        </button>
      </form>
    </div>
  </div>
{/if}

<style>
  /* Scanline animation */
  @keyframes scanline {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
  .animate-scanline {
    animation: scanline 8s linear infinite;
  }

  .overflow-y-auto::-webkit-scrollbar {
    width: 3px;
  }
  .overflow-y-auto::-webkit-scrollbar-track {
    background: transparent;
  }
  .overflow-y-auto::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }
  .overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.3);
  }
  .dark .overflow-y-auto::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
  }
  .dark .overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  /* Smooth appearance */
  @keyframes pulse {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.3; }
  }
  .animate-pulse {
    animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .prose :global(p) {
    margin-bottom: 0.75em;
  }
  .prose :global(strong) {
    font-weight: 600;
  }
  .prose :global(ul),
  .prose :global(ol) {
    padding-left: 1.5em;
    margin: 0.5em 0;
  }
  .prose :global(li) {
    margin-bottom: 0.25em;
  }

  :global(.chat-link) {
    color: #60a5fa;
    font-weight: 600;
    transition: color 0.2s ease;
  }

  :global(.chat-link):hover {
    color: #93c5fd;
  }

  /* Entrée spectaculaire */
  .btn-entrance-wrapper {
    opacity: 0;
    transform: scale(0) rotate(-15deg);
    transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .entrance-done .btn-entrance-wrapper {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }

  /* Sonar noir et blanc */
  .sonar-ring {
    position: absolute;
    inset: -12px;
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, 0.15); /* noir transparent */
    animation: sonar-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    pointer-events: none;
  }
  .dark .sonar-ring,
  :global(.dark) .sonar-ring {
    border: 2px solid rgba(255, 255, 255, 0.356);
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.3); /* halo subtil pour plus de brillance */
  }
  .sonar-ring.delay-1 { animation-delay: 1s; }
  .sonar-ring.delay-2 { animation-delay: 2s; }

  @keyframes sonar-pulse {
    0% { transform: scale(1); opacity: 0.8; }
    100% { transform: scale(1.8); opacity: 0; }
  }

  /* Rotation lente du halo */
  .animate-spin-slow {
    animation: spin-slow 12s linear infinite;
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Badge rebondissant */
  .animate-bounce-slow {
    animation: bounce-slow 2s infinite;
  }
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }

  /* Label rebondissant */
  .animate-label-bounce {
    animation: label-bounce 0.8s ease-out both;
  }
  @keyframes label-bounce {
    0% { transform: scale(0.5); opacity: 0; }
    60% { transform: scale(1.05); }
    80% { transform: scale(0.95); }
    100% { transform: scale(1); opacity: 1; }
  }
</style>