const express = require("express")  //引入express库
const router = express.Router()

module.exports = router

//GET api/users
// 热门推荐
router.get("/rmd",(req,res) => {
    res.send([
        {
            imgURL:"http://localhost/public/img/Content/rmd/1.jpg",
            songURL:"#",
            description:"[一周日语上新]最新单曲用声音歌唱爱",
            times:"3463万"
        },
        {
            imgURL:"http://localhost/public/img/Content/rmd/2.jpg",
            songURL:"#",
            description:"<甜味女孩>早上起来时 整个世界都是礼物",
            times:"16万"
        },
        {
            imgURL:"http://localhost/public/img/Content/rmd/3.jpg",
            songURL:"#",
            description:"那个说爱你一辈子的人现在还在你身边吗",
            times:"5176万"
        },
        {
            imgURL:"http://localhost/public/img/Content/rmd/4.jpg",
            songURL:"#",
            description:"大小姐与大少爷的反派生涯",
            times:"880"
        },
        {
            imgURL:"http://localhost/public/img/Content/rmd/5.jpg",
            songURL:"#",
            description:"欧美励志//只有奋笔疾书，才能逆风前行",
            times:"244万"
        },
        {
            imgURL:"http://localhost/public/img/Content/rmd/6.jpg",
            songURL:"#",
            description:"Vol.05 再给我一段时间，去谱写爱的诗篇",
            times:"1645"
        },
        {
            imgURL:"http://localhost/public/img/Content/rmd/7.jpg",
            songURL:"#",
            description:"神仙翻唱：超好听的翻唱cover集鸭",
            times:"19641万"
        },
        {
            imgURL:"http://localhost/public/img/Content/rmd/8.jpg",
            songURL:"#",
            description:"关键词（cover：林俊杰）",
            times:"461万"
        },
    ])
})

// 飙升榜
router.get("/chart/pop",(req,res) => {
    res.send([
        {
            name:"当遇见你",
            url:"#"
        },
        {
            name:"朋友请听好",
            url:"#"
        },
        {
            name:"想见你想见你想见你",
            url:"#"
        },
        {
            name:"起风了",
            url:"#"
        },
        {
            name:"两个普普通通小青年",
            url:"#"
        },
        {
            name:"误解",
            url:"#"
        },
        {
            name:"吹灭小山河",
            url:"#"
        },
        {
            name:"偏离",
            url:"#"
        },
        {
            name:"陪你去流浪",
            url:"#"
        },
        {
            name:"真心话",
            url:"#"
        }
    ])
})

// 新歌榜
router.get("/chart/new",(req,res) => {
    res.send([
        {
            name:"你要相信这不是最后一天",
            url:"#"
        },
        {
            name:"你要相信这不是最后一天（live）",
            url:"#"
        },
        {
            name:"Tomorrow will be fine.",
            url:"#"
        },
        {
            name:"当遇见你",
            url:"#"
        },
        {
            name:"小王日记",
            url:"#"
        },
        {
            name:"误解",
            url:"#"
        },
        {
            name:"斗牛（live）",
            url:"#"
        },
        {
            name:"ON",
            url:"#"
        },
        {
            name:"二零三",
            url:"#"
        },
        {
            name:"多想在平庸的生活拥抱你",
            url:"#"
        }
    ])
})

// 原创音乐榜
router.get("/chart/org",(req,res) => {
    res.send([
        {
            name:"Fake",
            url:"#"
        },
        {
            name:"渡渡年",
            url:"#"
        },
        {
            name:"愿你余生漫长",
            url:"#"
        },
        {
            name:"彩色",
            url:"#"
        },
        {
            name:"灯塔",
            url:"#"
        },
        {
            name:"双刃",
            url:"#"
        },
        {
            name:"望见",
            url:"#"
        },
        {
            name:"生年不满百 常杯千岁忧",
            url:"#"
        },
        {
            name:"冬拾",
            url:"#"
        },
        {
            name:"寂寞又美好",
            url:"#"
        }
    ])
})

