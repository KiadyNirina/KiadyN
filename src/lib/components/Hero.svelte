<script>
    import Icon from '@iconify/svelte';
</script>

<section class="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
    <div class="relative text-center max-w-4xl mx-auto px-6">
        <!-- Profile Section -->
        <div class="relative mb-12 animate-slide-up flex flex-col md:flex-row items-center gap-12 justify-center" style="animation-delay: 0.1s;">
            <!-- Profile Image with Modern Border -->
            <div class="relative group">
                <div class="relative w-32 h-32">
                    <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-700 to-gray-900 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500" style="animation-duration: 8s;"></div>
                    <div class="absolute inset-1 rounded-2xl bg-white dark:bg-gray-900 overflow-hidden border-4 border-white dark:border-gray-900">
                        <img 
                            src="/pdp2.png" 
                            alt="Kiady"
                            class="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <!-- Animated Ring -->
                <div class="absolute -inset-2 border-2 border-gray-500/30 rounded-3xl animate-ping-slow"></div>
            </div>

            <!-- Text Content -->
            <div class="space-y-6">
                <!-- Main Heading -->
                <div class="space-y-4">
                    <h1 class="text-5xl md:text-7xl font-black mb-6 animate-slide-up" style="animation-delay: 0.2s;">
                        <span class="text-black dark:text-white">
                            Kiady Nirina
                        </span>
                    </h1>
                    
                    <!-- Title with Animated Underline -->
                    <div class="relative inline-block">
                        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
                            Développeur Full-Stack
                        </h2>
                        <div class="absolute -bottom-2 left-0 w-0 h-1 bg-black dark:bg-white group-hover:w-full transition-all duration-500 animate-expand-width"></div>
                    </div>
                    
                    <p class="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto mt-2">
                        Créateur d'expériences digitales innovantes
                    </p>
                </div>

                <!-- Tech Stack Badges -->
                <div class="flex flex-wrap justify-center gap-3 animate-fade-in" style="animation-delay: 0.4s;">
                    {#each ['Svelte', 'Vue.js', 'Laravel', 'Django'] as tech}
                        <span class="px-4 py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 dark:text-gray-300 border border-gray-300 dark:border-gray-700 shadow-sm hover:shadow-lg hover:scale-105 hover:border-gray-500 dark:hover:border-gray-600 transition-all duration-300 group hover:bg-gray-100 dark:hover:bg-gray-800">
                            {tech}
                        </span>
                    {/each}
                </div>
            </div>
        </div>

        <!-- Status Badge with Flash Animation -->
        <div class="mb-12 animate-pop" style="animation-delay: 0.6s;">
            <div class="relative inline-flex items-center group">
                <div class="absolute -inset-1 bg-black dark:bg-white rounded-full blur opacity-20 group-hover:opacity-50 transition-opacity duration-300 animate-pulse-flash"></div>
                <span class="relative inline-flex items-center px-6 py-3 rounded-full text-base font-semibold bg-black dark:bg-white text-white dark:text-black shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-400">
                    <div class="w-2 h-2 bg-white dark:bg-black rounded-full mr-3 animate-ping-fast"></div>
                    Disponible pour nouveaux projets
                </span>
            </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <!-- Primary Button -->
            <a 
                href="#projects" 
                class="group relative px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:-translate-y-1 animate-pop"
                style="animation-delay: 0.7s;"
            >
                <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <span class="relative z-10 flex items-center justify-center gap-3">
                    <Icon icon="mdi:rocket-launch" class="text-xl group-hover:scale-110 transition-transform duration-300" />
                    Explorer mes projets
                </span>
            </a>
            
            <!-- Secondary Button -->
            <a 
                href="#contact" 
                class="group relative px-8 py-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-2xl shadow-sm hover:shadow-xl hover:border-gray-500 dark:hover:border-gray-500 transition-all duration-300 transform hover:-translate-y-1 animate-pop"
                style="animation-delay: 0.8s;"
            >
                <div class="absolute inset-0 rounded-2xl bg-gray-100 dark:bg-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span class="relative z-10 flex items-center justify-center gap-3">
                    <Icon icon="mdi:message-text" class="text-xl group-hover:scale-110 transition-transform duration-300" />
                    Discutons ensemble
                </span>
            </a>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center gap-6 mb-16 animate-fade-in" style="animation-delay: 0.9s;">
            {#each [
                { icon: 'mdi:github', href: 'https://github.com/KiadyNirina' },
                { icon: 'mdi:linkedin', href: 'https://www.linkedin.com/in/kiady-ram-5216592a9/' },
                { icon: 'mdi:facebook', href: 'https://www.facebook.com/kiady.rambeloson' },
                { icon: 'mdi:email', href: 'mailto:kiady142ram@gmail.com' }
            ] as social}
                <a 
                    href={social.href} 
                    class="relative flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all duration-300 transform hover:scale-110 hover:text-black dark:hover:text-white"
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                >
                    <Icon icon={social.icon} class="w-5 h-5" />
                </a>
            {/each}
        </div>
    </div>
</section>

<style>
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(60px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeIn {
        from { 
            opacity: 0; 
        }
        to { 
            opacity: 1; 
        }
    }
    
    @keyframes pop {
        0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
        }
        50% {
            transform: scale(1.05) translateY(-5px);
        }
        100% {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }
    
    @keyframes spin-slow {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    
    @keyframes bounce-slow {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-8px);
        }
        60% {
            transform: translateY(-4px);
        }
    }
    
    @keyframes pulse-gentle {
        0%, 100% {
            opacity: 0.2;
            transform: scale(1);
        }
        50% {
            opacity: 0.3;
            transform: scale(1.05);
        }
    }

    @keyframes pulse-slow {
        0%, 100% {
            opacity: 0.1;
            transform: scale(1);
        }
        50% {
            opacity: 0.2;
            transform: scale(1.1);
        }
    }

    @keyframes ping-fast {
        0% {
            transform: scale(0.8);
            opacity: 1;
        }
        75%, 100% {
            transform: scale(2);
            opacity: 0;
        }
    }

    @keyframes pulse-flash {
        0%, 100% {
            opacity: 0.3;
        }
        50% {
            opacity: 0.6;
        }
    }

    @keyframes expand-width {
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    }

    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0);
        }
        33% {
            transform: translateY(-20px) translateX(10px);
        }
        66% {
            transform: translateY(10px) translateX(-10px);
        }
    }

    .animate-slide-up {
        animation: slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        opacity: 0;
    }
    
    .animate-fade-in {
        animation: fadeIn 1s ease-out forwards;
        opacity: 0;
    }
    
    .animate-pop {
        animation: pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        opacity: 0;
    }
    
    .animate-spin-slow {
        animation: spin-slow linear infinite;
    }
    
    .animate-bounce-slow {
        animation: bounce-slow 3s infinite;
    }
    
    .animate-pulse-gentle {
        animation: pulse-gentle 4s ease-in-out infinite;
    }

    .animate-pulse-slow {
        animation: pulse-slow 6s ease-in-out infinite;
    }

    .animate-ping-fast {
        animation: ping-fast 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
    }

    .animate-pulse-flash {
        animation: pulse-flash 2s ease-in-out infinite;
    }

    .animate-expand-width {
        animation: expand-width 2s ease-out forwards;
    }

    .animate-float {
        animation: float 8s ease-in-out infinite;
    }
</style>