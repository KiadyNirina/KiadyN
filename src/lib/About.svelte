<script>
    import { onMount } from "svelte";

    let message = ' My name is RAMBELOSON Kiady Nirina, I am from MADAGASCAR , I am a young developer. Passionate about technology🌐 and innovation💡, I am dedicated to acquiring solid technical skills and creating successful digital solutions⚙️. I am always looking for new challenges🌱 and opportunities🚪 to practice my skills and learn new technologies📚. Do not hesitate to contact me📧 for any questions, collaborations or professional opportunities🙏. '

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
        }, 70);
    }

    onMount(() => {
        typeText();
    })
</script>

<div class="about">
    <h1 class="title">Who am I?</h1>
    <p class="typed-text">{displayText}<span class="cursor">_</span></p>
    <div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/2IudUHdI075HL02Pkk" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p></p>
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
    .title{
        font-family: 'Rubik', sans-serif;
        font-size: 40px;
    }
</style>