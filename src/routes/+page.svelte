<script>
	import { onMount } from "svelte";
	import { fade, fly } from 'svelte/transition';
	import Icon from "@iconify/svelte";
	import ThemeToggle from "$lib/ThemeToggle.svelte";
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Services from '$lib/components/Services.svelte'
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
    import Experiences from '$lib/components/Experiences.svelte';
	import Cta from '$lib/components/Cta.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

    let animated = {
        hero: false,
        about: false,
		services: false,
        projects: false,
        skills: false,
        experiences: false,
		cta: false,
        contact: false
    };

	let scrollToTop = false;
	let isLoading = true;
	let progress = 0;

	onMount(() => {
		// Simulation du chargement
		const interval = setInterval(() => {
			progress += Math.random() * 20;
			if (progress >= 100) {
				progress = 100;
				clearInterval(interval);
				setTimeout(() => {
					isLoading = false;
				}, 500);
			}
		}, 200);

		const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						animated = { ...animated, [entry.target.id]: true };
					} else {
						animated = { ...animated, [entry.target.id]: false };
					}
				});
			},
			{ threshold: 0.1 }
		);

        Object.keys(animated).forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			scrollToTop = scrollPosition + windowHeight > documentHeight - 100;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			observer.disconnect();
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function scrollToSection() {
		const target = scrollToTop ? 'hero' : 'footer';
		const element = document.getElementById(target);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

{#if isLoading}
	<!-- Loading Screen -->
	<div class="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 z-50 flex flex-col items-center justify-center">
		<!-- Animated Background Elements -->
		<div class="absolute inset-0 overflow-hidden">
			<div class="absolute -top-20 -left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
			<div class="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 2s;"></div>
			<div class="absolute top-1/2 left-1/4 w-48 h-48 bg-blue-300/5 rounded-full blur-2xl animate-float"></div>
		</div>

		<!-- Logo Container -->
		<div class="relative mb-8 group animate-bounce-gentle">
			<!-- Logo with Border -->
			<div class="relative bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-3xl shadow-2xl">
				<img 
					src="/logo.png" 
					alt="Logo Kiady Nirina" 
					class="w-16 rounded-2xl border-4 border-white dark:border-gray-800 shadow-inner"
				/>
				
				<!-- Floating Dots -->
				<div class="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full animate-ping-fast"></div>
				<div class="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-300 rounded-full animate-pulse-gentle" style="animation-delay: 1s;"></div>
			</div>
		</div>

		<!-- Loading Text -->
		<div class="text-center mb-8 animate-fade-in">
			<p class="text-gray-600 dark:text-gray-400 text-lg">
				Chargement ...
			</p>
		</div>

		<!-- Progress Bar -->
		<div class="w-80 max-w-full px-4">
			<!-- Progress Container -->
			<div class="relative h-3 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-full overflow-hidden border border-blue-200/50 dark:border-blue-800/50 shadow-inner">
				<!-- Progress Fill -->
				<div 
					class="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-300 ease-out shadow-lg"
					style="width: {progress}%"
				>
					<!-- Shimmer Effect -->
					<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
				</div>
				
				<!-- Progress Dots -->
				<div class="absolute -top-1 -left-1 w-4 h-4 bg-blue-500 rounded-full animate-ping-slow"></div>
				<div class="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-ping-slow" style="animation-delay: 1s;"></div>
			</div>
			
			<!-- Progress Percentage -->
			<div class="text-center mt-4">
				<span class="text-blue-600 dark:text-blue-400 font-bold text-lg">{Math.round(progress)}%</span>
			</div>
		</div>

		<!-- Loading Animation -->
		<div class="flex space-x-2 mt-8">
			{#each [0, 1, 2] as i}
				<div 
					class="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
					style="animation-delay: {i * 0.2}s;"
				></div>
			{/each}
		</div>
	</div>
{:else}
	<!-- Main Content -->
	<div class="min-h-screen transition-colors duration-300 animate-fade-in-content">
		<Header />
		
		<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div id="hero" class:animate-fade-in={animated.hero}>
				<Hero />
			</div>
			
			<div id="about" class:animate-fade-in={animated.about}>
				<About />
			</div>

			<div id="services" class:animate-fade-in={animated.services}>
				<Services />
			</div>
			
			<div id="skills" class:animate-fade-in={animated.skills}>
				<Skills />
			</div>

			<div id="experiences" class:animate-fade-in={animated.experiences}>
				<Experiences />
			</div>

			<div id="projects" class:animate-fade-in={animated.projects}>
				<Projects />
			</div>

			<div id="cta" class:animate-fade-in={animated.cta}>
				<Cta />
			</div>
			
			<div id="contact" class:animate-fade-in={animated.contact}>
				<Contact />
			</div>
		</main>

		<button
			on:click={scrollToSection}
			class="fixed bottom-6 right-6 p-3 bg-blue-600 dark:bg-blue-800 text-white rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-900 transition-all duration-300 z-50 group"
			aria-label={scrollToTop ? 'Retourner en haut' : 'Aller en bas'}
		>
			<div class="absolute -inset-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse-gentle"></div>
			<Icon
				icon={scrollToTop ? 'mdi:chevron-up' : 'mdi:chevron-down'}
				width="24"
				height="24"
				class="transition-transform duration-300 relative z-10"
			/>
		</button>

		<Footer />
	</div>
{/if}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
	@import "tailwindcss";
	@custom-variant dark (&:where(.dark, .dark *));
	@font-face {
    	font-family: 'Poppins';
        src: url('/font/Poppins-Light.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

	*{
		font-family: "Lato", sans-serif;
		font-weight: 500;
		font-style: normal;
	}
    
    .animate-fade-in {
        animation: fadeIn 1.5s ease-out forwards;
    }

	.animate-fade-in-content {
		animation: fadeInContent 0.8s ease-out forwards;
	}
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

	@keyframes fadeInContent {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes pulse-slow {
		0%, 100% {
			opacity: 0.1;
			transform: scale(1);
		}
		50% {
			opacity: 0.2;
			transform: scale(1.1);
		}
	}

	@keyframes pulse-gentle {
		0%, 100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.8;
			transform: scale(1.05);
		}
	}

	@keyframes ping-fast {
		0% {
			transform: scale(0.8);
			opacity: 1;
		}
		75%, 100% {
			transform: scale(1.5);
			opacity: 0;
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

	@keyframes bounce-gentle {
		0%, 20%, 50%, 80%, 100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-10px);
		}
		60% {
			transform: translateY(-5px);
		}
	}

	@keyframes float {
		0%, 100% {
			transform: translateY(0) translateX(0);
		}
		33% {
			transform: translateY(-20px) translateX(10px);
		}
		66% {
			transform: translateY(10px) translateX(-10px);
		}
	}

	@keyframes shimmer {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}

	.animate-pulse-slow {
		animation: pulse-slow 4s ease-in-out infinite;
	}

	.animate-pulse-gentle {
		animation: pulse-gentle 2s ease-in-out infinite;
	}

	.animate-ping-fast {
		animation: ping-fast 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
	}

	.animate-ping-slow {
		animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
	}

	.animate-bounce-gentle {
		animation: bounce-gentle 3s infinite;
	}

	.animate-float {
		animation: float 6s ease-in-out infinite;
	}

	.animate-shimmer {
		animation: shimmer 2s infinite;
	}
</style>