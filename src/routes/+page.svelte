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
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

    let animated = {
        hero: false,
        about: false,
        projects: false,
        skills: false,
        contact: false
    };

    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animated = {...animated, [entry.target.id]: true};
                }
            });
        }, { threshold: 0.1 });

        Object.keys(animated).forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    });
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
        
        <div id="contact" class:animate-fade-in={animated.contact}>
            <Contact />
        </div>
    </main>
    
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