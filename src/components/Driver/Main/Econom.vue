<template>
    <div class="econom">
        <div class="econom-title">
            <span>Сэкономьте еще больше в следующий раз</span>
        </div>
        <div class="econom-des">
            <span>Мы будем отправлять на ваш электронный адрес наши лучшие предложения и скидки. </span>
        </div>
        <div class="econom-input">
            <input type="checkbox" value="" id="check">
            <label for="check">Нет, спасибо</label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppDriverMainEconom'
}
</script>

<style scoped>
    .econom{
        box-shadow: 0px 2px 40px rgba(114, 114, 114, 0.25);
        border-radius: 16px;
        padding: 15px 25px;
    }
    .econom-title>span{
        font-size: 18px;
        line-height: 22px;
        color: #0B0B0B;
        font-weight: 700;
        margin-bottom: 10px;
        display: inline-block;
    }
    .econom-des>span{
        font-size: 14px;
        line-height: 17px;
        color: #767676;
        display: inline-block;
        margin-bottom: 15px;
    }
    .econom-input{
        display: flex;
        align-items: center;
    }
    .econom-input>input{
        margin-right: 5px;
    }
    .econom-input>label{
        font-size: 12px;
        line-height: 15px;
        color: #767676;
    }
</style>