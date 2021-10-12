<template>
    <div class="next">
        <div class="next-buttons">
            <div class="next-back">
                <router-link :to="{name: 'single'}">Назад</router-link>
            </div>
            <div class="next-next">
                <router-link :to="{name: 'payment'}">Бронировать</router-link>
            </div>
        </div>
        <div class="next-des">
            <p>Нажав "Бронировать", вы подтверждаете, что ознакомились, поняли и приняли нашу <router-link :to="{name: 'home'}">Политику конфиденциальности.</router-link></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppDriverMainNext'
}
</script>

<style scoped>
    .next{
        padding: 25px 0;
    }
    .next-buttons{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 45px;
    }
    .next-back>a{
        background: #E8E8E8;
        border-radius: 40px;
        color: #fff;
        height: 60px;
        line-height: 60px;
        display: inline-block;
        font-size: 20px;
        font-weight: 700;
        padding: 0 78px;
    }
    .next-next>a{
        background: #27AE60;
        border-radius: 40px;
        color: #fff;
        height: 60px;
        line-height: 60px;
        display: inline-block;
        font-size: 20px;
        font-weight: 700;
        padding: 0 78px;
    }
    .next-des>p{
        margin-bottom: 0;
        font-size: 12px;
        line-height: 15px;
        color: #767676;
    }
    .next-des>p>a{
        color: #1471C5;
        text-decoration: underline;
    }
</style>