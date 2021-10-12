<template>
    <div class="help">
        <div class="help-top">
            <div class="help-text">
                <h3>Помощь</h3>
                <span>Вам нужна помощь или консультация по бронированию?</span>
            </div>
            <div class="help-icon">
                <img src="@/assets/images/help-icon.svg" alt="">
            </div>
        </div>
        <div class="help-buttons">
            <router-link :to="{name: 'help-message'}" class="help-mess">Написать</router-link>
            <router-link :to="{name: 'help-call'}" class="help-call">Позвонить</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppHomeSidebarHelp'
}
</script>

<style scoped>
    .help{
        background: #F2F2F2;
        box-shadow: 0px 2px 40px rgba(114, 114, 114, 0.08);
        border-radius: 16px;
        padding: 20px 20px 30px;
        margin-bottom: 20px;
    }
    .help-top{
        display: flex;
        margin-bottom: 20px;
    }
    .help-text{
        color: #333;
    }
    .help-text>h3{
        font-size: 20px;
        margin-bottom: 12px;
        font-weight: 700;
    }
    .help-text>span{
        font-weight: 500;
        font-size: 14px;
    }
    .help-buttons{
        display: flex;
        align-items: center;
    }
    .help-buttons>a{
        display: inline-block;
        padding: 6px 15px;
        text-align: center;
        color: #fff;
        width: 100%;
        border-radius: 20px;
        font-weight: bold;
        font-size: 16px;
    }
    .help-mess{
        margin-right: 10px;
        background: #F2994A;
    }
    .help-call{
        margin-left: 10px;
        background: #1471C5;
    }
    @media(max-width:767px){
        .help{
            display: none;
        }
    }
</style>