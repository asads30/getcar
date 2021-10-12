<template>
    <div class="receiving">
        <div class="receiving-title">
            <h3>Дата получения</h3>
        </div>
        <div class="datapicker-list">
            <div class="datapicker-item">
                <datetime v-model="date" input-class="datapicker-input calendar" placeholder="Введите дату" :phrases="{ok: 'Ок', cancel: 'Отмена'}"></datetime>
            </div>
            <div class="datapicker-item">
                <datetime v-model="time" type="time" input-class="datapicker-input time" placeholder="Введите время" :phrases="{ok: 'Ок', cancel: 'Отмена'}"></datetime>
            </div>
        </div>
    </div>
</template>

<script>
import { Datetime } from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css'
export default {
    name: 'AppHomeSidebarDetailsReceiving',
    data(){
        return{
            date: null,
            time: null
        }
    },
    components: {
        datetime: Datetime
    }
}
</script>

<style scoped>
    .receiving-title{
        margin-bottom: 20px;
    }
    .receiving-title>h3{
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        color: #fff;
        margin-bottom: 15px;
    }
    .datapicker-item{
        padding-right: 15px;
        background: #fff;
        border-radius: 8px;
        margin-bottom: 12px;
    }
</style>