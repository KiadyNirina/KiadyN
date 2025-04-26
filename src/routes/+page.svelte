<script>
    import About from "../lib/About.svelte";
    import Comp from "../lib/Comp.svelte";
    import Exp from "../lib/Exp.svelte";
    import Projects from "../lib/Projects.svelte";
    import Techno from "../lib/Techno.svelte";
    import Contact from "../lib/Contact.svelte";
    import { onMount } from "svelte";
    import { fade, fly, slide } from 'svelte/transition';
    import Loading from "../lib/Loading.svelte";
    import { supabase } from '$lib/supabaseClient';
    import Theme from "../lib/Theme.svelte";
    import Icon from '@iconify/svelte';

    let phase = 1;
    let delay2 = 2000;

    let currentYear = new Date().getFullYear();
    let views = 0;

    onMount(async () => {
        const { data, error } = await supabase
        .rpc('increment_views')
        
        if (!error && data) {
        views = data
        }

        setTimeout(() => {
            phase = 3;
        }, delay2);
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

    let active = "projects";

    const handleClick = (id) => {
        active = id;
    }
</script>

<!-- {#if phase < 3}
    <Loading {phase} />
{/if} -->

<!-- {#if phase === 3} -->
<div class="content">
    <div class="head">
        <div id="pdp">
            <img src="pdp1.png" alt="">
            <div class="name">
                <h1>Kiady Nirina RAMBELOSON <img src="badge.png" alt=""></h1>
                <p class="text-gray-300 flex items-center"><Icon icon="mdi:laptop" class="mr-1" />Full-Stack Developer & Designer</p>
                <p id="openWork" class="text-green-600"><Icon icon="mdi:handshake" class="mr-1" /><span>Open for collaborations</span></p>
            </div>
            <Theme theme="dark" />
        </div>
    </div>
    <div class="body">
        <div class="sect1 w-[30%]">
            <span id="view"><img src="eye.png" alt=""> Views: {views}</span>
            <p class="mt-2"><span>“First, solve the problem. Then, write the code.”</span>__John Johnson</p>
            <div class="info">
                <span class="text-sm duration-300 cursor-pointer group"><Icon icon="mdi:map-marker" class="mr-2 transition-all duration-300 group-hover:-translate-y-1" width="20px"/>Antananarivo, Madagascar</span>
                <span class="text-sm duration-300 cursor-pointer group"><Icon icon="mdi:phone" class="mr-2 transition-all duration-300 group-hover:-translate-y-1" width="20px"/>+261341039490</span>
                <span class="text-sm duration-300 cursor-pointer group"><Icon icon="mdi:email" class="mr-2 transition-all duration-300 group-hover:-translate-y-1" width="20px"/><a href="mailto:kiady142ram@gmail.com">kiady142ram@gmail.com</a></span>
                <span class="text-sm duration-300 cursor-pointer group"><Icon icon="mdi:linkedin" class="mr-2 transition-all duration-300 group-hover:-translate-y-1" width="20px"/><a href="https://www.linkedin.com/in/kiady-ram-5216592a9/">Kiady Ram</a></span>
                <span class="text-sm duration-300 cursor-pointer group"><Icon icon="mdi:facebook" class="mr-2 transition-all duration-300 group-hover:-translate-y-1" width="20px"/><a href="https://www.facebook.com/kiady.rambeloson">Kiady Rambeloson</a></span>
                <span class="text-sm duration-300 cursor-pointer group"><Icon icon="mdi:github" class="mr-2 transition-all duration-300 group-hover:-translate-y-1" width="20px"/><a href="https://github.com/KiadyNirina">KiadyNirina</a></span>
            </div>
            <button on:click={download} disabled={loading}><img src="download.png" alt="">{loading ? 'loading...' : 'Download my CV'}</button>
        </div>
        <div class="sect2">
            <div class="nav">
                <span class:active={active == 'projects'} class="flex items-center transition-all duration-300 ease-in-out" on:click={() => handleClick('projects')}><Icon icon="mdi:rocket-launch" class="mr-1"/> Works</span>
                <span class:active={active == 'about'} class="flex items-center transition-all duration-300 ease-in-out" on:click={() => handleClick('about')}><Icon icon="mdi:account" class="mr-1"/>About me</span>
                <span class:active={active == 'techno'} class="flex items-center transition-all duration-300 ease-in-out" on:click={() => handleClick('techno')}><Icon icon="mdi:cog" class="mr-1"/>Techno</span>
                <span class:active={active == 'exp'} class="flex items-center transition-all duration-300 ease-in-out" on:click={() => handleClick('exp')}><Icon icon="mdi:briefcase" class="mr-1"/>Exp.</span>
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
    <div class="contact">
        <Contact/>
    </div>
    <div class="mt-5 max-w-xs md:max-w-md flex items-center mx-auto gap-4 w-full px-4">
        <hr class="flex-grow border-t border-gray-700" />
        <span class="text-gray-500 text-sm whitespace-nowrap">or</span>
        <hr class="flex-grow border-t border-gray-700" />
      </div>
    <div class="footer mt-2 flex flex-col items-center space-y-2">
        <div class="flex items-center space-x-4 font-light font-sans">
            <a href="mailto:kiady142ram@gmail.com" class="hover:text-blue-500 transition-colors duration-300"><Icon icon="ri:mail-line" height="40"/></a>
            <a href="https://www.linkedin.com/in/kiady-ram-5216592a9/" class="hover:text-blue-500 transition-colors duration-300"><Icon icon="ri:linkedin-line" height="40"/></a>
            <a href="https://www.facebook.com/kiady.rambeloson" class="hover:text-blue-500 transition-colors duration-300"><Icon icon="ri:facebook-line" height="40"/></a>
            <a href="https://wa.me/+261335777152" class="hover:text-blue-500 transition-colors duration-300"><Icon icon="ic:baseline-whatsapp" height="40"/></a>
        </div>
        <p><span><img src="logo.png" alt="">© { currentYear } KiadyN, lnc.</span></p>
    </div>
</div>
<!-- {/if} -->

<style>
    @import "tailwindcss";
    @font-face {
        font-family: 'poppins';
        src: url('/font/Poppins-Light.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    .content{
        margin-left: auto;
        margin-right: auto;
        max-width: 1100px;
        color: white;
        animation: fadeIn 0.5s ease-out;
    }
    .head{
        padding: 30px;
        animation: fadeIn 1s ease-in-out;
    }
    #pdp{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60%;
        margin-left: auto;
        margin-right: auto;
    }
    #pdp .name{
        background-color: rgba(0, 4, 12, 0.689);
        padding: 10px;
        border-radius: 10px;
    }
    #pdp img{
        height: 150px;
        border-radius: 100%;
        border: 5px solid rgba(0, 4, 12, 0.689);
        transform-style: preserve-3d;
    }
    #pdp img:hover{
        cursor: pointer;
        box-shadow: 0px 0px 5px #ffffffee;
        animation: rotate3D 5s linear infinite;
    }
    #pdp h1{
        color: white;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 25px;
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
        font-size: 15px;
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
        animation: slideIn 1s ease-in-out;
    }
    #openWork {
        display: flex;
        align-items: center;
        padding-top: 10px;
    }
    #openWork span{
        font-family: 'poppins';
        font-weight: bolder;
        font-size: 12px;
    }
    #openWork span:hover {
        cursor:auto;
        box-shadow: none;
        animation: none;
    }
    .sect1{
        color: white;
        padding: 20px;
        border: 1px solid rgba(255, 255, 255, 0.078);
        border-radius: 15px;
        margin-right: 10px;
        position: sticky;
        top: 20px;
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
        font-family: 'poppins';
        display: flex;
        align-items: center;
        font-size: 12px;
        line-height: 28px;
        color: white;
    }
    .sect1 .info span a{
        text-decoration: none;
        color: white;
    }
    .sect1 .info span a:hover{
        text-decoration: underline;
    }
    .sect1 .info img{
        height: 20px;
        margin-right: 10px;
    }
    .sect1 button{
        background-color: rgba(255, 255, 255, 0.049);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
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
        background-color: rgba(32, 162, 255, 0.171);
    }
    .sect1 button:disabled:hover{
        cursor: not-allowed;
        color: grey;
    }
    .sect2{
        padding: 20px;
        border: 1px solid rgba(255, 255, 255, 0.078);
        border-radius: 15px;
        width: 80%;
    }
    .nav{
        display: flex;
        position: sticky;
        top: 0;
        backdrop-filter: blur(50px);
        z-index: 1;
        color: grey;
    }
    .nav span{
        margin-right: auto;
        margin-left: auto;
        font-size: 15px;
        font-family: 'poppins bold';
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
        color: white;
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
    .contact {
        width: 60%;
        margin-left: auto;
        margin-right: auto;
    }
    @media screen and (max-width : 1000px) {
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
            width: 100%;
        }
        #pdp h1{
            align-items: end;
        }
        .sect1{
            width: auto;
            padding: 20px;
            margin: 0;
            position: static; /* Remove sticky positioning in responsive mode */
        }
        .sect1 p{
            text-align: center;
        }
        .sect1 .info span, .sect1 button{
            font-size: 13px;
        }
        .nav{
            padding: 10px;
            position: sticky;
            top: 0;
        }
        .nav span{
            font-size: 12px;
        }
        .sect2{
            margin-top: 10px;
            width: auto;
            padding: 10px;
        }
        .contact{
            width: 95%;
        }
    }
    .footer{
        padding: 15px;
        font-size: 13px;
        font-family: 'poppins';
        font-weight: bold;
        color: rgb(120, 120, 120);
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
        0% { opacity: 0; transform: translateY(-20px); }
        100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideIn {
        0% { opacity: 0; transform: translateX(-20px); }
        100% { opacity: 1; transform: translateX(0); }
    }
</style>