addLayer("cj", {
    startData() {
        return {
            unlocked: true,
        }
    },
    color: "#dc13c8",
    row: 999,
position: 1,
    layerShown() { return true },
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("成就")
    },
    symbol: `成就`,
    achievements: {
        11: {
            name: "a1",
            done() { return player.points.gte(1e6) }, 
            tooltip: "科学记数法(Wow,再加一个数量级就可以p转生了)达成要求:s>=1e6",
        },
12: {
            name: "a2",
            done() { return player.points.gte(3.81e6) }, 
            tooltip: "e^e^e(See you next time!e(OwO)e)达成要求:s>=3.81e6",
        },        
13: {
            name: "a3",
            done() { return player.p.points.gte(1) }, 
            tooltip: "正式开始(p增加了，去看看b的获取公式有什么变化?)达成要求:p>=1(在1e7s解锁p)",
        }, 
14: {
            name: "a4",
            done() { return player.points.gte(1e10) }, 
            tooltip: "百亿(我敢肯定你已经不能离开p的加成了，解锁2个可购买)达成要求:s>=1e10",
        }, 
15: {
            name: "a5",
            done() { return player.w.points.gte(1) }, 
            tooltip: "超级转生(你只需享受着s逐渐变大，自动购买a，b升级(在100p解锁w)),达成要求:w>=1",
        },    
16: {
            name: "a6",
            done() { return player.w.points.gte(30) }, 
            tooltip: "循环往复(你应该注意到了，w在为p提供大量加成的同时，w也在小幅度的为a的获取提供加成)达成要求:w>=30",
        },     
17: {
            name: "a7",
            done() { return player.points.gte(1.84e19) }, 
            tooltip: "半无穷(即2^64,这里取对数,a,b重置要求和购买价格基础为1,在w解锁一个可购买)达成要求:s>=1.84e19",
        }, 
18: {
            name: "a8",
            done() { return player.points.gte(6.02e23) }, 
            tooltip: "阿伏加德罗常数(解锁α转生,该转生会给予巨大的加成，你会很快回到这里并且轻松完成下一个成就,自动购买p,w升级)达成要求:s>=6.02e23",
        },
19: {
            name: "a9",
            done() { return player.points.gte(8.8e27) }, 
            tooltip: "最后一步!(可观测宇宙的直径(这里取930亿光年)约为8.8e27m,无穷之前的最后一个成就,自动a,b购买项,在p解锁一个可购买)达成要求:s>=8.8e27",
        },
21: {
            name: "a10",
            done() { return player.points.gte(3.4e38) }, 
            tooltip: "INFINITE(无穷啦，不过这并非该游戏的终点，你注意到α有新的资源吗？w重置要求为1)达成要求:s>=3.4e38",
        },
22: {
            name: "a11",
            done() { return getBuyableAmount("a1", 12).gte(1) }, 
            tooltip: "解放双手！(现在游戏的性质变了，从放置变成增量游戏,p重置要求为1）达成要求：购买a&b点击器",
        },
23: {
            name: "a12",
            done() { return player.points.gte(1.16e77) }, 
            tooltip: "2-INFINITE(你的毅力难以置信,s获取x10,解锁挑战1,在挑战中获得尽可能高的s以获得加成)达成要求:s>=1.16e77",
        },
24: {
            name: "a13",
            done() { return player.a1.challenges[11]>0.33 }, 
            tooltip: "开始挑战(最困难的挑战，往往只需最简单的阻碍(其实并不难))达成要求:挑战1分数>0.33",
        },  
25: {
            name: "a14",
            done() { return player.points.gte(1.71e98) }, 
            tooltip: "69!(完美的数字！解锁挑战2,p,w购买价格基础为1)达成要求:s>=1.71e98",
        },
26: {
            name: "a15",
            done() { return player.points.gte(1.7e120) }, 
            tooltip: "四维三阶魔方(似乎用排列组合的方式可以轻松创造出大数字，解锁挑战三,移除w购买效果的一重软上限)达成要求:s>=1.7e120",
        },
27: {
            name: "a16",
            done() { return player.points.gte(1.41e174) }, 
            tooltip: "Good(挑战三的加成真不错，不过下一个..没关系,还有挑战四呢)达成要求:s>=1.41e174",
        }, 
28: {
            name: "a17",
            done() { return player.points.gte("1.79e308") }, 
            tooltip: "反物质维度坍缩(你的数字维度坍缩了，新的转生！自动购买α升级,α购买价格基础为1)达成要求:s>=1.79e308",
        }, 
29: {
            name: "a18",
            done() { return player.i.points.gte(2) }, 
            tooltip: "√-1(该游戏中的表示的是infinite point，而非imaginary number，解锁新的坍缩加成,自动p,w购买项)达成要求:i>=2",
        }, 
31: {
            name: "a19",
            done() { return player.i.points.gte(4) }, 
            tooltip: "collapse(你应该明显感受到坍缩越来越快了，尽管坍缩要求在提升，解锁新的坍缩加成，强化i加成,初始满级a&b点击器）达成要求:i>=4",
        }, 
32: {
            name: "a20",
            done() { return player.i.points.gte(7) }, 
            tooltip: "还有多远？(坍缩要求加的越来越快!坍缩速度也是!强化i2加成，坍缩保留挑战1到4分数，Wow)达成要求:i>=7",
        },
33: {
            name: "a21",
            done() { return player.i.points.gte(12) }, 
            tooltip: "Tier 2(看看坍缩要求?它更改了公式。你可以最大获得β，在i解锁新东西)达成要求:i>=12",
        },                                                                              
    },
    tabFormat: [
        "blank",
        ["display-text", function () { return "成就: " + player.cj.achievements.length + "/" + (Object.keys(tmp.cj.achievements).length - 2) }],
        ["display-text", function () { return "部分成就有提示和奖励"  }],
        "blank", "blank",
        "achievements",
    ],

})