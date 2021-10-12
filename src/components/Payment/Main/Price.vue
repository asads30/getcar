<template>
    <div class="price">
        <div class="price-title">
            <span>Подробный расчет</span>
        </div>
        <div class="price-box">
            <div class="price-list">
                <div class="price-item">
                    <div class="price-name">
                        <span>Стоимость аренды</span>
                    </div>
                    <div class="price-des">
                        <span>999 999 999 сум</span>
                    </div>
                </div>
                <div class="price-item">
                    <div class="price-name">
                        <span>Полная защита</span>
                    </div>
                    <div class="price-des">
                        <span>999 999 999 сум</span>
                    </div>
                </div>
                <div class="price-item">
                    <div class="price-name">
                        <span>Сбор за оплату кредитной картой</span>
                    </div>
                    <div class="price-des">
                        <span>999 999 999 сум</span>
                    </div>
                </div>
            </div>
            <div class="price-all">
                <span>К оплате 999 999 999 сум</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppPaymentMainPrice'
}
</script>

<style scoped>
    .price{
        box-shadow: 0px 2px 40px rgba(114, 114, 114, 0.25);
        margin-top: 20px;
        border-radius: 16px;
    }
    .price-title{
        padding: 10px 32px;
        background: #FAFAFA;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
    }
    .price-title>span{
        font-size: 24px;
        color: #0B0B0B;
        font-weight: 700;
    }
    .price-box{
        padding: 18px 32px;
    }
    .price-list{
        margin-bottom: 20px;
    }
    .price-item{
        display: flex;
        align-items: center;
    }
    .price-name{
        width: 200px;
        margin-right: 50px;
    }
    .price-name>span{
        font-size: 14px;
        color: #232323;
        line-height: 17px;
    }
    .price-des>span{
        font-size: 20px;
        font-weight: 700;
        color: #232323;
    }
    .price-all>span{
        font-size: 22px;
        color: #1471C5;
        font-weight: 700;
    }
</style>