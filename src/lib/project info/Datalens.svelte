<div class="cardOne">
    <div class="img">
        <img src="datalens.jpg" alt="">
        <img src="datalens 2.jpg" alt="">
    </div>
            <div class="info">
                <h3>DataLens <span id="date">2024</span></h3>
                <div class="techno">
                    <div class="techno2">
                        <img src="python.png" alt="">
                        <span>Python</span>
                    </div>
                </div>
                <p>DataLens is a data visualization tool designed to provide clear analysis through interactive graphics. DataLens offers the following features: </p>
                <ul>
                    <li><b>Data import</b> : Easy loading and integration of datasets in CSV, JSON format.</li>
                    <li><b>Interactive visualization</b> : Creating dynamic charts to explore trends and insights.</li>
                </ul>

                <a href="https://github.com/KiadyNirina/DataLens" class="repo">
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
    .img{
        display: flex;
        width: 100%;
    }
    .img img{
        width: 49%;
        border-radius: 5px;
        margin: auto;
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
    .info p, .info li{
        color: rgb(165, 165, 165);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin-block-start: 5px;
        margin-block-end: 5px;
        line-height: 25px;
        font-size: 13px;
    }
    .info li b{
        font-style: normal;
        font-size: 15px;
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