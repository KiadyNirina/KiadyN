<script>
    import About from "../lib/About.svelte";
    import Comp from "../lib/Comp.svelte";
    import Exp from "../lib/Exp.svelte";
    import Projects from "../lib/Projects.svelte";
    import Techno from "../lib/Techno.svelte";
    import { onMount } from "svelte";
    import { fade, fly, slide } from 'svelte/transition';
    import Loading from "../lib/Loading.svelte";

    let phase = 1;
    let delay = 5000; // Durée avant le loader (en ms)
    let delay2 = 10000;

    let currentYear = new Date().getFullYear();
    let views = 0;

    async function fetchViews() {
        try {
            const response = await fetch('https://kiadyn.onrender.com/api/views');
            const data = await response.json();
            views = data.views;
        } catch (error) {
            console.error('Erreur lors de la récupération des vues:', error);
        }
    }

    onMount(() => {
        // Passer à la phase 2 après `delayImage` ms
        setTimeout(() => {
            phase = 2;
        }, delay);

        // Passer à la phase 3 après `delayImage + delayLoader` ms
        setTimeout(() => {
            phase = 3;
        }, delay + delay2);
    });

    let loading = false;

    const download = () => {
        loading = true;
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = 'CV_RAMBELOSON_Kiady_Nirina.pdf';
            link.download = "CV_RAMBELOSON_Kiady_Nirina.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            loading = false;
        }, 5000);
    }

    let active = "about";

    const handleClick = (id) => {
        active = id;
    }
</script>

