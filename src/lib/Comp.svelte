<script>
    let images = [
        'logo_beyond.jpg',
        'logo_mycore.png'
    ]
</script>

<div class="comp">
    <div class="carousel-container">
        <div class="carousel">
            <div class="carousel-inner">
                {#each images as img}
                    <img src="{img}" alt="">
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    .carousel-container{
        display: flex;
        overflow: hidden;
        width: 100%;
        position: relative;
        margin-left: auto;
        margin-right: auto;
    }
    .carousel-inner{
        display: flex;
        animation: slide 10s linear infinite;
        padding: 20px;
    }
    .carousel img{
        width: 100%;
        flex-shrink: 0;
        object-fit: cover;
        display: block;
    }
    @keyframes slide {
        0% {
            transform: translateX(0);
        }
        100%{
            transform: translateX(-100%);
        }
    }
</style>