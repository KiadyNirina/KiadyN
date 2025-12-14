<script>
	import Icon from "@iconify/svelte";
	import { fade, fly } from "svelte/transition";
	import { onMount } from "svelte";

	let sliderContainer;
	let autoSlideInterval;
	let servicesSection;
	let isVisible = false;
	let cardRef;

	const services = [
		{ 
			icon: "mdi:web", 
			title: "Site Vitrine", 
			description: "Création de sites modernes et élégants pour présenter votre activité.", 
			features: ["Design responsive", "Optimisation SEO", "Performance optimale"],
			gradient: "from-blue-500 to-blue-600"
		},
		{ 
			icon: "mdi:cloud-outline", 
			title: "Application Web", 
			description: "Développement d'applications web performantes et évolutives.", 
			features: ["Interface intuitive", "Base de données", "Sécurité renforcée"],
			gradient: "from-blue-600 to-blue-700"
		},
		{ 
			icon: "mdi:shopping-outline", 
			title: "E-commerce", 
			description: "Boutiques en ligne sécurisées et optimisées pour la conversion.", 
			features: ["Paiements sécurisés", "Gestion produits", "Analytics intégrés"],
			gradient: "from-blue-700 to-blue-800"
		},
		{ 
			icon: "mdi:layers-outline", 
			title: "Automatisation", 
			description: "Automatisation de processus et développement d'API sur mesure.", 
			features: ["API RESTful", "Workflows automatisés", "Gain de temps"],
			gradient: "from-blue-800 to-blue-900"
		},
		{ 
			icon: "mdi:brush-outline", 
			title: "UI/UX Design", 
			description: "Conception d'expériences utilisateur intuitives et engageantes.", 
			features: ["Wireframes", "Prototypes interactifs", "Design system"],
			gradient: "from-blue-900 to-indigo-600"
		},
		{ 
			icon: "mdi:tools", 
			title: "Maintenance", 
			description: "Support technique et maintenance proactive de vos solutions.", 
			features: ["Support réactif", "Mises à jour", "Sécurité continue"],
			gradient: "from-indigo-600 to-indigo-700"
		},
	];

	function setCardRef(el) {
		if (!cardRef) {
			cardRef = el;
		}
	}

	function startAutoSlide() {
		if (!autoSlideInterval) {
			autoSlideInterval = setInterval(() => {
				scrollRight();
			}, 4000);
		}
	}

	function stopAutoSlide() {
		if (autoSlideInterval) {
			clearInterval(autoSlideInterval);
			autoSlideInterval = null;
		}
	}

	function scrollRight() {
		if (sliderContainer && cardRef) {
			const cardWidth = cardRef.offsetWidth + 24;
			sliderContainer.scrollBy({ left: cardWidth, behavior: "smooth" });
		}
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry.isIntersecting) {
					isVisible = true;
					startAutoSlide();
				} else {
					isVisible = false;
					stopAutoSlide();
				}
			},
			{ threshold: 0.3 }
		);

		observer.observe(servicesSection);

		return () => {
			stopAutoSlide();
			observer.disconnect();
		};
	});
</script>

<section class="py-20" bind:this={servicesSection}>
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="text-center mb-16 animate-slide-up">
			<h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
				Mes Services
			</h2>
			<div class="relative inline-block mb-4">
				<div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto"></div>
				<div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full animate-ping-slow"></div>
			</div>
		</div>

		<!-- Services Grid -->
		<div
			bind:this={sliderContainer}
			class="overflow-x-auto md:overflow-visible hide-scrollbar pb-6"
		>
			<div class="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-w-max md:min-w-0">
				{#each services as service, i}
					<div
						use:setCardRef
						class="group relative flex-shrink-0 md:flex-shrink bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 rounded-2xl p-8 w-80 md:w-auto shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
						in:fly={{ y: 40, duration: 600, delay: i * 100 }}
					>
						<!-- Animated Border -->
						<div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
							<div class="absolute inset-[2px] rounded-2xl bg-white dark:bg-gray-800"></div>
						</div>

						<!-- Floating Icon -->
						<div class="relative mb-6">
							<div class="absolute -top-2 -right-2 w-3 h-3 bg-blue-500 rounded-full animate-pulse-gentle"></div>
							<div class={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
								<Icon icon={service.icon} class="w-7 h-7 text-white" />
							</div>
						</div>

						<!-- Content -->
						<div class="relative z-10">
							<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
								{service.title}
							</h3>
							<p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
								{service.description}
							</p>
							<ul class="space-y-3">
								{#each service.features as feature, j}
									<li class="flex items-center text-gray-700 dark:text-gray-300 text-sm group-hover/item:translate-x-1 transition-transform duration-300" 
											style="animation-delay: {j * 0.1}s;">
										<div class="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse-gentle" 
													style="animation-delay: {j * 0.2}s;"></div>
										{feature}
									</li>
								{/each}
							</ul>
						</div>

						<!-- Hover Flash Effect -->
						<div class="absolute inset-0 rounded-2xl bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
					</div>
				{/each}
			</div>
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

	@keyframes pulse-gentle {
		0%, 100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.7;
			transform: scale(1.1);
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

	.animate-slide-up {
		animation: slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
		opacity: 0;
	}

	.animate-fade-in {
		animation: fadeIn 1s ease-out forwards;
		opacity: 0;
	}

	.animate-pulse-gentle {
		animation: pulse-gentle 2s ease-in-out infinite;
	}

	.animate-ping-slow {
		animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
	}
</style>