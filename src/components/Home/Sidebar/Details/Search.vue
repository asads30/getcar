<template>
    <div class="search">
        <div class="search-top">
            <div class="search-title">
                <h3>Детали поиска</h3>
            </div>
            <div class="search-list">
                <div class="search-item">
                    <vue-autosuggest
                        v-model="query"
                        :suggestions="filteredOptions"
                        @focus="focusMe"
                        @click="clickHandler"
                        @input="onInputChange"
                        @selected="onSelected"
                        :get-suggestion-value="getSuggestionValue"
                        :input-props="{id:'autosuggest__input', placeholder:'Откуда'}">
                        <div slot-scope="{suggestion}" style="display: flex; align-items: center;">
                            <div style="{ display: 'flex', color: 'navyblue'}">{{suggestion.item.name}}</div>
                        </div>
                    </vue-autosuggest>
                </div>
                <div class="search-item">
                    <vue-autosuggest
                        v-model="query"
                        :suggestions="filteredOptions"
                        @focus="focusMe"
                        @click="clickHandler"
                        @input="onInputChange"
                        @selected="onSelected"
                        :get-suggestion-value="getSuggestionValue"
                        :input-props="{id:'autosuggest__input', placeholder:'Куда'}">
                        <div slot-scope="{suggestion}" style="display: flex; align-items: center;">
                            <div style="{ display: 'flex', color: 'navyblue'}">{{suggestion.item.name}}</div>
                        </div>
                    </vue-autosuggest>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { VueAutosuggest } from 'vue-autosuggest';

export default {
    name: 'AppHomeSidebarDetailsSearch',
    data(){
        return{
            query: "",
            selected: "",
            suggestions: [
                {
                data: [
                    { id: 1, name: "Ташкент"},
                    { id: 2, name: "Москва"},
                    { id: 3, name: "Лондон"},
                    { id: 4, name: "Рига"}
                ]
                }
            ]
        }
    },
    components: {
        VueAutosuggest
    },
    computed: {
        filteredOptions() {
            return [
                { 
                    data: this.suggestions[0].data.filter(option => {
                        return option.name.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                    })
                }
            ];
        }
    },
    methods: {
        onSelected(item) {
            this.selected = item.item;
        },
        getSuggestionValue(suggestion) {
            return suggestion.item.name;
        },
        focusMe(e) {
        },
        clickHandler(){

        },
        onInputChange(){
            
        }
    }
}
</script>

<style scoped>
    .search-top{
        margin-bottom: 30px;
    }
    .search-title>h3{
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        color: #fff;
        margin-bottom: 15px;
    }
    .search-item{
        margin-bottom: 12px;
    }
</style>