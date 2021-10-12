<template>
   <div class="cabinet">
      <div class="container">
         <div class="row">
            <div class="col-md-3">
               <div class="cabinet-menu">
                  <div class="cabinet-list">
                     <div class="cabinet-item">
                        <router-link :to="{name: 'cabinet'}">Персональные данные</router-link>
                     </div>
                     <div class="cabinet-item">
                        <router-link :to="{name: 'booking'}" class="active">Мои бронирования</router-link>
                     </div>
                     <div class="cabinet-item">
                        <a href="#">Мои транзакции</a>
                     </div>
                  </div>
                  <div class="cabinet-back">
                     <router-link :to="{name: 'home'}" href="#">Поиск аренды автомобиля</router-link>
                  </div>
               </div>
            </div>
            <div class="col-md-9">
               <div class="cabinet-box">
                  <div class="row">
                     <div class="col-md-6">
                        <div class="cabinet-box-item">
                           <div class="cabinet-box-icon">
                              <img src="@/assets/images/cabinet.svg" alt="">
                           </div>
                           <div class="cabinet-box-input">
                              <input type="text" placeholder="Имя">
                           </div>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="cabinet-box-item">
                           <div class="cabinet-box-icon">
                              <img src="@/assets/images/cabinet.svg" alt="">
                           </div>
                           <div class="cabinet-box-input">
                              <input type="text" placeholder="Фамилия">
                           </div>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="cabinet-box-item">
                           <div class="cabinet-box-icon">
                              <img src="@/assets/images/email.svg" alt="">
                           </div>
                           <div class="cabinet-box-input">
                              <input type="text" placeholder="Эл.почта">
                           </div>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="cabinet-box-item">
                           <div class="cabinet-box-icon">
                              <img src="@/assets/images/phone.svg" alt="">
                           </div>
                           <div class="cabinet-box-input">
                              <input type="text" placeholder="Телефон">
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="cabinet-save">
                  <button>Сохранить</button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>
   .cabinet{
      padding-top: 30px;
   }
   .cabinet-menu{
      padding-bottom: 50px;
   }
   .cabinet-list{
      margin-bottom: 40px;
   }
   .cabinet-item>a{
      font-size: 18px;
      font-weight: 700;
      color: #1471C5;
      padding: 8px 20px;
      display: inline-block;
      border-bottom: 2px solid #DEDEDE;
      width: 100%;
      margin-bottom: 10px;
   }
   .cabinet-item>a.active{
      box-shadow: 0px 0px 5px 3px rgba(221, 221, 221, 0.25);
      border-radius: 25px;
      border-bottom: 0;
   }
   .cabinet-back>a{
      height: 50px;
      line-height: 50px;
      width: 100%;
      display: inline-block;
      font-weight: 600;
      text-align: center;
      background: #1471C5;
      border-radius: 30px;
      color: #fff;
      font-size: 15px;
   }
   .cabinet-box{
      box-shadow: 2px 0px 6px 5px rgba(218, 218, 218, 0.25);
      border-radius: 26px;
      padding: 30px 30px 0;
   }
   .cabinet-box-item{
      display: flex;
      border-bottom: 2px solid #DEDEDE;
      margin-bottom: 30px;
      padding: 5px 0;
   }
   .cabinet-box-icon{
      width: 30px;
      text-align: center;
      margin-right: 5px;
   }
   .cabinet-box-input>input{
      border: 0;
      font-weight: 600;
      font-size: 16px;
   }
   .cabinet-box-input>input::placeholder{
      color: #DEDEDE;
   }
   .cabinet-box-input>input:focus{
      outline: 0 !important;
   }
   .cabinet-save{
      display: flex;
      justify-content: flex-end;
      padding-top: 30px;
   }
   .cabinet-save>button{
      height: 50px;
      line-height: 50px;
      display: inline-block;
      font-weight: 600;
      text-align: center;
      background: #1471C5;
      border-radius: 30px;
      padding: 0 30px;
      color: #fff;
      border: 0;
      font-size: 15px;
   }
</style>