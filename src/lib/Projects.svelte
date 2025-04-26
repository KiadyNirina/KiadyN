<script>
    import { slide } from "svelte/transition";
    import Beyond from "./project info/Beyond.svelte";
    import Createcv from "./project info/Createcv.svelte";
    import Datalens from "./project info/Datalens.svelte";
    import Fintrack from "./project info/Fintrack.svelte"; 
    import Mycore from "./project info/Mycore.svelte";
    import Realtalk from "./project info/Realtalk.svelte";
    import EStock from "./project info/EStock.svelte";
    import Eboss from "./project info/Eboss.svelte";
    import Mci from "./project info/MCI.svelte";

    let selectedProject = null;

    const projects = {
        fintrack: Fintrack,
        datalens: Datalens,
        realtalk: Realtalk,
        mycore: Mycore,
        beyond: Beyond,
        createcv: Createcv,
        eboss: Eboss,
        estock: EStock,
        mci: Mci
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleClick = (projectName) => {
        selectedProject = projectName;
        scrollToTop();
    };

    const handleClickReturn = () => {
        selectedProject = null;
        scrollToTop();
    };
</script>

<div>
    {#if selectedProject}
        <p id="return" class="mt-5 mb-5" on:click={handleClickReturn}>Return to all</p>
        <div in:slide out:slide>
            {#if projects[selectedProject]}
                <svelte:component this={projects[selectedProject]} />
            {/if}
        </div>
    {:else}
        <div class="head pt-5">
            <h1>Hello!</h1>
            <p class="text-gray-300">Here are some of the projects I have worked on. Each achievement reflects my commitment to creating efficient and intuitive web solutions.</p>
        </div>
        <div class="projects">
            <!-- <div class="card2" on:click={() => handleClick('fintrack')}>
                <img src="image.png" alt="">
                <div class="info">
                    <h3>FinTrack <span id="date">2024</span></h3>
                    <div class="techno">
                        <div class="techno2">
                            <img src="vuejs.png" alt="">
                            <span>Vuejs</span>
                        </div>
                        <div class="techno2">
                            <img src="laravel.png" alt="">
                            <span>Laravel</span>
                        </div>
                        <div class="techno2">
                            <img src="mysql.png" alt="">
                            <span>MySQL</span>
                        </div>
                    </div>
                    <p>... <span id="seeMore">See more</span></p>
                </div>
            </div> -->

            <div class="card1" on:click={() => handleClick('datalens')}>
                <img src="datalens.jpg" alt="">
                <div class="info">
                    <h3>DataLens <span id="date">2024</span></h3>
                    <div class="techno">
                        <div class="techno2">
                            <img src="python.png" alt="">
                            <span>Python</span>
                        </div>
                    </div>
                    <p>DataLens is a data visualization ... <span id="seeMore">See more</span></p>
                </div>
            </div>
        </div>

        <div class="projects">
            <div class="card2" on:click={() => handleClick('realtalk')}>
                <img src="real_talk.jpg" alt="">
                <div class="info">
                    <h3>Real_Talk <span id="date">2024</span></h3>
                    <div class="techno">
                        <div class="techno2">
                            <img src="svelte.png" alt="">
                            <span>Svelte</span>
                        </div>
                        <div class="techno2">
                            <img src="laravel.png" alt="">
                            <span>Laravel</span>
                        </div>
                        <div class="techno2">
                            <img src="mysql.png" alt="">
                            <span>MySQL</span>
                        </div>
                    </div>
                    <p>Real_Talk is a real-time chat platform,... <span id="seeMore">See more</span></p>
                </div>
            </div>
    
            <div class="card1" on:click={() => handleClick('beyond')}>
                <img src="beyond.PNG" alt="">
                <div class="info">
                    <h3>Beyond | <span>freelance</span> <span id="date">2024</span></h3>
                    <div class="techno">
                        <div class="techno2">
                            <img src="wordpress.png" alt="">
                            <span>WordPress</span>
                        </div>
                    </div>
                    <p>The Beyond company showcase site... <span id="seeMore">See more</span></p>
                </div>
            </div>
        </div>
    
        <div class="projects">
            <div class="card2" on:click={() => handleClick('mycore')}>
                <img src="mycore.PNG" alt="">
                <div class="info">
                    <h3>MyCore | <span>freelance</span> <span id="date">2024</span></h3>
                    <div class="techno">
                        <div class="techno2">
                            <img src="wordpress.png" alt="">
                            <span>WordPress</span>
                        </div>
                    </div>
                    <p>The Mycore company showcase site... <span id="seeMore">See more</span></p>
                </div>
            </div>
        
            <div class="card1" on:click={() => handleClick('eboss')}>
                <img src="eboss.jpg" alt="">
                <div class="info">
                    <h3>eBoss <span id="date">2024</span></h3>
                    <div class="techno">
                        <div class="techno2">
                            <img src="svelte.png" alt="">
                            <span>Svelte</span>
                        </div>
                        <div class="techno2">
                            <img src="django.png" alt="">
                            <span>Django</span>
                        </div>
                        <div class="techno2">
                            <img src="postgresql.png" alt="">
                            <span>Postgresql</span>
                        </div>
                    </div>
                    <p>eBoss is a comprehensive school ... <span id="seeMore">See more</span></p>
                </div>
            </div>
        </div>
    
        <div class="projects">
            <div class="card2" on:click={() => handleClick('estock')}>
                <img src="e_stock.jpg" alt="">
                <div class="info">
                    <h3>E_Stock <span id="date">2023</span></h3>
                    <div class="techno">
                        <div class="techno2">
                            <img src="html.png" alt="">
                            <span>Html</span>
                        </div>
                        <div class="techno2">
                            <img src="css.png" alt="">
                            <span>Css</span>
                        </div>
                        <div class="techno2">
                            <img src="php.png" alt="">
                            <span>PHP</span>
                        </div>
                        <div class="techno2">
                            <img src="mysql.png" alt="">
                            <span>Mysql</span>
                        </div>
                    </div>
                    <p>E_Stock is a comprehensive business ... <span id="seeMore">See more</span></p>
                </div>
            </div>

            <div class="card2" on:click={() => handleClick('mci')}>
                <img src="moncomparateurimmo.PNG" alt="">
                <div class="info">
                    <h3>MCI <span id="date">2022</span></h3>
                    <div class="techno">
                        <div class="techno2">
                            <img src="wordpress.png" alt="">
                            <span>WordPress</span>
                        </div>
                    </div>
                    <p>The Mon Comparateur Immo - MCI ... <span id="seeMore">See more</span></p>
                </div>
            </div>
        </div>
    {/if}
</div>

<style>
    .head{
        text-align: center;
        color: rgb(255, 255, 255);
        margin-bottom: 50px;
        animation: fadeIn 1s ease-in-out;
    }
    .head h1{
        font-family: 'Rubik';
        font-size: 50px;
    }
    .head p{
        font-family: 'poppins';
        font-size: 13px;
    }
    .projects{
        display: flex;
        margin-top: 15px;
        animation: slideIn 1s ease-in-out;
    }
    .card1, .card2{
        width: 49%;
        background-color: rgb(0, 22, 42);
        border-radius: 10px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        padding: 2px;
    }
    .card1 img, .card2 img{
        width: 100%;
        height: 180px;
        border-radius: 5px;
        transition: transform 0.5s, opacity 0.3s;
    }
    .card1:hover img, .card2:hover img{
        cursor: pointer;
        transform: scale(1.1);
        opacity: 0.2;
    }
    .info{
        padding: 5px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        color: rgb(243, 243, 243);
        font-family: 'poppins';
        opacity: 0;
        transition: opacity 0.5s;
    }
    .card1:hover .info, .card2:hover .info{
        cursor: pointer;
        opacity: 1;
    }
    .info h3{
        display: flex;
        align-items: center;
        color: rgb(219, 219, 219);
        font-family: 'poppins bold';
    }
    .info p{
        color: rgba(255, 255, 255, 0.824);
        font-family: 'poppins';
        margin-block-start: 5px;
        margin-block-end: 5px;
        font-size: 13px;
    }
    #date{
        margin-left: auto;
        font-size: 12px;
    }
    .techno{
        display: flex;
    }
    .techno .techno2{
        display: flex;
        align-items: center;
        background-color: rgb(37, 61, 72);
        padding: 7px;
        border-radius: 15px;
        margin-right: 5px;
    }
    .techno .techno2 img{
        height: 15px;
        width: auto;
        opacity: 1;
    }
    .techno .techno2 span{
        font-size: 11px;
    }
    #seeMore{
        color: rgb(0, 85, 255);
        cursor: pointer;
    }
    #return{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color: rgba(255, 255, 255, 0.739);
        font-weight: bold;
        transition: 0.5s;
    }
    #return:hover{
        cursor: pointer;
        color: rgb(150, 150, 150);
        letter-spacing: 1px;
    }
    @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(-20px); }
        100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideIn {
        0% { opacity: 0; transform: translateX(-20px); }
        100% { opacity: 1; transform: translateX(0); }
    }
    @media screen and (max-width: 800px) {
        .projects{
            display: block;
        }
        .card1, .card2{
            width: auto;
            padding: 10px;
            border-radius: 10px;
            margin-top: 15px;
            background-color: rgba(1, 28, 53, 0.822);
        }
        .card1 img, .card2 img{
            width: 100%;
            height: auto;
            border-radius: 5px 5px 0px 0px;
        }
        .info{
            opacity: 1;
            position: relative;
        }
    }
</style>