<div class="cardOne">
    <img src="createcv.PNG" alt="">
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nobis sint amet tempore maiores ab pariatur iusto tempora incidunt eum.</p>
            </div>
</div>

<style>
    .cardOne{
        width: auto;
        padding: 10px;
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
</style>