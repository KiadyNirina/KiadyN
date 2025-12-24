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
	import Chat from '$lib/components/Chat.svelte';

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
</script>

{#if isLoading}
	<!-- Loading Screen -->
	<div class="fixed inset-0 z-50 flex flex-col items-center justify-center">
		
		<!-- Logo Central -->
        <div class="relative z-10 flex flex-col items-center">
            <div class="relative mb-12" in:scale={{ duration: 1000, start: 0.9 }}>
                <div class="w-24 h-24 sm:w-32 sm:h-32 dark:bg-white bg-black flex items-center justify-center rounded-2xl shadow-[0_0_50px_rgba(255,255,255,0.15)] overflow-hidden">
                     <img src="/logo.png" alt="Logo" class="w-2/3 h-2/3 object-contain dark:invert" />
                </div>
                <!-- Orbiting Ring -->
                <div class="absolute -inset-4 border border-black/30 dark:border-white/30 rounded-2xl animate-pulse-gentle"></div>
            </div>

            <!-- Minimalist Progress -->
            <div class="w-64 space-y-4">
                <div class="flex justify-between items-end">
                    <span class="dark:text-white/30 text-black/70 text-[10px] uppercase tracking-[0.3em] font-light">Initialisation</span>
                    <span class="dark:text-white text-black font-light text-sm tabular-nums">{Math.round(progress)}%</span>
                </div>
                <div class="h-[1px] w-full dark:bg-white/10 bg-black/10  relative overflow-hidden">
                    <div 
                        class="absolute inset-y-0 left-0 dark:bg-white bg-black transition-all duration-500 ease-out"
                        style="width: {progress}%"
                    ></div>
                </div>
            </div>
        </div>
	</div>
{/if}

	<!-- Main Content -->
	<div class="min-h-screen transition-colors duration-300 animate-fade-in-content" class:hidden={isLoading}>
		<Header />

		<Chat />
		
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

		<Footer />
	</div>

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