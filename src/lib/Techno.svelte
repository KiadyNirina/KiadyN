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
        <div in:slide out:slide class="img p-2 flex flex-wrap gap-2 font-[poppins]">
            <span class="flex items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[12px]">
                <Icon icon="simple-icons:html5" class="mr-1" />
                Html
            </span>
            <span class="flex items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[12px]">
                <Icon icon="simple-icons:css3" class="mr-1" />
                Css
            </span>
            <span class="flex items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[12px]">
                <Icon icon="simple-icons:javascript" class="mr-1" />
                JavaScript
            </span>
            <span class="flex items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[12px]">
                <Icon icon="simple-icons:tailwindcss" class="mr-1" />
                tailwindcss
            </span>
            <span class="flex items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[12px]">
                <Icon icon="simple-icons:svelte" class="mr-1" />
                svelte
            </span>
            <span class="flex items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[12px]">
                <Icon icon="simple-icons:vuedotjs" class="mr-1" />
                vuejs
            </span>
        </div>
    {/if}
    <p class:active={selected.back == "back"} class="flex items-center" on:click={() => handleTechno("back", "back")}><Icon icon="simple-icons:php" class="mr-2" /> Back-End Development</p>
    {#if techno.back}
        <div in:slide out:slide class="img p-2 flex flex-wrap gap-2 font-[poppins]">
            <span class="flex items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[12px]">
                <Icon icon="simple-icons:php" class="mr-1" />
                PHP
            </span>
            <span class="flex items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[12px]">
                <Icon icon="simple-icons:codeigniter" class="mr-1" />
                codeigniter
            </span>
            <span class="flex items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[12px]">
                <Icon icon="simple-icons:laravel" class="mr-1" />
                laravel
            </span>
            <span class="flex items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[12px]">
                <Icon icon="simple-icons:python" class="mr-1" />
                python
            </span>
            <span class="flex items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[12px]">
                <Icon icon="simple-icons:django" class="mr-1" />
                django
            </span>
        </div>
    {/if}
    <p class:active={selected.manage == "manage"} class="flex items-center" on:click={() => handleTechno("manage", "manage")}><Icon icon="simple-icons:wordpress" class="mr-2" /> Content Management & E-Commerce</p>
    {#if techno.manage}
        <div in:slide out:slide class="img p-2 flex flex-wrap gap-2 font-[poppins]">
            <span class="flex items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[12px]">
                <Icon icon="simple-icons:wordpress" class="mr-1" />
                wordpress
            </span>
            <span class="flex items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[12px]">
                <Icon icon="simple-icons:magento" class="mr-1" />
                magento
            </span>
        </div>
    {/if}
    <p class:active={selected.bdd == "bdd"} class="flex items-center" on:click={() => handleTechno("bdd", "bdd")}><Icon icon="simple-icons:mysql" class="mr-2" /> Databases</p>
    {#if techno.bdd}
        <div in:slide out:slide class="img p-2 flex flex-wrap gap-2 font-[poppins]">
            <span class="flex items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[12px]">
                <Icon icon="simple-icons:sqlite" class="mr-1" />
                sqlite
            </span>
            <span class="flex items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[12px]">
                <Icon icon="simple-icons:mysql" class="mr-1" />
                mysql
            </span>
            <span class="flex items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[12px]">
                <Icon icon="simple-icons:postgresql" class="mr-1" />
                postgresql
            </span>
        </div>
    {/if}
    <p class:active={selected.api == "api"} class="flex items-center" on:click={() => handleTechno("api", "api")}><Icon icon="simple-icons:postman" class="mr-2" /> API & Testing</p>
    {#if techno.api}
        <div in:slide out:slide class="img p-2 flex flex-wrap gap-2 font-[poppins]">
            <span class="flex items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[12px]">
                <Icon icon="simple-icons:postman" class="mr-1" />
                postman
            </span>
        </div>
    {/if}
    <p class:active={selected.control == "control"} class="flex items-center" on:click={() => handleTechno("control", "control")}><Icon icon="simple-icons:git" class="mr-2" /> Version Control</p>
    {#if techno.control}
        <div in:slide out:slide class="img p-2 flex flex-wrap gap-2 font-[poppins]">
            <span class="flex items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[12px]">
                <Icon icon="simple-icons:git" class="mr-1" />
                git
            </span>
        </div>
    {/if}
    <p class:active={selected.design == "design"} class="flex items-center" on:click={() => handleTechno("design", "design")}><Icon icon="mdi:paint" class="mr-2" /> Design Tools</p>
    {#if techno.design}
        <div in:slide out:slide class="img p-2 flex flex-wrap gap-2 font-[poppins]">
            <span class="flex items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[12px]">
                <Icon icon="simple-icons:adobephotoshop" class="mr-1" />
                photoshop
            </span>
            <span class="flex items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[12px]">
                <Icon icon="simple-icons:inkscape" class="mr-1" />
                inkscape
            </span>
            <span class="flex items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[12px]">
                <Icon icon="simple-icons:figma" class="mr-1" />
                figma
            </span>
        </div>
    {/if}
    <p class:active={selected.deploy == "deploy"} class="flex items-center" on:click={() => handleTechno("deploy", "deploy")}><Icon icon="mdi:cloud" class="mr-2" /> Hosting & Deployment</p>
    {#if techno.deploy}
        <div in:slide out:slide class="img p-2 flex flex-wrap gap-2 font-[poppins]">
            <span class="flex items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[12px]">
                <Icon icon="simple-icons:github" class="mr-1" />
                github
            </span>
            <span class="flex items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[12px]">
                <Icon icon="simple-icons:netlify" class="mr-1" />
                netlify
            </span>
            <span class="flex items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[12px]">
                <Icon icon="simple-icons:docker" class="mr-1" />
                docker
            </span>
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
        background-color: rgba(0, 52, 137, 0.171);
    }
    .active{
        background-color: rgba(0, 52, 137, 0.171);
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