<script>
	import { onMount } from "svelte";
	import { fade, fly } from 'svelte/transition';
	import Icon from "@iconify/svelte";
	import ThemeToggle from "$lib/ThemeToggle.svelte";
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
    import Experiences from '$lib/components/Experiences.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

    let animated = {
        hero: false,
        about: false,
        projects: false,
        skills: false,
        experiences: false,
        contact: false
    };

	let scrollToTop = false;

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						animated = { ...animated, [entry.target.id]: true };
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
		const target = scrollToTop ? 'hero' : 'contact';
		const element = document.getElementById(target);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<div class="min-h-screen transition-colors duration-300 font-['Poppins']">
    <Header />
    
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="hero" class:animate-fade-in={animated.hero}>
            <Hero />
        </div>
        
        <div id="about" class:animate-fade-in={animated.about}>
            <About />
        </div>
        
        <div id="projects" class:animate-fade-in={animated.projects}>
            <Projects />
        </div>
        
        <div id="skills" class:animate-fade-in={animated.skills}>
            <Skills />
        </div>

        <div id="experiences" class:animate-fade-in={animated.experiences}>
            <Experiences />
        </div>
        
        <div id="contact" class:animate-fade-in={animated.contact}>
            <Contact />
        </div>
    </main>

	<button
		on:click={scrollToSection}
		class="fixed bottom-6 right-6 p-3 bg-blue-600 dark:bg-blue-800 text-white rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-900 transition-all duration-300 z-50"
		aria-label={scrollToTop ? 'Retourner en haut' : 'Aller en bas'}
	>
		<Icon
			icon={scrollToTop ? 'mdi:chevron-up' : 'mdi:chevron-down'}
			width="24"
			height="24"
			class="transition-transform duration-300"
		/>
	</button>

    <Footer />
</div>

<style>
	@import "tailwindcss";
	@custom-variant dark (&:where(.dark, .dark *));
	@font-face {
    	font-family: 'Poppins';
        src: url('/font/Poppins-Light.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    
    .animate-fade-in {
        animation: fadeIn 1.5s ease-out forwards;
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
</style>