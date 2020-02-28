<template>
    <div class="left">
        <div class="recommend">
            <div class="nav">
                <a href="#" class="rmd">热门推荐</a>
                <a href="#" class="sort">华语</a>
                <span class="divide">|</span>
                <a href="#" class="sort">流行</a>
                <span class="divide">|</span>
                <a href="#" class="sort">摇滚</a>
                <span class="divide">|</span>
                <a href="#" class="sort">民谣</a>
                <span class="divide">|</span>
                <a href="#" class="sort">电子</a>
                <div class="more">
                    <a href="#">更多</a>
                    <span class="arrow"></span>
                </div>
            </div>
            <ul class="song-list">
                <li v-for="(item,index) of rmdData" :key="index">
                    <div class="cover">
                        <img v-bind:src="item.imgURL">
                        <a v-bind:href="item.songURL" v-bind:title="item.description"></a>
                        <div class="play">
                            <span class="earphone"></span>
                            <span class="playtimes">{{item.times}}</span>
                            <a href="#" class="music"></a>
                        </div>
                    </div>
                    <p class="description">
                        <a href="#" v-bind:title="item.description">{{item.description}}</a>
                    </p>
                </li>
            </ul>
        </div>

        <div class="new">
            <div class="nav">
                <a href="#" class="latest">新碟上架</a>
                <div class="more">
                    <a href="#">更多</a>
                    <span class="arrow"></span>
                </div>
            </div>
            <div class="disk">
                <div class="roll">
                    <ul class="albumList">
                        <li v-for="(item,index) of newData" :key="index">
                            <div class="album">
                                <img v-bind:src="item.imgURL" v-bind:alt="item.name">
                                <a v-bind:href="item.songURL" class="url" v-bind:title="item.name"></a>
                                <a href="#" title="播放" class="play"></a>
                            </div>
                            <p class="name" v-bind:title="item.name">
                                <a v-bind:href="item.songURL">{{item.name}}</a>
                            </p>
                            <p class="singer" v-bind:title="item.singer">
                                <a v-bind:href="item.songURL">{{item.singer}}</a>
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="btn btn-left" @click="move('left')"></div>
                <div class="btn btn-right" @click="move('right')"></div>
            </div>
        </div>

        <div class="pop-chart">
            <div class="nav">
                <a href="#" class="list">榜单</a>
                <div class="more">
                    <a href="#">更多</a>
                    <span class="arrow"></span>
                </div>
            </div>
            <div class="list-all">
                <dl class="list poplist">
                    <dt class="title">
                        <div class="cover pcover">
                            <img src="http://localhost/public/img/Content/pop-chart/pop.jpg" alt="飙升榜">
                            <a href="#" title="云音乐飙升榜"></a>
                        </div>
                        <div class="msg">
                            <a href="#" class="url" title="云音乐飙升榜">云音乐飙升榜</a>
                            <p>
                                <a href="#" class="play" title="播放"></a>
                                <a href="#" class="collect" title="收藏"></a>
                            </p>
                        </div>
                    </dt>
                    <dd>
                        <ol>
                            <li v-for="(item,index) of poplistData" :key="index">
                                <span class="num">{{index+1}}</span>
                                <a v-bind:href="item.url" v-bind:title="item.name">{{item.name}}</a>
                                <div class="icon">
                                    <a href="#" title="播放" class="play"></a>
                                    <a href="#" title="添加到播放列表" class="add"></a>
                                    <a href="#" title="收藏" class="collect"></a>
                                </div>
                            </li>
                        </ol>
                        <div class="more">
                            <a href="#">查看全部></a>
                        </div>
                    </dd>
                </dl>
                <dl class="list newlist">
                    <dt class="title">
                        <div class="cover ncover">
                            <img src="http://localhost/public/img/Content/pop-chart/new.jpg" alt="新歌榜">
                            <a href="#" title="云音乐新歌榜"></a>
                        </div>
                        <div class="msg">
                            <a href="#" class="url" title="云音乐新歌榜">云音乐新歌榜</a>
                            <p>
                                <a href="#" class="play" title="播放"></a>
                                <a href="#" class="collect" title="收藏"></a>
                            </p>
                        </div>
                    </dt>
                    <dd>
                        <ol>
                            <li v-for="(item,index) of newlistData" :key="index">
                                <span class="num">{{index+1}}</span>
                                <a v-bind:href="item.url" v-bind:title="item.name">{{item.name}}</a>
                                <div class="icon">
                                    <a href="#" title="播放" class="play"></a>
                                    <a href="#" title="添加到播放列表" class="add"></a>
                                    <a href="#" title="收藏" class="collect"></a>
                                </div>
                            </li>
                        </ol>
                        <div class="more">
                            <a href="#">查看全部></a>
                        </div>
                    </dd>
                </dl>
                <dl class="list orglist">
                    <dt class="title">
                        <div class="cover ocover">
                            <img src="http://localhost/public/img/Content/pop-chart/org.jpg" alt="原创榜">
                            <a href="#" title="网易原创歌曲榜"></a>
                        </div>
                        <div class="msg">
                            <a href="#" class="url" title="网易原创歌曲榜">网易原创歌曲榜</a>
                            <p>
                                <a href="#" class="play" title="播放"></a>
                                <a href="#" class="collect" title="收藏"></a>
                            </p>
                        </div>
                    </dt>
                    <dd>
                        <ol>
                            <li v-for="(item,index) of orglistData" :key="index">
                                <span class="num">{{index+1}}</span>
                                <a v-bind:href="item.url" v-bind:title="item.name">{{item.name}}</a>
                                <div class="icon">
                                    <a href="#" title="播放" class="play"></a>
                                    <a href="#" title="添加到播放列表" class="add"></a>
                                    <a href="#" title="收藏" class="collect"></a>
                                </div>
                            </li>
                        </ol>
                        <div class="more">
                            <a href="#">查看全部></a>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default{
        name:'CLeft',
        data(){
            return{
                rmdData:[],
                newData:[],
                poplistData:[],
                newlistData:[],
                orglistData:[],
                position: 1
            }
        },
        created:function(){
            Vue.axios.get('http://localhost/users/rmd')
                .then(res => {
                    let data = res.data
                    for(let i = 0; i < data.length; i++ ){
                        //视图更新
                        this.rmdData.push(data[i])
                    }
                })
            
            Vue.axios.get('http://localhost/users/new')
                .then(res => {
                    let data = res.data
                    for(let i = 0; i < data.length; i++ ){
                        this.newData.push(data[i])
                    }
                })

            Vue.axios.get('http://localhost/users/chart/pop')
                .then(res => {
                    let data = res.data
                    for(let i = 0; i < data.length; i++ ){
                        this.poplistData.push(data[i])
                    }
                })

            Vue.axios.get('http://localhost/users/chart/new')
                .then(res => {
                    let data = res.data
                    for(let i = 0; i < data.length; i++ ){
                        this.newlistData.push(data[i])
                    }
                })

            Vue.axios.get('http://localhost/users/chart/org')
                .then(res => {
                    let data = res.data
                    for(let i = 0; i < data.length; i++ ){
                        this.orglistData.push(data[i])
                    }
                })
        },
        methods:{
            move(option){
                let albumList = document.querySelector(".albumList")
                if(option == "right" && this.position == 1){
                    albumList.style.transform = "translateX(-645px)"
                    this.position = 2
                }
                else if(option == "left" && this.position == 2){
                    albumList.style.transform = "translateX(0)"
                    this.position = 1
                }
            }
        }
    }
