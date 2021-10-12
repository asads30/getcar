<template>
    <div class="topbar">
        <div class="topbar-get">
            <div class="topbar-top">
                <span>Получение</span>
            </div>
            <div class="topbar-bottom">
                <span>Ташкент, Аэропорт 10:00 8 января 2021</span>
            </div>
        </div>
        <div class="topbar-icon">
            <img src="@/components/Home/Main/images/topbar-icon.svg" alt="">
        </div>
        <div class="comeback">
            <div class="comeback-top">
                <span>Возврат</span>
            </div>
            <div class="comeback-bottom">
                <span>Ташкент, Аэропорт 10:00 8 января 2021</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppHomeMainTopbar'
}
</script>

<style scoped>
    .topbar{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #F0F0F0;
        box-shadow: 0px 2px 40px rgba(114, 114, 114, 0.08);
        border-radius: 16px;
        padding: 19px 20px;
        margin-bottom: 20px;
    }
    .topbar-top>span, .comeback-top>span{
        color: #333333;
        opacity: 0.8;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
    }
    .comeback-bottom>span, .topbar-bottom>span{
        color: #000;
        font-size: 14px;
        line-height: 17px;
        font-weight: 700;
    }
    @media(max-width: 991px){
        .topbar{
            display: none;
        }
    }
</style>