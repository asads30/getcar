<template>
    <div class="footer">
        <div class="container">
            <div class="footer-box">
                <div class="footer-copy">
                    <span>Copyright- Все права защищены</span>
                </div>
                <div class="footer-menu">
                    <a href="#">Публичная оферта</a>
                    <a href="#">Прокатным организвциям</a>
                    <a href="#">Условия конфидициальности</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppFooter'
}
</script>

<style scoped>
    .footer-box{
        background: #393E48;
        border-radius: 12px 12px 0px 0px;
        display: flex;
        align-items: center;
        justify-self: space-between;
        width: 100%;
        padding: 20px;
    }
    .footer-copy{
        font-weight: 500;
        font-size: 14px;
        color: #f2f2f2;
        width: 30%;
    }
    .footer-menu{
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .footer-menu>a{
        display: inline-block;
        font-weight: 500;
        font-size: 14px;
        color: #f2f2f2;
        margin-left: 40px;
    }
    @media(max-width:767px){
        .footer-box{
            flex-direction: column;
        }
        .footer-copy{
            width: 100%;
            text-align: center;
        }
        .footer-menu{
            width: 100%;
            flex-direction: column;
        }
        .footer-menu>a{
            margin-left: 0;
        }
    }
</style>