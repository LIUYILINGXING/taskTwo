//静态资源服务器的搭建
const express = require("express")  //引入express库
const app = express()  //生成一个express实例
app.use(express.static("public"))  //开启一个静态资源目录（默认进入public文件夹找index.html）如果换成abc.html就要/abc.html才能访问得到
app.listen(80)  //监听本地 http://localhost:80端口

//设置跨域请求
app.all('*',function(req,res,next){
    //设置请求头
    //允许所有来源访问
    res.header('Access-Control-Allow-Origin', '*')
    //用于判断request来自ajax还是传统请求
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    //允许访问的方式
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    //修改程序信息与版本
    res.header('X-Powered-By', ' 3.2.1')
    //内容类型：如果是post请求必须指定这个属性
    res.header('Content-Type', 'application/json;charset=utf-8')
    next()
  })

//图片加载,存储在public/images下的所有图片
app.get('/public/img/*', function (req, res) {
    res.sendFile( __dirname + "/" + req.url );
    console.log("Request for " + req.url + " received.");
})


//1.引入users.js
const users = require("./routes/users")


//2.使用routes
app.use("/users",users)