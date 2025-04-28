<script>
    import Icon from "@iconify/svelte";
</script>
<div class="cardOne">
    <img src="mycore.PNG" alt="">
    <div class="info">
        <h3>MyCore | <span>freelance</span> <span id="date">2024</span></h3>
        <div class="techno">
            <div class="techno2">
                <Icon icon="simple-icons:wordpress" class="mr-1" />
                <span>WordPress</span>
            </div>
        </div>
        <p>The Mycore company showcase site was developed as part of a freelance project. This site highlights the company's visual identity and services, with a clean and professional design, reflecting Mycore's values. It has been designed to provide intuitive navigation, allowing visitors to easily discover key information about the company's activities and products. The emphasis was placed on aesthetics, ergonomics and user experience, while integrating modern and efficient architecture.</p>
        <a href="https://test-tc.rf.gd/mycore/" class="repo">
            <Icon icon="mdi:link" class="mr-1" height="20px"/>
            Link
        </a>
    </div>
</div>

<style>
    .cardOne{
        width: auto;
        padding: 10px;
        font-family: 'poppins';
    }
    .cardOne img{
        width: 100%;
        border-radius: 10px 10px 0px 0px;
    }
    .info{
        padding: 5px;
    }
    .info h3{
        display: flex;
        align-items: center;
        color: rgb(157, 157, 157);
        font-size: 20px;
    }
    .info p{
        color: rgb(165, 165, 165);
        margin-block-start: 5px;
        margin-block-end: 5px;
        line-height: 25px;
        font-size: 13px;
    }
    #date{
        margin-left: auto;
        font-size: 12px;
    }
    .techno{
        display: flex;
        margin-bottom: 15px;
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
    }
    .techno .techno2 span{
        font-size: 11px;
        color: white;
    }
    .repo {
        background-color: rgba(255, 255, 255, 0.049);
        border-radius: 10px;
        width: auto;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: white;
        font-weight: bold;
        font-size: 13px;
    }
    .repo:hover{
        background-color: rgba(32, 162, 255, 0.055);
    }
    .repo img{
        height: 25px;
        width: auto;
        margin-right: 5px;
    }
</style>