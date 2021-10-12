<template>
    <div class="popular">
        <div class="popular-item" v-for="popular in populars" :key="popular.id">
            <input type="radio" class="popular-input" :id="'popular' + popular.id" name="popular">
            <label class="popular-elements" :for="'popular' + popular.id">
                <img src="@/components/Home/Main/images/popular1.png" alt="">
                <span>{{ popular.name }}</span>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppHomeMainPopular',
    data(){
        return{
            populars: [
                {id: 1, name: 'Кроссовер', imageSrc: ''},
                {id: 2, name: 'Кроссовер', imageSrc: ''},
                {id: 3, name: 'Кроссовер', imageSrc: ''},
                {id: 4, name: 'Кроссовер', imageSrc: ''},
                {id: 5, name: 'Кроссовер', imageSrc: ''},
                {id: 6, name: 'Кроссовер', imageSrc: ''},
            ]
        }
    }
}
</script>

<style scoped>
    .popular{
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
    }
    .popular-item{
        cursor: pointer;
    }
    .popular-input{
        display: none;
    }
    .popular-elements{
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0px 2px 40px rgba(114, 114, 114, 0.08);
        border-radius: 12px;
        padding: 0 0 12px 0;
        cursor: pointer;
    }
    .popular-elements>img{
        margin-bottom: 8px;
    }
    .popular-elements>span{
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #000;
    }
    .popular-input:checked + label{
        box-shadow: 0px 2px 32px #1776C7;
    }
    @media(max-width:991px){
        .popular{
            display: none;
        }
    }
</style>