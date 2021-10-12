<template>
    <div class="deposit">
        <div class="deposit-title">
            <h3>Депозит</h3>
        </div>
        <div class="deposit-list">
            <div class="deposit-item" v-for="auto in autos" :key="auto.name">
                <div class="form-check deposit-check">
                    <input class="form-check-input" type="checkbox" :value="auto.name" :id="'deposit' + auto.id" v-model="auto.check">
                    <label class="form-check-label" :for="'deposit' + auto.id">
                        {{ auto.name }}
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppHomeSidebarSpecificationDeposit',
    data(){
        return{
            autos: [
                {id: 1, name: 'Антирадар', check: false}
            ]
        }
    }
}
</script>

<style scoped>
    .deposit-title{
        margin-bottom: 20px;
    }
    .deposit-title>h3{
        color: #333;
        font-size: 20px;
        line-height: 29px;
        font-weight: 700;
    }
    .deposit-check{
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0;
    }
    .deposit-check>input{
        margin: 0 12px 0 0;
        width: 24px;
        height: 24px;
        border-radius: 6px;
        border: 1px solid #828282;
    }
    .deposit-check>input:checked{
        background: url(./images/check.svg);
        background-position: center;
    }
    .deposit-check>label{
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #333;
        cursor: pointer;
    }
</style>