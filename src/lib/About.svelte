<div class="about-content">
    <div class="about">
        <div class="img">
            <img src="pdp.jpg" alt="">
        </div>
        <div class="text">
            <h1>Who am I?</h1>
            <p class="typed-text">My name is RAMBELOSON Kiady Nirina, I am from MADAGASCAR , I am a young developer. Passionate about technology🌐 and innovation💡, I am dedicated to acquiring solid technical skills and creating successful digital solutions⚙️. I am always looking for new challenges🌱 and opportunities🚪 to practice my skills and learn new technologies📚. Do not hesitate to contact me📧 for any questions, collaborations or professional opportunities🙏.</p>
        </div>
    </div>
</div>

<style>
    @font-face {
        font-family: 'Rubik';
        src: url('/font/RubikVinyl-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    .about-content h1{
        font-family: 'Rubik';
        font-size: 50px;
        color: rgba(194, 194, 194, 0.859);
    }
    .about{
        padding: 10px;
        display: flex;
        align-items: center;
    }
    .img{
        width: 40%;
    }
    .text{
        width: 60%;
        padding: 20px;
        color: rgb(194, 194, 194);
        margin-bottom: 50px;
    }
    .typed-text {
        font-family: 'poppins';
        font-size: 12px;
        color: rgba(255, 255, 255, 0.797);
        line-height: 25px;
    }
    .about img{
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.182);
        padding: 5px;
        width: 100%;
    }
    @media screen and (max-width: 768px){
        .about{
            flex-direction: column;
        }
        .img{
            width: 100%;
        }
        .text{
            width: 100%;
        }
    }
</style>