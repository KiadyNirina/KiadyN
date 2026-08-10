<script>
	import { PUBLIC_SITE_URL } from '$env/static/public';
    import '$lib/posthog';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Chat from '$lib/components/Chat.svelte';
</script>

<svelte:head>
	<meta name="author" content="KiadyNirina" />
	<meta name="publisher" content="KiadyNirina" />

	<link rel="canonical" href={PUBLIC_SITE_URL} />

	<meta property="og:site_name" content="KiadyNirina" />

	<script type="application/ld+json">
		{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "KiadyNirina",
            "alternateName": "KiadyNirina",
            "jobTitle": "Développeur Full-Stack",
            "url": "https://kiadynirina.netlify.app/",
            "knowsAbout": [
                "Svelte",
                "Vue.js",
                "PHP",
                "Python",
                "Laravel",
                "Django",
                "PostgreSQL"
            ],
            "sameAs": [
                "https://github.com/KiadyNirina"
            ]
        }
	</script>

    <script type="application/ld+json">
		{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "KiadyNirina",
            "alternateName": "KiadyNirina",
            "url": "https://kiadynirina.netlify.app/",
            "publisher": {
                "@type": "Person",
                "name": "KiadyNirina"
            }
        }
	</script>
</svelte:head>

<div class="min-h-screen transition-colors duration-300 animate-fade-in-content">
    <Header />

    <Chat />

    <main>
        <slot />
    </main>

    <Footer />
</div>