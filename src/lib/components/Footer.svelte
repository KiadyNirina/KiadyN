<script>
    import Icon from "@iconify/svelte";
    import { fade } from 'svelte/transition';
    
    const currentYear = new Date().getFullYear();
</script>

<footer class="bg-gray-100 dark:bg-gray-950 p-12 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">

        <!-- Grille d'informations -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-12 mb-10">
            <!-- Navigation -->
            <div class="space-y-6">
                <h4 class="text-[10px] font-black uppercase tracking-widest text-gray-400">Index</h4>
                <ul class="space-y-4">
                    {#each ['About', 'Services', 'Projects', 'Skills', 'Experiences'] as item}
                        <li>
                            <a href="#{item.toLowerCase()}" class="text-xs font-bold uppercase tracking-widest text-black dark:text-white hover:opacity-50 transition-opacity">
                                {item}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>

            <!-- Socials -->
            <div class="space-y-6">
                <h4 class="text-[10px] font-black uppercase tracking-widest text-gray-400">Social</h4>
                <ul class="space-y-4">
                    {#each [
                        { n: 'Github', h: 'https://github.com/KiadyNirina' },
                        { n: 'LinkedIn', h: 'https://www.linkedin.com/in/kiady-ram-5216592a9/' },
                        { n: 'Facebook', h: 'https://www.facebook.com/kiady.rambeloson' },
                        { n: 'Whatsapp', h: 'https://wa.me/+261335777152' }
                    ] as social}
                        <li>
                            <a href={social.h} target="_blank" class="text-xs font-bold uppercase tracking-widest text-black dark:text-white hover:opacity-50 transition-opacity">
                                {social.n}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>

            <!-- Contact Rapide -->
            <div class="col-span-2 space-y-6 md:text-right">
                <h4 class="text-[10px] font-black uppercase tracking-widest text-gray-400">Say Hello</h4>
                <div class="space-y-2">
                    <p class="text-xl font-bold text-black dark:text-white tracking-tight">kiady142ram@gmail.com</p>
                    <p class="text-sm text-gray-400 font-mono tracking-tighter">+261 33 57 771 52</p>
                </div>
            </div>
        </div>

        <!-- Barre de copyright minimale -->
        <div class="pt-12 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-center items-center">
            <div class="flex items-center justify-center gap-4">
                <span class="text-[10px] font-mono text-gray-500 dark:text-gray-400 uppercase">© {currentYear} All Rights Reserved</span>
                <span class="h-px w-8 bg-gray-400 dark:bg-gray-800"></span>
                <span class="text-[10px] font-mono text-gray-500 dark:text-gray-400 uppercase">Designed & Built by Kiady</span>
            </div>
        </div>
    </div>
</footer>

<style>
    a {
        text-underline-offset: 8px;
    }
</style>