<script>
    import Icon from "@iconify/svelte";
    import { fade, slide } from 'svelte/transition';
</script>

<footer id="footer" class="bg-gray-800 text-white py-16 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-20 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div class="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 2s;"></div>
        <div class="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400/5 rounded-full blur-2xl animate-float"></div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Main Footer Content -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">

            <!-- Navigation Links -->
            <div class="text-center lg:text-left animate-slide-up" style="animation-delay: 0.2s;">
                <h4 class="text-lg font-bold mb-6 text-white flex items-center justify-center lg:justify-start">
                    <Icon icon="mdi:navigation" class="mr-3 text-blue-400" />
                    Navigation
                </h4>
                <ul class="space-y-3">
                    {#each [
                        { name: 'À propos', href: '#about', icon: 'mdi:account' },
                        { name: 'Projets', href: '#projects', icon: 'mdi:folder' },
                        { name: 'Compétences', href: '#skills', icon: 'mdi:code-tags' },
                        { name: 'Expériences', href: '#experiences', icon: 'mdi:briefcase' },
                        { name: 'Contact', href: '#contact', icon: 'mdi:email' }
                    ] as link, i}
                        <li in:fade={{ delay: 400 + (i * 100), duration: 400 }}>
                            <a 
                                href={link.href} 
                                class="group flex items-center justify-center lg:justify-start text-blue-200/80 hover:text-white transition-all duration-300 transform hover:translate-x-2"
                            >
                                <Icon icon={link.icon} class="w-4 h-4 mr-3 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                                <span class="text-sm font-medium">{link.name}</span>
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>

            <!-- Social Media -->
            <div class="text-center lg:text-left animate-slide-up" style="animation-delay: 0.4s;">
                <h4 class="text-lg font-bold mb-6 text-white flex items-center justify-center lg:justify-start">
                    <Icon icon="mdi:share-variant" class="mr-3 text-blue-400" />
                    Connectons-nous
                </h4>
                <p class="text-blue-200/80 mb-6 text-sm">
                    Suivez-moi sur les réseaux sociaux pour rester connecté
                </p>
                <div class="flex justify-center lg:justify-start space-x-4">
                    {#each [
                        { 
                            icon: 'mdi:facebook', 
                            href: 'https://www.facebook.com/kiady.rambeloson', 
                            color: 'hover:bg-blue-600 hover:shadow-blue-500/40',
                            name: 'Facebook'
                        },
                        { 
                            icon: 'mdi:github', 
                            href: 'https://github.com/KiadyNirina', 
                            color: 'hover:bg-gray-800 hover:shadow-gray-500/40',
                            name: 'GitHub'
                        },
                        { 
                            icon: 'mdi:linkedin', 
                            href: 'https://www.linkedin.com/in/kiady-ram-5216592a9/', 
                            color: 'hover:bg-blue-700 hover:shadow-blue-500/40',
                            name: 'LinkedIn'
                        },
                        { 
                            icon: 'mdi:whatsapp', 
                            href: 'https://wa.me/+261335777152', 
                            color: 'hover:bg-green-600 hover:shadow-green-500/40',
                            name: 'WhatsApp'
                        },
                        { 
                            icon: 'mdi:email', 
                            href: 'mailto:kiady142ram@gmail.com', 
                            color: 'hover:bg-red-500 hover:shadow-red-500/40',
                            name: 'Email'
                        }
                    ] as social, i}
                        <a 
                            href={social.href} 
                            class="group relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-blue-200 border border-blue-500/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:text-white {social.color}"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            in:fade={{ delay: 600 + (i * 100), duration: 400 }}
                        >
                            <!-- Animated Dot -->
                            <div class="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping-fast"></div>
                            
                            <Icon icon={social.icon} class="w-6 h-6" />
                            
                            <!-- Tooltip -->
                            <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                {social.name}
                                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-800 rotate-45"></div>
                            </div>
                        </a>
                    {/each}
                </div>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-blue-500/20 pt-8 text-center animate-fade-in" style="animation-delay: 1s;">
            <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <!-- Copyright -->
                <p class="text-blue-200/70 text-sm">
                    © {new Date().getFullYear()} 
                    <span class="text-blue-400 font-semibold">KiadyN</span>. 
                    Tous droits réservés.
                </p>
                
                <!-- Additional Info -->
                <div class="text-blue-200/70 text-sm">
                    <span class="flex items-center">
                        <Icon icon="mdi:heart" class="w-4 h-4 mr-1 text-red-400 animate-pulse-gentle" />
                        Fait avec passion
                    </span>
                </div>
            </div>
        </div>
    </div>
</footer>

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

    @keyframes fadeIn {
        from { 
            opacity: 0; 
        }
        to { 
            opacity: 1; 
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

    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0);
        }
        33% {
            transform: translateY(-10px) translateX(5px);
        }
        66% {
            transform: translateY(5px) translateX(-5px);
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

    .animate-pulse-slow {
        animation: pulse-slow 6s ease-in-out infinite;
    }

    .animate-pulse-gentle {
        animation: pulse-gentle 2s ease-in-out infinite;
    }

    .animate-ping-fast {
        animation: ping-fast 2s cubic-bezier(0, 0, 0.2, 1) infinite;
    }

    .animate-bounce-slow {
        animation: bounce-slow 3s infinite;
    }

    .animate-float {
        animation: float 8s ease-in-out infinite;
    }
</style>