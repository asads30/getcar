<template>
    <div class="provider">
        <div class="provider-title">
            <h3>Поставщик</h3>
        </div>
        <div class="provider-list">
            <div class="provider-item" v-for="provider in providers" :key="provider.name">
                <div class="form-check provider-check">
                    <input class="form-check-input" type="checkbox" :value="provider.name" :id="'provider' + provider.id" v-model="provider.check">
                    <label class="form-check-label" :for="'provider' + provider.id">
                        {{ provider.name }}
                    </label>
                </div>
                <label :for="'provider' + provider.id">
                    <img src="@/assets/images/dreamcars.png" alt="">
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppHomeSidebarProvider',
    data(){
        return{
            providers: [
                {id: 1, name: 'Dreamcars', check: false, imageSrc: '@/assets/images/dreamcars.png'}
            ]
        }
    }
}
</script>

<style scoped>
    .provider{
        margin-bottom: 20px;
        background: #F2F2F2;
        box-shadow: 0px 2px 40px rgba(114, 114, 114, 0.08);
        border-radius: 16px;
        padding: 20px 20px 30px;
    }
    .provider-title{
        margin-bottom: 20px;
    }
    .provider-title>h3{
        color: #333;
        font-size: 20px;
        font-weight: 700;
    }
    .provider-item{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .provider-check{
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
    }
    .provider-check>input{
        margin: 0 12px 0 0;
        width: 24px;
        height: 24px;
        border-radius: 6px;
        border: 1px solid #828282;
    }
    .provider-check>input:checked{
        background: url(./Specification/images/check.svg);
        background-position: center;
    }
    .provider-check>label{
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #333;
    }
    .provider-check>label{
        cursor: pointer;
    }
    .provider-item>label>img{
        cursor: pointer;
    }
    @media(max-width:767px){
        .provider{
            display: none;
        }
    }
</style>