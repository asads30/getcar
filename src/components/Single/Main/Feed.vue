<template>
    <div class="single-feed">
        <div class="feed-item" v-for="feed in feeds" :key="feed.id">
            <div class="feed-top">
                <div class="feed-title">
                    <h4>{{ feed.name }}</h4>
                </div>
                <div class="feed-buttons">
                    <div class="feed-share">
                        <div class="feed-show">
                            <ShareNetwork
                                network="facebook"
                                :url="currentUrl"
                                class="feed-show-item"
                            >
                                <img src="@/assets/images/facebook.svg" alt="">
                            </ShareNetwork>
                        </div>
                        <img src="@/components/Home/Main/images/share.svg" alt="">
                    </div>
                    <div class="feed-fav">
                        <img src="@/components/Home/Main/images/favorite.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="feed-box">
                <div class="row">
                    <div class="col-md-5">
                        <div class="feed-main">
                            <div class="feed-slider">
                                <div class="feed-slug">
                                    <span>{{ feed.tag }}</span>
                                </div>
                                <carousel class="feed-carousel" :items="1" :nav="false">
                                    <img src="@/components/Home/Main/images/slider1.png" alt="">
                                    <img src="@/components/Home/Main/images/slider1.png" alt="">
                                    <img src="@/components/Home/Main/images/slider1.png" alt="">
                                </carousel>
                            </div>
                            <div class="feed-info">
                                <ul class="feed-info-list">
                                    <li v-for="feat in feed.feats" :key="feat.name">
                                        <img src="@/components/Home/Main/images/check.svg" alt="">
                                        {{ feat.name }}
                                    </li>
                                </ul>
                                <div class="feed-bottom">
                                    <div class="feed-param">
                                        <div class="feed-price">
                                            <span>{{ feed.price }} сум</span>
                                        </div>
                                        <div class="feed-date">
                                            <span>{{ feed.time }}</span>
                                        </div>
                                    </div>
                                    <div class="feed-obj">
                                        <div class="feed-rating">
                                            <StarRating v-model="feed.rating" read-only  :star-size="24" />
                                        </div>
                                        <div class="feed-reviews">
                                            <img src="@/components/Home/Main/images/reviews.svg" alt="">
                                            <span>{{ feed.reviews }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="feed-con">
                            <div class="feed-con-top">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="feed-brand">
                                            <img src="@/assets/images/dreamcars.png" alt="">
                                            <span>{{ feed.dealer.name }}</span>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="feed-link">
                                            <router-link :to="{name: 'brand'}">Все предложения компании</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="feed-val">
                                <div class="row">
                                    <div class="col-6 col-md-6">
                                        <div class="feed-val-item">
                                            <div class="feed-val-icon">
                                                <img src="@/components/Home/Main/images/par1.svg" alt="">
                                            </div>
                                            <div class="feed-val-text">
                                                <span>5 сидений</span>
                                            </div>
                                        </div>
                                        <div class="feed-val-item">
                                            <div class="feed-val-icon">
                                                <img src="@/components/Home/Main/images/par2.svg" alt="">
                                            </div>
                                            <div class="feed-val-text">
                                                <span>2 большие сумки</span>
                                            </div>
                                        </div>
                                        <div class="feed-val-item">
                                            <div class="feed-val-icon">
                                                <img src="@/components/Home/Main/images/par3.svg" alt="">
                                            </div>
                                            <div class="feed-val-text">
                                                <span>Кондиционер</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-6">
                                        <div class="feed-val-item">
                                            <div class="feed-val-icon">
                                                <img src="@/components/Home/Main/images/par4.svg" alt="">
                                            </div>
                                            <div class="feed-val-text">
                                                <span>5 дверная</span>
                                            </div>
                                        </div>
                                        <div class="feed-val-item">
                                            <div class="feed-val-icon">
                                                <img src="@/components/Home/Main/images/par5.svg" alt="">
                                            </div>
                                            <div class="feed-val-text">
                                                <span>2 маленькие сумки</span>
                                            </div>
                                        </div>
                                        <div class="feed-val-item">
                                            <div class="feed-val-icon">
                                                <img src="@/components/Home/Main/images/par6.svg" alt="">
                                            </div>
                                            <div class="feed-val-text">
                                                <span>Трансмиссия автомат</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="feed-tab">
                                <div class="row">
                                    <div class="col-6 col-md-6">
                                        <div class="feed-tab-list">
                                            <div class="feed-tab-item">
                                                <span><span class="feed-strong">Залог:</span> 2 000 000 Сум</span>
                                            </div>
                                            <div class="feed-tab-item">
                                                <span><span class="feed-strong">Возраст от:</span> 21 года</span>
                                            </div>
                                            <div class="feed-tab-item">
                                                <span><span class="feed-strong">Cтаж вождения от:</span> 3 лет</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-6">
                                        <div class="feed-tab-list">
                                            <div class="feed-tab-item">
                                                <span><span class="feed-strong">Лимит пробега:</span> 200 КМ</span>
                                            </div>
                                            <div class="feed-tab-item">
                                                <span><span class="feed-strong">Получение:</span> Полный бак</span>
                                            </div>
                                            <div class="feed-tab-item">
                                                <span><span class="feed-strong">Возврат:</span> Полный бак</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="feed-block">
                                <div class="feed-block-icons">
                                    <div class="feed-block-item">
                                        <img src="@/components/Home/Main/images/info1.svg" alt="" data-bs-container="body" data-bs-trigger="hover focus" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Лимит пробега: Нет лимита пробега">
                                    </div>
                                    <div class="feed-block-item">
                                        <img src="@/components/Home/Main/images/info2.svg" alt="">
                                    </div>
                                    <div class="feed-block-item">
                                        <img src="@/components/Home/Main/images/info3.svg" alt="">
                                    </div>
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
import StarRating from 'vue-star-rating'

export default {
    name: 'AppSingleFeed',
    data() {
		return {
            rating: 3,
            share: false,
            currentUrl: window.location.href,
            feeds: [
                {
                    id: 1, 
                    name: 'TOYOTA Tacoma', 
                    favorite: false, 
                    tag: 'Популярное', 
                    galleries: [], 
                    feats: [
                        {name: 'Стахование от угона'},
                        {name: 'Стахование от ДТП'},
                        {name: 'Внесение изменений'}
                    ],
                    price: '9 900 999', 
                    time: 'за 3 дня', 
                    rating: 3, 
                    reviews: 999, 
                    dealer: {id: 1, name: 'Dreamcars', logo: '', src: ''},
                    conf: [
                        {id: 1, name: '5 сидений', icon: ''},
                        {id: 2, name: '2 большие сумки', icon: ''},
                        {id: 3, name: 'Кондиционер', icon: ''},
                        {id: 4, name: '5 дверная', icon: ''},
                        {id: 5, name: '2 маленькие сумки', icon: ''},
                        {id: 6, name: 'Трансмиссия автомат', icon: ''}
                    ],
                    infos: {id: 1, price: '2 000 000 Сум', year: 21, experience: 3, mileage: 200, bug: 'Полный бак', comeback: 'Полный бак'},
                    limit: 'Лимит пробега: Нет лимита пробега', 
                    bug: 'Лимит пробега: Нет лимита пробега', 
                    camera: 'Лимит пробега: Нет лимита пробега', 
                    url: ''
                }
            ]
		};
	},
    components: {
        carousel,
        StarRating,
    },
    mounted() {
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
        })
    }
}
</script>

