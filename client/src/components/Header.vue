<template>
  <div id="Header">
    <div class="topbar-wrap">
      <div class="topbar">
        <h1 class="logo">
          <a href="https://music.163.com/"></a>
        </h1>
        <ul class="nav">
          <li v-for="(item,index) of topbar" :key="index">
            <a href="item.url">{{item.msg}}</a>
          </li>
        </ul>
        <span class="hot"></span>
        <span class="arrow"></span>
        <div class="login">
          <a href="#">登录</a>
        </div>
        <div class="center">
          <a href="#">创作者中心</a>
        </div>
        <div class="search">
          <input type="text" placeholder="音乐/视频/电台/用户" onfocus="this.placeholder=''" onblur="this.placeholder='音乐/视频/电台/用户'">
        </div>
      </div>
    </div>
    <div class="subnav-wrap">
      <div class="subnav">
        <ul>
          <li v-for="(item,index) of subnav" :key="index">
            <a href="item.url">{{item.msg}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {
      topbar:[
        {msg:"发现音乐",url:"#"},
        {msg:"我的音乐",url:"#"},
        {msg:"朋友",url:"#"},
        {msg:"商城",url:"#"},
        {msg:"音乐人",url:"#"},
        {msg:"下载客户端",url:"#"}
      ],
      subnav:[
        {msg:"推荐",url:"#"},
        {msg:"排行榜",url:"#"},
        {msg:"歌单",url:"#"},
        {msg:"主播电台",url:"#"},
        {msg:"歌手",url:"#"},
        {msg:"新碟上架",url:"#"}
      ]
    }
  }
}
</script>

<style scoped>
  #Header{
    height: 105px;
    width: 100%;
  }
  .topbar-wrap{
    height:70px;
    width: 100%;
    background-color: #242424;
  }
  .topbar{
    position: relative;
    height: 70px;
    width: 1100px;
    margin: 0 auto;
  }
  .topbar .logo a{
    float: left;
    width: 176px;
    height: 70px;
    background: url("http://localhost/public/img/Header/topbar.png") no-repeat 0 0;
  }

  .topbar .nav li a{
    float: left;
    height: 70px;
    font-size: 14px;
    color: #ACACAC;
    text-align: center;
    line-height: 70px;
  }
  .topbar .nav li a:hover{
    background-color: #000;
    color: #fff;
  }
  .nav li:nth-child(1) a{
    background-color: #000;
    color: #fff;
  }
  .nav li:nth-child(1) a,.nav li:nth-child(2) a{
    width: 94px;
  }
  .nav li:nth-child(3) a,.nav li:nth-child(4) a{
    width: 66px;
  }
  .nav li:nth-child(5) a{
    width: 80px;
  }
  .nav li:nth-child(6) a{
    width: 108px;
  }

  .topbar .hot{
    position: absolute;
    top: 20px;
    left: 680px;
    width: 26px;
    height: 13px;
    background: url("http://localhost/public/img/Header/topbar.png") no-repeat -192px 0;
  }
  .topbar .arrow{
    position: absolute;
    bottom: 0;
    left: 216px;
    width: 12px;
    height: 6px;
    background: url("http://localhost/public/img/Header/topbar.png") no-repeat -226px 0;
  }

  .topbar .login{
    float: right;
    margin: 19px 0 0 20px;
    height: 45px;
    width: 50px;
  }
  .topbar .login:hover a{
    color: rgb(153, 153, 153)
  }
  .topbar .login a{
    color: #787878;
    font-size: 12px;
  }
  .topbar .login a:hover{
    text-decoration: underline;
    color: #787878;
  }

  .topbar .center a{
    float: right;
    margin: 17px 0 0 12px;
    height: 30px;
    width: 88px;
    border: 1px solid #4F4F4F;
    border-radius: 20px;
    color: #ACACAC;
    font-size: 12px;
    text-align: center;
    line-height: 30px;
  }
  .topbar .center a:hover{
    color: #fff;
    border-color: #fff;
  }

  .topbar .search{
    float: right;
    margin-top: 19px;
    width: 160px;
    height: 32px;
    border-radius: 32px;
    background: #fff url("http://localhost/public/img/Header/topbar.png") no-repeat 0 -100px;
  }
  .topbar .search input{
    width: 120px;
    height: 16px;
    margin: 7px 0 0 30px; 
    border: none;
    outline: none;
    font-size: 12px;
  }
  /* 修改搜索框占位符的颜色 */
  .topbar .search input::-webkit-input-placeholder{
    color: #9b9b9b;
  }
  .topbar .search input::-moz-placeholder{
    color: #9b9b9b;
  }
  .topbar .search input::-ms-input-placeholder{
    color: #9b9b9b;
  }


  .subnav-wrap{
    width: 100%;
    height:35px;
    background-color: #C20C0C;
  }
  .subnav{
    position: relative;
    height: 35px;
    width: 1100px;
    margin: 0 auto;
  }
  .subnav ul{
    padding-left: 180px;
  }
  .subnav ul li{
    float: left;
    height: 35px;
    cursor: pointer;
  }
  .subnav ul li a{
    float: left;
    height: 35px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    line-height: 35px;
  }
   .subnav ul li a:hover{
     height: 20px;
     text-align: center;
     line-height: 20px;
     background-color: #9B0909;
     border-radius: 10px;
    
  }
  .subnav ul li:nth-child(1) a{
     width: 50px;
     height: 20px;
     margin: 7px 17px 0 17px;
     text-align: center;
     line-height: 20px;
     background-color: #9B0909;
     border-radius: 10px;
  }
  .subnav ul li:nth-child(3) a,.subnav ul li:nth-child(5) a{
    width: 84px;
  }
  .subnav ul li:nth-child(4) a,.subnav ul li:nth-child(6) a{
    width: 108px;
  }
  .subnav ul li:nth-child(2) a{
    width: 96px;
  }
  .subnav ul li:nth-child(3) a:hover,.subnav ul li:nth-child(5) a:hover{
    width: 50px;
    margin: 7px 17px 0 17px;
  }
  .subnav ul li:nth-child(4) a:hover,.subnav ul li:nth-child(6) a:hover{
    width: 74px;
    margin: 7px 17px 0 17px;
  }
  .subnav ul li:nth-child(2) a:hover{ 
    width: 64px;
    margin: 7px 16px 0 16px;
  }
</style>
