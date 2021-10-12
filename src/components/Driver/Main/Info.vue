<template>
    <div class="info">
        <div class="info-title">
            <span>Сведения о водителе</span>
        </div>
        <div class="info-content">
            <div class="info-des">
                <div class="info-des-box">Важно: Пожалуйста, введите имя и фамилию латинскими буквами, как указано в вашем паспорте или международном водительском удостоверении (например, Denis Ivanov).</div>
            </div>
            <div class="info-box">
                <div class="info-item">
                    <label for="name" class="info-icon">
                        <img src="./images/user-icon.svg" alt="">
                    </label>
                    <input type="text" placeholder="Имя" class="info-input" id="name">
                </div>
                <div class="info-item">
                    <label class="info-icon" for="surname">
                        <img src="./images/user-icon.svg" alt="">
                    </label>
                    <input type="text" placeholder="Телефон" class="info-input" id="surname">
                </div>
            </div>
            <div class="info-box">
                <div class="info-item">
                    <label for="phone" class="info-icon">
                        <img src="./images/phone-icon.svg" alt="">
                    </label>
                    <input type="text" placeholder="Телефон" class="info-input" id="phone">
                </div>
                <div class="info-item">
                    <label class="info-icon" for="email">
                        <img src="./images/email-icon.svg" alt="">
                    </label>
                    <input type="text" placeholder="Эл.почта" class="info-input" id="email">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppDriverMainInfo'
}
</script>

<style scoped>
    .info{
        margin-top: 20px;
        background: #FFFFFF;
        box-shadow: 0px 2px 40px rgba(114, 114, 114, 0.25);
        border-radius: 16px;
        margin-bottom: 20px;
    }
    .info-title{
        padding: 10px 30px;
        background: #FAFAFA;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
    }
    .info-title>span{
        font-size: 24px;
        font-weight: 700;
        color: #0B0B0B;
    }
    .info-content{
        padding: 20px 25px;
    }
    .info-des{
        padding: 0 0 15px;
        border-bottom: 1px solid #EAEAEA;
        margin-bottom: 40px;
    }
    .info-des-box{
        font-size: 14px;
        line-height: 17px;
        color: #767676;
        width: 500px;
    }
    .info-box{
        display: flex;
    }
    .info-item{
        display: flex;
        padding: 8px 0;
        border-bottom: 2px solid #DEDEDE;
        margin-right: 80px;
        margin-bottom: 25px;
    }
    .info-input{
        border: 0;
        background: none;
        font-weight: 600;
        font-size: 15px;
        line-height: 22px;
    }
    .info-input:focus{
        outline: 0 !important;
    }
    .info-icon{
        margin-right: 9px;
    }
</style>