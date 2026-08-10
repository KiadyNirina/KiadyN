<script>
	import { onMount } from "svelte";
	import { fade, fly } from 'svelte/transition';
	import Icon from "@iconify/svelte";
	import ThemeToggle from "$lib/ThemeToggle.svelte";
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Stat from "../lib/components/Stat.svelte";
	import Services from '$lib/components/Services.svelte'
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
    import Experiences from '$lib/components/Experiences.svelte';
	import Cta from '$lib/components/Cta.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Chat from '$lib/components/Chat.svelte';
	import GithubStat from '$lib/components/GithubStat.svelte';

    let animated = {
        hero: false,
        about: false,
		stat: false,
		githubStat: false,
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
</script>

	<!-- Main Content -->
	<!-- <div class="min-h-screen transition-colors duration-300 animate-fade-in-content"> -->

		<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div id="hero" class:animate-fade-in={animated.hero}>
				<Hero />
			</div>
			
			<div id="about" class:animate-fade-in={animated.about}>
				<About />
			</div>

			<div id="stat" class:animate-fade-in={animated.stat}>
				<Stat />
			</div>

			<!-- <div id="githubStat" class:animate-fade-in={animated.githubStat}>
				<GithubStat />
			</div> -->

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
		
	<!-- </div> -->

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
	@import "tailwindcss";
	@custom-variant dark (&:where(.dark, .dark *));
	@font-face {
    	font-family: 'Poppins';
        src: url('/font/Poppins-Light.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

	*{
		font-family: "Montserrat", sans-serif;
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