<script>
	import Icon from "@iconify/svelte";

	const services = [
		{ 
			icon: "ph:browser-bold", 
			title: "Site Vitrine", 
			description: "Architectures numériques minimalistes axées sur l'impact visuel et la clarté.", 
			features: ["Design Intemporel", "SEO Technique", "Performance"]
		},
		{ 
			icon: "ph:cpu-bold", 
			title: "Application Web", 
			description: "Solutions SaaS sur mesure alliant robustesse et fluidité front-end.", 
			features: ["Logiciel évolutif", "Sécurité", "Interface Intuitive"]
		},
		{ 
			icon: "ph:shopping-bag-bold", 
			title: "E-commerce", 
			description: "Expériences d'achat immersives conçues pour maximiser la conversion.", 
			features: ["Stripe Ready", "Gestion Stocks", "Mobile First"]
		},
		{ 
			icon: "ph:intersect-bold", 
			title: "Automatisation", 
			description: "Synchronisation de vos flux de travail pour libérer votre potentiel.", 
			features: ["Webhooks / APIs", "Workflows", "Productivité"]
		},
		{ 
			icon: "ph:framer-logo-bold", 
			title: "UI/UX Design", 
			description: "Direction artistique pointue et prototypage haute fidélité.", 
			features: ["Design System", "Accessibilité", "Identité Visuelle"]
		},
		{ 
			icon: "ph:hard-drives-bold", 
			title: "Maintenance", 
			description: "Surveillance proactive et optimisation continue de vos actifs.", 
			features: ["Garantie uptime", "Backups", "Support Prioritaire"]
		},
	];
</script>

<section class="py-24 overflow-hidden">
	<div class="max-w-7xl mx-auto px-6">
		<!-- Header inchangé -->
		<div class="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-black/50 dark:border-white/50 pb-12">
			<div class="max-w-3xl">
				<h2 class="text-xs font-bold uppercase tracking-[0.4em] text-gray-900 dark:text-white mb-6">Expertises</h2>
				<h3 class="text-6xl md:text-9xl font-black text-black dark:text-white tracking-tighter leading-[0.85]">
					MES <br/> <span class="text-gray-900 dark:text-gray-200 italic font-thin">SERVICES</span>
				</h3>
			</div>
			<div class="mt-8 md:mt-0">
				<p class="text-xs text-black dark:text-gray-400 max-w-xs leading-tight">
					Solutions digitales haut de gamme alliant performance et minimalisme.
				</p>
			</div>
		</div>

		<ul class="flex flex-col">
			{#each services as service, i}
				<li 
					class="group grid grid-cols-[2.5rem_1fr] items-center border-b border-black/20 dark:border-white/30 py-8 
					       transition-colors duration-300 hover:bg-black dark:hover:bg-white
					       sm:grid-cols-[3rem_1fr]"
				>
					<!-- Numéro fixe -->
					<span class="font-mono text-2xl text-gray-900 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
						<Icon icon={service.icon} />
					</span>

					<!-- Conteneur du marquee (occupe 1fr) -->
					<div class="marquee-container overflow-hidden w-full">
						<div class="marquee-track group-hover:animate-marquee">
							<!-- Première copie : prend 50% de la piste -->
							<div class="w-1/2 flex items-center gap-x-5 sm:gap-x-8 whitespace-nowrap overflow-hidden">
								<span class="text-2xl font-bold tracking-tight text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
									{service.title}
								</span>
								<span class="text-xs text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
									{service.description}
								</span>
								<div class="flex gap-1.5">
									{#each service.features as feature}
										<span class="px-2 py-0.5 text-[9px] uppercase tracking-widest font-bold border border-black/30 dark:border-white/50 text-gray-600 dark:text-gray-300 rounded 
										             group-hover:border-white/50 dark:group-hover:border-black/50 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
											{feature}
										</span>
									{/each}
								</div>
							</div>
							<!-- Deuxième copie : prend 50% de la piste -->
							<div class="w-1/2 flex items-center gap-x-5 sm:gap-x-8 whitespace-nowrap overflow-hidden" aria-hidden="true">
								<span class="text-xl font-bold tracking-tight text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
									{service.title}
								</span>
								<span class="text-xs text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
									{service.description}
								</span>
								<div class="flex gap-1.5">
									{#each service.features as feature}
										<span class="px-2 py-0.5 text-[9px] uppercase tracking-widest font-bold border border-black/30 dark:border-white/50 text-gray-600 dark:text-gray-300 rounded 
										             group-hover:border-white/50 dark:group-hover:border-black/50 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
											{feature}
										</span>
									{/each}
								</div>
							</div>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.marquee-track {
		display: flex;
		width: 200%; 
		will-change: transform;
	}

	.group:hover .marquee-track {
		animation: marquee-scroll 20s linear infinite;
	}

	@keyframes marquee-scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
</style>