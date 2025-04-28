<script>
    import { slide } from "svelte/transition";
    import Icon from "@iconify/svelte";

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
    <p class:active={selected.front == "front"} class="flex items-center" on:click={() => handleTechno("front", "front")}><Icon icon="simple-icons:html5" class="mr-2" />Front-End Development</p>
    {#if techno.front}
        <div in:slide out:slide class="img p-2">
            <Icon icon="simple-icons:html5" class="text-gray-300 mr-2 h-10 w-10 transition-colors duration-300 hover:text-blue-500" />
            <Icon icon="simple-icons:css3" class="text-gray-300 mr-2 h-10 w-10 transition-colors duration-300 hover:text-blue-500" />
            <Icon icon="simple-icons:javascript" class="text-gray-300 mr-2 h-10 w-10 transition-colors duration-300 hover:text-blue-500" />
            <Icon icon="simple-icons:tailwindcss" class="text-gray-300 mr-2 h-10 w-10 transition-colors duration-300 hover:text-blue-500" />
            <Icon icon="simple-icons:svelte" class="text-gray-300 mr-2 h-10 w-10 transition-colors duration-300 hover:text-blue-500" />
            <Icon icon="simple-icons:vuedotjs" class="text-gray-300 mr-2 h-10 w-10 transition-colors duration-300 hover:text-blue-500" />
        </div>
    {/if}
    <p class:active={selected.back == "back"} class="flex items-center" on:click={() => handleTechno("back", "back")}><Icon icon="simple-icons:php" class="mr-2" /> Back-End Development</p>
    {#if techno.back}
        <div in:slide out:slide class="img p-2">
            <Icon icon="simple-icons:php" class="text-gray-300 mr-2 h-10 w-10 transition-colors duration-300 hover:text-blue-500" />
            <Icon icon="simple-icons:codeigniter" class="text-gray-300 mr-2 h-10 w-10 transition-colors duration-300 hover:text-blue-500" />
            <Icon icon="simple-icons:laravel" class="text-gray-300 mr-2 h-10 w-10 transition-colors duration-300 hover:text-blue-500" />
            <Icon icon="simple-icons:python" class="text-gray-300 mr-2 h-10 w-10 transition-colors duration-300 hover:text-blue-500" />
            <Icon icon="simple-icons:django" class="text-gray-300 mr-2 h-10 w-10 transition-colors duration-300 hover:text-blue-500" />
        </div>
    {/if}
    <p class:active={selected.manage == "manage"} class="flex items-center" on:click={() => handleTechno("manage", "manage")}><Icon icon="simple-icons:wordpress" class="mr-2" /> Content Management & E-Commerce</p>
    {#if techno.manage}
        <div in:slide out:slide class="img p-2">
            <Icon icon="simple-icons:wordpress" class="text-gray-300 mr-2 h-10 w-10 transition-colors duration-300 hover:text-blue-500" />
            <Icon icon="simple-icons:magento" class="text-gray-300 mr-2 h-10 w-10 transition-colors duration-300 hover:text-blue-500" />
        </div>
    {/if}
    <p class:active={selected.bdd == "bdd"} class="flex items-center" on:click={() => handleTechno("bdd", "bdd")}><Icon icon="simple-icons:mysql" class="mr-2" /> Databases</p>
    {#if techno.bdd}
        <div in:slide out:slide class="img p-2">
            <Icon icon="simple-icons:sqlite" class="text-gray-300 mr-2 h-10 w-10 transition-colors duration-300 hover:text-blue-500" />
            <Icon icon="simple-icons:mysql" class="text-gray-300 mr-2 h-10 w-10 transition-colors duration-300 hover:text-blue-500" />
            <Icon icon="simple-icons:postgresql" class="text-gray-300 mr-2 h-10 w-10 transition-colors duration-300 hover:text-blue-500" />
        </div>
    {/if}
    <p class:active={selected.api == "api"} class="flex items-center" on:click={() => handleTechno("api", "api")}><Icon icon="simple-icons:postman" class="mr-2" /> API & Testing</p>
    {#if techno.api}
        <div in:slide out:slide class="img p-2">
            <Icon icon="simple-icons:postman" class="text-gray-300 mr-2 h-10 w-10 transition-colors duration-300 hover:text-blue-500" />
        </div>
    {/if}
    <p class:active={selected.control == "control"} class="flex items-center" on:click={() => handleTechno("control", "control")}><Icon icon="simple-icons:git" class="mr-2" /> Version Control</p>
    {#if techno.control}
        <div in:slide out:slide class="img p-2">
            <Icon icon="simple-icons:git" class="text-gray-300 mr-2 h-10 w-10 transition-colors duration-300 hover:text-blue-500" />
        </div>
    {/if}
    <p class:active={selected.design == "design"} class="flex items-center" on:click={() => handleTechno("design", "design")}><Icon icon="mdi:paint" class="mr-2" /> Design Tools</p>
    {#if techno.design}
        <div in:slide out:slide class="img p-2">
            <Icon icon="simple-icons:adobephotoshop" class="text-gray-300 mr-2 h-10 w-10 transition-colors duration-300 hover:text-blue-500" />
            <Icon icon="simple-icons:inkscape" class="text-gray-300 mr-2 h-10 w-10 transition-colors duration-300 hover:text-blue-500" />
            <Icon icon="simple-icons:figma" class="text-gray-300 mr-2 h-10 w-10 transition-colors duration-300 hover:text-blue-500" />
        </div>
    {/if}
    <p class:active={selected.deploy == "deploy"} class="flex items-center" on:click={() => handleTechno("deploy", "deploy")}><Icon icon="mdi:cloud" class="mr-2" /> Hosting & Deployment</p>
    {#if techno.deploy}
        <div in:slide out:slide class="img p-2">
            <Icon icon="simple-icons:github" class="text-gray-300 mr-2 h-10 w-10 transition-colors duration-300 hover:text-blue-500" />
            <Icon icon="simple-icons:netlify" class="text-gray-300 mr-2 h-10 w-10 transition-colors duration-300 hover:text-blue-500" />
            <Icon icon="simple-icons:docker" class="text-gray-300 mr-2 h-10 w-10 transition-colors duration-300 hover:text-blue-500" />
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
        background-color: rgba(0, 98, 255, 0.171);
    }
    .img{
        margin-bottom: 20px;
        perspective: 1000px;
        display: flex;
        align-items: center;
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