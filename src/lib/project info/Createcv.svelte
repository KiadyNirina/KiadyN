<div class="cardOne">
    <img src="createcv.PNG" alt="">
            <div class="info">
                <h3>Create_CV <span id="date">2024</span></h3>
                <div class="techno">
                    <div class="techno2">
                        <img src="svelte.png" alt="">
                        <span>Svelte</span>
                    </div>
                </div>
                <p>CreateCV is a simple and intuitive web application built with Svelte, which allows users to create and upload their CVs in just a few steps. With a responsive and easy-to-use user interface, CreateCV offers the following features : </p>
                <ul>
                    <li><b>Dynamic CV creation</b> : The user can enter their personal information, professional experience, skills and training directly into the application.</li>
                    <li><b>Real-time preview</b> : Changes made to the CV are immediately visible thanks to real-time rendering.</li>
                    <li><b>PDF download</b> : Generation and export of the CV in PDF format, ready to be used for professional applications.</li>
                </ul>
        
                <a href="https://github.com/KiadyNirina/create_cv" class="repo">
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