{#if phase < 3}
    <Loading {phase} />
{/if}

{#if phase === 3}
<div class="content">
    <div class="head">
        <img id="pdc" src="pdc2.jpg" alt="">
        <div id="pdp">
            <img src="pdp.jpg" alt="">
            <div class="name">
                <h1>Kiady Nirina RAMBELOSON <img src="badge.png" alt=""></h1>
                <p>Full-Stack Developer & Designer</p>
            </div>
        </div>
    </div>
    <div class="body">
        <div class="sect1">
            <span id="view"><img src="eye.png" alt=""> Views: {views}</span>
            <p><span>“First, solve the problem. Then, write the code.”</span>__John Johnson</p>
            <div class="info">
                <span><img src="adresse-white.png" alt=""> Antananarivo, Madagascar</span>
                <span><img src="tel-white.png" alt=""> +261341039490</span>
                <span><img src="email-white.png" alt=""> <a href="mailto:kiady142ram@gmail.com">kiady142ram@gmail.com</a></span>
                <span><img src="linkedin-white.png" alt=""> <a href="https://www.linkedin.com/in/kiady-ram-5216592a9/">Kiady Ram</a></span>
                <span><img src="facebook-white.png" alt=""> <a href="https://www.facebook.com/kiady.rambeloson">Kiady Rambeloson</a></span>
                <span><img src="github-white.png" alt=""> <a href="https://github.com/KiadyNirina">KiadyNirina</a></span>
            </div>
            <button on:click={download} disabled={loading}><img src="download.png" alt="">{loading ? 'loading...' : 'Download my CV'}</button>
        </div>
        <div class="sect2">
            <div class="nav">
                <span class:active={active == 'about'} on:click={() => handleClick('about')}>About me</span>
                <span class:active={active == 'techno'} on:click={() => handleClick('techno')}>Techno</span>
                <span class:active={active == 'projects'} on:click={() => handleClick('projects')}>Projects</span>
                <span class:active={active == 'exp'} on:click={() => handleClick('exp')}>Exp.</span>
                <span class:active={active == 'comp'} on:click={() => handleClick('comp')}>Comp</span>
            </div>
            {#if active === 'about'}
                <div in:fade out:fade>
                    <About/>
                </div>    
            {:else if active === 'techno'}
                <div out:fly="{{ x: 200, duration: 500 }}">
                    <Techno/>
                </div>
            {:else if active === 'projects'}
                <div out:fade>
                    <Projects/>
                </div>
            {:else if active === 'exp'}
                <div out:fly="{{ x: 200, duration: 500 }}">
                    <Exp/>
                </div>
            {:else if active === 'comp'}
                <div out:fade>
                    <Comp/>
                </div>
            {/if}
        </div>
    </div>
    <div class="footer">
        <div class="social">
            <a href="mailto:kiady142ram@gmail.com"><img src="email-footer.png" alt=""></a>
            <a href="https://github.com/KiadyNirina"><img src="github-footer.png" alt=""></a>
            <a href="https://www.linkedin.com/in/kiady-ram-5216592a9/"><img src="linkedin-footer.png" alt=""></a>
            <a href="https://www.facebook.com/kiady.rambeloson"><img src="facebook-footer.png" alt=""></a>
        </div>
        <p><span><img src="logo.png" alt="">© { currentYear } KiadyN, lnc.</span></p>
    </div>
</div>
{/if}

<style>
    @font-face {
        font-family: 'Rubik';
        src: url('/font/RubikVinyl-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-family: 'poppins';
        src: url('/font/Poppins-Light.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    .content{
        margin-left: auto;
        margin-right: auto;
        max-width: 1100px;
        color: rgba(255, 255, 255, 0.386);
        animation: fadeIn 0.5s ease-out;
    }
    #pdc{
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    #pdp{
        position: relative;
        top: -50px;
        left: 10%;
        display: flex;
        align-items: center;
        width: 60%;
    }
    #pdp .name{
        background-color: rgb(0, 4, 12);
        padding: 10px;
        border-radius: 10px;
    }
    #pdp img{
        height: 120px;
        border-radius: 100%;
        border: 5px solid rgb(0, 4, 12);
        transform-style: preserve-3d;
    }
    #pdp img:hover{
        cursor: pointer;
        box-shadow: 0px 0px 5px #ffffffee;
        animation: rotate3D 5s linear infinite;
    }
    #pdp h1{
        color: rgba(255, 255, 255, 0.7);
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 17px;
        margin: 0px 0px 0px 10px;
        display: flex;
        align-items: center;
    }
    #pdp h1 img{
        height: 15px;
        border: none;
        margin-left: 2px;
    }
    #pdp h1 img:hover{
        cursor: default;
        box-shadow: none;
        animation: none;
    }
    #pdp p{
        font-family: 'poppins';
        color: rgba(255, 255, 255, 0.505);
        font-size: 13px;
        margin: 0px 0px 0px 10px;
    }
    @keyframes rotate3D {
        from {
            transform: rotateY(0deg); /* Commence à 0 degrés */
        }
        to {
            transform: rotateY(360deg); /* Fait une rotation complète de 360 degrés */
        }
    }
    .body{
        display: flex;
    }
    .sect1{
        color: white;
        padding: 20px;
        border: 1px solid rgba(255, 255, 255, 0.061);
        border-radius: 15px;
        width: 30%;
        margin-right: 10px;
    }
    .sect1 p span{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-style: italic;
        font-size: 20px;
        font-weight: lighter;
    }
    .sect1 .info{
        background-color: rgba(255, 255, 255, 0.049);
        padding: 20px;
        border-radius: 10px;
        margin-top: 50px;
    }
    .sect1 .info span{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        display: flex;
        align-items: center;
        font-size: 13px;
        line-height: 28px;
        color: rgba(255, 255, 255, 0.889);
    }
    .sect1 .info span a{
        text-decoration: none;
        color: rgba(255, 255, 255, 0.889);
    }
    .sect1 .info span a:hover{
        text-decoration: underline;
    }
    .sect1 .info img{
        height: 15px;
        margin-right: 10px;
    }
    .sect1 button{
        background-color: rgba(255, 255, 255, 0.049);
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(255, 255, 255, 0.889);
        border: none;
        border-radius: 10px;
        padding: 10px;
        width: 100%;
        margin-top: 10px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: bold;
    }
    .sect1 button img{
        height: 15px;
        margin-right: 10px;
    }
    .sect1 button:hover{
        cursor: pointer;
        background-color: rgba(32, 162, 255, 0.055);
    }
    .sect1 button:disabled:hover{
        cursor: not-allowed;
        color: grey;
    }
    .sect2{
        padding: 20px;
        border: 1px solid rgba(255, 255, 255, 0.061);
        border-radius: 15px;
        width: 70%;
    }
    .nav{
        display: flex;
    }
    .nav span{
        margin-right: auto;
        margin-left: auto;
        font-size: 15px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: bold;
    }
    .nav span:hover{
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.386);
        cursor: pointer;
    }
    .active{
        color: white;
        padding-bottom: 10px;
        border-bottom: 1px solid white;
    }
    #view{
        background-color: rgba(255, 255, 255, 0.049);
        border-radius: 20px;
        padding: 10px;
        color: rgb(190, 190, 190);
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: bold;
        font-size: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #view img{
        height: 20px;
        margin-right: 5px;
    }
    @media screen and (max-width : 700px) {
        .body{
            display: block;
            width: 95%;
            margin-left: auto;
            margin-right: auto;
        }
        #pdp img{
            height: 100px;
        }
        #pdp{
            width: 50%;
        }
        #pdp h1{
            align-items: end;
        }
        .sect1{
            width: auto;
            padding: 20px;
            margin: 0;
        }
        .sect1 p{
            text-align: center;
        }
        .sect1 .info span, .sect1 button{
            font-size: 13px;
        }
        .nav{
            padding: 10px;
        }
        .nav span{
            font-size: 12px;
        }
        .sect2{
            margin-top: 10px;
            width: auto;
            padding: 10px;
        }
    }
    .footer{
        padding: 15px;
        font-size: 13px;
        font-family: 'poppins';
        font-weight: bold;
        color: rgb(83, 83, 83);
    }
    .footer .social{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .footer .social a{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
    }
    .footer .social a img{
        height: 30px;
        padding: 2px;
    }
    .footer .social a:hover {
        background-color: rgba(83, 83, 83, 0.15);
    }
    .footer img{
        height: 20px;
        margin-left: 5px;
        margin-right: 5px;
    }
    .footer span{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @keyframes fadeIn {
        0% {
        opacity: 0;
        }
        100% {
        opacity: 1;
        }
    }
</style>