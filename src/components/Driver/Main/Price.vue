<template>
    <div class="price">
        <div class="price-icon">
            <img src="./images/price-icon.svg" alt="">
        </div>
        <div class="price-text">
            <div class="price-title">
                <span>Цена включает:</span>
            </div>
            <div class="price-list">
                <div class="price-item">
                    <img src="./images/check.svg" alt="">
                    <div class="price-name">
                        <span>Покрытие на случай угона</span>
                    </div>
                </div>
                <div class="price-item">
                    <img src="./images/check.svg" alt="">
                    <div class="price-name">
                        <span>Покрытие на случай угона</span>
                    </div>
                </div>
                <div class="price-item">
                    <img src="./images/check.svg" alt="">
                    <div class="price-name">
                        <span>Покрытие на случай угона</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppDriverMainPrice'
}
</script>

<style scoped>
    .price{
        background: #EDFAF2;
        box-shadow: 0px 2px 40px rgba(114, 114, 114, 0.25);
        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        border-left: 18px solid #27AE60;
        padding: 30px 0 25px 20px;
    }
    .price-list{
        display: flex;
        align-items: center;
    }
    .price-item{
        display: flex;
        align-items: center;
        margin-right: 10px;
    }
    .price-icon{
        margin-right: 15px;
    }
    .price-title>span{
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: #27AE60;
    }
    .price-item>img{
        margin-right: 5px;
    }
    .price-name>span{
        font-size: 13px;
        color: #232323;
    }
</style>