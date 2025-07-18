<section class="py-20 md:py-32 mt-50 mb-50">
    <div class="text-center mr-auto ml-auto">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span class="bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent">
                Salut, je suis Kiady
            </span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in" style="animation-delay: 0.2s;">
            Développeur full-stack passionné par la création d'expériences web modernes
        </p>
        <div class="flex justify-center space-x-4">
            <a 
                href="#projects" 
                class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors animate-pop"
                style="animation-delay: 0.4s;"
            >
                Voir mes projets
            </a>
            <a 
                href="#contact" 
                class="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors animate-pop"
                style="animation-delay: 0.5s;"
            >
                Me contacter
            </a>
        </div>
    </div>
</section>

<style>
    .animate-slide-up {
        animation: slideUp 0.6s ease-out forwards;
    }
    .animate-fade-in {
        animation: fadeIn 0.8s ease-out forwards;
    }
    .animate-pop {
        animation: pop 0.5s ease-out forwards;
    }
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
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
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
</style>