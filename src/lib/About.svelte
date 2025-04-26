<div class="about-content">
    <div class="about">
        <div class="img">
            <img src="pdp.jpg" alt="">
        </div>
        <div class="text">
            <h1>Who am I?</h1>
            <p class="typed-text text-gray-300">
            👋 My name is RAMBELOSON Kiady Nirina, I am a young web developer from Madagascar 🇲🇬, passionate about creating innovative digital solutions 💡. Curious and motivated 🚀, I develop with languages ​​like <b>PHP</b> 🐘, <b>JavaScript</b> ⚡ and <b>Python</b> 🐍, as well as with frameworks such as <b>Laravel</b> 🛠️, <b>Django</b> 🔧, <b>Vue.js</b> 🌐 and <b>Svelte</b> 🔥. My career has allowed me to work on various projects 🎯, ranging from content management to the creation of custom web applications. Always looking for learning 📚, I strive to perfect my technical skills while developing a user-oriented and performance-oriented approach 💻✨.
            </p>
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
        color: white;
    }
    .about{
        padding: 10px;
        display: flex;
        align-items: center;
        animation: slideIn 1s ease-in-out;
    }
    .img{
        width: 40%;
    }
    .text{
        width: 60%;
        padding: 20px;
        color: white;
        margin-bottom: 50px;
    }
    .typed-text {
        font-family: 'poppins';
        font-size: 12px;
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
    @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(-20px); }
        100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideIn {
        0% { opacity: 0; transform: translateX(-20px); }
        100% { opacity: 1; transform: translateX(0); }
    }
</style>