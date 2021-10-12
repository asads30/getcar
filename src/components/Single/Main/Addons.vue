<template>
    <div class="addons">
        <div class="addons-title">
            <h3>Дополнения</h3>
        </div>
        <div class="addons-des">
            <h5>К оплате сейчас</h5>
            <p>Если вы заказываете эти дополнительные услуги, вы будете платить за них прямо сейчас. Эти дополнительные услуги будут готовы для вас при получении автомобиля.</p>
        </div>
        <div class="addons-list">
            <div class="addons-item">
                <div class="row">
                    <div class="col-2 col-md-2">
                        <div class="addons-icon">
                            <img src="./images/dop1.svg" alt="">
                        </div>
                    </div>
                    <div class="col-6 col-md-6">
                        <div class="addons-text">
                            <span>Коляска 999 999 сум за аренду</span>
                        </div>
                    </div>
                    <div class="col-2 col-md-2">
                        <div class="addons-select">
                            <select>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-2 col-md-2">
                        <div class="addons-checkbox">
                            <input type="checkbox" value="" id="flexCheckDefault">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppAddonsSingle'
}
</script>

<style scoped>
    .addons{
        margin-top: 30px;
        border-radius: 16px;
        background: #fff;
        box-shadow: 0px 2px 40px rgba(114, 114, 114, 0.25);
    }
    .addons-title{
        background: #fafafa;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        padding: 10px 20px;
    }
    .addons-title>h3{
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        color: #111111;
        margin-bottom: 0;
    }
    .addons-des{
        padding: 20px 20px 10px;
    }
    .addons-des>h5{
        font-weight: 600;
        font-size: 15px;
        color: #000;
    }
    .addons-des>p{
        font-size: 14px;
        color: #767676;
        line-height: 14px;
    }
    .addons-list{
        padding: 0 20px 20px;
    }
    .addons-item>.row{
        align-items: center;
    }
    .addons-icon{
        text-align: center;
    }
    .addons-text{
        font-size: 15px;
        line-height: 18px;
        color: #000;
    }
    .addons-select{
        text-align: center;
    }
    .addons-checkbox{
        text-align: center;
    }
    @media(max-width:991px){
        .addons-title>h3{
            font-size: 18px;
        }
    }
</style>