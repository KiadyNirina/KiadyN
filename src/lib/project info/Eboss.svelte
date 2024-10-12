<div class="cardOne">
    <img src="eboss.jpg" alt="">
    <img src="eboss 4.jpg" alt="">
    <img src="eboss 5.jpg" alt="">
    <img src="eboss 6.jpg" alt="">
    <div class="info">
        <h3>eBoss <span id="date">2024</span></h3>
        <div class="techno">
            <div class="techno2">
                <img src="svelte.png" alt="">
                <span>svelte</span>
            </div>
            <div class="techno2">
                <img src="django.png" alt="">
                <span>django</span>
            </div>
            <div class="techno2">
                <img src="postgresql.png" alt="">
                <span>postgresql</span>
            </div>
        </div>
        <p>E_Stock est une plateforme complète de gestion d'entreprise, conçue pour centraliser et automatiser la gestion des ressources internes. Parmi ses principales fonctionnalités :</p>
        <ul>
            <li><b>Gestion des équipements : </b>Suivi de l'inventaire, état des équipements, planification de la maintenance et gestion des renouvellements.</li>
            <li><b>Gestion des fournisseurs : </b>Suivi des commandes, contrats, et historique des transactions, avec la possibilité de gérer facilement les relations avec différents fournisseurs.</li>
            <li><b>Gestion des employés : </b>Gestion des profils d'employés, des rôles et responsabilités, ainsi que le suivi des présences et performances.</li>
            <li><b>Gestion des commandes et approvisionnements : </b>Planification automatisée des besoins, suivi des niveaux de stock, et génération automatique des commandes auprès des fournisseurs.</li>
            <li><b>Rapports et statistiques : </b>Génération de rapports détaillés sur l'utilisation des ressources, les performances des fournisseurs, les coûts d'approvisionnement, et l'efficacité des employés.</li>
        </ul>

        <a href="" class="repo">
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