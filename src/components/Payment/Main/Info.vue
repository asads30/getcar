<template>
    <div class="info">
        <div class="info-title">
            <span>Сведения о водителе</span>
        </div>
        <div class="info-list">
            <div class="info-item">
                <p>Имя: <span>Евгений</span></p>
            </div>
            <div class="info-item">
                <p>Эл. почта:<span> evgeniy@mail.ru</span></p>
            </div>
            <div class="info-item">
                <p>Номер телефона:<span> +998 93 555 55 55</span></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppPaymentMainInfo'
}
</script>

<style scoped>
    .info{
        box-shadow: 0px 2px 40px rgba(114, 114, 114, 0.25);
        margin-top: 20px;
        border-radius: 16px;
    }
    .info-title{
        padding: 10px 32px;
        background: #FAFAFA;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
    }
    .info-title>span{
        font-size: 24px;
        color: #0B0B0B;
        font-weight: 700;
    }
    .info-list{
        padding: 18px 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .info-item>p{
        margin-bottom: 5px;
        font-weight: 500;
        font-size: 15px;
        color: #5C5C5C;
    }
    .info-item>p>span{
        font-weight: 700;
        color: #000;
    }
</style>