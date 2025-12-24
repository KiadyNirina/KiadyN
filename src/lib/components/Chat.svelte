<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import Icon from '@iconify/svelte';
  import { fade, fly, scale } from 'svelte/transition';
  
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

  let systemPrompt = ""
  
  onMount(async () => {
    const res = await fetch("/.netlify/functions/getPrompt")
    const data = await res.json()
    systemPrompt = data.systemPrompt
  })

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
          content: systemPrompt
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

<!-- Bouton Flottant "Noir Absolu" -->
<div class="fixed bottom-8 left-8 z-50 group">
  <!-- Rayonnement spectral -->
  <div class="absolute -inset-4 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
  
  <button
    class="relative h-16 w-16 flex items-center justify-center rounded-full bg-black dark:bg-white border border-white/20 text-white dark:text-black shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-110 active:scale-95 overflow-hidden"
    on:click={() => showChat = !showChat}
  >
    <!-- Scanline effect -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[200%] w-full animate-scanline pointer-events-none"></div>
    
    {#if showChat}
      <div in:scale={{duration: 400}}>
        <Icon icon="ph:x-light" class="h-7 w-7" />
      </div>
    {:else}
      <div class="relative flex items-center justify-center" in:scale={{duration: 400}}>
        <Icon icon="ph:robot-light" class="h-8 w-8 z-10" />
        <div class="absolute inset-0 blur-md bg-white/20 animate-pulse"></div>
      </div>
    {/if}
  </button>

  <!-- Label minimaliste -->
  <div class="absolute left-20 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 pointer-events-none hidden sm:block">
    <div class="bg-black/80 dark:bg-white/80 backdrop-blur-md border border-white/10 text-white dark:text-black py-2 px-4 rounded-full text-xs tracking-[0.2em] uppercase font-light shadow-2xl">
      Kiady AI
    </div>
  </div>
</div>

<!-- Interface de Chat Époustouflante -->
{#if showChat}
  <div
    class="fixed inset-0 sm:inset-auto sm:bottom-28 sm:left-8 z-500 flex flex-col overflow-hidden bg-black/95 sm:bg-black/90 backdrop-blur-2xl sm:rounded-[2rem] sm:border sm:border-white/10 sm:shadow-[0_40px_100px_rgba(0,0,0,0.8)] w-full sm:w-[400px] h-full sm:h-[600px] sm:max-h-[80vh]"
    transition:fly={{ y: 50, duration: 600, opacity: 0 }}
  >
    <!-- En-tête Monochrome -->
    <div class="p-6 border-b border-white/5 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <div class="relative">
          <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            <Icon icon="ph:sparkle-fill" class="h-6 w-6 text-black" />
          </div>
          <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></span>
        </div>
        <div>
          <h3 class="text-white font-medium tracking-wide">Kiady AI</h3>
          <p class="text-white/40 text-[10px] uppercase tracking-widest">Intelligence Artificielle</p>
        </div>
      </div>
      
      <button on:click={() => showChat = false} class="text-white/40 hover:text-white transition-colors">
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
              class="relative p-4 text-sm leading-relaxed
              {msg.from === 'user'
                ? 'bg-white text-black rounded-[1.5rem] rounded-tr-none shadow-xl'
                : 'bg-white/5 border border-white/10 text-white/90 rounded-[1.5rem] rounded-tl-none'}"
            >
              {msg.text}
              
              <div class="mt-2 flex items-center gap-2 text-[10px] opacity-30">
                {msg.timestamp?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                {#if msg.from === 'ai'}
                  <div class="h-px flex-1 bg-white/20"></div>
                  <span>AI SYSTEM</span>
                {/if}
              </div>
            </div>
          </div>
        </div>
      {/each}
      
      {#if isTyping}
        <div class="flex justify-start" in:fade>
          <div class="bg-white/5 border border-white/10 p-4 rounded-2xl flex gap-1">
            <span class="w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse"></span>
            <span class="w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse [animation-delay:0.2s]"></span>
            <span class="w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse [animation-delay:0.4s]"></span>
          </div>
        </div>
      {/if}
    </div>

    <!-- Zone de Saisie Minimaliste -->
    <div class="p-6">
      <form
        on:submit|preventDefault={sendMessage}
        class="relative flex items-center"
      >
        <input
          type="text"
          bind:value={userMessage}
          placeholder="Écrivez quelque chose..."
          class="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-5 pr-14 text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
        />
        
        <button
          type="submit"
          disabled={!userMessage.trim() || isTyping}
          class="absolute right-3 p-2 bg-white text-black rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-20 disabled:grayscale"
        >
          <Icon icon="ph:arrow-up-bold" class="h-5 w-5" />
        </button>
      </form>
      <p class="text-center text-[9px] text-white/20 mt-4 tracking-widest uppercase">
        Propulsé par Kiady Technologies
      </p>
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
</style>