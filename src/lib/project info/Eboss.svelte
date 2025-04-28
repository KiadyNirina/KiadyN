<script>
    import Icon from "@iconify/svelte";
</script>
<div class="cardOne">
    <div class="img">
        <img src="eboss.jpg" alt="">
        <img src="eboss 4.jpg" alt="">
    </div>
    <div class="img">
        <img src="eboss 5.jpg" alt="">
        <img src="eboss 6.jpg" alt="">
    </div>
    <div class="info">
        <h3>eBoss <span id="date">2024</span></h3>
        <div class="techno">
            <div class="techno2">
                <Icon icon="simple-icons:svelte" class="mr-1" />
                <span>svelte</span>
            </div>
            <div class="techno2">
                <Icon icon="simple-icons:django" class="mr-1" />
                <span>django</span>
            </div>
            <div class="techno2">
                <Icon icon="simple-icons:postgresql" class="mr-1" />
                <span>postgresql</span>
            </div>
        </div>
        <p>eBoss is a comprehensive school management platform, designed to meet the needs of educational establishments by automating and centralizing the management of students, teachers, parents and administrative staff. Main features include:</p>
        <ul>
            <li><b>Registration management</b> : Registration of establishments, students, teachers and parents, with centralized monitoring of information.</li>
            <li><b>Communication</b> : Messaging system allowing fluid interaction between the establishment, students, teachers and parents.</li>
            <li><b>Timetable management</b> : Automated planning of lessons and activities, with the possibility of personalizing according to the needs of each class and teacher.</li>
            <li><b>Grade Tracking and Reporting</b> : Track student academic performance, report card generation and performance reporting.</li>
            <li><b>Tuition fee management</b> : Track payments, manage fees and scholarships, send automated payment reminders.</li>
            <li><b>Salary Management</b> : Automate teacher and staff payments, track contracts and salary increases.</li>
        </ul>

        <a href="https://github.com/KiadyNirina/eBoss" class="repo">
            <Icon icon="simple-icons:github" class="mr-1" height="20px" />
            Repo github
        </a>
    </div>
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