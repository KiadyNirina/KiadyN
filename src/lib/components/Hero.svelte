<script>
    import Icon from '@iconify/svelte';
</script>

<section class="relative py-28 md:py-36 overflow-hidden">
    <div class="relative text-center max-w-4xl mx-auto px-6">
        <div class="w-24 h-24 md:w-28 md:h-28 mx-auto mb-6 rounded-full border-4 border-white/10 shadow-lg overflow-hidden animate-float">
            <img 
                src="/pdp1.png" 
                alt="Kiady"
                class="w-full h-full object-cover"
            />
        </div>

        <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span class="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                Bienvenue dans mon univers créatif !
            </span>
        </h1>
        
        <div class="relative inline-block">
            <div class="md:flex items-center text-base md:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 px-4 py-2 bg-gray-400/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in" style="animation-delay: 0.2s;">
                <div class="flex items-center">
                    <Icon icon="mdi:code" class="mr-1.5 animate-bounce" />
                    Développeur full-stack ∙ 
                </div>
                <div class="flex items-center">
                    <Icon icon="mdi:pencil" class="md:ml-2 mr-1.5 animate-bounce" />
                    UI/UX
                </div>
            </div>
            <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-underline" style="animation-delay: 0.3s;"></div>
        </div>

        <div class="mt-8 animate-pulse-slow" style="animation-delay: 0.8s;">
            <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-800/50">
                <Icon icon="mdi:work" class="mr-1.5 animate-bounce" />
                Ouvert à de nouveaux projets
            </span>
        </div>

        <div class="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <a 
                href="#projects" 
                class="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group animate-pop"
                style="animation-delay: 0.4s;"
            >
                <span class="relative z-10">Voir mes projets</span>
                <span class="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></span>
            </a>
            
            <a 
                href="#contact" 
                class="relative px-8 py-4 border-2 border-blue-500/30 text-blue-600 dark:text-blue-400 font-medium rounded-xl hover:bg-blue-50/50 dark:hover:bg-gray-800/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group animate-pop"
                style="animation-delay: 0.5s;"
            >
                <span class="relative z-10 flex items-center justify-center gap-2">
                    <Icon icon="mdi:email-fast" class="text-xl" />
                    Me contacter
                </span>
                <span class="absolute inset-0 bg-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
        </div>

        <div class="flex justify-center gap-4 mt-12 animate-fade-in" style="animation-delay: 0.6s;">
            <a href="https://github.com/KiadyNirina" class="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" target="_blank">
                <Icon icon="mdi:github" class="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/kiady-ram-5216592a9/" class="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" target="_blank">
                <Icon icon="mdi:linkedin" class="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/kiady.rambeloson" class="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" target="_blank">
                <Icon icon="mdi:facebook" class="w-6 h-6" />
            </a>
        </div>

        <div class="mt-16 animate-bounce" style="animation-delay: 1s;">
            <Icon icon="mdi:chevron-double-down" class="w-8 h-8 text-gray-400 dark:text-gray-500" />
        </div>
    </div>
</section>

<style>
    .animate-slide-up {
        animation: slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }
    .animate-fade-in {
        animation: fadeIn 1s ease-out forwards;
    }
    .animate-pop {
        animation: pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }
    .animate-float {
        animation: float 6s ease-in-out infinite;
    }
    .animate-underline {
        animation: underline 1s ease-out forwards;
    }
    .animate-bounce {
        animation: bounce 2s infinite;
    }
    .animate-pulse-slow {
        animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

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
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes pop {
        0% {
            opacity: 0;
            transform: scale(0.8);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
    @keyframes float {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-12px);
        }
    }
    @keyframes underline {
        from {
            width: 0;
            opacity: 0;
        }
        to {
            width: 100%;
            opacity: 1;
        }
    }
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-20px);
        }
        60% {
            transform: translateY(-10px);
        }
    }
    @keyframes pulse {
        0%, 100% {
            opacity: 1;
            transform: scale(1);
        }
        50% {
            opacity: 0.8;
            transform: scale(0.98);
        }
    }
</style>