// 新碟上架
router.get("/new",(req,res) => {
    res.send([
        {
            imgURL:"http://localhost/public/img/Content/new/1.jpg",
            songURL:"#",
            name:"我在北京等你 电视剧原声带",
            singer:"群星"
        },
        {
            imgURL:"http://localhost/public/img/Content/new/2.jpg",
            songURL:"#",
            name:"你要相信这不是最后一天",
            singer:"华晨宇"
        },
        {
            imgURL:"http://localhost/public/img/Content/new/3.jpg",
            songURL:"#",
            name:"Tomorrow will be fine.",
            singer:"Sodagreen"
        },
        {
            imgURL:"http://localhost/public/img/Content/new/4.jpg",
            songURL:"#",
            name:"歌手 当打之年 第3期",
            singer:"歌手"
        },
        {
            imgURL:"http://localhost/public/img/Content/new/5.jpg",
            songURL:"#",
            name:"MAP OF THE SOUL:7",
            singer:"BTS（防弹少年团）"
        },
        {
            imgURL:"http://localhost/public/img/Content/new/6.jpg",
            songURL:"#",
            name:"小王",
            singer:"毛不易"
        },
        {
            imgURL:"http://localhost/public/img/Content/new/7.jpg",
            songURL:"#",
            name:"The Man (Live From Paris)",
            singer:"Taylor Swift"
        },
        {
            imgURL:"http://localhost/public/img/Content/new/8.jpg",
            songURL:"#",
            name:"Changes",
            singer:"Justin Bieber"
        },
        {
            imgURL:"http://localhost/public/img/Content/new/9.jpg",
            songURL:"#",
            name:"坚信爱会赢",
            singer:"文艺工作者"
        },
        {
            imgURL:"http://localhost/public/img/Content/new/10.jpg",
            songURL:"#",
            name:"Nice Things",
            singer:"Far East Movement/刘宪华(Henry)/AlunaGeorge"
        }
    ])
})

// 入驻歌手
router.get("/singer",(req,res) => {
    res.send([
        {
            imgURL:"http://localhost/public/img/Content/singerlist/1.jpg",
            singerURL:"#",
            name:"张惠妹aMEI",
            description:"台湾歌手张惠妹"
        },
        {
            imgURL:"http://localhost/public/img/Content/singerlist/2.jpg",
            singerURL:"#",
            name:"Fine乐团",
            description:"独立音乐人"
        },
        {
            imgURL:"http://localhost/public/img/Content/singerlist/3.jpg",
            singerURL:"#",
            name:"万晓利",
            description:"民谣歌手"
        },
        {
            imgURL:"http://localhost/public/img/Content/singerlist/4.jpg",
            singerURL:"#",
            name:"音乐人赵雷",
            description:"民谣歌手"
        },
        {
            imgURL:"http://localhost/public/img/Content/singerlist/5.jpg",
            singerURL:"#",
            name:"王三溥",
            description:"音乐人"
        }
    ])
})

// 热门主播
router.get("/host",(req,res) => {
    res.send([
        {
            imgURL:"http://localhost/public/img/Content/hostlist/1.jpg",
            hostURL:"#",
            name:"陈立",
            description:"心理学家"
        },
        {
            imgURL:"http://localhost/public/img/Content/hostlist/2.jpg",
            hostURL:"#",
            name:"DJ艳秋",
            description:"著名音乐节目主持人"
        },
        {
            imgURL:"http://localhost/public/img/Content/hostlist/3.jpg",
            hostURL:"#",
            name:"国家大剧院古典音乐频道",
            description:"国家大剧院古典音乐官方"
        },
        {
            imgURL:"http://localhost/public/img/Content/hostlist/4.jpg",
            hostURL:"#",
            name:"谢谢收听",
            description:"南京电台主持人王馨"
        },
        {
            imgURL:"http://localhost/public/img/Content/hostlist/5.jpg",
            hostURL:"#",
            name:"DJ晓苏",
            description:"独立DJ"
        },
    ])
})