<script>
    export let phase;
</script>

{#if phase === 1}
    <div class="loading-screen">
        <!-- <img id="welcome" src="welcome.png" alt=""> -->
        <p id="welcome">Welcome to my world</p>
    </div>
{/if}

{#if phase === 2}
    <div class="loading-screen">
        <div class="img">
            <img width="100px" src="logo.png" alt=""><br>
            <p>Loading <br><img width="30px" id="loading" src="loading1.gif" alt=""></p>
        </div>
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
        background: url('bg.jpg');
        background-attachment: fixed;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
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
    .img p {
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; 
        color: white;
        font-family: "Jersey10";
        font-size: 20px;
    }
    #welcome {
        font-family: "Jersey10";
        text-align: center;
        color: white;
        font-size: 70px;
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
