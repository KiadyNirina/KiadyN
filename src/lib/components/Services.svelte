<script>
	import Icon from "@iconify/svelte";
	import { fly } from "svelte/transition";
	import { onMount } from "svelte";

	let sliderContainer;
	let autoSlideInterval;
	let servicesSection;
	let cardRef;

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

	function setCardRef(el) {
		if (!cardRef) cardRef = el;
	}

	function scrollRight() {
		if (sliderContainer && cardRef) {
			const cardWidth = cardRef.offsetWidth;
			if (sliderContainer.scrollLeft + sliderContainer.offsetWidth >= sliderContainer.scrollWidth - 10) {
				sliderContainer.scrollTo({ left: 0, behavior: "smooth" });
			} else {
				sliderContainer.scrollBy({ left: cardWidth, behavior: "smooth" });
			}
		}
	}

	onMount(() => {
		const interval = setInterval(scrollRight, 4000);
		return () => clearInterval(interval);
	});
</script>

<section class="py-24 overflow-hidden" bind:this={servicesSection}>
	<div class="max-w-7xl mx-auto px-6">
		
		<!-- Header Section -->
		<div class="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-black/50 dark:border-white/50 pb-12">
			<div class="max-w-3xl">
				<h2 class="text-xs font-bold uppercase tracking-[0.4em] text-gray-900 dark:text-white mb-6">Expertises</h2>
				<h3 class="text-6xl md:text-9xl font-black text-black dark:text-white tracking-tighter leading-[0.85]">
					MES <br/> <span class="text-gray-900 dark:text-gray-200 italic font-thin">SERVICES</span>
				</h3>
			</div>
			<div class="mt-8 md:mt-0">
				<p class="text-lg font-medium text-black dark:text-gray-400 max-w-xs leading-tight">
					Solutions digitales haut de gamme alliant performance et minimalisme.
				</p>
			</div>
		</div>

		<!-- Services Grid & Slider -->
		<div
			bind:this={sliderContainer}
			class="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-black/30 dark:border-white/50 overflow-x-auto md:overflow-visible hide-scrollbar snap-x"
		>
			{#each services as service, i}
				<div
					use:setCardRef
					class="group relative flex-shrink-0 w-[85vw] md:w-auto p-12 border-r border-b border-black/30 dark:border-white/50 transition-all duration-700 ease-expo hover:z-20 snap-center"
				>
					<!-- Reveal Hover Background -->
					<div class="absolute inset-0 bg-black dark:bg-white scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-expo"></div>

					<div class="relative z-10 flex flex-col h-full">
						<!-- Icon & Index -->
						<div class="flex items-start justify-between mb-16">
							<div class="text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-500">
								<Icon icon={service.icon} class="w-14 h-14" />
							</div>
							<span class="text-5xl font-thin text-gray-100 dark:text-gray-900 group-hover:text-white/10 dark:group-hover:text-black/10 transition-colors duration-500 italic">
								{i + 1}
							</span>
						</div>

						<!-- Textual Content -->
						<h4 class="text-3xl font-bold text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-500 mb-6 tracking-tight">
							{service.title}
						</h4>
						
						<p class="text-gray-900 dark:text-gray-200 group-hover:text-gray-300 dark:group-hover:text-gray-900 transition-colors duration-500 mb-10 text-lg leading-relaxed font-light">
							{service.description}
						</p>

						<!-- Feature Pills -->
						<div class="mt-auto flex flex-wrap gap-2">
							{#each service.features as feature}
								<span class="px-3 py-1 border border-black/30 dark:border-white/50 text-[10px] uppercase tracking-widest font-bold text-gray-600 dark:text-gray-200 group-hover:text-white dark:group-hover:text-black group-hover:border-white/20 dark:group-hover:border-black/20 transition-all">
									{feature}
								</span>
							{/each}
						</div>
					</div>

					<!-- Bottom Arrow Reveal -->
					<div class="absolute bottom-12 right-12 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100">
						<Icon icon="ph:arrow-right-thin" class="w-10 h-10 text-white dark:text-black" />
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.hide-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.hide-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.ease-expo {
		transition-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
	}
</style>