<div class="cardOne">
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
            <p>...</p>
            <a href="https://github.com/KiadyNirina/FinTrack" class="repo">
                <img src="github-white.png" alt="">
                Repo github
            </a>
    </div>
</div>

<style>
    .cardOne{
        width: auto;
        padding: 10px;
    }
    .cardOne img{
        width: auto;
        border-radius: 10px 10px 0px 0px;
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
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        margin-block-start: 5px;
        margin-block-end: 5px;
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
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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