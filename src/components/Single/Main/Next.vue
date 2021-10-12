<template>
    <div class="next">
        <div class="next-price">
            <div class="next-text">
                <span>Стоимость доп.услуг </span>
            </div>
            <div class="next-strong">
                <span>4 000 000</span>
            </div>
        </div>
        <div class="next-button">
            <router-link :to="{name: 'driver'}" class="next-btn">Перейти к бронированию</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppSingleNext'
}
</script>

<style scoped>
    .next{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 50px;
        padding-top: 20px;
    }
    .next-price{
        display: flex;
        align-items: center;
    }
    .next-text{
        margin-right: 25px;
    }
    .next-text>span{
        font-size: 22px;
        color: #111;
        font-weight: 300;
    }
    .next-strong>span{
        font-size: 26px;
        color: #1471C5;
        font-weight: 700;
    }
    .next-btn{
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #fff;
        background: #27AE60;
        border-radius: 40px;
        display: inline-block;
        padding: 8px 40px;
        width: 240px;
    }
    @media(max-width:767px){
        .next{
            flex-direction: column;
            align-items: flex-start;
        }
        .next-price{
            justify-content: space-between;
            width: 100%;
            margin-bottom: 20px;
        }
        .next-text{
            margin-right: 10px;
        }
        .next-text>span{
            font-size: 18px;
        }
        .next-strong>span{
            font-size: 20px;
        }
        .next-button{
            width: 100%;
        }
        .next-btn{
            width: 100%;
            height: 52px;
            line-height: 52px;
            padding: 0;
        }
    }
</style>