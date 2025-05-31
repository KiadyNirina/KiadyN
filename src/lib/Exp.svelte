<script>
    import Icon from "@iconify/svelte";
    import { slide } from "svelte/transition";

    let more = false;

    function handleMore() {
        more = !more;
    }
</script>
<div class="exp mt-10">
    <h2>2025</h2>
    <div style="margin-bottom: 20px;" class="content">
        <div class="">
            <h4>
                <div class="company">
                    PHP developer
                    <div class="flex items-center">
                        <div class="flex items-center">
                            <img src="/atout.png" alt="">
                            <span class="mr-2 text-gray-400">Atout Service Mada</span>
                        </div>
                    </div>
                </div>
                <span style="font-size: 11px;" class="text-gray-400 flex items-center font-bold">
                    <Icon icon="material-symbols:date-range" class="mr-1"/>
                    Fev. 2025 - Present
                </span>
            </h4>
        </div>
    </div>

    <div class="content">
        <h4>
            <div class="company">
                PHP developer intern
                <div class="flex items-center">
                    <div class="flex items-center">
                        <img src="/atout.png" alt="">
                        <span class="mr-2 text-gray-400">Atout Service Mada</span>
                    </div>
                </div>
            </div>
            <span style="font-size: 11px;" class="text-gray-400 flex items-center font-bold">
                <Icon icon="material-symbols:date-range" class="mr-1"/>
                Nov. 2024 - Fev. 2025
            </span>
        </h4>
        <span on:click={handleMore} class="text-blue-400 text-[12px] cursor-pointer flex items-center">
            <Icon icon="ic:twotone-expand-more" />
            See more
        </span>
        {#if more}
        <div transition:slide={{ duration: 300 }} class="mt-2 p-2 pl-5 bg-gray-900 rounded-xs">
            <h3 class="text-gray-400 font-bold text-sm">Responsibilities :</h3>
            <ul class="mt-1 list-disc text-gray-400 text-[12px] ml-7">
                <li>Feature development</li>
                <li>Module integration</li>
                <li>Application maintenance</li>
            </ul>

            <h3 class="mt-1 text-gray-400 font-bold text-sm">Stacks :</h3>
            <div class="mt-1 flex flex-wrap gap-2">
                <span class="flex items-center cursor-pointer p-1 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[10px]">
                    <Icon icon="simple-icons:magento" class="mr-1" />
                    Magento
                </span>
                <span class="flex items-center cursor-pointer p-1 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[10px]">
                    <Icon icon="simple-icons:wordpress" class="mr-1" />
                    Wordpress
                </span>
                <span class="flex items-center cursor-pointer p-1 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[10px]">
                    <Icon icon="simple-icons:codeigniter" class="mr-1" />
                    Codeigniter
                </span>
                <span class="flex items-center cursor-pointer p-1 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[10px]">
                    <Icon icon="simple-icons:mysql" class="mr-1" />
                    Mysql
                </span>
                <span class="flex items-center cursor-pointer p-1 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[10px]">
                    <Icon icon="simple-icons:postman" class="mr-1" />
                    Postman
                </span>
                <span class="flex items-center cursor-pointer p-1 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[10px]">
                    <Icon icon="simple-icons:git" class="mr-1" />
                    Git
                </span>
                <span class="flex items-center cursor-pointer p-1 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[10px]">
                    <Icon icon="simple-icons:linux" class="mr-1" />
                    Linux
                </span>
                <span class="flex items-center cursor-pointer p-1 bg-gray-700 hover:bg-gray-500 text-white rounded-[15px] text-[10px]">
                    <Icon icon="simple-icons:docker" class="mr-1" />
                    Docker
                </span>
            </div>
        </div>
        {/if}
    </div>

    <h2>2024</h2>
    <div class="content">
        <h4>Freelance
            <span style="font-size: 11px;" class="text-gray-400 flex items-center font-bold">
                <Icon icon="material-symbols:date-range" class="mr-1"/>
                2024
            </span>
        </h4>
        <ul class="mt-2 list-disc pl-5 text-gray-400 text-[12px]">
            <li><b>Website</b> : private , <b>Techno</b> : WordPress</li>
            <li><b>Website</b> : private , <b>Techno</b> : WordPress</li>
        </ul>
    </div>

    <h2>2023</h2>
    <div class="content">
        <h4>Freelance
            <span style="font-size: 11px;" class="text-gray-400 flex items-center font-bold">
                <Icon icon="material-symbols:date-range" class="mr-1"/>
                2023
            </span>
        </h4>
        <ul class="mt-2 list-disc pl-5 text-gray-400 text-[12px]">
            <li><b>Website</b> : private , <b>Techno</b> : WordPress</li>
        </ul>
    </div>

    <h2>2022</h2>
    <div class="content">
        <h4>Freelance
            <span style="font-size: 11px;" class="text-gray-400 flex items-center font-bold">
                <Icon icon="material-symbols:date-range" class="mr-1"/>
                2022
            </span>
        </h4>
        <ul class="mt-2 list-disc pl-5 text-gray-400 text-[12px]">
            <li><b>Website</b> : <a href="https://www.moncomparateur-immo.com/">moncomparateur-immo</a> , <b>Techno</b> : WordPress</li>
        </ul>
    </div>
</div>

<style>
    @font-face {
        font-family: 'Jersey';
        src: url('/font/Jersey10-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins Bold';
        src: url('/font/Poppins-ExtraBold.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    .exp{
        animation: fadeIn 1s ease-in-out;
    }
    h2 {
        position: absolute;
        background-color: rgb(0, 30, 87);
        border-radius: 20px;
        padding: 5px;
        font-family: 'poppins bold';
        font-size: 11px;
        margin-top: -20px;
    }
    .content{
        border-left: 1px solid rgba(255, 255, 255, 0.463);
        padding-left: 20px;
        font-family: 'poppins';
        font-size: 12px;
        color: rgb(230, 230, 230);
        margin-bottom: 50px;
    }
    h4{
        font-family: 'Poppins Bold';
        display: flex;
        align-items: center;
        color: rgb(255, 255, 255);
        font-size: 14px;
    }
    .company {
        display: grid;
    }
    .company span {
        margin-left: 0;
        font-family: 'poppins';
    }
    h4 span{
        margin-left: auto;
        font-size: 11px;
        font-family: 'poppins';
    }
    h4 img{
        height: 15px;
        margin-right: 10px;
    }
    a{
        text-decoration: none;
        color: rgb(0, 132, 255);
    }
    a:hover{
        text-decoration: underline;
    }
    @media screen and (max-width : 700px) {
        h4{
            font-size: 12px;
        }
        h4 span{
            font-size: 10px;
        }
        ul{
            font-size: 11px;
            line-height: 20px;
        }
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