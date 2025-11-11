<script>
	import Icon from "@iconify/svelte";
	import { fade, fly } from "svelte/transition";

	const services = [
		{
			icon: "mdi:web",
			title: "Site Vitrine",
			gradient: "from-blue-500 to-purple-600",
			description:
				"Création de sites modernes et élégants pour valoriser votre activité en ligne.",
			features: ["Design soigné", "Navigation fluide", "Optimisé SEO"],
		},
		{
			icon: "mdi:cloud",
			title: "Application Web",
			gradient: "from-green-500 to-emerald-600",
			description:
				"Développement d’applications en ligne performantes et évolutives pour vos besoins métiers.",
			features: ["Interface intuitive", "Gestion des données", "Espace sécurisé"],
		},
		{
			icon: "mdi:shopping",
			title: "E-commerce",
			gradient: "from-purple-500 to-pink-600",
			description:
				"Création de boutiques en ligne efficaces pour vendre vos produits facilement.",
			features: ["Paiements sécurisés", "Gestion produits", "Suivi des ventes"],
		},
		{
			icon: "mdi:layers",
			title: "Intégration & Automatisation",
			gradient: "from-orange-500 to-yellow-600",
			description:
				"Connexion fluide entre vos outils et automatisation de vos processus quotidiens.",
			features: ["Flux automatisés", "Intégration API", "Gain de temps"],
		},
		{
			icon: "mdi:brush",
			title: "UI/UX Design",
			gradient: "from-pink-500 to-rose-600",
			description:
				"Conception d’expériences utilisateurs agréables et cohérentes avec votre image.",
			features: ["Wireframes", "Prototypes", "Identité visuelle"],
		},
		{
			icon: "mdi:tools",
			title: "Maintenance & Support",
			gradient: "from-teal-500 to-cyan-600",
			description:
				"Assistance continue pour garantir la stabilité, la sécurité et les mises à jour de vos projets.",
			features: ["Support rapide", "Mises à jour", "Sécurité renforcée"],
		},
	];
</script>

<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-10 mb-10">
	<!-- Section Header -->
	<div class="text-center mb-16" in:fade={{ duration: 400 }}>
		<h2 class="text-4xl font-bold text-center mb-12">
			<span class="border-b-4 border-blue-500 pb-2 dark:text-gray-100">
				Mes Services
			</span>
		</h2>
		<p class="text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
			Des solutions sur mesure pour donner vie à vos projets numériques.
		</p>
	</div>

	<!-- Services Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each services as service, i}
			<div
				class="group relative"
				in:fly={{ y: 40, duration: 600, delay: i * 150 }}
			>
				<!-- Glow Effect -->
				<div
					class="absolute inset-0 bg-gradient-to-r {service.gradient} rounded-3xl blur opacity-10 dark:opacity-25 group-hover:opacity-20 dark:group-hover:opacity-45 transition-opacity duration-300"
				></div>

				<!-- Card -->
				<div
					class="relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2"
				>
					<!-- Icon -->
					<div
						class="w-16 h-16 bg-gradient-to-r {service.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300"
					>
						<Icon icon={service.icon} class="w-8 h-8 text-white" />
					</div>

					<!-- Content -->
					<h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
						{service.title}
					</h3>
					<p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
						{service.description}
					</p>

					<!-- Features -->
					<ul class="space-y-3 mb-8">
						{#each service.features as feature}
							<li class="flex items-center text-gray-700 dark:text-gray-300">
								<Icon icon="mdi:check-circle" class="w-5 h-5 text-green-500 mr-3" />
								<span class="text-sm">{feature}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>

	<!-- Bottom CTA -->
	<div class="text-center mt-16" in:fade={{ duration: 600, delay: 300 }}>
		<p class="text-base text-gray-600 dark:text-gray-300 mb-6">
			Vous avez un projet ? Discutons de votre idée dès aujourd’hui.
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
	/* Petit effet de flottement sur le hover */
	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-6px);
		}
	}
	.group:hover {
		animation: float 2s ease-in-out infinite;
	}
</style>
