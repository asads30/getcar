<template>
    <div class="geo">
        <div class="geo-title">
            <h3>Местоположение поставщика</h3>
        </div>
        <div class="geo-box">
            <div class="row geo-row">
                <div class="col-md-8">
                    <div class="geo-item">
                        <div class="geo-subtitle">
                            <h4>Ташкент аэропорт</h4>
                        </div>
                        <div class="geo-des">
                            <span>Ташкент, Сергелийский район</span>
                        </div>
                    </div>
                    <div class="geo-item">
                        <div class="geo-subtitle">
                            <h4>Время работы</h4>
                        </div>
                        <div class="geo-des">
                            <span>Пн - Вс	24 часа</span>
                        </div>
                    </div>
                    <div class="geo-item">
                        <div class="geo-subtitle">
                            <h4>Инструкции по получению</h4>
                        </div>
                        <div class="geo-des">
                            <span>Our office is located on the 1st floor of Terminal 1(on the right side when you're leaving the baggage waiting room)</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="geo-maps">
                        <div id="2GisMap" :style="styles"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gMap from '2gis-maps'
export default {
    name: 'AppSingleGeo',
    props: {
      center: {
        type: Array,
        default: [54.98, 82.89]
      },
      marker: {
        type: Array,
        default: [54.98, 82.89]
      },
      zoom: {
        type: Number,
        default: 13
      },
      styles: {
        type: Object,
        default: () => {
          return {width: '100%', height: '150px'}
        }
      }
    },
    methods: {
      init() {
        let map
        gMap.then(() => {
          map = DG.map('2GisMap', {
            'center': this.center,
            'zoom': this.zoom
          });
          DG.marker(this.marker).addTo(map)
        })
      }
    },
    created() {
      this.init()
    }
}
</script>

<style scoped>
    .geo{
        margin-top: 20px;
        border-radius: 16px;
        background: #fff;
        box-shadow: 0px 2px 40px rgba(114, 114, 114, 0.25);
    }
    .geo-title{
        background: #fafafa;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        padding: 10px 32px;
    }
    .geo-title>h3{
        font-weight: bold;
        font-size: 24px;
        color: #111;
        margin-bottom: 0;
    }
    .geo-box{
        padding: 15px 32px;
    }
    .geo-item{
        margin-bottom: 15px;
    }
    .geo-item:last-child{
        margin-bottom: 0;
    }
    .geo-subtitle>h4{
        font-weight: bold;
        font-size: 15px;
        color: #0B0B0B;
        margin-bottom: 0;
    }
    .geo-des>span{
        font-size: 14px;
        color: #767676;
        line-height: 14px;
    }
    .geo-row{
        align-items: center;
    }
    @media(max-width:991px){
        .geo-maps{
            margin-top: 20px;
        }
        .geo-title>h3{
            font-size: 18px;
        }
    }
</style>