<template>
    <div class="feed">
        <div class="feed-title">
            <h2>Tayota Tahoma</h2>
        </div>
        <div class="feed-box">
            <div class="feed-car">
                <div class="feed-image">
                    <img src="@/components/Home/Main/images/slider1.png" />
                </div>
                <div class="feed-about">
                    <div class="feed-about-icon">
                        <img src="@/components/Driver/Sidebar/images/provider.svg" alt="">
                    </div>
                    <div class="feed-about-text">
                        <a href="#">Информация об автомобиле</a>
                    </div>
                </div>
            </div>
            <div class="feed-info">
                <div class="feed-info-box">
                    <div class="feed-info-item">
                        <div class="feed-info-title">
                            <span>Получение</span>
                        </div>
                        <div class="feed-info-date">
                            <span>10:00 Воскресенье 21 февраля 2021 г.</span>
                        </div>
                        <div class="feed-info-location">
                            <span>Ташкент аэропорт</span>
                        </div>
                    </div>
                    <div class="feed-info-edit">
                        <a href="#"><img src="./images/pen.svg" alt=""> Изменить даты</a>
                    </div>
                </div>
                <div class="feed-info-box">
                    <div class="feed-info-item">
                        <div class="feed-info-title">
                            <span>Возврат</span>
                        </div>
                        <div class="feed-info-date">
                            <span>10:00 Среда 24 февраля 2021 г.</span>
                        </div>
                        <div class="feed-info-location">
                            <span>Ташкент аэропорт</span>
                        </div>
                    </div>
                </div>
                <div class="feed-info-add">
                    <div class="feed-info-addons">
                        <div class="feed-info-addons-title">
                            <span>Дополнения</span>
                        </div>
                        <div class="feed-info-addons-place">
                            <span>Нет дополнительных услуг</span>
                        </div>
                    </div>
                    <div class="feed-info-edit">
                        <a href="#"><img src="./images/pen.svg" alt=""> Изменить даты</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="feed-list">
            <div class="feed-list-title">
                <span>4 момента, которые вам понравятся в этой сделке</span>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="feed-list-item">
                        <div class="feed-list-item-icon">
                            <img src="./images/item1.svg" alt="">
                        </div>
                        <div class="feed-list-item-text">
                            <span>Рейтинг клиентов: 7.4 / 10</span>
                        </div>
                    </div>
                    <div class="feed-list-item">
                        <div class="feed-list-item-icon">
                            <img src="./images/item2.svg" alt="">
                        </div>
                        <div class="feed-list-item-text">
                            <span>Короткие очереди</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="feed-list-item">
                        <div class="feed-list-item-icon">
                            <img src="./images/item3.svg" alt="">
                        </div>
                        <div class="feed-list-item-text">
                            <span>Легкость нахождения офиса</span>
                        </div>
                    </div>
                    <div class="feed-list-item">
                        <div class="feed-list-item-icon">
                            <img src="./images/item4.svg" alt="">
                        </div>
                        <div class="feed-list-item-text">
                            <span>Внимательный персонал</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="price">
            <div class="price-icon">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppDriverMainFeed',
}
</script>

<style scoped>
    .feed{
        background: #fff;
        box-shadow: 0px 2px 40px rgba(114, 114, 114, 0.25);
        border-radius: 16px;
    }
    .feed-title{
        padding: 26px 30px 0;
    }
    .feed-title>h2{
        margin-bottom: 0;
        color: #000;
        font-size: 24px;
        line-height: 29px;
        font-weight: 700;
    }
    .feed-box{
        padding: 0 30px 20px;
        display: flex;
        border-bottom: 1px solid #EAEAEA;
        margin-bottom: 15px;
    }
    .feed-car{
        width: 235px;
        border-right: 1px solid #eaeaea;
        padding-right: 18px;
        margin-right: 15px;
    }
    .feed-image>img{
        width: 100%;
    }
    .feed-about{
        display: flex;
        align-items: center;
    }
    .feed-about-icon{
        margin-right: 15px;
    }
    .feed-about-text>a{
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
        color: #1471C5;
        border-bottom: 1px solid #1471C5;
    }
    .feed-info{
        width: 446px;
    }
    .feed-info-box{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #EAEAEA;
        padding-top: 4px;
    }
    .feed-info-box:first-child{
        padding-top: 0;
    }
    .feed-info-title>span{
        font-size: 15px;
        line-height: 18px;
        font-weight: 700;
        color: #1471C5;
    }
    .feed-info-date>span{
        font-size: 15px;
        line-height: 18px;
        color: #232323;
    }
    .feed-info-location>span{
        font-size: 15px;
        line-height: 18px;
        font-weight: 700;
        color: #0B0B0B;
        margin-bottom: 10px;
        display: inline-block;
    }
    .feed-info-edit>a{
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
        color: #1471C5;
    }
    .feed-info-add{
        display: flex;
        justify-content: space-between;
        padding-top: 8px;
    }
    .feed-info-addons{
        display: flex;
        align-items: center;
    }
    .feed-info-addons-title>span{
        font-size: 15px;
        line-height: 18px;
        color: #0B0B0B;
        font-weight: 700;
        margin-right: 12px;
    }
    .feed-info-addons-place{
        border: 1px solid #CDCDCD;
        border-radius: 15px;
        height: 19.35px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 13px;
    }
    .feed-info-addons-place>span{
        font-size: 9px;
        color: #232323;
    }
    .feed-list{
        padding: 0 32px 22px;
    }
    .feed-list-title>span{
        font-size: 15px;
        line-height: 18px;
        color: #0B0B0B;
        font-weight: 700;
        display: inline-block;
    }
    .feed-list-item{
        display: flex;
        align-items: center;
        margin-top: 12px;
    }
    .feed-list-item-icon{
        margin-right: 12px;
        width: 33px;
        text-align: center;
    }
    .feed-list-item-text>span{
        font-size: 14px;
        color: #232323;
    }
</style>