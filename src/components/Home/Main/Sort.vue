<template>
    <div class="sort">
        <div class="sort-title">
            <span>Сортировка:</span>
        </div>
        <div class="sort-list">
            <div class="sort-item">
                <div class="sort-drop">
                    <button class="sort-button">
                        По цене
                    </button>
                    <div class="sort-other">
                        <div class="sort-list">
                            <a href="#" class="sort-item">По дате</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sort-item">
                <div class="sort-drop">
                    <button class="sort-button">
                        Универсальные
                    </button>
                    <div class="sort-other">
                        <div class="sort-list">
                            <a href="#" class="sort-item">Иномарки</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppHomeMainSort'
}
</script>

<style scoped>
    .sort{
        display: flex;
        align-items: center;
        background: #FBFBFB;
        border-radius: 16px;
        padding: 12px 20px;
        margin-bottom: 20px;
    }
    .sort-list{
        display: flex;
        align-items: center;
    }
    .sort-title{
        margin-right: 12px;
    }
    .sort-title>span{
        color: #333333;
        opacity: 0.8;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
    }
    .sort-item{
        margin-right: 20px;
    }
    .sort-button{
        position: relative;
        background: #f2f2f2;
        border-radius: 20px;
        height: 25px;
        line-height: 25px;
        padding: 0 28px 0 12px;
        font-size: 14px;
        font-weight: 700;
        color: #000;
        border: 0;
    }
    .sort-button::before{
        content: '';
        background: url(./images/sort-icon.svg) no-repeat;
        width: 12px;
        height: 12px;
        position: absolute;
        top: 6.5px;
        right: 10px;
        transition: 0.5s;
    }
    .sort-drop{
        position: relative;
    }
    .sort-other{
        display: none;
        transition: 0.5s;
        position: absolute;
        padding: 6px 10px;
        width: 100%;
        border-radius: 5px;
        z-index: 4;
        background: #393E48;
    }
    .sort-other a{
        color: #fff;
        display: inline-block;
        font-size: 12px;
        width: 100%;
    }
    .sort-drop:hover .sort-other{
        display: block;
        transition: 0.5s;
    }
    .sort-drop:hover .sort-button::before{
        transform: rotate(180deg);
        transition: 0.5s;
    }
    @media(max-width:991px){
        .sort{
            flex-direction: column;
        }
        .sort-item{
            margin: 0 10px;
        }
        .sort-list{
            margin-top: 20px;
        }
        .sort-other .sort-item{
            margin: 0;
        }
        .sort-other .sort-list{
            margin-top: 0;
        }
    }
</style>