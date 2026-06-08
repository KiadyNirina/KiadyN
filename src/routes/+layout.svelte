<script>
	import { PUBLIC_SITE_URL } from '$env/static/public';
</script>

<svelte:head>
	<meta name="author" content="KiadyNirina" />
	<meta name="publisher" content="KiadyNirina" />

	<link rel="canonical" href={PUBLIC_SITE_URL} />

	<meta property="og:site_name" content="KiadyNirina" />

    <script type="application/ld+json">
    {JSON.stringify({ 
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "KiadyNirina",
            "jobTitle": "Développeur Full-Stack",
            "url": PUBLIC_SITE_URL,
            "knowsAbout": [ "Svelte", "Vue.js", "PHP", "Python", "Laravel", "Django", "PostgreSQL" ]
    })}
    </script>
</svelte:head>

<slot />