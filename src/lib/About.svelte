<script>
    import { onMount } from "svelte";

    let message = ' My name is RAMBELOSON Kiady Nirina, I am from MADAGASCAR , I am a young full-stack developer. Passionate about technology🌐 and innovation💡, I am dedicated to acquiring solid technical skills and creating successful digital solutions⚙️. In addition to my technical skills👨‍💻, I enjoy collaborating with other developers🤝 and participating in team projects. I am always looking for new challenges🌱 and opportunities🚪 to practice my skills and learn new technologies📚. Do not hesitate to contact me📧 for any questions, collaborations or professional opportunities🙏. '

    let displayText = "";
    
    function typeText() {
        let index = 0;
        displayText = "";
        
        const typingInterval = setInterval(() => {
            displayText += message[index];
            index++;
            
            if (index === message.length) {
                clearInterval(typingInterval);
            }
        }, 50);
    }

    onMount(() => {
        typeText();
    })
</script>

<div class="about">
    <p class="typed-text">{displayText}<span class="cursor">_</span></p>
    <img src="giphy (11).webp" alt="">
</div>

<style>
    .about{
        padding: 10px;
    }
    .typed-text {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 13px;
        margin-bottom: 50px;
        color: rgba(255, 255, 255, 0.797);
        line-height: 25px;
    }
    .about img{
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.182);
        padding: 5px;
        width: 100%;
    }
</style>