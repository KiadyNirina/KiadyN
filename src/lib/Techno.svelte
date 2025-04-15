<script>
    import { slide } from "svelte/transition";

    let techno = {
        front: false,
        back: false,
        manage: false,
        bdd: false,
        api: false,
        control: false,
        design: false,
        deploy: false
    };

    let selected = {
        front: "",
        back: "",
        manage: "",
        bdd: "",
        api: "",
        control: "",
        design: "",
        deploy: ""
    };

    const handleTechno = (category, id) => {
        techno[category] = !techno[category];
        selected[category] = techno[category] ? id : "";
    };
</script>

<div class="techno">
    <p class:active={selected.front == "front"} on:click={() => handleTechno("front", "front")}>🌐 Front-End Development</p>
    {#if techno.front}
        <div in:slide out:slide class="img">
            <img src="html.png" alt="">
            <img src="css.png" alt="">
            <img src="js.png" alt="">
            <img src="svelte.png" alt="">
            <img src="vuejs.png" alt="">
        </div>
    {/if}
    <p class:active={selected.back == "back"} on:click={() => handleTechno("back", "back")}>💻 Back-End Development</p>
    {#if techno.back}
        <div in:slide out:slide class="img">
            <img src="php.png" alt="">
            <img src="codeigniter.png" alt="">
            <img src="laravel.png" alt="">
            <img src="python.png" alt="">
            <img src="django.png" alt="">
        </div>
    {/if}
    <p class:active={selected.manage == "manage"} on:click={() => handleTechno("manage", "manage")}>🖥️ Content Management & E-Commerce</p>
    {#if techno.manage}
        <div in:slide out:slide class="img">
            <img src="wordpress.png" alt="">
            <img src="magento.png" alt="">
            <img src="shopify.png" alt="">
        </div>
    {/if}
    <p class:active={selected.bdd == "bdd"} on:click={() => handleTechno("bdd", "bdd")}>🗄️ Databases</p>
    {#if techno.bdd}
        <div in:slide out:slide class="img">
            <img src="sqlite.png" alt="">
            <img src="mysql.png" alt="">
            <img src="postgresql.png" alt="">
        </div>
    {/if}
    <p class:active={selected.api == "api"} on:click={() => handleTechno("api", "api")}>🧪 API & Testing</p>
    {#if techno.api}
        <div in:slide out:slide class="img">
            <img src="postman.png" alt="">
        </div>
    {/if}
    <p class:active={selected.control == "control"} on:click={() => handleTechno("control", "control")}>📂 Version Control</p>
    {#if techno.control}
        <div in:slide out:slide class="img">
            <img src="git.png" alt="">
        </div>
    {/if}
    <p class:active={selected.design == "design"} on:click={() => handleTechno("design", "design")}>🎨 Design Tools</p>
    {#if techno.design}
        <div in:slide out:slide class="img">
            <img src="photoshop.png" alt="">
            <img src="inkscape.png" alt="">
            <img src="figma.png" alt="">
        </div>
    {/if}
    <p class:active={selected.deploy == "deploy"} on:click={() => handleTechno("deploy", "deploy")}>☁️ Hosting & Deployment</p>
    {#if techno.deploy}
        <div in:slide out:slide class="img">
            <img src="docker.png" alt="">
            <img src="heroku.png" alt="">
        </div>
    {/if}
</div>

<style>
    .techno{
        padding: 15px;
        animation: slideIn 1s ease-in-out;
    }
    .techno p {
        color: white;
        font-family: 'poppins';
        font-size: 13px;
        font-weight: bold;
        margin: 0;
        padding: 10px;
    }
    .techno p:hover{
        cursor: pointer;
        background-color: rgba(0, 98, 255, 0.13);
    }
    .active{
        background-color: rgba(0, 98, 255, 0.13);
    }
    .img{
        margin-bottom: 20px;
        justify-content: center;
        perspective: 1000px;
    }
    .img img{
        margin-left: auto;
        margin-right: auto;
        height: 30px;
        padding: 10px;
        border-radius: 100%;
        transform-style: preserve-3d; /* Préserve l'effet 3D */
    }
    .img img:hover{
        cursor: pointer;
        box-shadow: 0px 0px 10px #ffffffee;
        animation: rotate3D 2s linear infinite;
    }
    @keyframes rotate3D {
        from {
            transform: rotateY(0deg); /* Commence à 0 degrés */
        }
        to {
            transform: rotateY(360deg); /* Fait une rotation complète de 360 degrés */
        }
    }
    @media screen and (max-width: 800px) {
        .techno p {
            font-size: 13px;
        }
    }
    @keyframes slideIn {
        0% { opacity: 0; transform: translateX(-20px); }
        100% { opacity: 1; transform: translateX(0); }
    }
</style>