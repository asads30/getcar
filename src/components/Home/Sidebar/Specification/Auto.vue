<template>
    <div class="spec">
        <div class="spec-title">
            <h3>Спецификация АВТО</h3>
        </div>
        <div class="spec-list">
            <div class="spec-item" v-for="auto in autos" :key="auto.name">
                <div class="form-check spec-check">
                    <input class="form-check-input" type="checkbox" :value="auto.name" :id="'auto' + auto.id" v-model="auto.check">
                    <label class="form-check-label" :for="'auto' + auto.id">
                        {{ auto.name }}
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppHomeSidebarSpecificationAuto',
    data(){
        return{
            autos: [
                {id: 2, name: 'Антирадар', check: false}
            ]
        }
    }
}
</script>

<style scoped>
    .spec{
        margin-bottom: 20px;
    }
    .spec-title{
        margin-bottom: 20px;
    }
    .spec-title>h3{
        color: #333;
        font-size: 20px;
        line-height: 29px;
        font-weight: 700;
    }
    .spec-check{
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0;
    }
    .spec-check>input{
        margin: 0 12px 0 0;
        width: 24px;
        height: 24px;
        border-radius: 6px;
        border: 1px solid #828282;
    }
    .spec-check>input:checked{
        background: url(./images/check.svg);
        background-position: center;
    }
    .spec-check>label{
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #333;
        cursor: pointer;
    }
</style>