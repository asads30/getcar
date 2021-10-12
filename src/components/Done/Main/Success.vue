<template>
    <div class="success">
        <div class="success-top">
            <span>Поздравляем, ваша бронь подтверждена</span>
            <img src="./images/success.svg" alt="">
        </div>
        <div class="success-list">
            <div class="success-item">
                <p>ID: <span>115</span></p>
            </div>
            <div class="success-item">
                <p>Дата: <span>23.02.21</span></p>
            </div>
            <div class="success-item">
                <p>Статус: <span>Оплачено</span></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .success{
        background: #FFFFFF;
        box-shadow: 0px 2px 40px rgba(114, 114, 114, 0.25);
        border-radius: 16px;
        padding: 25px 32px;
        margin-bottom: 20px;
    }
    .success-top{
        display: flex;
        align-items: center;
        margin-bottom: 18px;
    }
    .success-top>span{
        font-size: 24px;
        font-weight: 700;
        color: #0B0B0B;
        margin-right: 24px;
    }
    .success-list{
        display: flex;
    }
    .success-item{
        margin-right: 50px;
    }
    .success-item>p{
        margin-bottom: 0;
        font-weight: 500;
        font-size: 17px;
        color: #5c5c5c;
    }
    .success-item>p>span{
        font-weight: 700;
        color: #0B0B0B;
    }
</style>