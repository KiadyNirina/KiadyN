<script>
    import About from "../lib/About.svelte";
    import Techno from "../lib/Techno.svelte";

    let about = true;
    let techno = false;
    let projects = false;
    let exp = false;
    let comp = false;

    let active = "about";

    const handleClickAbout = (id) => {
        active = id;
        about = true;
        techno = false;
        projects = false;
        exp = false;
        comp = false;
    }

    const handleClickTechno = (id) => {
        active = id;
        about = false;
        techno = true;
        projects = false;
        exp = false;
        comp = false;
    }
</script>

<div class="content">
    <div class="head">
        <img src="header.png" alt="">
    </div>
    <div class="body">
        <div class="sect1">
            <p><span>"Code is like humor. When you have to explain it, it's bad."</span> __Cory House</p>
            <div class="info">
                <span><img src="adresse-white.png" alt=""> Antananarivo, Madagascar</span>
                <span><img src="tel-white.png" alt=""> +261 34 10 394 90</span>
                <span><img src="email-white.png" alt=""> kiady142ram@gmail.com</span>
                <span><img src="linkedin-white.png" alt=""> <a href="">Kiady Ram</a></span>
                <span><img src="facebook-white.png" alt=""> <a href="">Kiady Rambeloson</a></span>
                <span><img src="github-white.png" alt=""> <a href="">KiadyNirina</a></span>
            </div>
        </div>
        <div class="sect2">
            <div class="nav">
                <span class:active={active == 'about'} on:click={() => handleClickAbout('about')}>About me</span>
                <span class:active={active == 'techno'} on:click={() => handleClickTechno('techno')}>Techno</span>
                <span id={active}>Projects</span>
                <span id={active}>Exp.</span>
                <span id={active}>Comp</span>
            </div>
            {#if about}
                <About/>
            {:else if techno}
                <Techno/>
            {/if}
        </div>
    </div>
</div>

<style>
    .content{
        margin-left: auto;
        margin-right: auto;
        max-width: 900px;
        color: rgba(255, 255, 255, 0.386);
    }
    .head img{
        width: 100%;
    }
    .body{
        display: flex;
    }
    .sect1{
        color: white;
        padding: 20px;
        border: 1px solid rgba(255, 255, 255, 0.089);
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
        background-color: rgba(255, 255, 255, 0.055);
        padding: 20px;
        border-radius: 10px;
        margin-top: 50px;
    }
    .sect1 .info span{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        display: flex;
        align-items: center;
        font-size: 13px;
        line-height: 25px;
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
        height: 20px;
        margin-right: 10px;
    }
    .sect2{
        padding: 20px;
        border: 1px solid rgba(255, 255, 255, 0.089);
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
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        cursor: not-allowed;
    }
    @media screen and (max-width : 700px) {
        .body{
            display: block;
            width: 85%;
            margin-left: auto;
            margin-right: auto;
        }
        .sect1{
            width: 100%;
            padding: 10px;
        }
        .sect1 p{
            text-align: center;
        }
        .sect1 .info span{
            font-size: 15px;
            line-height: 30px;
        }
        .nav{
            padding: 10px;
        }
        .sect2{
            margin-top: 10px;
            width: 100%;
            padding: 10px;
        }
    }
</style>