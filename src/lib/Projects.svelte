<div class="">
    <div class="projects">
        <div class="card1">
            <img src="beyond.PNG" alt="">
            <div class="info">
                <h3>Beyond | <span>freelance</span> <span id="date">2024</span></h3>
                <div class="techno">
                    <div class="techno2">
                        <img src="wordpress.png" alt="">
                        <span>WordPress</span>
                    </div>
                </div>
                <p>Lorem, ipsum dolor... <span>See more</span></p>
            </div>
        </div>
    
        <div class="card2">
            <img src="mycore.PNG" alt="">
            <div class="info">
                <h3>MyCore | <span>freelance</span> <span id="date">2024</span></h3>
                <div class="techno">
                    <div class="techno2">
                        <img src="wordpress.png" alt="">
                        <span>WordPress</span>
                    </div>
                </div>
                <p>Lorem, ipsum dolor... <span>See more</span></p>
            </div>
        </div>
    </div>

    <div class="projects">
        <div class="card1">
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
                <p>Lorem, ipsum dolor... <span>See more</span></p>
            </div>
        </div>
    
        <div class="card2">
            <img src="e_stock.jpg" alt="">
            <div class="info">
                <h3>E_Stock <span id="date">2024</span></h3>
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
                <p>Lorem, ipsum dolor... <span>See more</span></p>
            </div>
        </div>
    </div>
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
        height: 130px;
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
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
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
    @media screen and (max-width: 800px) {
        .projects{
            display: block;
        }
        .card1, .card2{
            width: auto;
            padding: 10px;
            border-radius: 10px;
            margin-top: 15px;
        }
        .card1 img, .card2 img{
            width: 100%;
            height: 200px;
            border-radius: 5px 5px 0px 0px;
        }
    }
</style>