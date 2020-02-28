<template>
    <div id="bottom">
    <div class="wrap">
        <div class="copy">
            <p class="link">
                <a href="#">服务条款</a>
                <span>|</span>
                <a href="#">隐私政策</a>
                <span>|</span>
                <a href="#">儿童隐私政策</a>
                <span>|</span>
                <a href="#">版权投诉指引</a>
                <span>|</span>
                <a href="#">意见反馈</a>
                <span>|</span>
            </p>
            <p class="right">
                <span>网易公司版权所有©1997-2020</span>
                <span>杭州乐读科技有限公司运营：</span>
                <a href="#">浙网文[2018]3506-263号</a>
            </p>
            <p class="contact">
                <span>违法和不良信息举报电话：0571-89853516</span>
                <span> 举报邮箱：</span>
                <a href="#">ncm5990@163.com</a>
            </p>
            <p class="web">
                <span>粤B2-20090191-18</span>
                <a href="#">工业和信息化部备案管理系统网站</a>
            </p>
        </div>
        <ul class="logo">
            <li>
                <a href="#" class="user"></a>
                <p>用户认证</p>
            </li>
            <li>
                <a href="#" class="musician"></a>
                <p>音乐人</p>
            </li>
            <li>
                <a href="#" class="admire"></a>
                <p>赞赏</p>
            </li>
            <li>
                <a href="#" class="award"></a>
                <p>视频奖励</p>
            </li>
        </ul>
    </div>
    </div>
</template>

<script>
    export default{
        name:'Bottom'
    }
</script>

<style scoped>
    #bottom{
        width: 100%;
        height: 173px;
        border-top: 1px solid #D3D3D3;
        background-color: #F5F5F5;
    }
    .wrap{
        width: 980px;
        height: 111px;
        margin: 0 auto;
    }
    .copy{
        float: left;
        width: 520px;
        height: 111px;
        margin-top: 15px;
    }
    .copy{
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        color: #666;
    }
    .link a{
        font-size: 12px;
        color: #999;
    }
    .link a:hover{
        text-decoration: underline;
    }
    .link span{
        font-size: 12px;
        color: #999;
        margin: 0 10px;
    }
    .right span,.contact span,.web span{
        margin-right: 14px;
    }
    .right a,.contact a,.web a{
        color: #666;
    }
    .right a:hover,.contact a:hover,.web a:hover{
        text-decoration: underline;
    }

    .logo{
        float: right;
        width: 360px;
        height: 70px;
        margin-top: 32px;
    }
    .logo li{
        float: left;
        width: 60px;
        height: 70px;
        margin-left: 30px;
    }
    .logo li a{
        display: inline-block;
        width: 50px;
        height: 45px;
        margin: 0 auto;
    }
    .logo li p{
        font-size: 12px;
        color: #999;
        width: 52px;
        height: 14px;
        text-align: center;
        line-height: 14px;
    }
    .user{
        background: url("http://localhost/public/img/bottom/user.png");
        background-size: 50px 45px;
    }
    .musician{
        background: url("http://localhost/public/img/bottom/musician.png");
        background-size: 50px 45px;
    }
    .admire{
        background: url("http://localhost/public/img/bottom/admire.png");
        background-size: 50px 45px;
    }
    .award{
        background: url("http://localhost/public/img/bottom/award.png");
        background-size: 50px 45px;
    }
</style>