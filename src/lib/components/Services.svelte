<script>
	import Icon from "@iconify/svelte";
	import { fade, fly } from "svelte/transition";

	const services = [
		{
			icon: "mdi:web",
			title: "Site Vitrine",
			gradient: "from-blue-500 to-purple-600",
			description:
				"Présence en ligne professionnelle avec design moderne, responsive et optimisé pour le référencement.",
			features: [
				"Design responsive",
				"SEO optimisé",
				"Performance maximale",
				"Maintenance incluse",
			],
		},
		{
			icon: "mdi:cloud",
			title: "Application SaaS",
			gradient: "from-green-500 to-emerald-600",
			description:
				"Solutions logicielles cloud scalables avec architecture moderne et fonctionnalités avancées.",
			features: [
				"Architecture scalable",
				"API RESTful",
				"Base de données",
				"Dashboard admin",
			],
		},
		{
			icon: "mdi:shopping",
			title: "E-commerce",
			gradient: "from-purple-500 to-pink-600",
			description:
				"Boutiques en ligne performantes avec gestion des stocks, paiements sécurisés et expérience utilisateur optimisée.",
			features: [
				"Paiements sécurisés",
				"Gestion stocks",
				"SEO e-commerce",
				"Analytics",
			],
		},
		{
			icon: "mdi:tools",
			title: "Maintenance & Support",
			gradient: "from-teal-500 to-cyan-600",
			description:
				"Services de maintenance continue, optimisation des performances et support technique réactif.",
			features: ["Support 24/7", "Mises à jour", "Sécurité", "Backups"],
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
			Des solutions digitales sur mesure pour transformer vos idées en expériences exceptionnelles
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
					class="absolute inset-0 bg-gradient-to-r {service.gradient} rounded-3xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"
				></div>

				<!-- Card -->
				<div
					class="relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2"
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
			Vous avez un projet spécifique ? Parlons-en ensemble !
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
