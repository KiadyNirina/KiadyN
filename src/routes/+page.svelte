<script>
    import { onMount } from "svelte";

    let title_page = "Kiady Nirina";

     // Texte à afficher
    let message = "Welcome to my world🌐! Discover how my expertise and passion transform ideas🧠 into innovative solutions💡. Explore my projects and let’s meet to realize your ambitions together.🚀";
    
    // Variable qui stockera le texte affiché progressivement
    let displayText = "";
    
    // Fonction pour simuler l'animation de saisie
    function typeText() {
        let index = 0;
        displayText = ""; // Réinitialiser le texte affiché
        
        // Utilisation de setInterval pour ajouter un caractère à la fois
        const typingInterval = setInterval(() => {
            displayText += message[index];
            index++;
            
            // Si tout le texte est affiché, arrêter l'intervalle
            if (index === message.length) {
                clearInterval(typingInterval);
            }
        }, 50); // Délai entre chaque caractère (en millisecondes)
    }

    // Appeler la fonction dès que le composant est monté
    onMount(() => {
        typeText();
    });

    let techno1 = false;
    let techno2 = false;
    let techno3 = false;
    let techno4 = false;
    let techno5 = false;
    let techno6 = false;
    let techno7 = false;
    let techno8 = false;

    const handleTechno1 = () => {
        if(techno1 === false) {
            techno1 = true;
        }else{
            techno1 = false;
        }
    } 

    const handleTechno2 = () => {
        if(techno2 === false) {
            techno2 = true;
        }else{
            techno2 = false;
        }
    } 

    const handleTechno3 = () => {
        if(techno3 === false) {
            techno3 = true;
        }else{
            techno3 = false;
        }
    } 

    const handleTechno4 = () => {
        if(techno4 === false) {
            techno4 = true;
        }else{
            techno4 = false;
        }
    } 
    const handleTechno5 = () => {
        if(techno5 === false) {
            techno5 = true;
        }else{
            techno5 = false;
        }
    } 

    const handleTechno6 = () => {
        if(techno6 === false) {
            techno6 = true;
        }else{
            techno6 = false;
        }
    } 

    const handleTechno7 = () => {
        if(techno7 === false) {
            techno7 = true;
        }else{
            techno7 = false;
        }
    } 

    const handleTechno8 = () => {
        if(techno8 === false) {
            techno8 = true;
        }else{
            techno8 = false;
        }
    } 

    let desc = false;

    const handleSeeMore = () => {
        if(desc === false) {
            desc = true;
        } else {
            desc = false;
        }
    }

    let images = [
        {
            title: 'Real_talk',
            text: 'Real Talk is a real-time chat platform 💬 that allows users to communicate seamlessly and instantly, by connecting with friends or joining thematic chat groups.',
            url: '/giphy (11).webp',
            link: '',
            repo: 'https://github.com/KiadyNirina/Real_talk',
            techno: [
                'svelte',
                'laravel',
                'mysql'
            ]
        },
        {
            title: 'eBoss',
            text: 'eBoss is a comprehensive school management platform 🏫, designed to automate and simplify school administrative and academic processes. It offers a centralized digital solution that allows administrators, teachers, students and parents to collaborate effectively.',
            url: '/giphy (10).webp',
            link: '',
            repo: 'https://github.com/KiadyNirina/eBoss',
            techno: [
                'svelte',
                'django',
                'postgresql'
            ],
        },
    ];

    let images2 = [
        {
            title: 'Create_CV',
            text: 'Texte pour image 1',
            url: '/giphy (3).webp',
            link: '',
            repo: 'https://github.com/KiadyNirina/Create_CV',
            techno: [
                'svelte',
            ]
        },
        {
            title: 'E_Stock',
            text: 'Texte pour image 1',
            url: '/giphy (4).webp',
            link: '',
            repo: 'https://github.com/KiadyNirina/E_Stock',
            techno: [
                'html',
                'css',
                'php',
                'mysql',
            ],
        },
    ];
