<div class="cardOne">
    <div class="img">
        <img src="real_talk.jpg" alt="">
        <img src="real_talk 2.jpg" alt="">
    </div>
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
                <p>Real_Talk is a real-time chat platform, designed to facilitate instant communication between users. Developed with modern architecture, it offers a fluid and interactive experience. Key features include:</p>
                <ul>
                    <li><b>Instant Messaging</b> : Allows users to chat in real time through an intuitive interface.</li>
                    <li><b>Real-time notifications</b> : Notification system for new messages and interactions with other users.</li>
                    <li><b>User management</b> : Registration, login and profile management, with the ability to see who is online and add contacts.</li>
                    <li><b>Status and Presence</b> : Indication of users' online status for a more interactive experience.</li>
                    <li><b>Secure system</b> : Authentication and protection of personal data guaranteed.</li>
                </ul>
            </div>
            <a href="https://github.com/KiadyNirina/Real_talk" class="repo">
                <img src="github-white.png" alt="">
                Repo github
            </a>
</div>

<style>
    .cardOne{
        width: auto;
        padding: 10px;
        font-family: 'poppins';
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
        font-size: 20px;
    }
    .info p, .info li{
        color: rgb(165, 165, 165);
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