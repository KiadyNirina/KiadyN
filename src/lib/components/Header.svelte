<script>
    import ThemeToggle from "$lib/ThemeToggle.svelte";
</script>
  
<header class="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/80 shadow-sm">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="/" class="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent">
        MonPortfolio
        </a>
        
        <div class="flex items-center space-x-6">
            <a href="#projects" class="hover:text-blue-500 transition-colors">Projets</a>
            <a href="#skills" class="hover:text-blue-500 transition-colors">Compétences</a>
            <a href="#contact" class="hover:text-blue-500 transition-colors">Contact</a>
            
            <ThemeToggle/>
        </div>
    </nav>
</header>