</script>

<div class="body">
    <div class="head-body">
        <div class="navbar">
            <div class="logo">
                <img src="logo.jpg" alt="Logo">
            </div>
            <div class="menu">
                <a href="#about">ℹ️ About me</a>
                <a href="">📞 Contact</a>
            </div>
        </div>
        <div class="content">
            <div class="">
                <h1>Hi!👋</h1>
                <p class="typed-text">{displayText}<span class="cursor">_</span></p>
                <a class="typed-text seeMore" href="/#about">See more about me ➡️</a>
                
            </div>
        </div>
    </div>
    <div class="content-body">
        <div class="about">
            <div class="text" id="about">
                <h1>ℹ️ About me</h1>
                <p>My name is <b>RAMBELOSON Kiady Nirina</b>, I am Malagasy 🇲🇬, I am a computer science student💻 with a specialization in full-stack development. Passionate about technology🌐 and innovation💡, I am dedicated to acquiring solid technical skills and creating successful digital solutions⚙️.</p>
    
                <p>During my academic career🎓, I had the opportunity to work on various projects📂 which allowed me to master frontend and backend technologies. I particularly appreciate the fluid integration between the client🖥️ and server🛠️ side, which allows me to create coherent and interactive web applications.</p>
                    
                <p>In addition to my technical skills👨‍💻, I enjoy collaborating with other developers🤝 and participating in team projects, because I strongly believe that working together is the key to solving complex problems🧠 and achieving ambitious goals🎯.</p>
                    
                <p>I am always looking for new challenges🌱 and opportunities🚪 to practice my skills and learn new technologies📚.</p>
                    
                <p>Do not hesitate to contact me📧 for any questions, collaborations or professional opportunities🙏.</p>
            </div>
            <div class="image">
                <img src="/giphy (9).webp" alt="">
            </div>
        </div>

        <div class="techno">
            <div class="text">
                <h1>🌐💻The Technologies I Use🔧🚀</h1>
                <p>In my projects, I use powerful tools to develop dynamic and efficient solutions, combining creativity 🎨 and technical optimization 🛠️, while guaranteeing a fluid and modern user experience 📱⚡.</p>
            </div>

            <div class="container">
                <div class="card">
                    <div class="">
                        <h2 on:click={handleTechno1}>🌐 Front-End Development</h2>
                    </div>
                    {#if techno1}
                    <div class="img">
                        <img src="/html.png" alt="">
                        <img src="/css.png" alt="">
                        <img src="/js.png" alt="">
                        <img src="/svelte.png" alt="">
                        <img src="/vuejs.png" alt="">
                    </div>
                    {/if}
                </div><hr>
                <div class="card">
                    <div class="">
                        <h2 on:click={handleTechno2}>💻 Back-End Development</h2>
                    </div>
                    {#if techno2}
                    <div class="img">
                        <img src="/php.png" alt="">
                        <img src="/laravel.png" alt="">
                        <img src="/python.png" alt="">
                        <img src="/django.png" alt="">
                    </div>
                    {/if}
                </div><hr>
                <div class="card">
                    <div class="">
                        <h2 on:click={handleTechno3}>🖥️ Content Management & E-Commerce</h2>
                    </div>
                    {#if techno3}
                    <div class="img">
                        <img src="/wordpress.png" alt="">
                        <img src="/shopify.png" alt="">
                    </div>
                    {/if}
                </div><hr>
                <div class="card">
                    <div class="">
                        <h2 on:click={handleTechno4}>🗄️ Databases</h2>
                    </div>
                    {#if techno4}
                    <div class="img">
                        <img src="/sqlite.png" alt="">
                        <img src="/mysql.png" alt="">
                        <img src="/postgresql.png" alt="">
                    </div>
                    {/if}
                </div><hr>
                <div class="card">
                    <div class="">
                        <h2 on:click={handleTechno5}>🧪 API & Testing</h2>
                    </div>
                    {#if techno5}
                    <div class="img">
                        <img src="/postman.png" alt="">
                    </div>
                    {/if}
                </div><hr>
                <div class="card">
                    <div class="">
                        <h2 on:click={handleTechno6}>📂 Version Control</h2>
                    </div>
                    {#if techno6}
                    <div class="img">
                        <img src="/git.png" alt="">
                    </div>
                    {/if}
                </div><hr>
                <div class="card">
                    <div class="">
                        <h2 on:click={handleTechno7}>🎨 Design Tools</h2>
                    </div>
                    {#if techno7}
                    <div class="img">
                        <img src="/photoshop.png" alt="">
                        <img src="/figma.png" alt="">
                    </div>
                    {/if}
                </div><hr>
                <div class="card">
                    <div class="">
                        <h2 on:click={handleTechno8}>☁️ Hosting & Deployment</h2>
                    </div>
                    {#if techno8}
                    <div class="img">
                        <img src="/docker.png" alt="">
                        <img src="/heroku.png" alt="">
                    </div>
                    {/if}
                </div>
            </div>
        </div>

        <div class="project">
            <div class="text">
                <h1>🚀 My Personal Projects 💻</h1>
                <p>In this section, you will discover innovative projects 🌟 that I have carried out, combining creativity 🎨 and technical expertise 🔧. Each project reflects my commitment to finding effective solutions 💡 and taking on stimulating challenges 🎯, while remaining at the forefront of modern technologies 🖥️.</p>
            </div>
            <div class="card-project">
                <div class="row">
                    {#each images as img}
                        <div class="card-1">
                            <img src="{img.url}" alt="">
                            <div class="info">
                                <h2>{img.title}</h2>
                                {#if desc}
                                    <p>{img.text}</p>
                                {/if}
                                {#if !desc}
                                    <span class="seeMore" on:click={handleSeeMore}>See more ➡️</span>
                                {:else}
                                    <span class="seeMore" on:click={handleSeeMore}>See less ⬅️</span>
                                {/if}
                                <span>
                                    {#each img.techno as tech}
                                        <div class="lang">
                                            <img src="/{tech}.png" alt="">
                                            {tech}
                                        </div> 
                                    {/each}
                                </span>
                                {#if img.link != ""}
                                    <span>🔗 : </span>
                                {/if}
                                <span><img src="/github.png" alt=""> : <a href="{img.repo}">{img.title}</a></span>
                            </div>
                        </div>
                    {/each}
                </div>
                <div class="row">
                    {#each images2 as img}
                        <div class="card-1">
                            <img src="{img.url}" alt="">
                            <div class="info">
                                <h2>{img.title}</h2>
                                {#if desc}
                                    <p>{img.text}</p>
                                {/if}
                                {#if !desc}
                                    <span class="seeMore" on:click={handleSeeMore}>See more ➡️</span>
                                {:else}
                                    <span class="seeMore" on:click={handleSeeMore}>See less ⬅️</span>
                                {/if}
                                <span>
                                    {#each img.techno as tech}
                                        <div class="lang">
                                            <img src="/{tech}.png" alt="">
                                            {tech}
                                        </div> 
                                    {/each}
                                </span>
                                {#if img.link != ""}
                                    <span>🔗 : {img.link}</span>
                                {/if}
                                <span><img src="/github.png" alt=""> : <a href="{img.repo}">{img.title}</a></span>
                            </div>
                        </div>
                    {/each}
                    </div>
            </div>
        </div>

        <div class="project-freelance">
            <div class="sect1">
                <h2>🛠️ Projects Made on Demand 📋</h2>
                <p>Découvrez ici des projets passionnants que j'ai réalisés sur demande 💼, répondant à des besoins spécifiques 🎯 et apportant des solutions sur mesure 🧩. Ces projets m'ont permis de collaborer étroitement avec des clients 🤝 et de relever des défis techniques stimulants 🚀, tout en respectant des exigences précises et des délais serrés ⏳.</p>
            </div>
            <div class="sect2">

            </div>
        </div>
    </div>
</div>

<style>
    .head-body {
        background: url('/giphy (7).webp');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .content {
        align-items: center;
        padding: 80px;
        height: 500px;
        color: white;
        font-family: 'Courier New', Courier, monospace;
        filter: calc(20px);
        max-width: 1200px;
        display: flex;
        margin-left: auto;
        margin-right: auto;
    }
    
    .content h1 {
        font-family: 'Courier New', Courier, monospace;
        font-size: 60px;
        color: white;
        font-weight: 100;
        position: relative;
        /* animation: glitch 1.5s infinite; */
        word-break: break-word;
        overflow: hidden;
        animation: flicker 1.5s infinite alternate;
    }

    /* Création de couches décalées pour simuler l'effet glitch */
    .content h1::before,
    .content h1::after {
        content: 'Hi!'; /* Le même texte que dans l'élément principal */
        position: absolute;
        top: 0;
        left: 0;
        color: #00FF00;
        overflow: hidden;
    }

    /* Définition des décalages et couleurs des copies pour l'effet glitch */
    .content h1::before {
        left: 2px;
        text-shadow: -2px 0 blue;
        clip: rect(0, 900px, 0, 0);
        animation: glitchTop 1.5s infinite linear alternate-reverse;
    }

    .content h1::after {
        left: -2px;
        text-shadow: -2px 0 red;
        clip: rect(0, 900px, 0, 0);
        animation: glitchBottom 1.5s infinite linear alternate-reverse;
    }

    /* Animation qui crée l'effet de décalage pour la première copie */
    @keyframes glitchTop {
        0% {
            clip: rect(0, 900px, 40px, 0);
        }
        20% {
            clip: rect(10px, 900px, 40px, 0);
        }
        40% {
            clip: rect(80px, 900px, 50px, 0);
        }
        60% {
            clip: rect(45px, 900px, 10px, 0);
        }
        80% {
            clip: rect(30px, 900px, 50px, 0);
        }
        100% {
            clip: rect(0, 900px, 40px, 0);
        }
    }

    /* Animation qui crée l'effet de décalage pour la deuxième copie */
    @keyframes glitchBottom {
        0% {
            clip: rect(0, 900px, 30px, 0);
        }
        20% {
            clip: rect(85px, 900px, 45px, 0);
        }
        40% {
            clip: rect(20px, 900px, 90px, 0);
        }
        60% {
            clip: rect(90px, 900px, 50px, 0);
        }
        80% {
            clip: rect(15px, 900px, 60px, 0);
        }
        100% {
            clip: rect(0, 900px, 30px, 0);
        }
    }

    .seeMore{
        text-decoration: none;
        color: #00FF00;
        border: 1px solid #00FF00;
        padding: 10px;
        margin-top: 10px;
        transition: 0.5s;
    }

    .seeMore:hover{
        color: white;
        background-color: #00FF00;
    }

    .navbar{
        position: fixed;
        background-color: transparent;
        backdrop-filter: blur(1px);
        top: 0;
        width: 100%;
        padding: 15px;
        max-width: 1200px;
        left: 50%;
        display: flex;
        transform: translateX(-50%);
        align-items: center;
        z-index: 10;
    }

    .logo img{
        height: 50px;
        border-radius: 100%;
        margin-left: 20px;
        border: 1px solid #00FF00;
        box-shadow: 0px 0px 15px #00ff00c8;
    }

    .menu{
        margin-left: auto;
    }

    .menu a{
        font-family: 'Courier New', Courier, monospace;
        color: white;
        text-decoration: none;
        margin-left: 20px;
        margin-right: 20px;
        font-size: 15px;
        transition: 0.5s;
    }
    .menu a:hover{
        color: #00FF00;
        text-shadow: 0px 5px 5px #00FF00;
    }

    .typed-text {
        font-family: 'Courier New', Courier, monospace;
        font-size: 15px;
        margin-bottom: 50px;
        color: #00FF00; /* Couleur de type terminal */
        white-space: normal; /* Pour conserver les espaces dans le texte */
        text-shadow: 0px 0px 10px rgba(0, 255, 0, 0.75), 
                    0px 0px 20px rgba(0, 255, 0, 0.5),
                    0px 0px 30px rgba(0, 255, 0, 0.25);
        animation: flicker 1.5s infinite alternate;
        line-height: 22px;
    }

    @keyframes flicker {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.8; }
        75% { opacity: 0.9; }
    }

    .cursor {
        animation: blink 0.5s infinite;
    }

    @keyframes blink {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }

    .about{
        display: flex;
        padding: 20px;
        max-width: 1200px;
        margin-top: 300px;
        margin-bottom: 300px;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
    }

    .about .text{
        color:  #00FF00;
        font-family: 'Courier New', Courier, monospace;
        border: 1px solid #00ff00b5;
        box-shadow: 0px 0px 5px #00ff0060;
        border-radius: 10px;
        line-height: 25px;
        padding: 20px;
        margin-right: 10px;
    }

    .about .text p{
        margin-top: 20px;
        font-size: 15px;
        white-space: normal; /* Pour conserver les espaces dans le texte */
        text-shadow: 0px 0px 10px rgba(0, 255, 0, 0.75), 
                    0px 0px 20px rgba(0, 255, 0, 0.5),
                    0px 0px 30px rgba(0, 255, 0, 0.25);
        animation: flicker 1.5s infinite alternate;
    }

    .image{
    }

    .techno{
        padding: 20px;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
    }

    .techno .text{
        color:  #00FF00;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
        border-radius: 10px;
        line-height: 25px;
        padding: 20px;
        margin-right: 10px;
    }

    .techno .text p{
        margin-top: 20px;
        font-size: 15px;
        white-space: normal; /* Pour conserver les espaces dans le texte */
        text-shadow: 0px 0px 10px rgba(0, 255, 0, 0.75), 
                    0px 0px 20px rgba(0, 255, 0, 0.5),
                    0px 0px 30px rgba(0, 255, 0, 0.25);
        animation: flicker 1.5s infinite alternate;
    }

    .container{
        box-shadow: 0px 0px 3px #00ff0077;
        border-radius: 10px;
        display: flex;
    }

    hr{
        border: 0.5px solid #00ff001c;
    }

    .card{
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 20px;
    }

    .card h2{
        color:  #00ff00cd;
        font-family: 'Courier New', Courier, monospace;
        font-size: 17px;
        text-align: center;
        transition: 0.5s;
    }

    .card h2:hover{
        cursor: pointer;
        text-shadow: 0px 0px 10px rgba(0, 255, 0, 0.75), 
                    0px 0px 20px rgba(0, 255, 0, 0.5),
                    0px 0px 30px rgba(0, 255, 0, 0.25);
    }

    .card .img{
        justify-content: center;
        perspective: 1000px;
    }

    .img img{
        margin-left: auto;
        margin-right: auto;
        height: 60px;
        padding: 10px;
        border-radius: 100%;
        transform-style: preserve-3d; /* Préserve l'effet 3D */
    }

    .img img:hover{
        cursor: pointer;
        box-shadow: 0px 0px 10px #00ff00ee;
        animation: rotate3D 2s linear infinite;
    }

    /* Animation de rotation continue */
    @keyframes rotate3D {
        from {
            transform: rotateY(0deg); /* Commence à 0 degrés */
        }
        to {
            transform: rotateY(360deg); /* Fait une rotation complète de 360 degrés */
        }
    }

    .project{
        padding: 20px;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 300px;
        margin-bottom: 300px;
        color: #00FF00;
        font-family: 'Courier New', Courier, monospace;
    }

    .project .text{
        text-align: center;
        padding: 10px;
    }

    .project .text p{
        margin-top: 20px;
        font-size: 15px;
        white-space: normal; /* Pour conserver les espaces dans le texte */
        text-shadow: 0px 0px 10px rgba(0, 255, 0, 0.75), 
                    0px 0px 20px rgba(0, 255, 0, 0.5),
                    0px 0px 30px rgba(0, 255, 0, 0.25);
        animation: flicker 1.5s infinite alternate;
    }

    .card-project{
        border-radius: 15px;
        padding: 10px;
    }

    .row{
        display: flex;
    }

    .card-1{
        width: 50%;
        display: flex;
        padding: 5px;
        border: 1px solid #00ff0061;
        border-radius: 10px;
        transition: opacity 0.3s ease; /* Transition douce pour l'affichage */
        margin: 5px;
    }

    .card-1:hover .overlay-project {
        opacity: 1; /* Le texte ou bouton devient visible */
        display: block;
        cursor: pointer;
        border: 1px solid #00ff0022;
    }

    .card-1 img{
        width: 200px;
        height: auto;
    }

    .info{
        padding: 10px;
        justify-content: center;
        align-items: center;
        color: #00FF00;
        transition: opacity 0.3s ease; /* Transition douce pour l'affichage */
        width: auto;
    }

    .info p{
        font-size: 12px;
        white-space: normal; /* Pour conserver les espaces dans le texte */
        text-shadow: 0px 0px 10px rgba(0, 255, 0, 0.75), 
                    0px 0px 20px rgba(0, 255, 0, 0.5),
                    0px 0px 30px rgba(0, 255, 0, 0.25);
        animation: flicker 1.5s infinite alternate;
    }

    .info span a{
        text-shadow: 0px 0px 0px transparent;
        color: rgb(145, 145, 255);
    }

    .info span{
        display: flex;
        align-items: center;
        font-size: 12px;
        margin-top: 5px;
    }

    .info .seeMore{
        margin-bottom: 10px;
        border: none;
        padding: 0;
        color: rgb(255, 164, 164);
        font-weight: bold;
    }

    .info .seeMore:hover{
        cursor: pointer;
        color: white;
        background-color: #00ff00a6;
    }

    .info span img{
        height: 15px;
        width: auto;
        margin-right: 5px;
    }

    .info h2{
        font-size: 20px;
    }

    .lang{
        display: flex;
        align-items: center;
        border: 1px solid #008300;
        padding: 5px;
        border-radius: 5px;
        margin: 2px;
    }

    @media screen and (max-width: 1200px) {
        .about{
            display: block;
            align-items: center;
        }
        .about .text{
            margin-right: 0;
        }
        .about .image{
            margin-top: 10px;
            display: flex;
            justify-content: center;
        }
        .about .image img{
            width: 100%;
        }

        .techno .container{
            display: block;
        }
        .techno .container .card .img{
            display: flex;
            justify-content: center;
        }

        .project .card-project .row{
            display: block;
        }
        .card-project{
            padding: 0;
        }
        .card-1{
            width: auto;
            margin-bottom: 10px;
        }
    }

    @media screen and (max-width: 600px){
        .content {
            padding: 20px;
            height: 700px;
            color: white;
            font-family: 'Courier New', Courier, monospace;
            filter: calc(20px);
            max-width: 1200px;
            display: flex;
            margin-left: auto;
            margin-right: auto;
        }
        .img img{
            height: 50px;
        }
        .card-1{
            display: block;
        }
        .card-1 img{
            width: 100%;
        }

        .project{
            padding: 10px;
            margin-left: auto;
            margin-right: auto;
        }
        .card-project{
            border-radius: 15px;
            padding: 0px;
        }
    }

</style>