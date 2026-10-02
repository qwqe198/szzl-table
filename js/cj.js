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
            tooltip: "循环往复(你应该注意到了，ω在为p提供大量加成的同时，ω也在小幅度的为a的获取提供加成)达成要求:ω>=30",
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