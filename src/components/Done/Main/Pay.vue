<template>
   <div class="pay">
      <div class="pay-title">
         <span>Сведения об оплате </span>
      </div>
      <div class="pay-box">
         <div class="pay-left">
            <p>Ф.И.О: <span>Ройтман Рафаэль Евгеньевич</span></p>
            <p>Оплачено: <span>9 000 000</span></p>
         </div>
         <div class="pay-right">
            <p>Номер карты: <span>1234 5678 9012 3456</span></p>
            <p>Сроки действия: <span>09.2020</span></p>
            <img src="./images/visa.svg" alt="" class="pay-img">
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'AppDriverMainPay'
}
</script>

<style scoped>
   .pay{
      box-shadow: 0px 2px 40px rgba(114, 114, 114, 0.25);
      border-radius: 16px;
      margin-top: 20px;
   }
   .pay-title{
      padding: 10px 30px;
      background: #FAFAFA;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
   }
   .pay-title>span{
      font-size: 24px;
      font-weight: 700;
      color: #0B0B0B;
   }
   .pay-box{
      padding: 20px 25px 10px;
      display: flex;
      align-items: center;
   }
   .pay-box>div>p{
      margin-bottom: 0;
      font-size: 15px;
      color: #373737;
      margin-bottom: 10px;
   }
   .pay-box>div>p>span{
      font-weight: 700;
   }
   .pay-left{
      margin-right: 35px;
   }
   .pay-right{
      position: relative;
   }
   .pay-img{
      position: absolute;
      right: -100px;
      top: 0;
   }
</style>