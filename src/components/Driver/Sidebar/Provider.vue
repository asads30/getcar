<template>
    <div class="provider">
        <div class="about">
            <div class="about-icon">
                <img src="./images/provider.svg" alt="">
            </div>
            <div class="about-text">
                <span>Поставщик Dream Car</span>
            </div>
        </div>
        <div class="reviews">
            <div class="reviews-title">
                <span>Отзывы</span>
                <div class="line"></div>
            </div>
            <carousel class="feed-carousel" :items="1" :nav="false" :dots="true">
                <div class="feed-item">
                    <div class="reviews-top">
                        <div class="reviews-top-left">
                            <div class="reviews-icon">
                                <img src="./images/comment.svg" alt="">
                            </div>
                            <div class="reviews-text">
                                <span>23 Март 2020</span>
                                <span>Пара</span>
                            </div>
                        </div>
                        <div class="reviews-top-right">
                            <div class="reviews-ball">
                                <span>9.8</span>
                            </div>
                        </div>
                    </div>
                    <div class="reviews-box">
                        <div class="reviews-box-icon">
                            <img src="./images/check.svg" alt="">
                        </div>
                        <div class="reviews-box-text">
                            <p>Отличная компания и обслуживание....</p>
                            <a href="#">Подробнее</a>
                        </div>
                    </div>
                </div>
                <div class="feed-item">
                    <div class="reviews-top">
                        <div class="reviews-top-left">
                            <div class="reviews-icon">
                                <img src="./images/comment.svg" alt="">
                            </div>
                            <div class="reviews-text">
                                <span>23 Март 2020</span>
                                <span>Пара</span>
                            </div>
                        </div>
                        <div class="reviews-top-right">
                            <div class="reviews-ball">
                                <span>9.8</span>
                            </div>
                        </div>
                    </div>
                    <div class="reviews-box">
                        <div class="reviews-box-icon">
                            <img src="./images/check.svg" alt="">
                        </div>
                        <div class="reviews-box-text">
                            <p>Отличная компания и обслуживание....</p>
                            <a href="#">Подробнее</a>
                        </div>
                    </div>
                </div>
            </carousel>
            <div class="reviews-tab">
                <ul class="nav nav-tabs reviews-tabs" id="reviews-tab" role="tablist">
                    <li role="presentation">
                        <button class="active" id="reviews1-tab" data-bs-toggle="tab" data-bs-target="#reviews1" type="button" role="tab" aria-controls="reviews1" aria-selected="true">
                            <img src="./images/map.svg" alt="">
                        </button>
                    </li>
                    <li role="presentation">
                        <button id="reviews2-tab" data-bs-toggle="tab" data-bs-target="#reviews2" type="button" role="tab" aria-controls="reviews2" aria-selected="false">
                            <img src="./images/important.svg" alt="">
                        </button>
                    </li>
                    <li role="presentation">
                        <button id="reviews3-tab" data-bs-toggle="tab" data-bs-target="#reviews3" type="button" role="tab" aria-controls="reviews3" aria-selected="false">
                            <img src="./images/time.svg" alt="">
                        </button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="reviews1" role="tabpanel" aria-labelledby="reviews1-tab">
                        MAP
                    </div>
                    <div class="tab-pane fade" id="reviews2" role="tabpanel" aria-labelledby="reviews2-tab">
                        IMPORTANT
                    </div>
                    <div class="tab-pane fade" id="reviews3" role="tabpanel" aria-labelledby="reviews3-tab">
                        <div class="reviews-tab-content">
                            <div class="reviews-cont-title">
                                <span>Время работы</span>
                            </div>
                            <div class="reviews-cont-box">
                                <div class="reviews-cont-name">
                                    <span>Понедельник - Пятница</span>
                                </div>
                                <div class="reviews-cont-time">
                                    <span>24 часа</span>
                                </div>
                            </div>
                            <div class="reviews-cont-box">
                                <div class="reviews-cont-name">
                                    <span>Суббота - Воскресенье</span>
                                </div>
                                <div class="reviews-cont-time">
                                    <span>24 часа</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
    name: 'AppDriverSidebarProvider',
    components: {
        carousel,
    }
}
</script>

<style scoped>
    .provider{
        padding: 25px;
        border-radius: 16px;
        background: #fff;
        box-shadow: 0px 1px 4px 4px rgba(0, 0, 0, 0.04);
        margin-bottom: 20px;
    }
    .about{
        display: flex;
        align-content: center;
        margin-bottom: 40px;
    }
    .about-text{
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
    .about-text>span{
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
    }
    .reviews-title{
        display: flex;
        align-items: center;
        margin-bottom: 25px;
    }
    .reviews-title>span{
        font-size: 14px;
        color: #232323;
        margin-right: 12px;
    }
    .reviews-title>.line{
        width: 100%;
        height: 1px;
        background: #EAEAEA;
    }
    .reviews-top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 15px;
    }
    .reviews-top-left{
        display: flex;
        align-items: center;
    }
    .reviews-icon{
        margin-right: 12px;
    }
    .reviews-text{
        display: flex;
        flex-direction: column;
    }
    .reviews-text>span:first-child{
        font-size: 14px;
        color: #424242;
    }
    .reviews-text>span:last-child{
        font-size: 14px;
        color: #0A0909;
    }
    .reviews-ball{
        border-radius: 16px;
        border: 2px solid #1471C5;
        padding: 2px 5px;
    }
    .reviews-ball>span{
        font-weight: 500;
        font-size: 14px;
        color: #1471C5;
    }
    .reviews-box{
        display: flex;
        border: 1px solid #EAEAEA;
        border-radius: 5px;
        padding: 20px 8px 12px;
    }
    .reviews-box-icon{
        margin-right: 8px;
    }
    .reviews-box-text>p{
        font-size: 14px;
        line-height: 17px;
        color: #0A0909;
        margin-bottom: 3px;
    }
    .reviews-box-text>a{
        font-size: 14px;
        line-height: 17px;
        color: #1471C5;
    }
    .reviews-tab{
        padding-top: 20px;
    }
    .reviews-tabs{
        border-bottom: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 25px;
    }
    .reviews-tabs>li>button{
        border-radius: 5px;
        border: 1px solid #EAEAEA;
        background: #fff;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 30px;
    }
    .reviews-cont-title>span{
        font-size: 18px;
        line-height: 22px;
        color: #0B0B0B;
        font-weight: 700;
        margin-bottom: 10px;
        display: inline-block;
    }
    .reviews-cont-box{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .reviews-cont-name>span{
        font-size: 14px;
        color: #0A0909;
    }
    .reviews-cont-time>span{
        font-weight: 600;
        color: #0A0909;
        font-size: 14px;
    }
</style>