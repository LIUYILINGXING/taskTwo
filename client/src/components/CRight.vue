<template>
    <div class="right">
        <div class="login">
            <p class="notice">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <a href="#" class="login-btn">用户登录</a>
        </div>
        <div class="singer">
            <p class="title">
                <span>入驻歌手</span>
                <a href="#">查看全部></a>
            </p>
            <ul class="singer-list">
                <li v-for="(item,index) of singerlistData" :key="index">
                    <a v-bind:href="item.singerURL">
                        <img v-bind:src="item.imgURL">
                        <div class="msg">
                            <p class="name">{{item.name}}</p>
                            <p class="des">{{item.description}}</p>
                        </div>
                    </a>
                </li>
            </ul>
            <div class="apply-btn">
                <a href="#">申请成为网易音乐人</a>
            </div>
        </div>
        <div class="host">
            <p class="title">热门主播</p>
            <ul class="host-list">
                <li v-for="(item,index) of hostlistData" :key="index">
                    <a v-bind:href="item.hostURL" class="img">
                        <img v-bind:src="item.imgURL">
                    </a>
                    <div class="msg">
                        <p class="name">
                            <a v-bind:href="item.hostURL">{{item.name}}</a>
                            <sup></sup>    
                        </p>
                        <p class="des">{{item.description}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default{
        name:'CRight',
        data(){
            return {
                singerlistData:[],
                hostlistData:[]
            }
        },
        created:function(){
            Vue.axios.get('http://localhost/users/singer')
                .then(res => {
                    let data = res.data
                    for(let i = 0; i < data.length; i++ ){
                        this.singerlistData.push(data[i])
                    }
                })

            Vue.axios.get('http://localhost/users/host')
                .then(res => {
                    let data = res.data
                    for(let i = 0; i < data.length; i++ ){
                        this.hostlistData.push(data[i])
                    }
                })
        }
    }
</script>

<style scoped>
    .right{
        float: right;
        width: 250px;
        height: 920px;
    }
    .login{
        width: 250px;
        height: 126px;
        background: url("http://localhost/public/img/index.png") 0 0;
    }
    .login .notice{
        width: 205px;
        margin: 0 auto;
        padding: 16px 0;
        line-height: 22px;
        font-size: 12px;
        color: #666;
    }
    .login-btn{
        display: block;
        margin: 0 auto;
        width: 100px;
        height: 31px;
        line-height: 31px;
        text-align: center;
        font-size: 12px;
        color: #fff;
        text-shadow: 0 1px 0 #8a060b;
        background: url("http://localhost/public/img/index.png") 0 -195px;
    }
    .login-btn:hover{
        background: url("http://localhost/public/img/index.png") -110px -195px;
    }

    .singer{
        width: 250px;
        height: 455px;
        margin-top: 15px;
    }
    .singer .title,.host .title{
        width: 210px;
        height: 24px;
        margin: 0 auto;
        border-bottom: 1px solid #ccc;
        font-size: 12px;
    }
    .singer .title span{
        float: left;
        font-weight: bold;
        color: #333;
    }
    .singer .title a{
        float: right;
        color: #666;
    }
    .singer .title a:hover{
        text-decoration: underline;
    }

    .singer-list{
        width: 230px;
        height: 380px;
        margin: 6px 0 0 20px;
    }
    .singer-list li{
        width: 210px;
        height: 62px;
        margin-top: 14px;
    }
    .singer-list li a{
        display: inline-block;
        width: 210px;
        height: 62px;
    }
    .singer-list li a img{
        float: left;
    }
    .singer-list li a .msg{
        float: right;
        width: 133px;
        height: 60px;
        padding-left: 14px;
        background-color: #FAFAFA;
        border: 1px solid #e9e9e9;
        border-left: none;
    }
    .singer-list li a .msg:hover{
        background-color: #F4F4F4;
    }
    .singer-list li a .msg p{
        margin-top: 8px;
    }
    .singer-list li a .msg .name{
        font-size: 14px;
        font-weight: bold;
        color: #333333;
    }
    .singer-list li a .msg .des{
        font-size: 12px;
        color: #666;
    }
    .apply-btn{
        margin: 0 auto;
        width: 210px;
        height: 30px;
        border-radius: 4px;
        border: 1px solid #C4C4C4;
        background-color: #F2F2F2;
        text-align: center;
        line-height: 30px;
        cursor: pointer;
    }
    .apply-btn:hover{
        background-color: #fff;
    }
    .apply-btn a{
        font-size: 14px;
        font-weight: bold;
        color: #333333;
    }

    .host{
        width: 250px;
        height: 294px;
        margin-top: 30px;
    }
    .host .title{
        font-weight: bold;
        color: #333;
    }
    .host-list{
        width: 230px;
        height: 250px;
        margin: 20px 0 0 20px;
    }
    .host-list li{
        width: 210px;
        height: 50px;
    }
    .host-list .img{
        float: left;
        width: 40px;
        height: 40px;
        margin-right: 10px;
    }
    .host-list .msg{
        float: left;
        width: 160px;
        height: 42px;
    }
    .host-list .msg p{
        height: 21px;
        font-size: 12px;
        line-height: 21px;
    }
    .host-list .msg .name{
        margin-top: -4.5px;
    }
    .host-list .msg .des{
        color: #666;
    }
    .host-list .msg p a{
        /* display: inline-block;
        margin-top: -4.5px; */
        /* height: 21px; */
        font-size: 12px;
        /* line-height: 21px; */
        color: #000;
    }
    .host-list .msg p a:hover{
        text-decoration: underline;
    }
    sup{
        display: inline-block;
        margin-left: 4px;
        width: 11px;
        height: 13px;
        background: url("http://localhost/public/img/icon.png") 0 1px;
        vertical-align: middle;
    }
</style>