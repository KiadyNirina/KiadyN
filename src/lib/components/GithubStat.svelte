<script>
    import { onMount } from 'svelte';
    import Icon from '@iconify/svelte';

    let isDark = false;
    let githubProfile = null;
    let githubRepos = [];
    let isLoading = true;

    const githubUser = 'KiadyNirina';
    const githubUrl = `https://github.com/${githubUser}`;

    onMount(async () => {
        isDark = document.documentElement.classList.contains('dark');

        const observer = new MutationObserver(() => {
            isDark = document.documentElement.classList.contains('dark');
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        try {
            const profileRes = await fetch(
                `https://api.github.com/users/${githubUser}`
            );

            githubProfile = await profileRes.json();

            const reposRes = await fetch(
                `https://api.github.com/users/${githubUser}/repos?per_page=100`
            );

            githubRepos = await reposRes.json();
        } catch (err) {
            console.error(err);
        } finally {
            isLoading = false;
        }

        return () => observer.disconnect();
    });

    $: totalStars = githubRepos.reduce(
        (sum, repo) => sum + repo.stargazers_count,
        0
    );

    $: totalForks = githubRepos.reduce(
        (sum, repo) => sum + repo.forks_count,
        0
    );
</script>

<section class="py-32 bg-white dark:bg-gray-950 border-t border-black/5 dark:border-white/5 overflow-hidden" id="githubStat">
    <div class="max-w-7xl mx-auto px-6">
        
        <!-- En-tête de section style Dashboard -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-20">
            <div>
                <div class="flex items-center gap-3 mb-4">
                    <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span class="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 dark:text-gray-500">Open Source Telemetry</span>
                </div>
                <h2 class="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter uppercase">
                    Engine <span class="text-transparent" style="-webkit-text-stroke: 1px currentColor;">Activity</span>
                </h2>
            </div>
            
            <!-- Actions & Badges -->
            <div class="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <div class="flex items-center gap-2 text-[10px] font-mono uppercase text-black dark:text-white border border-black/5 dark:border-white/5 px-4 py-2 rounded-xl bg-gray-50/50 dark:bg-gray-900/20 balance-center">
                    <Icon icon="ph:github-logo-thin" class="w-4 h-4 text-black dark:text-white" />
                    <span>Sync: Live Data</span>
                </div>

                <!-- Bouton de Redirection GitHub Extérieur -->
                <a 
                    href={githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="flex items-center gap-2 text-[10px] font-mono uppercase text-black dark:text-white border border-black dark:border-white px-5 py-2.5 rounded-xl transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black group active:scale-95"
                >
                    <span>View Profile</span>
                    <Icon icon="ph:arrow-up-right" class="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
            </div>
        </div>

        <!-- Section des compteurs numériques (Profil) -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {#if isLoading}
                <!-- Squelettes de chargement épurés -->
                {#each Array(6) as _}
                    <div class="border border-black/5 dark:border-white/5 rounded-2xl p-6 bg-gray-50/30 dark:bg-gray-900/10 animate-pulse">
                        <div class="h-8 w-12 bg-black/10 dark:bg-white/10 rounded mb-2"></div>
                        <div class="h-3 w-16 bg-black/5 dark:bg-white/5 rounded"></div>
                    </div>
                {/each}
            {:else if githubProfile}
                <!-- Métriques Réelles -->
                <div class="border border-black/30 dark:border-white/50 p-6 bg-gray-50/30 dark:bg-gray-900/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 group">
                    <div class="text-3xl font-black text-black dark:text-white tracking-tight group-hover:scale-105 transition-transform origin-left duration-300">{githubProfile.followers}</div>
                    <div class="text-[9px] font-mono uppercase tracking-widest text-gray-400 mt-1">Followers</div>
                </div>

                <div class="border border-black/30 dark:border-white/50 p-6 bg-gray-50/30 dark:bg-gray-900/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 group">
                    <div class="text-3xl font-black text-black dark:text-white tracking-tight group-hover:scale-105 transition-transform origin-left duration-300">{githubProfile.following}</div>
                    <div class="text-[9px] font-mono uppercase tracking-widest text-gray-400 mt-1">Following</div>
                </div>

                <div class="border border-black/30 dark:border-white/50 p-6 bg-gray-50/30 dark:bg-gray-900/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 group">
                    <div class="text-3xl font-black text-black dark:text-white tracking-tight group-hover:scale-105 transition-transform origin-left duration-300">{githubProfile.public_repos}</div>
                    <div class="text-[9px] font-mono uppercase tracking-widest text-gray-400 mt-1">Repositories</div>
                </div>

                <div class="border border-black/30 dark:border-white/50 p-6 bg-gray-50/30 dark:bg-gray-900/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 group">
                    <div class="text-3xl font-black text-black dark:text-white tracking-tight group-hover:scale-105 transition-transform origin-left duration-300">{totalStars}</div>
                    <div class="text-[9px] font-mono uppercase tracking-widest text-gray-400 mt-1">Stars earned</div>
                </div>

                <!-- <div class="border border-black/30 dark:border-white/50 p-6 bg-gray-50/30 dark:bg-gray-900/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 group">
                    <div class="text-3xl font-black text-black dark:text-white tracking-tight group-hover:scale-105 transition-transform origin-left duration-300">{totalForks}</div>
                    <div class="text-[9px] font-mono uppercase tracking-widest text-gray-400 mt-1">Forks count</div>
                </div> -->

                <div class="border border-black/30 dark:border-white/50 p-6 bg-black text-white dark:bg-white dark:text-black flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                    <div class="text-xl font-black tracking-widest uppercase">PRO</div>
                    <div class="text-[9px] font-mono uppercase tracking-widest opacity-60">Developer</div>
                </div>
            {/if}
        </div>

        <!-- Grille Principale Brutaliste -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            <!-- Widget Principal OSSInsight (Colonne de gauche) -->
            <div class="lg:col-span-5 border border-black/30 dark:border-white/50 p-6 bg-gray-50/50 dark:bg-gray-900/20 backdrop-blur-sm group transition-colors duration-500">
                <div class="flex items-center justify-between mb-6 border-b border-black/5 dark:border-white/5 pb-4">
                    <span class="text-[10px] font-mono text-black dark:text-white uppercase tracking-widest">Repository Metrics</span>
                    <Icon icon="ph:chart-bar-thin" class="w-4 h-4 text-black dark:text-white" />
                </div>
                <div class="flex justify-center items-center w-full overflow-hidden rounded-xl bg-white dark:bg-gray-950 p-2 border border-black/5 dark:border-white/5">
                    <a href="https://next.ossinsight.io/widgets/official/compose-user-dashboard-stats?user_id=162699528" target="_blank" class="block w-full transition-transform duration-500 group-hover:scale-[1.02]">
                        <picture class="w-full">
                            <source media="(prefers-color-scheme: dark)" srcset="https://next.ossinsight.io/widgets/official/compose-user-dashboard-stats/thumbnail.png?user_id=162699528&image_size=auto&color_scheme=dark">
                            <img alt="Dashboard stats of @kiadynirina" src="https://next.ossinsight.io/widgets/official/compose-user-dashboard-stats/thumbnail.png?user_id=162699528&image_size=auto&color_scheme=light" class="w-full h-auto object-contain">
                        </picture>
                    </a> 
                </div>
            </div>

            <!-- Double cartes d'analytique (Colonne du milieu) -->
            <div class="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <!-- Cartes Langages -->
                <div class="border border-black/30 dark:border-white/50 p-6 flex flex-col justify-between h-full bg-gray-50/50 dark:bg-gray-900/20">
                    <span class="text-[10px] font-mono text-black dark:text-white uppercase tracking-widest mb-6 block">Language Distribution</span>
                    <div class="flex justify-center items-center overflow-hidden bg-transparent rounded-xl">
                        <img src="https://github-readme-stats-fast.vercel.app/api/top-langs/?username=KiadyNirina&layout=compact&theme={isDark ? 'dark' : 'default'}" alt="Top Langs" class="w-full h-auto max-w-sm filter dark:invert-0 object-contain" />
                    </div>
                </div>

                <!-- Cartes Profil Générale -->
                <div class="border border-black/30 dark:border-white/50 p-6 flex flex-col justify-between h-full bg-gray-50/50 dark:bg-gray-900/20">
                    <span class="text-[10px] font-mono text-black dark:text-white uppercase tracking-widest mb-6 block">Contribution Core</span>
                    <div class="flex justify-center items-center overflow-hidden bg-transparent rounded-xl">
                        <img src="https://github-readme-stats-fast.vercel.app/api?username=KiadyNirina&show_icons=true&theme={isDark ? 'dark' : 'default'}" alt="GitHub Stats" class="w-full h-auto max-w-sm object-contain" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Ligne inférieure : Streak & Contribution Graph -->
        <div class="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <!-- Streak -->
            <div class="lg:col-span-4 border border-black/30 dark:border-white/50 p-6 flex flex-col justify-between bg-gray-50/50 dark:bg-gray-900/20">
                <span class="text-[10px] font-mono text-black dark:text-white uppercase tracking-widest mb-6 block">Consistency Index</span>
                <div class="flex justify-center items-center overflow-hidden rounded-xl bg-transparent">
                    <img src="https://github-readme-stats-fast.vercel.app/api/streak?username=kiadynirina&theme={isDark ? 'dark' : 'default'}" alt="Streak" class="w-full h-auto max-w-sm object-contain" />
                </div>
            </div>

            <!-- Snake Game Animé -->
            <div class="lg:col-span-8 border border-black/30 dark:border-white/50 p-6 flex flex-col justify-between bg-gray-50/50 dark:bg-gray-900/20 group">
                <div class="flex justify-between items-center mb-6">
                    <span class="text-[10px] font-mono text-black dark:text-white uppercase tracking-widest">Contribution Matrix</span>
                    <span class="text-[9px] font-mono px-2 py-0.5 bg-black/5 dark:bg-white/5 text-gray-500 rounded-md">Status: Active</span>
                </div>
                <div class="flex justify-center items-center overflow-hidden rounded-xl bg-white dark:bg-gray-950 p-6 border border-black/5 dark:border-white/5 min-h-[150px]">
                    <picture class="w-full max-w-2xl">
                        <img
                            src="https://raw.githubusercontent.com/KiadyNirina/KiadyNirina/output/github-snake{isDark ? '-dark' : ''}.svg"
                            alt="GitHub Snake"
                            class="w-full h-auto"
                        />
                    </picture>
                </div>
            </div>
        </div>

    </div>
</section>

<style>
    /* Intégration fluide des images externes avec des thèmes variables */
    img {
        max-width: 100%;
        height: auto;
        transition: all 0.5s ease;
    }
</style>