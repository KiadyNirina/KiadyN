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