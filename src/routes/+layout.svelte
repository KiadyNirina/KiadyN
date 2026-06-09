<script>
	import { PUBLIC_SITE_URL } from '$env/static/public';
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

<slot />