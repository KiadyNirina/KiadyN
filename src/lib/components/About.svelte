<script>
  import Icon from "@iconify/svelte";
  import { fade, slide } from 'svelte/transition';
</script>

<section class="py-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header Section -->
        <div class="text-center mb-16 animate-slide-up">
            <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                À propos de moi
            </h2>
            <div class="relative inline-block">
                <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto"></div>
                <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full animate-ping-slow"></div>
            </div>
        </div>
        
        <!-- Content -->
        <div class="flex flex-col lg:flex-row gap-12 items-center">
            <!-- Profile Image -->
            <div class="lg:w-2/5 flex justify-center">
                <div class="relative group" in:slide={{ delay: 200, duration: 600 }}>
                    <!-- Animated Border -->
                    <div class="absolute -inset-4 bg-blue-600/70 rounded-full opacity-20 blur group-hover:opacity-30 transition-all duration-500 animate-pulse-gentle"></div>
                    
                    <!-- Main Image Container -->
                    <div class="relative bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-full shadow-2xl">
                        <img 
                            src="/pdp.jpg" 
                            alt="Profil" 
                            class="rounded-full w-72 h-72 object-cover border-4 border-white dark:border-gray-800 shadow-lg transition-transform duration-500 group-hover:scale-105" 
                        />
                        
                        <!-- Floating Elements -->
                        <div class="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-ping-fast"></div>
                        <div class="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full animate-pulse-gentle" style="animation-delay: 1s;"></div>
                    </div>
                    
                    <!-- Status Badge -->
                    <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                        <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full shadow-lg flex items-center space-x-2 animate-pulse-gentle">
                            <div class="w-2 h-2 bg-white rounded-full animate-ping-fast"></div>
                            <span class="text-sm font-bold">Disponible</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Text Content -->
            <div class="lg:w-3/5 space-y-8" in:slide={{ delay: 400, duration: 600, direction: 'right' }}>
                <!-- Main Title -->
                <div>
                    <h3 class="text-3xl font-black text-gray-900 dark:text-white mb-4 flex items-center">
                        <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                            <Icon icon="mdi:laptop" class="text-white text-xl" />
                        </div>
                        Développeur Full-Stack
                    </h3>
                    <div class="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-2"></div>
                </div>

                <!-- Introduction -->
                <div class="space-y-6 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                    <p>
                        Je suis <span class="font-bold text-blue-600 dark:text-blue-400">RAMBELOSON Kiady Nirina</span>, un jeune développeur web Full-Stack basé à <span class="font-semibold">Madagascar 🇲🇬</span>, passionné par la création de solutions digitales innovantes 💡.
                    </p>

                    <p>
                        Curieux, autonome et toujours prêt à apprendre, j’aime concevoir des interfaces modernes et fluides, créer des API robustes et construire des applications capables de résoudre de vrais problèmes.  
                        J’accorde une grande importance à <span class="font-bold text-blue-600 dark:text-blue-400">l’expérience utilisateur</span>, à <span class="font-bold text-blue-600 dark:text-blue-400">la performance</span>, et à <span class="font-bold text-blue-600 dark:text-blue-400">la qualité du code</span> que j’écris.
                    </p>

                    <!-- Technologies Stack -->
                    <div class="space-y-4">
                        <p>Je travaille avec des technologies telles que :</p>
                        
                        <!-- Languages -->
                        <div>
                            <h4 class="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center">
                                <Icon icon="mdi:code-braces" class="mr-2" />
                                Langages de programmation
                            </h4>
                            <div class="flex flex-wrap gap-2">
                                {#each ['PHP', 'JavaScript', 'Python'] as lang, i}
                                    <span 
                                        class="skill-badge bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                                        style="animation-delay: {i * 0.1}s;"
                                    >
                                        <Icon icon="mdi:code" class="mr-1 text-blue-500" />
                                        {lang}
                                    </span>
                                {/each}
                            </div>
                        </div>

                        <!-- Frameworks -->
                        <div>
                            <h4 class="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center">
                                <Icon icon="mdi:package-variant" class="mr-2" />
                                Frameworks & Librairies
                            </h4>
                            <div class="flex flex-wrap gap-2">
                                {#each ['Laravel', 'Django', 'Vue.js', 'Svelte'] as framework, i}
                                    <span 
                                        class="skill-badge bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                                        style="animation-delay: {(i + 3) * 0.1}s;"
                                    >
                                        <Icon icon="mdi:framework" class="mr-1 text-blue-500" />
                                        {framework}
                                    </span>
                                {/each}
                            </div>
                        </div>
                    </div>

                    <!-- Projects & Focus -->
                    <p>
                        J'ai réalisé divers <span class="font-semibold text-blue-600 dark:text-blue-400">projets innovants 🎯</span>, en mettant l'accent sur l'expérience utilisateur et les performances 💻✨.
                    </p>

                    <!-- Call to Action -->
                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800/50">
                        <p class="text-gray-900 dark:text-white font-medium mb-3">
                            Envie de collaborer sur un projet ou de discuter d'une idée ?
                        </p>
                        <a 
                            href="#contact" 
                            class="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                        >
                            <Icon icon="mdi:message-text" class="mr-3 group-hover:scale-110 transition-transform duration-300" />
                            Contactez-moi !
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Floating Background Elements -->
        <div class="absolute top-20 right-20 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-float-slow"></div>
        <div class="absolute bottom-20 left-20 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl animate-float-slow" style="animation-delay: 2s;"></div>
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

    @keyframes float-slow {
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

    .animate-pulse-gentle {
        animation: pulse-gentle 3s ease-in-out infinite;
    }

    .animate-ping-slow {
        animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
    }

    .animate-ping-fast {
        animation: ping-fast 2s cubic-bezier(0, 0, 0.2, 1) infinite;
    }

    .animate-float-slow {
        animation: float-slow 8s ease-in-out infinite;
    }

    .skill-badge {
        opacity: 0;
        animation: slideUp 0.6s ease-out forwards;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        border-width: 1px;
        font-size: 0.875rem;
        font-weight: 500;
        display: inline-flex;
        align-items: center;
        transition: all 0.3s ease;
    }

    .skill-badge:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
    }
</style>