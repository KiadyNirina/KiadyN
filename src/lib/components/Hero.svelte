<script>
    import Icon from '@iconify/svelte';
</script>

<section class="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <!-- Grid Pattern -->
        <div class="absolute inset-0 opacity-20 dark:opacity-10">
            <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0); background-size: 40px 40px;"></div>
        </div>
        
        <!-- Animated Orbs -->
        {#each Array(3) as _, i}
            <div class="absolute rounded-full animate-orb-move blur-xl opacity-40 dark:opacity-20"
                 style="
                    width: {Math.random() * 300 + 200}px;
                    height: {Math.random() * 300 + 200}px;
                    background: {i === 0 ? 'linear-gradient(45deg, #3B82F6, #8B5CF6)' : i === 1 ? 'linear-gradient(45deg, #10B981, #06B6D4)' : 'linear-gradient(45deg, #F59E0B, #EF4444)'};
                    left: {Math.random() * 60 + 20}%;
                    top: {Math.random() * 60 + 20}%;
                    animation-delay: {i * 7}s;
                    animation-duration: {Math.random() * 20 + 20}s;
                 "
            ></div>
        {/each}

        <!-- Floating Particles -->
        {#each Array(12) as _, i}
            <div class="absolute rounded-full animate-particle-float bg-blue-500/30 dark:bg-blue-400/20"
                 style="
                    left: {Math.random() * 100}%;
                    top: {Math.random() * 100}%;
                    width: {Math.random() * 4 + 2}px;
                    height: {Math.random() * 4 + 2}px;
                    animation-delay: {i * 3}s;
                    animation-duration: {Math.random() * 15 + 10}s;
                 "
            ></div>
        {/each}
    </div>

    <div class="relative text-center max-w-4xl mx-auto px-6">
        <!-- Profile Image with Modern Frame -->
        <div class="relative mb-8 animate-slide-up flex items-center flex-col md:flex-row gap-20 justify-center" style="animation-delay: 0.1s;">
            <div class="relative w-32 h-32 mx-auto">
                <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-green-600 animate-spin-slow" style="animation-duration: 8s;"></div>
                <div class="absolute inset-2 rounded-2xl bg-white dark:bg-gray-900 overflow-hidden border-4 border-white dark:border-gray-900">
                    <img 
                        src="/pdp1.png" 
                        alt="Kiady"
                        class="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div class="">
                <!-- Main Heading -->
                <h1 class="text-5xl md:text-7xl font-black mb-6 animate-slide-up" style="animation-delay: 0.1s;">
                    <span class="bg-gradient-to-r from-blue-600 via-green-600 to-blue-800 dark:from-blue-400 dark:via-green-400 dark:to-blue-600 bg-clip-text text-transparent">
                        Kiady Nirina
                    </span>
                </h1>

                <!-- Subtitle -->
                <div class="relative mb-5 animate-slide-up" style="animation-delay: 0.2s;">
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                        Développeur Full-Stack
                        <span class="block text-lg font-normal text-gray-600 dark:text-gray-400 mt-2">
                            Créateur d'expériences digitales
                        </span>
                    </h2>
                </div>

                <!-- Tech Stack Badges -->
                <div class="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in" style="animation-delay: 0.3s;">
                    {#each ['Svelte', 'Vue.js', 'Laravel', 'Django'] as tech}
                        <span class="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300">
                            {tech}
                        </span>
                    {/each}
                </div>
            </div>
        </div>

        <!-- Status Badge -->
        <div class="mb-10">
            <span class="animate-pulse-gentle inline-flex items-center px-6 py-3 rounded-full text-base font-semibold bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style="animation-delay: 0.4s;">
                <div class="w-2 h-2 bg-white rounded-full mr-3 animate-ping" style="animation-duration: 2s;"></div>
                Disponible pour nouveaux projets
            </span>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a 
                href="#projects" 
                class="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 animate-pop"
                style="animation-delay: 0.5s;"
            >
                <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span class="relative z-10 flex items-center justify-center gap-3">
                    <Icon icon="mdi:rocket-launch" class="text-xl" />
                    Explorer mes projets
                </span>
            </a>
            
            <a 
                href="#contact" 
                class="group relative px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-2xl hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1 animate-pop"
                style="animation-delay: 0.6s;"
            >
                <span class="relative z-10 flex items-center justify-center gap-3">
                    <Icon icon="mdi:message-text" class="text-xl" />
                    Discutons ensemble
                </span>
            </a>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center gap-6 mb-16 animate-fade-in" style="animation-delay: 0.7s;">
            {#each [
                { icon: 'mdi:github', href: 'https://github.com/KiadyNirina', color: 'hover:text-gray-900 dark:hover:text-white' },
                { icon: 'mdi:linkedin', href: 'https://www.linkedin.com/in/kiady-ram-5216592a9/', color: 'hover:text-blue-600' },
                { icon: 'mdi:facebook', href: 'https://www.facebook.com/kiady.rambeloson', color: 'hover:text-blue-500' },
                { icon: 'mdi:email', href: '#contact', color: 'hover:text-red-500' }
            ] as social}
                <a 
                    href={social.href} 
                    class={`w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl flex items-center justify-center text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${social.color}`}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                >
                    <Icon icon={social.icon} class="w-6 h-6" />
                </a>
            {/each}
        </div>

        <!-- Scroll Indicator -->
        <div class="animate-bounce-slow" style="animation-delay: 1s;">
            <div class="flex flex-col items-center text-gray-400 dark:text-gray-600">
                <span class="text-sm font-medium mb-2">Scroll pour découvrir</span>
                <Icon icon="mdi:chevron-double-down" class="w-6 h-6" />
            </div>
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
    
    @keyframes orb-move {
        0%, 100% {
            transform: translate(0, 0) rotate(0deg);
        }
        25% {
            transform: translate(50px, -30px) rotate(90deg);
        }
        50% {
            transform: translate(20px, 40px) rotate(180deg);
        }
        75% {
            transform: translate(-30px, -20px) rotate(270deg);
        }
    }
    
    @keyframes particle-float {
        0%, 100% {
            transform: translate(0, 0);
            opacity: 0.3;
        }
        50% {
            transform: translate(20px, -20px);
            opacity: 0.8;
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
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }
    
    @keyframes pulse-gentle {
        0%, 100% {
            transform: scale(1);
            box-shadow: 0 10px 25px -3px rgba(16, 185, 129, 0.3);
        }
        50% {
            transform: scale(1.02);
            box-shadow: 0 20px 25px -5px rgba(16, 185, 129, 0.4);
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
    
    .animate-orb-move {
        animation: orb-move linear infinite;
    }
    
    .animate-particle-float {
        animation: particle-float ease-in-out infinite;
    }
    
    .animate-spin-slow {
        animation: spin-slow linear infinite;
    }
    
    .animate-bounce-slow {
        animation: bounce-slow 3s infinite;
    }
    
    .animate-pulse-gentle {
        animation: pulse-gentle 3s ease-in-out infinite;
    }
</style>