</script>


<style scoped>
    .left{
        width: 689px;
        height: 1365px;
        padding: 20px 20px 40px;
        border-right: 1px solid #D3D3D3;
    }
    /* 热门推荐 */
    .recommend{
        width: 689px;
        height: 523px;
    }
    .recommend .nav,
    .new .nav,
    .pop-chart .nav{
        height: 33px;
        padding: 0 10px 0 34px;
        background: url("http://localhost/public/img/index.png") -225px -156px no-repeat;
        border-bottom: 2px solid #C10D0C;
    }
    .recommend .nav .rmd,
    .new .nav .latest,
    .pop-chart .nav .list{
        color: #333333;
        font-size: 20px;
        margin-right: 20px;
    }
    .recommend .nav .sort,
    .recommend .nav .more a,
    .new .nav .more a,
    .pop-chart .nav .more a{
        color: #666;
        font-size: 12px;
    }
    .recommend .nav .sort:hover,
    .recommend .nav .more a:hover,
    .new .nav .more a:hover,
    .pop-chart .nav .more a:hover{
        text-decoration: underline;
    }
    .recommend .nav .divide{
        margin: 0 10px;
        color: #ccc;
        font-size: 12px;
    }
    .recommend .nav .more,
    .new .nav .more,
    .pop-chart .nav .more{
        float: right;
    }
    .recommend .nav .more .arrow,
    .new .nav .more .arrow,
    .pop-chart .nav .more .arrow{
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-left: 4px;
        vertical-align: middle;
        background: url("http://localhost/public/img/index.png") 0 -240px;
    }


    .recommend .song-list {
        width: 731px;
        height: 468px;
        margin: 20px 0 0 -42px;
    }
    .recommend .song-list li{
        float: left;
        width: 140px;
        height: 204px;
        padding: 0 0 30px 40px;
    }
    .recommend .song-list li .cover{
        position: relative;
        width: 140px;
        height: 140px;
    }
    .recommend .song-list li .cover a{
        position: absolute;
        top: 0;
        left: 0;
        width: 140px;
        height: 140px;
        background: url("http://localhost/public/img/coverall.png") 0 0;
    }
    .recommend .song-list li .cover .play{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 140px;
        height: 27px;
        color: #ccc;
        line-height: 27px;
        background: url("http://localhost/public/img/coverall.png") 0 -537px;
    }
    .recommend .song-list li .cover .play .earphone{
        float: left;
        margin: 9px 5px 9px 10px;
        width: 14px;
        height: 11px;
        background: url("http://localhost/public/img/iconall.png") 0 -24px;
    }
    .recommend .song-list li .cover .play .playtimes{
        float: left;
        font-size: 12px;
    }
    .recommend .song-list li .cover .play .music{
        width: 16px;
        height: 17px;
        margin: 5px 0 0 114px;
        background: url("http://localhost/public/img/iconall.png") 0 0;
    }
    .recommend .song-list li .cover .play .music:hover{
        background: url("http://localhost/public/img/iconall.png") 0 -60px;
    }
    .recommend .song-list li .description{
        width: 140px;
        height: 38px;
        margin: 8px 0 3px 0;
        font-size: 14px;
    }
    .recommend .song-list li .description a{
        color:#000;
    }
    .recommend .song-list li .description a:hover{
        text-decoration: underline;
    }

    /* 新碟上架 */
    .new{
        width: 689px;
        height: 243px;
        margin-top: 34px;
    }
    .new .disk{
        position: relative;
        width: 687px;
        height: 186px;
        margin: 20px 0 0;
        border: 1px solid #d3d3d3;
        background-color: #F5F5F5;
    }
    .roll{
        width: 645px;
        height: 180px;
        margin: 0 auto;
        overflow: hidden;
    }
    .roll ul{
        width: 1290px;
        height: 150px;
        margin: 30px 0 0 0;
        transition: 1s;
    }
    .roll ul li{
        float: left;
        width: 118px;
        height: 150px;
        margin-left: 11px;
    }
    .roll ul li .album{
        position: relative;
        width: 118px;
        height: 100px;
        margin-bottom: 7px;
    }
    .roll ul li .album .url{
        position: absolute;
        top: 0;
        left: 0;
        width: 118px;
        height: 100px;
        background: url("http://localhost/public/img/coverall.png") 0 -570px;
    }
    .roll ul li .album .play{
        display: none;
        position: absolute;
        right: 20px;
        bottom: 5px;
        width: 22px;
        height: 22px;
        background: url("http://localhost/public/img/play.png");
    }
    .roll ul li .album:hover .play{
        display: inline-block;
    }
    .roll ul li .name,
    .roll ul li .singer{
        width: 106px;
        height: 18px;
        line-height: 18px;
        font-size: 13px;
        overflow:hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
    }
    .roll ul li .name a{
        color: #000;
    }
    .roll ul li .singer a{
        color: #666666;
    }
    .roll ul li .name a:hover,
    .roll ul li .singer a:hover{
        text-decoration: underline;
    }

    .disk .btn{
        position: absolute;
        top: 71px;
        width: 17px;
        height: 17px;
        cursor: pointer;
    }
    .disk .btn-left{
        left: 4px;
        background: url("http://localhost/public/img/index.png") -260px -75px;
    }
    .disk .btn-left:hover{
        background: url("http://localhost/public/img/index.png") -280px -75px;
    }
    .disk .btn-right{
        right: 4px;
        background: url("http://localhost/public/img/index.png") -300px -75px;
    }
    .disk .btn-right:hover{
        background: url("http://localhost/public/img/index.png") -320px -75px;
    }

    /* 榜单 */
    .pop-chart{
        width: 689px;
        height: 527px;
        margin: 37px 0 26px;
    }
    .list-all{
        width: 690px;
        height: 472px;
        margin-top: 20px;
        border: 1px solid #d3d3d3;
        border-right-width: 0;
        background-color: #F4F4F4;
    }
    .list-all .list{
        float: left;
        width: 229px;
        height: 472px;
        border-right: 1px solid #d3d3d3;
    }
    .list-all .list .title{
        position: relative;
        width: 210px;
        height: 100px;
        padding: 20px 0 0 20px;
    }
    .list-all .list .title .cover{
        float: left;
    }
    .list-all .list .title .cover img{
        width: 80px;
        height: 80px;
    }
    .list-all .list .title .cover a{
        position: absolute;
        top: 20px;
        left: 20px;
        width: 80px;
        height: 80px;
        background: url("http://localhost/public/img/coverall.png") -145px -57px;
    }
    .list-all .list .title .msg{
        float: left;
        width: 116px;
        height: 51px;
        margin: 6px 0 0 10px;
    }
    .list-all .list .title .msg .url{
        color: #333333;
        font-weight: bold;
        font-size: 14px;
    }
    .list-all .list .title .msg .url:hover{
        text-decoration: underline;
    }
    .list-all .list .title .msg .play{
        display: inline-block;
        width: 22px;
        height: 22px;
        margin: 10px 10px 0 0;
        background: url("http://localhost/public/img/index.png") -267px -205px;
    }
    .list-all .list .title .msg .play:hover{
        background: url("http://localhost/public/img/index.png") -267px -235px;
    }
    .list-all .list .title .msg .collect{
        display: inline-block;
        width: 22px;
        height: 22px;
        margin: 10px 10px 0 0;
        background: url("http://localhost/public/img/index.png") -300px -205px;
    }
    .list-all .list .title .msg .collect:hover{
        background: url("http://localhost/public/img/index.png") -300px -235px;
    }

    /* 三个榜单 */
    .list-all .list dd{
        width: 230px;
        height: 352px;
    }
    .list-all .list dd ol{
        width: 230px;
        height: 319px;
    }
    .list-all .list dd ol li{
        position: relative;
        width: 179px;
        height: 32px;
        line-height: 32px;
        padding-left: 50px;
    }
    .list-all .list dd ol li a{
        display: inline-block;
        width: 170px;
        color: #000;
        font-size: 13px;
    }
    .list-all .list dd ol li a:hover{
        text-decoration: underline;
    }
    .list-all .list dd ol li:hover a{
        width: 96px;
        overflow:hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
    }
    .list-all .list dd ol li:hover .icon{
        display: block;
    }
    dd ol li .num{
        float: left;
        margin-left: -35px;
        width: 35px;
        height: 32px;
        color: #969696;
        font-size: 16px;
        text-align: center;
    }
    dd ol li:nth-child(1) .num,
    dd ol li:nth-child(2) .num,
    dd ol li:nth-child(3) .num{
        color: #C10D0C;
    }
    dd ol li:nth-child(odd){
        background-color: #E8E8E8;
    }
    dd ol li:nth-child(even){
        background-color: #F4F4F4;
    }

    .list-all .list dd .more{
        width: 229px;
        height: 32px;
        background-color: #E8E8E8;
        line-height: 32px;
    }
    .list-all .list dd .more a{
        float: right;
        margin-right: 30px;
        font-size: 13px;
        color: #000;
    }
    .list-all .list dd .more a:hover{
        text-decoration: underline;
    }

    .list-all .list dd ol li .icon{
        display: none;
        position: absolute;
        right: 0;
        top: 0;
        width: 82px;
        height: 19px;
        margin-top: 7px;
        line-height: 19px;
    }
    .list-all .list dd ol li .icon .play{
        width: 17px;
        height: 17px;
        margin-right: 10px;
        background: url("http://localhost/public/img/index.png") -267px -268px;
    }
    .list-all .list dd ol li .icon .play:hover{
        background: url("http://localhost/public/img/index.png") -267px -288px;
    }
    .list-all .list dd ol li .icon .add{
        width: 17px;
        height: 17px;
        margin: 3px 6px 0 0;
        background: url("http://localhost/public/img/icon.png") 0 -700px;
    }
    .list-all .list dd ol li .icon .add:hover{
        background: url("http://localhost/public/img/icon.png") -22px -700px;
    }
    .list-all .list dd ol li .icon .collect{
        width: 17px;
        height: 17px;
        margin: 0 6px 0 0;
        background: url("http://localhost/public/img/index.png") -297px -268px;
    }
    .list-all .list dd ol li .icon .collect:hover{
        background: url("http://localhost/public/img/index.png") -297px -288px;
    }
</style>