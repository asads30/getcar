<template>
   <div class="buttons">
      <a href="#" class="buttons-download">Скачать ваучер</a>
      <router-link :to="{name: 'cabinet'}" class="buttons-cabinet">Личный кабинет</router-link>
   </div>
</template>

<style scoped>
   .buttons{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 0;
   }
   .buttons>a{
      display: inline-block;
      background: #1471C5;
      border-radius: 40px;
      height: 60px;
      line-height: 60px;
      padding: 0 28px;
      color: #fff;
      font-size: 20px;
      font-weight: 700;
   }
   .buttons-cabinet{
      background: #27AE60 !important;
   }
</style>