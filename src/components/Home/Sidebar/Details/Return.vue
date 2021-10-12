<template>
    <div class="return">
        <div class="return-title">
            <h3>Возврат</h3>
        </div>
        <div class="return-box">
            <span class="return-text">Возврат авто в другом месте</span>
            <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppHomeSidebarDetailsReturn',
    data(){
        return{
            checked: false
        }
    },
    components: {
        
    }
}
</script>

<style scoped>
    .return{
        margin-bottom: 20px;
    }
    .return-title{
        margin-bottom: 17px;
    }
    .return-title>h3{
        color: #fff;
        font-size: 24px;
        line-height: 29px;
        font-weight: 700;
    }
    .return-box{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .return-text{
        color: #fff;
    }
    .switch {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 16px;
    }
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        -webkit-transition: .4s;
        transition: .4s;
    }
    .slider:before {
        position: absolute;
        content: "";
        height: 28px;
        width: 28px;
        left: -4px;
        bottom: -5px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        background: url(./images/switch.svg);
        box-shadow: 0px 4px 4px #023C80;
    }
    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }
    input:checked + .slider:before {
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px);
    }
    .slider.round {
        border-radius: 34px;
    }
    .slider.round:before {
        border-radius: 50%;
    }
</style>