<script>
    let techno1 = false;
    let techno2 = false;
    let techno3 = false;
    let techno4 = false;
    let techno5 = false;
    let techno6 = false;
    let techno7 = false;
    let techno8 = false;

    let front = "";
    let back = "";
    let manage = "";
    let bdd = "";
    let api = "";
    let control = "";
    let design = "";
    let deploy = "";

    const handleTechno1 = (id) => {
        if(techno1 === false) {
            techno1 = true;
            front = id;
        }else{
            techno1 = false;
            front = "";
        }
    } 

    const handleTechno2 = (id) => {
        if(techno2 === false) {
            techno2 = true;
            back = id;
        }else{
            techno2 = false;
            back = ""
        }
    } 

    const handleTechno3 = (id) => {
        if(techno3 === false) {
            techno3 = true;
            manage = id;
        }else{
            techno3 = false;
            manage = "";
        }
    } 

    const handleTechno4 = (id) => {
        if(techno4 === false) {
            techno4 = true;
            bdd = id;
        }else{
            techno4 = false;
            bdd = "";
        }
    } 
    const handleTechno5 = (id) => {
        if(techno5 === false) {
            techno5 = true;
            api = id;
        }else{
            techno5 = false;
            api = "";
        }
    } 

    const handleTechno6 = (id) => {
        if(techno6 === false) {
            techno6 = true;
            control = id;
        }else{
            techno6 = false;
            control = "";
        }
    } 

    const handleTechno7 = (id) => {
        if(techno7 === false) {
            techno7 = true;
            design = id;
        }else{
            techno7 = false;
            design = "";
        }
    } 

    const handleTechno8 = (id) => {
        if(techno8 === false) {
            techno8 = true;
            deploy = id;
        }else{
            techno8 = false;
            deploy = "";
        }
    } 
</script>

<div class="techno">
    <p class:active={front == "front"} on:click={() => handleTechno1("front")}>🌐 Front-End Development</p>
    {#if techno1}
        <div class="img">
            <img src="html.png" alt="">
            <img src="css.png" alt="">
            <img src="js.png" alt="">
            <img src="svelte.png" alt="">
            <img src="vuejs.png" alt="">
        </div>
    {/if}
    <p class:active={back == "back"} on:click={() => handleTechno2("back")}>💻 Back-End Development</p>
    {#if techno2}
        <div class="img">
            <img src="php.png" alt="">
            <img src="laravel.png" alt="">
            <img src="python.png" alt="">
            <img src="django.png" alt="">
        </div>
    {/if}
    <p class:active={ manage == "manage" } on:click={() => handleTechno3("manage")}>🖥️ Content Management & E-Commerce</p>
    {#if techno3}
        <div class="img">
            <img src="wordpress.png" alt="">
            <img src="shopify.png" alt="">
        </div>
    {/if}
    <p class:active={ bdd == "bdd" } on:click={() => handleTechno4("bdd")}>🗄️ Databases</p>
    {#if techno4}
        <div class="img">
            <img src="sqlite.png" alt="">
            <img src="mysql.png" alt="">
            <img src="postgresql.png" alt="">
        </div>
    {/if}
    <p class:active={ api == "api" } on:click={() => handleTechno5("api")}>🧪 API & Testing</p>
    {#if techno5}
        <div class="img">
            <img src="postman.png" alt="">
        </div>
    {/if}
    <p class:active={control == "control"} on:click={() => handleTechno6("control")}>📂 Version Control</p>
    {#if techno6}
        <div class="img">
            <img src="git.png" alt="">
        </div>
    {/if}
    <p class:active={design == "design"} on:click={() => handleTechno7("design")}>🎨 Design Tools</p>
    {#if techno7}
        <div class="img">
            <img src="photoshop.png" alt="">
            <img src="figma.png" alt="">
        </div>
    {/if}
    <p class:active={deploy == "deploy"} on:click={() => handleTechno8("deploy")}>☁️ Hosting & Deployment</p>
    {#if techno8}
        <div class="img">
            <img src="docker.png" alt="">
            <img src="heroku.png" alt="">
        </div>
    {/if}
</div>

<style>
    .techno{
        padding: 15px;
    }
    .techno p {
        color: rgba(255, 255, 255, 0.797);
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 15px;
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
        height: 50px;
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
</style>