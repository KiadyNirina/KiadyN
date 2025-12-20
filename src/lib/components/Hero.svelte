<script>
    import Icon from '@iconify/svelte';
    import { onMount } from 'svelte';

    let mounted = false;
    onMount(() => {
        mounted = true;
    });

    const techStack = ['Svelte', 'Vue.js', 'Laravel', 'Django'];
    const socials = [
        { icon: 'ph:github-logo-thin', href: 'https://github.com/KiadyNirina' },
        { icon: 'ph:linkedin-logo-thin', href: 'https://www.linkedin.com/in/kiady-ram-5216592a9/' },
        { icon: 'ph:facebook-logo-thin', href: 'https://www.facebook.com/kiady.rambeloson' },
        { icon: 'ph:envelope-simple-thin', href: 'mailto:kiady142ram@gmail.com' }
    ];
</script>

<section class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
    <!-- Fond Décoratif : Lignes de grille brutales -->
    <div class="absolute inset-0 z-0 opacity-[0.1] dark:opacity-[1] pointer-events-none">
        <div class="absolute inset-0" style="background-image: linear-gradient(to right, #232323 1px, transparent 1px), linear-gradient(to bottom, #232323 1px, transparent 1px); background-size: 10vh 10vh;"></div>
    </div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        <!-- Status Floating Badge -->
        <div class="mb-8 overflow-hidden group">
            <div class="flex items-center gap-3 px-4 py-2 bg-black dark:bg-white text-white dark:text-black translate-y-full animate-reveal">
                <span class="relative flex h-2 w-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span class="text-[10px] uppercase tracking-[0.3em] font-bold">Open for projects — 2024</span>
            </div>
        </div>

        <!-- Main Identity Display -->
        <div class="relative w-full text-center mb-12">
            <!-- Nom en arrière-plan (Stroke effect) -->
            <div class="absolute inset-0 flex items-center justify-center -z-10 select-none overflow-hidden">
                <span class="text-[20vw] font-black text-transparent opacity-5 dark:opacity-10 tracking-tighter leading-none" style="-webkit-text-stroke: 2px black dark:white;">
                    KIADY
                </span>
            </div>

            <div class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                <!-- Profile Image: Brutalist Style -->
                <div class="relative group h-48 w-48 md:h-64 md:w-64">
                    <div class="absolute inset-0 border border-black dark:border-white translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                    <div class="relative h-full w-full bg-gray-100 dark:bg-gray-900 border border-black dark:border-white overflow-hidden">
                        <img 
                            src="/pdp2.png" 
                            alt="Kiady"
                            class="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        />
                    </div>
                </div>

                <!-- Headline -->
                <div class="text-left space-y-4 max-w-xl">
                    <h1 class="text-6xl md:text-8xl font-black text-black dark:text-white tracking-tighter leading-[0.8] mb-4">
                        KIADY <br/> <span class="italic font-thin text-gray-900 dark:text-gray-200">NIRINA</span>
                    </h1>
                    <div class="flex flex-col gap-2">
                        <p class="text-xl md:text-2xl font-light text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                            Full-Stack <span class="text-black dark:text-white font-black">Architect</span>
                        </p>
                        <div class="h-1 w-20 bg-black dark:bg-white"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tech Bar -->
        <div class="w-full max-w-4xl border-y border-black/50 dark:border-white/50 py-8 mb-16">
            <div class="flex flex-wrap justify-between items-center gap-8 px-4">
                {#each techStack as tech}
                    <div class="group flex items-center gap-4 cursor-default">
                        <span class="text-[10px] font-mono text-gray-900 dark:text-gray-200">/</span>
                        <span class="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">{tech}</span>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Call to Actions -->
        <div class="flex flex-col sm:flex-row gap-0 border border-black dark:border-white">
            <a href="#projects" class="px-12 py-6 bg-black dark:bg-white text-white dark:text-black font-black uppercase text-xs tracking-[0.3em] hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-center">
                Voir les travaux
            </a>
            <a href="#contact" class="px-12 py-6 bg-white dark:bg-gray-950 text-black dark:text-white font-black uppercase text-xs tracking-[0.3em] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-center border-t sm:border-t-0 sm:border-l border-black dark:border-white">
                Contact
            </a>
        </div>

        <!-- Social Footer -->
        <div class="absolute bottom-12 left-6 md:left-12 flex flex-col gap-6">
            {#each socials as social}
                <a href={social.href} target="_blank" class="text-gray-900 dark:text-gray-300 hover:text-black dark:hover:text-white  hover:scale-120 transition-all">
                    <Icon icon={social.icon} class="w-6 h-6" />
                </a>
            {/each}
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-12 right-12 hidden md:flex items-center gap-4 rotate-90 origin-right">
            <span class="text-[10px] uppercase tracking-[0.5em] font-bold text-gray-400">Scroll Down</span>
            <div class="w-12 h-px bg-gray-400"></div>
        </div>
    </div>
</section>

<style>
    @keyframes reveal {
        to { transform: translateY(0); }
    }

    .animate-reveal {
        animation: reveal 0.8s cubic-bezier(0.87, 0, 0.13, 1) forwards;
    }

    :global(html) {
        scroll-behavior: smooth;
    }
</style>