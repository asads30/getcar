<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <router-link class="navbar-brand" :to="{name: 'home'}">GETcar</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="navbar-right">
                    <div class="navbar-currency">
                        <div class="navbar-lang-dropdown">
                            <button class="navbar-lang-button" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <div class="navbar-lang-text">
                                    <div class="navbar-lang-text-name">
                                        <span>UZS</span>
                                    </div>
                                    <div class="navbar-lang-text-des">
                                        <span>Валюта</span>
                                    </div>
                                </div>
                            </button>
                            <div class="navbar-lang-other">
                                <router-link :to="{name: 'uz'}" class="navbar-lang-other-button" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div class="navbar-lang-text">
                                        <div class="navbar-lang-text-name">
                                            <span>USD</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="navbar-lang">
                        <div class="navbar-lang-dropdown">
                            <button class="navbar-lang-button" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <div class="navbar-lang-icon">
                                    <img src="@/assets/images/ru.svg" alt="">
                                </div>
                                <div class="navbar-lang-text">
                                    <div class="navbar-lang-text-name">
                                        <span>Русский</span>
                                    </div>
                                    <div class="navbar-lang-text-des">
                                        <span>Язык</span>
                                    </div>
                                </div>
                            </button>
                            <div class="navbar-lang-other">
                                <router-link :to="{name: 'uz'}" class="navbar-lang-other-button" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div class="navbar-lang-icon">
                                        <img src="@/assets/images/ru.svg" alt="">
                                    </div>
                                    <div class="navbar-lang-text">
                                        <div class="navbar-lang-text-name">
                                            <span>Узбекский</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="navbar-button">
                        <router-link :to="{name: 'login'}">Войти</router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'AppNavbar'
}
</script>

<style scoped>
    .navbar{
        padding: 20px 0;
    }
    .navbar-brand{
        padding: 0;
    }
    .navbar-brand{
        color: #0052B4;
        font-weight: 900;
        font-size: 25px;
    }
    .navbar-right{
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }
    .navbar-lang{
        margin-right: 40px;
    }
    .navbar-button>a{
        background: #1471C5;
        border-radius: 20px;
        height: 40px;
        padding: 0 36px;
        display: inline-block;
        line-height: 40px;
        color: #fff;
        font-weight: 700;
        font-size: 18px;
    }
    .navbar-lang-dropdown{
        position: relative;
    }
    .navbar-lang-button{
        background: none;
        border: none;
        display: flex;
        align-items: center;
        padding: 0;
    }
    .navbar-lang-icon{
        margin-right: 12px;
    }
    .navbar-lang-text{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .navbar-lang-text-name{
        color: #0052B4;
        font-weight: bold;
        font-size: 18px;
    }
    .navbar-lang-text-des{
        color: #828282;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
    }
    .navbar-lang-button::after{
        content: '';
        margin-left: 15px;
        border: 0;
        width: 20px;
        height: 20px;
        background: url(./images/dropdown.svg);
        margin-top: -12px;
        transition: 0.5s;
    }
    .navbar-lang-other{
        display: none;
        position: absolute;
        background: #393E48;
        padding: 8px 12px;
        width: 100%;
        border-radius: 5px;
        z-index: 4;
        transition: 0.5s;
    }
    .navbar-lang-dropdown:hover .navbar-lang-other{
        display: block;
        transition: 0.5s;
    }
    .navbar-lang-other-button{
        display: flex;
        align-items: center;
    }
    .navbar-lang-other .navbar-lang-text-name{
        color: #fff;
        font-size: 14px;
        font-weight: 400;
    }
    .navbar-lang-other .navbar-lang-icon > img{
        width: 30px;
    }
    .navbar-lang-dropdown:hover .navbar-lang-button::after{
        transform: rotate(180deg);
        transition: 0.5s;
    }
    .navbar-currency{
        padding-right: 40px;
        margin-right: 40px;
        border-right: 1px solid #f0f0f0;
    }
    @media(max-width:991px){
        .navbar-brand>img{
            height: 30px;
        }
    }
</style>