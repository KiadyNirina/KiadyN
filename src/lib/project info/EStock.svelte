<div class="cardOne">
    <img src="e_stock.jpg" alt="">
    <div class="info">
        <h3>E_Stock <span id="date">2023</span></h3>
        <div class="techno">
            <div class="techno2">
                <img src="html.png" alt="">
                <span>Html</span>
            </div>
            <div class="techno2">
                <img src="css.png" alt="">
                <span>Css</span>
            </div>
            <div class="techno2">
                <img src="php.png" alt="">
                <span>PHP</span>
            </div>
            <div class="techno2">
                <img src="mysql.png" alt="">
                <span>Mysql</span>
            </div>
        </div>
        <p>E_Stock is a comprehensive business management platform, designed to centralize and automate the management of internal resources. Among its main features:</p>
        <ul>
            <li><b>Equipment management : </b>Inventory monitoring, equipment status, maintenance planning and renewal management.</li>
            <li><b>Supplier management : </b> Track orders, contracts, and transaction history, with the ability to easily manage relationships with different suppliers.</li>
            <li><b>Employee management : </b> Management of employee profiles, roles and responsibilities, as well as attendance and performance tracking.</li>
            <li><b>Order and supply management : </b> Automated planning of needs, monitoring of stock levels, and automatic generation of orders from suppliers.</li>
            <li><b>Reporting and Statistics : </b>Generate detailed reports on resource utilization, supplier performance, procurement costs, and employee efficiency.</li>
        </ul>

        <a href="https://github.com/KiadyNirina/E_Stock" class="repo">
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