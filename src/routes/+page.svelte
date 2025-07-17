<script>
	import { onMount } from "svelte";
	import Icon from "@iconify/svelte";
	import ThemeToggle from "$lib/ThemeToggle.svelte";
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="min-h-screen transition-colors duration-300 font-['Poppins']">
	<div class={`min-h-screen transition-colors duration-300`}>
		<Header />
		
		<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<Hero />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</main>
		
		<Footer />
	</div>
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
</style>