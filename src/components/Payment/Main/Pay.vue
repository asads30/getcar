<template>
    <div class="pay">
        <div class="pay-title">
            <span>Сведения об оплате </span>
        </div>
        <div class="pay-box">
            <div class="pay-accept">
                <div class="pay-accept-title">
                    <span>Мы принимаем</span>
                </div>
                <div class="pay-accept-list">
                    <div class="pay-accept-item">
                        <img src="./images/visa.png" alt="">
                    </div>
                    <div class="pay-accept-item">
                        <img src="./images/mastercard.png" alt="">
                    </div>
                    <div class="pay-accept-item">
                        <img src="./images/paypal.png" alt="">
                    </div>
                </div>
            </div>
            <div class="pay-list">
                <div class="pay-item">
                    <div class="pay-icon">
                        <img src="./images/user.svg" alt="">
                    </div>
                    <div class="pay-input">
                        <input type="text" placeholder="Ф.И.О.">
                    </div>
                </div>
                <div class="pay-item">
                    <div class="pay-icon">
                        <img src="./images/card.svg" alt="">
                    </div>
                    <div class="pay-input">
                        <input type="text" placeholder="1234 5678 9012 3456">
                    </div>
                </div>
                <div class="pay-item">
                    <div class="pay-icon">
                        <img src="./images/calendar.svg" alt="">
                    </div>
                    <div class="pay-input">
                        <input type="text" placeholder="09.2020 ( Сроки действия )">
                    </div>
                </div>
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
    .pay{
        box-shadow: 0px 2px 40px rgba(114, 114, 114, 0.25);
        margin-top: 20px;
        border-radius: 16px;
    }
    .pay-title{
        padding: 10px 32px;
        background: #FAFAFA;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
    }
    .pay-title>span{
        font-size: 24px;
        color: #0B0B0B;
        font-weight: 700;
    }
    .pay-box{
        padding: 18px 32px;
    }
    .pay-accept-title{
        margin-bottom: 20px;
    }
    .pay-accept-title>span{
        font-weight: 600;
        font-size: 17px;
        color: #5F5A5A;
    }
    .pay-accept-list{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    .pay-item{
        display: flex;
        align-items: center;
        margin-bottom: 25px;
        border-bottom: 2px solid #DEDEDE;
        width: 50%;
    }
    .pay-icon{
        width: 40px;
        text-align: center;
    }
    .pay-input{
        width: 100%;
    }
    .pay-input>input{
        border: 0;
        width: 100%;
        font-weight: 600;
        font-size: 18px;
    }
    .pay-input>input::placeholder{
        color: #DEDEDE;
    }
    .pay-input>input:focus{
        outline: 0 !important;
    }
</style>