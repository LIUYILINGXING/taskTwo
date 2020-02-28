<template>
    <div class="banner-wrap" @mouseover="stop()"  @mouseout="keep()">
        <div class="bgImage" v-bind:style="{backgroundImage:'url(' + bgImage + ')'}"></div>
        <div class="banner" v-bind:style="{backgroundImage:'url(' + img + ')'}">
            <a href="#" class="imgUrl"></a>
            <div class="dots">
                <a href="#" v-for="(item,aIndex) of aList" :key="aIndex" 
                            @click="dotChange(aIndex+1)"
                            v-bind:class="{active:item.isActive}">
                </a>
            </div>
            <div class="btn btn-left" @click="change('left')"></div>
            <div class="btn btn-right" @click="change('right')"></div>
            <div class="download">
                <a href="#"></a>
                <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Banner',
    data(){
        return{
            index: 1,
            bgImage: '',
            img:'',
            timer: null,
            aList:[
                {isActive: true},
                {isActive: false},
                {isActive: false},
                {isActive: false},
                {isActive: false},
                {isActive: false},
                {isActive: false},
                {isActive: false},
            ]
        }
    },
    watch:{
        index:function(){   //监听index的变化
            this.img = 'http://localhost/public/img/Banner/' + this.index + '.jpg'
            this.bgImage = 'http://localhost/public/img/Banner/' + this.index + '.jpg'
        },

    },
    mounted:function(){
            //初始化img的值
            this.img = 'http://localhost/public/img/Banner/' + this.index + '.jpg'
            this.bgImage = 'http://localhost/public/img/Banner/' + this.index + '.jpg'

            //自动轮播
            this.keep()
        
    },
    methods:{
        change(option){
            this.aList[this.index-1].isActive = false
            if(option == "right" ){
                if(this.index >= 8){
                    this.index = 0
                }
                this.index++
            }
            else if(option == "left"){
                this.index--
                if(this.index <= 0){
                    this.index = 8
                }
            }
            this.aList[this.index-1].isActive = true
        },
        dotChange(value){
            this.aList[this.index-1].isActive = false
            this.index = value
            this.aList[this.index-1].isActive = true
        },
        stop(){
            clearInterval(this.timer)
        },
        keep(){
            this.timer = setInterval(() => {this.change("right")},4000)
        }
    }
}
</script>

<style scoped>
    .banner-wrap{
        position: relative;
        width: 100%;
        height: 285px;
        overflow: hidden;
    }
    .bgImage{
        position: absolute;
        top: -40px;
        z-index: -1;
        width: 100%;
        height: 400px;
        filter: blur(40px);
        transition: 0.5s;
        transition-delay: 0.2s;
    }
    .banner{
        position: relative;
        width: 982px;
        height: 285px;
        margin: 0 auto;
        background-size: contain;
        background-repeat: no-repeat;
        transition: 1s ease-in-out;
    }
    .banner .btn{
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        width: 37px;
        height: 63px;
        cursor: pointer;
    }
    .banner .btn:hover{
        background-color:rgb(0,0,0,.2);
    }
    .banner .btn-left{
        left: -68px;
        background-image: url("http://localhost/public/img/Banner/arrl.png");
    }
    .banner .btn-right{
        right: -68px;
        background-image: url("http://localhost/public/img/Banner/arrr.png");
    }

    .banner .dots{
        position: absolute;
        bottom: 0;
        margin-bottom: 7px;
        padding-left: 260px;
        box-sizing: border-box;
        width: 730px;
        height: 20px;
    }
    .banner .dots a{
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url("http://localhost/public/img/Banner/dot.png");
    }
    .banner .dots a:hover{
        background: url("http://localhost/public/img/Banner/dotOn.png");
    }
    .banner .dots .active{
        background: url("http://localhost/public/img/Banner/dotOn.png");
    }

    .banner .imgUrl{
        position: absolute;
        top: 0;
        left: 0;
        width: 730px;
        height: 258px;
    }
    .banner .download{
        position: absolute;
        right: 0;
        top: 0;
        width: 250px;
        height: 285px;
        border: 1px solid #2F3030;
        border-width: 0 1px 0 1px;
        box-shadow: 10px 0 15px rgb(0,0,0,.3),
                    -10px 0 15px rgb(0,0,0,.3);
        background: url("http://localhost/public/img/Banner/download.png");
    }
    .banner .download a{
        position: absolute;
        margin: 186px 0 0 19px;
        width: 214px;
        height: 56px;
    }
    .banner .download a:hover{
        background: url("http://localhost/public/img/Banner/download.png") 0 -290px;
    }
    .banner .download p{
        width: 254px;
        height: 16px;
        margin: 256px auto 0;
        text-align: center;
        font-size: 12px;
        color: #8d8d8d;
    }
</style>