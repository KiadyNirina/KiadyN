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

    const handleClick = (projectName) => {
        selectedProject = projectName;
    };

    const handleClickReturn = () => {
        selectedProject = null;
    };
</script>

<div>
    {#if selectedProject}
        <p id="return" on:click={handleClickReturn}>Return to all</p>
        <div in:slide out:slide>
            {#if projects[selectedProject]}
                <svelte:component this={projects[selectedProject]} />
            {/if}
        </div>
    {:else}
        <div class="projects">
            <div class="card2" on:click={() => handleClick('fintrack')}>
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
            </div>

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
        
            <div class="card2" on:click={() => handleClick('createcv')}>
                <img src="createcv.PNG" alt="">
                <div class="info">
                    <h3>Create_CV <span id="date">2024</span></h3>
                    <div class="techno">
                        <div class="techno2">
                            <img src="svelte.png" alt="">
                            <span>Svelte</span>
                        </div>
                    </div>
                    <p>CreateCV is a simple and intuitive ... <span id="seeMore">See more</span></p>
                </div>
            </div>
        </div>
    
        <div class="projects">
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
        </div>
    
        <div class="projects">
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
    .projects{
        display: flex;
        margin-top: 15px;
    }
    .card1, .card2{
        width: 46%;
        background-color: rgba(255, 255, 255, 0.049);
        padding: 5px;
        border-radius: 10px;
        margin-left: auto;
        margin-right: auto;
    }
    .card1 img, .card2 img{
        width: 100%;
        height: 160px;
        border-radius: 5px 5px 0px 0px;
    }
    .info{
        padding: 5px;
    }
    .info h3{
        display: flex;
        align-items: center;
        color: rgb(157, 157, 157);
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    .info p{
        color: rgb(165, 165, 165);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
        padding: 5px;
        border-radius: 15px;
        margin-right: 5px;
    }
    .techno .techno2 img{
        height: 15px;
        width: auto;
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
    @media screen and (max-width: 800px) {
        .projects{
            display: block;
        }
        .card1, .card2{
            width: auto;
            padding: 10px;
            border-radius: 10px;
            margin-top: 15px;
            background-color: rgba(255, 255, 255, 0.082);
        }
        .card1 img, .card2 img{
            width: 100%;
            height: 150px;
            border-radius: 5px 5px 0px 0px;
        }
    }
</style>