<style scoped>
    .feed-item{
        background: #fff;
        box-shadow: 0px 2px 40px rgba(114, 114, 114, 0.2);
        border-radius: 16px;
    }
    .feed-top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 16px 16px 0px 0px;
        background: #fafafa;
        padding: 10px 20px;
    }
    .feed-title>h4{
        margin-bottom: 0;
        color: #000;
        font-size: 24px;
        line-height: 29px;
        font-weight: 700;
    }
    .feed-buttons{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .feed-fav{
        margin-left: 20px;
        cursor: pointer;
    }
    .feed-share{
        cursor: pointer;
        display: flex;
        align-items: center;
    }
    .feed-show{
        display: none;
        transition: 0.5s;
    }
    .feed-show-item{
        margin-right: 10px;
    }
    .feed-show-item>img{
        height: 24px;
    }
    .feed-share:hover .feed-show{
        transition: 0.5s;
        display: block;
    }
    .feed-box{
        padding: 20px;
    }
    .feed-slider{
        margin-bottom: 20px;
        position: relative;
    }
    .feed-carousel img{
        width: 100%;
    }
    .feed-slug{
        border-radius: 20px;
        background: #BD00FF;
        display: inline-block;
        padding: 0 9px;
        color: #fff;
        font-size: 11px;
        text-transform: uppercase;
        font-weight: 700;
        line-height: 20px;
    }
    .feed-info{
        background: #FAFAFA;
        border-radius: 12px;
        padding: 20px;
    }
    .feed-info-list{
        margin-bottom: 20px;
        list-style: none;
        padding-left: 0;
    }
    .feed-info-list>li>img{
        margin-right: 9px;
    }
    .feed-bottom{
        display: flex;
        flex-direction: column;
    }
    .feed-param{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 8px;
    }
    .feed-price>span{
        font-weight: 700;
        font-size: 21px;
        line-height: 26px;
        color: #000;
    }
    .feed-date>span{
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #6D778B;
    }
    .feed-obj{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .feed-reviews{
        display: flex;
        align-items: center;
    }
    .feed-reviews>img{
        margin-right: 4px;
    }
    .feed-reviews>span{
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #6D778B;
    }
    .feed-con {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .feed-con-top{
        padding-bottom: 24px;
        border-bottom:  1px solid #F2F2F2;
    }
    .feed-brand>img{
        margin-right: 15px;
        width: 40px;
    }
    .feed-brand>span{
        color: #333;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
    }
    .feed-link>a{
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        text-decoration: underline;
        color: #2F80ED;
    }
    .feed-val{
        padding-top: 20px;
        padding-bottom: 11px;
        border-bottom: 1px solid #f2f2f2;
    }
    .feed-val .row>.col-md-6:last-child{
        padding-left: 0;
    }
    .feed-val .row>.col-md-6:first-child{
        padding-right: 0;
    }
    .feed-val-item{
        display: flex;
        align-items: center;
        margin-bottom: 15px;
    }
    .feed-val-icon{
        width: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
    }
    .feed-val-text>span{
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #333;
    }
    .feed-tab{
        padding-top: 24px;
        padding-bottom: 24px;
    }
    .feed-tab-item>span{
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        color: #000;
        opacity: 0.8;
    }
    .feed-tab-item>span>span{
        color: #333;
    }
    .feed-block{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .feed-block-icons{
        display: flex;
        align-items: center;
    }
    .feed-block-item{
        margin-right: 12px;
    }
    .feed-block-item>img{
        cursor: pointer;
    }
    .feed-block-button>a{
        background: #27AE60;
        border-radius: 40px;
        height: 58px;
        font-weight: 500;
        font-size: 18px;
        line-height: 58px;
        color: #fff;
        padding: 0 36px;
        display: inline-block;
    }
    @media(max-width:991px){
        .feed-con-top{
            padding-top: 20px;
        }
        .feed-val .row>.col-md-6:last-child{
            padding-left: 15px;
        }
        .feed-block{
            flex-direction: column;
            align-items: flex-start;
        }
        .feed-block-button{
            margin-top: 20px;
        }
    }
    @media(max-width:767px){
        .feed-block-icons{
            width: 100%;
            justify-content: space-between;
        }
        .feed-val-icon{
            width: 18px;
        }
        .feed-val-icon>img{
            width: 16px;
        }
        .feed-val-text>span{
            font-size: 11px;
        }
        .feed-block-item>img{
            width: 32px;
        }
        .feed-block-button{
            width: 100%;
        }
        .feed-block-button>a{
            width: 100%;
            text-align: center;
        }
    }
</style>