<script>
	import Icon from "@iconify/svelte";
	import { fade, slide } from 'svelte/transition';

	const skills = {
		languages: [
			{ name: 'PHP', icon: 'ph:code-bold' },
			{ name: 'JavaScript', icon: 'ph:scroll-bold' },
			{ name: 'Python', icon: 'ph:terminal-window-bold' }
		],
		frameworks: [
			{ name: 'Laravel', icon: 'ph:diamond-bold' },
			{ name: 'Django', icon: 'ph:cube-bold' },
			{ name: 'Vue.js', icon: 'ph:browsers-bold' },
			{ name: 'Svelte', icon: 'ph:lightning-bold' }
		]
	};
</script>

<section class="relative py-32 overflow-hidden">

	<div class="max-w-7xl mx-auto px-6 relative z-10">
		<div class="grid lg:grid-cols-12 gap-20 items-stretch">
			
			<!-- Left: Image & Identity -->
			<div class="lg:col-span-5 relative">
				<div class="sticky top-12">
					<div class="relative group">
						<!-- Brutalist Frame -->
						<div class="absolute inset-0 border-[1px] border-black dark:border-white translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
						
						<!-- Image Container -->
						<div class="relative aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-gray-900 border-[1px] border-black dark:border-white">
							<img 
								src="/pdp.jpg" 
								alt="Kiady Nirina" 
								class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
							/>
							
							<!-- Vertical Label -->
							<div class="absolute bottom-10 -left-2 origin-bottom-left -rotate-90">
								<span class="text-[10px] uppercase tracking-[0.5em] font-black text-white mix-blend-difference">
									Madagascar — 2024
								</span>
							</div>
						</div>
					</div>

					<div class="mt-12 space-y-2">
						<h2 class="text-xs font-black uppercase tracking-[0.4em] text-gray-600 dark:text-gray-400">Fondateur & Dev</h2>
						<p class="text-2xl font-bold text-black dark:text-white uppercase tracking-tighter italic">Kiady Nirina</p>
					</div>
				</div>
			</div>
			
			<!-- Right: Story & Skills -->
			<div class="lg:col-span-7 flex flex-col">
				<div class="mb-16">
					<h3 class="text-5xl md:text-7xl font-black text-black dark:text-white leading-[0.9] tracking-tighter mb-10">
						L'ART DE LA <br/> <span class="text-gray-900 dark:text-gray-200 italic font-thin border-b-2 border-black dark:border-white pb-2">STRUCTURE</span>
					</h3>
					
					<div class="space-y-8 text-xl text-gray-800 dark:text-gray-200 font-light leading-relaxed max-w-2xl">
						<p>
							Je ne construis pas seulement des sites ; je forge des <span class="text-black dark:text-white font-bold">systèmes numériques</span> capables de supporter l'ambition de mes clients.
						</p>
						<p>
							Basé sur une rigueur technique absolue, mon approche du développement Full-Stack privilégie la <span class="italic">performance brute</span> et l'élégance du code. Chaque ligne est pensée pour l'évolutivité.
						</p>
					</div>
				</div>

				<!-- Skills Section -->
				<div class="grid md:grid-cols-2 gap-12 mb-16">
					{#each Object.entries(skills) as [category, list]}
						<div class="space-y-6">
							<h4 class="text-xs font-black uppercase tracking-[0.3em] text-gray-700 dark:text-gray-400 flex items-center gap-4">
								{category} <span class="h-px flex-1 bg-gray-400 dark:bg-gray-800"></span>
							</h4>
							<ul class="space-y-3">
								{#each list as skill}
									<li class="group flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-900 hover:border-black dark:hover:border-white transition-colors duration-300">
										<div class="flex items-center gap-4">
											<Icon icon={skill.icon} class="w-5 h-5 text-gray-600 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
											<span class="text-lg font-medium text-gray-600 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white group-hover:pl-2 transition-all">{skill.name}</span>
										</div>
										<Icon icon="ph:arrow-up-right-thin" class="opacity-0 group-hover:opacity-100 transition-opacity text-black dark:text-white" />
									</li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>

				<!-- CTA Box -->
				<div class="mt-auto group relative p-10 bg-black dark:bg-white overflow-hidden">
					<!-- Moving Background Text -->
					<div class="absolute inset-0 flex items-center opacity-5 pointer-events-none overflow-hidden whitespace-nowrap">
						<span class="text-8xl font-black text-white dark:text-black animate-marquee">COLLABORONS • COLLABORONS • </span>
					</div>

					<div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
						<p class="text-2xl font-bold text-white dark:text-black tracking-tight text-center md:text-left">
							Besoin d'une architecture <br/> sans compromis ?
						</p>
						<button class="px-10 py-4 bg-white dark:bg-black text-black dark:text-white font-black uppercase text-xs tracking-widest hover:invert transition-all duration-300 shadow-2xl">
							Démarrer un projet
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes marquee {
		0% { transform: translateX(0); }
		100% { transform: translateX(-50%); }
	}

	.animate-marquee {
		display: inline-block;
		animation: marquee 10s linear infinite;
	}

	:global(.dark) .grayscale {
		filter: grayscale(1) contrast(1.2);
	}
</style>