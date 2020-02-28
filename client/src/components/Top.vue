<template>
    <div class="top" @click="returnToTop()"></div>
</template>

<script>
export default{
    name:'Top',
    mounted(){  //给页面window添加滚动事件
        window.addEventListener("scroll",this.appear)
    },
    methods:{
        appear(){
            let top = document.querySelector(".top")
            //滚动条位于顶部top就消失
            top.style.display = (document.documentElement.scrollTop == 0 ? "none" : "block")
        },
        returnToTop(){
            window.scrollTo(0,0)
        }
    }
}
</script>

<style scoped>
    .top{
        display: none;
        position: fixed;
        top: 640px;
        /* 保持top位置不变 */
        left: 50%;   
        margin-left: 500px; 
        width: 49px;
        height: 44px;
        background: url("http://localhost/public/img/sprite.png") -265px -46px;
        cursor: pointer;
    }
    .top:hover{
        background: url("http://localhost/public/img/sprite.png") -325px -46px;
    }
</style>