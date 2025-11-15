<script>
	import Icon from "@iconify/svelte";
	import { fade, fly } from "svelte/transition";
	import { onMount } from "svelte";

	const services = [
		{ icon: "mdi:web", title: "Site Vitrine", description: "Création de sites modernes et élégants.", features: ["Design soigné", "Navigation fluide", "Optimisé SEO"] },
		{ icon: "mdi:cloud-outline", title: "Application Web", description: "Apps performantes et évolutives.", features: ["Interface intuitive", "Données", "Sécurisé"] },
		{ icon: "mdi:shopping-outline", title: "E-commerce", description: "Boutiques en ligne rapides.", features: ["Paiements", "Produits", "Stats"] },
		{ icon: "mdi:layers-outline", title: "Automatisation", description: "Workflows et API.", features: ["API", "Automation", "Gain de temps"] },
		{ icon: "mdi:brush-outline", title: "UI/UX Design", description: "Expériences simples et cohérentes.", features: ["Wireframes", "Prototypes", "Branding"] },
		{ icon: "mdi:tools", title: "Maintenance", description: "Support & sécurité continue.", features: ["Support", "Updates", "Sécurité"] },
	];

	let sliderContainer;
	let autoSlideInterval;

	onMount(() => {
		autoSlideInterval = setInterval(() => {
			scrollRight();
		}, 4000);

		return () => clearInterval(autoSlideInterval);
	});

	function scrollRight() {
		sliderContainer.scrollBy({ left: 300, behavior: "smooth" });
	}
</script>

<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-10 mb-10">
	<!-- Section Header -->
	<div class="text-center mb-16" in:fade={{ duration: 400 }}>
		<h2 class="text-4xl font-bold text-center mb-10">
			<span class="border-b-4 border-blue-500 pb-2 dark:text-gray-100">
				Mes Services
			</span>
		</h2>
		<p class="text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
			Des solutions sur mesure pour donner vie à vos projets numériques.
		</p>
	</div>

	<div
		bind:this={sliderContainer}
		class="overflow-x-auto md:overflow-visible hide-scrollbar"
	>
		<div class="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-w-max md:min-w-0">

			{#each services as service, i}
				<div
					class="flex-shrink-0 md:flex-shrink bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 w-72 md:w-auto shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
					in:fly={{ y: 35, duration: 500, delay: i * 120 }}
				>
					<div class="mb-6">
						<Icon icon={service.icon} class="w-10 h-10 text-gray-700 dark:text-gray-300" />
					</div>
					<h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
						{service.title}
					</h3>
					<p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
						{service.description}
					</p>
					<ul class="space-y-2">
						{#each service.features as feature}
							<li class="flex items-center text-gray-700 dark:text-gray-300 text-sm">
								<Icon icon="mdi:check" class="w-4 h-4 mr-2 text-gray-500" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>
			{/each}

		</div>
	</div>

	<div class="text-center mt-16" in:fade={{ duration: 600 }}>
		<p class="text-gray-600 dark:text-gray-300 mb-6">
			Vous avez un projet ? Je suis prêt à vous accompagner.
		</p>
		<a
			href="#contact"
			class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-green-600 hover:to-blue-600 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-xl shadow-md"
		>
			<Icon icon="mdi:message-processing" class="w-5 h-5 mr-3" />
			Démarrer un projet
		</a>
	</div>
</div>

<style>
	/* Scrollbar invisible */
	.hide-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.hide-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
