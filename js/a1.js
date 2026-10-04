addLayer("a1", {
    name: "α", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "α", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolI18N: "a", // Second name of symbol for internationalization (i18n) if internationalizationMod is enabled
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    row: 4, // Row the layer is in on the tree (0 is the first row)
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#2013dc",
   requires() { return   new Decimal(6.02e23) },
    resource: "α", // Name of prestige currency
    resourceI18N: "声望点", // Second name of the resource for internationalization (i18n) if internationalizationMod is enabled
    baseResource: "s", // Name of resource prestige is based on
    baseResourceI18N: "点数", // Second name of the baseResource for internationalization (i18n) if internationalizationMod is enabled
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.075, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        g = new Decimal(1)

        return g
    },
c1eff() { // Calculate the multiplier for main currency from bonuses
        g = n(challengeEffect("a1", 11))
if(g.gte(1))g=g.pow(0.5)
        return g
    },
c2eff() { // Calculate the multiplier for main currency from bonuses
        g = n(challengeEffect("a1", 12))
if(g.gte(1))g=g.pow(0.5)
        return g
    },
c3eff() { // Calculate the multiplier for main currency from bonuses
        g = n(challengeEffect("a1", 21))
if(g.gte(1))g=g.pow(0.5)
        return g
    },
c4eff() { // Calculate the multiplier for main currency from bonuses
        g = n(challengeEffect("a1", 22))

        return g
    },
     gainExp() { // Calculate the exponent on main currency from bonuses
       g = new Decimal(1)
if(hasAchievement('cj',24))g = g.add(layers.a1.c2eff().add(1).root(2).sub(1))
        return g
    },
    upgrades: {
       11: {
            description: `α加成s获取.`,
            effect() {
                var g = player.a1.points.add(1).log10().add(2).pow(5)
g = g.pow(buyableEffect('a1', 11))
if(inChallenge("a1",11)||inChallenge("a1",12)||inChallenge("a1",21)||inChallenge("a1",22))g=n(1)
                return g
            },
            effectDisplay() { return `x${format(this.effect())}` },
            cost: n(1),
        }, 
12: {
            description: `α加成a获取.`,
            effect() {
                var g = player.a1.points.add(1).log10().add(2).pow(4)
g = g.pow(buyableEffect('a1', 11))
                return g
            },
            effectDisplay() { return `x${format(this.effect())}` },
            cost: n(1),
        }, 
13: {
            description: `α加成b获取.`,
            effect() {
                var g = player.a1.points.add(1).log10().add(2).pow(3)
g = g.pow(buyableEffect('a1', 11))
                return g
            },
            effectDisplay() { return `x${format(this.effect())}` },
            cost: n(1),
        }, 
14: {
            description: `α加成p获取.`,
            effect() {
                var g = player.a1.points.add(1).log10().add(2).pow(2)
g = g.pow(buyableEffect('a1', 11))
                return g
            },
            effectDisplay() { return `x${format(this.effect())}` },
            cost: n(1),
        }, 
15: {
            description: `α加成w获取.`,
            effect() {
                var g = player.a1.points.add(1).log10().add(2)
g = g.pow(buyableEffect('a1', 11))
                return g
            },
            effectDisplay() { return `x${format(this.effect())}` },
            cost: n(1),
        }, 
    },
buyables: {
        11: {
            cost(x = getBuyableAmount(this.layer, this.id)) {
x=x.div(layers.a1.c1eff().add(1).root(2))
                var c = n(12).mul(n(1.2).pow(x.pow(1.2)))

                return c
            },
            display() { return `获得β(当前:${format(getBuyableAmount(this.layer, this.id), 2)})费用:${format(this.cost(getBuyableAmount(this.layer, this.id)))}α<br />α对资源的加成^${format(buyableEffect(this.layer, this.id), 2)}` },
            canAfford() { return player.a1.points.gte(this.cost()) },
            buy() {
               
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            title() {
                return ""
            },
            effect(x = getBuyableAmount(this.layer, this.id)) {
                var g = x.mul(0.05).add(1)
if(g.gte(2))g=g.div(2).add(1)
                return g
            },
            unlocked() { return hasAchievement('cj',21) },
        },
12: {
            cost(x = getBuyableAmount(this.layer, this.id)) {
                var c = n(1000).mul(n(5).pow(x.pow(1.3)))

                return c
            },
            display() { return `每秒获取${format(getBuyableAmount(this.layer, this.id), 2)}倍的a,b，费用:${format(this.cost(getBuyableAmount(this.layer, this.id)))}α` },
            canAfford() { return player.a1.points.gte(this.cost()) },
            buy() {
               
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            title() {
                return "a&b点击器"
            },
            effect(x = getBuyableAmount(this.layer, this.id)) {
                var g = x

                return g
            },
 purchaseLimit() { return n(20) },
            unlocked() { return hasAchievement('cj',21) },
        },
    },
    hotkeys: [
        {key: "A", description: "Shift+a: 进行α重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    microtabs:{
        tab:{
            "a":{
                name(){return '主要'}, // Name of tab button
                nameI18N(){return 'main'}, // Second name for internationalization (i18n) if internationalizationMod is enabled
                           content: [
 "buyables",
"challenges",
                "upgrades",
            ],
            },
           
        },
    },
 challenges: {
        11: {
            name() { return '挑战1'},
            challengeDescription() { return 'a对s的加成^0.3,退出挑战时基于挑战内最高s获得分数.'},
            rewardDescription() { 
                return `分数:${format(challengeEffect("a1", 11))}，加成a,w获取，降低β价格`
            },
            rewardEffect() {
let g=n(0)
              if(inChallenge("a1",11))  g=g.max(player.points.add(1).log10().div(38.53))

return g.max(player.a1.challenges[11])
            },
            goal: 0,
 goalDescription() {
                return "更多s"
            },
            onExit() {
                player.a1.challenges[11] = player.points.add(1).log10().div(38.53).max(challengeEffect("a1", 11)).max(0)
            },
            completionLimit: "1F9999",
            canComplete() { return true },
            resource() { return player.points },
            unlocked() { return  hasAchievement('cj',23) }
        },
12: {
            name() { return '挑战2'},
            challengeDescription() { return 'b对s的加成^0.2,p^0.25,退出挑战时基于挑战内最高s获得分数.'},
            rewardDescription() { 
                return `分数:${format(challengeEffect("a1", 12))}，加成α获取`
            },
            rewardEffect() {
let g=n(0)
              if(inChallenge("a1",12))  g=g.max(player.points.add(1).log10().div(38.53))

return g.max(player.a1.challenges[12])
            },
            goal: 0,
 goalDescription() {
                return "更多s"
            },
            onExit() {
                player.a1.challenges[12] = player.points.add(1).log10().div(38.53).max(challengeEffect("a1", 12)).max(0)
            },
            completionLimit: "1F9999",
            canComplete() { return true },
            resource() { return player.points },
            unlocked() { return  hasAchievement('cj',25) }
        },
21: {
            name() { return '挑战3'},
            challengeDescription() { return 's^0.5,你不能获得p,退出挑战时基于挑战内最高s获得分数.'},
            rewardDescription() { 
                return `分数:${format(challengeEffect("a1", 21))}，大幅加成a获取`
            },
            rewardEffect() {
let g=n(0)
              if(inChallenge("a1",21))  g=g.max(player.points.add(1).log10().div(38.53))

return g.max(player.a1.challenges[21])
            },
            goal: 0,
 goalDescription() {
                return "更多s"
            },
            onExit() {
                player.a1.challenges[21] = player.points.add(1).log10().div(38.53).max(challengeEffect("a1", 21)).max(0)
            },
            completionLimit: "1F9999",
            canComplete() { return true },
            resource() { return player.points },
            unlocked() { return  hasAchievement('cj',26) }
        },
22: {
            name() { return '挑战4'},
            challengeDescription() { return 's先log1.075再^2,退出挑战时基于挑战内最高s获得分数.'},
            rewardDescription() { 
                return `分数:${format(challengeEffect("a1", 22))}，巨幅加成b,p,w获取`
            },
            rewardEffect() {
let g=n(0)
              if(inChallenge("a1",22))  g=g.max(player.points.add(1).log10().div(38.53))

return g.max(player.a1.challenges[22])
            },
            goal: 0,
 goalDescription() {
                return "更多s"
            },
            onExit() {
                player.a1.challenges[22] = player.points.add(1).log10().div(38.53).max(challengeEffect("a1", 22)).max(0)
            },
            completionLimit: "1F9999",
            canComplete() { return true },
            resource() { return player.points },
            unlocked() { return  hasAchievement('cj',27) }
        },
    },
    tabFormat: [
       ["display-text", function() { return getPointsDisplay() }],
       "main-display",
       "prestige-button",
       "blank",
       ["microtabs","tab"]
    ],
    layerShown(){return hasAchievement('cj',18)},

})
