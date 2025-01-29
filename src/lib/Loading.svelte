<script>
    export let phase;
</script>

{#if phase === 1}
    <div class="loading-screen">
        <div class="img">
            <img src="logo.png" alt=""><br>
            <p>Loading <img id="loading" src="loading2.gif" alt=""></p>
        </div>
    </div>
{/if}

{#if phase === 2}
    <div class="loading-screen">
        <!-- <img id="welcome" src="welcome.png" alt=""> -->
        <p id="welcome" class="glitch" data-text="Welcome to my world">Welcome to my world</p>
    </div>
{/if}
  
<style>
    @font-face {
        font-family: 'Jersey10';
        src: url('/font/Jersey10-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    .loading-screen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: black;
        /* background: url('bg.jpg');
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat; */
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 2s ease-out, fadeOut 1s ease-out forwards;
        animation-delay: 0s, 200s;
    } 
    .img{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; 
    }
    .img img{
      width: 40px;
      border: 2px solid white;
      border-radius: 100%;
    }
    .img p {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center; 
        color: white;
        font-family: "Jersey10";
        font-size: 20px;
    }
    .img p img{
      border: none;
      margin-left: 5px;
      width:30px;
    }
    #welcome {
        font-family: "Jersey10";
        text-align: center;
        color: white;
        font-size: 70px;
    }
    .glitch {
        position: relative;
        color: white;
        font-family: "Jersey10";
        font-size: 70px;
        text-align: center;
    }
    .glitch::before, .glitch::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: black;
        overflow: hidden;
        clip: rect(0, 900px, 0, 0);
    }
    .glitch::before {
        left: 2px;
        text-shadow: -2px 0 red;
        animation: glitch 2s infinite linear alternate-reverse;
    }
    .glitch::after {
        left: -2px;
        text-shadow: -2px 0 blue;
        animation: glitch 2s infinite linear alternate-reverse;
        animation-delay: .5s;
    }
    @keyframes glitch {
        0% {
            clip: rect(42px, 9999px, 44px, 0);
            transform: skew(0.3deg);
        }
        5% {
            clip: rect(12px, 9999px, 60px, 0);
            transform: skew(0.3deg);
        }
        10% {
            clip: rect(92px, 9999px, 100px, 0);
            transform: skew(0.3deg);
        }
        15% {
            clip: rect(72px, 9999px, 80px, 0);
            transform: skew(0.3deg);
        }
        20% {
            clip: rect(42px, 9999px, 44px, 0);
            transform: skew(0.3deg);
        }
        25% {
            clip: rect(12px, 9999px, 60px, 0);
            transform: skew(0.3deg);
        }
        30% {
            clip: rect(92px, 9999px, 100px, 0);
            transform: skew(0.3deg);
        }
        35% {
            clip: rect(72px, 9999px, 80px, 0);
            transform: skew(0.3deg);
        }
        40% {
            clip: rect(42px, 9999px, 44px, 0);
            transform: skew(0.3deg);
        }
        45% {
            clip: rect(12px, 9999px, 60px, 0);
            transform: skew(0.3deg);
        }
        50% {
            clip: rect(92px, 9999px, 100px, 0);
            transform: skew(0.3deg);
        }
        55% {
            clip: rect(72px, 9999px, 80px, 0);
            transform: skew(0.3deg);
        }
        60% {
            clip: rect(42px, 9999px, 44px, 0);
            transform: skew(0.3deg);
        }
        65% {
            clip: rect(12px, 9999px, 60px, 0);
            transform: skew(0.3deg);
        }
        70% {
            clip: rect(92px, 9999px, 100px, 0);
            transform: skew(0.3deg);
        }
        75% {
            clip: rect(72px, 9999px, 80px, 0);
            transform: skew(0.3deg);
        }
        80% {
            clip: rect(42px, 9999px, 44px, 0);
            transform: skew(0.3deg);
        }
        85% {
            clip: rect(12px, 9999px, 60px, 0);
            transform: skew(0.3deg);
        }
        90% {
            clip: rect(92px, 9999px, 100px, 0);
            transform: skew(0.3deg);
        }
        95% {
            clip: rect(72px, 9999px, 80px, 0);
            transform: skew(0.3deg);
        }
        100% {
            clip: rect(42px, 9999px, 44px, 0);
            transform: skew(0.3deg);
        }
    }
    @keyframes fadeIn {
        0% {
        opacity: 0;
        }
        100% {
        opacity: 1;
        }
    }

    @keyframes fadeOut {
        0% {
        opacity: 1;
        }
        100% {
        opacity: 0;
        visibility: hidden;
        }
    }
</style>
