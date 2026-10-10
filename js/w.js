addLayer("w", {
    name: "w", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "w", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolI18N: "a", // Second name of symbol for internationalization (i18n) if internationalizationMod is enabled
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    row: 3, // Row the layer is in on the tree (0 is the first row)
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#dc9613",
    requires() { return  hasAchievement('cj',21) ? new Decimal(1) : new Decimal(100) },
    resource: "w", // Name of prestige currency
    resourceI18N: "声望点", // Second name of the resource for internationalization (i18n) if internationalizationMod is enabled
    baseResource: "p", // Name of resource prestige is based on
    baseResourceI18N: "点数", // Second name of the baseResource for internationalization (i18n) if internationalizationMod is enabled
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.4, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        g = new Decimal(1)
if(hasUpgrade("a1",15))g=g.mul(upgradeEffect("a1",15))
if(hasAchievement("cj",31))g=g.mul(layers.i.i3eff())
g=g.mul((tmp["i"].buyables[12].eff1))
        return g
    },
     gainExp() { // Calculate the exponent on main currency from bonuses
       g = new Decimal(1)
if(hasAchievement('cj',23))g = g.add(layers.a1.c1eff().add(1).root(2).sub(1))
if(hasAchievement('cj',26))g = g.add((layers.a1.c4eff().add(1).root(2.5).sub(1)))
        return g
    },
    upgrades: {
       11: {
            description: `w加成p获取.`,
            effect() {
                var g = player.w.points.add(1).log10().add(1.25).pow(7)

                return g
            },
            effectDisplay() { return `x${format(this.effect())}` },
            cost: n(0.5),
        }, 
12: {
            description: `w加成s获取.`,
            effect() {
                var g = player.w.points.add(1).log10().add(1.25).pow(5)
g = g.pow(buyableEffect('p', 11))
if(inChallenge("a1",11)||inChallenge("a1",12)||inChallenge("a1",21)||inChallenge("a1",22))g=n(1)
                return g
            },
            effectDisplay() { return `x${format(this.effect())}` },
            cost: n(0.5),
        }, 
13: {
            description: `w加成a获取.`,
            effect() {
                var g = player.w.points.add(1).log10().add(1.25)

                return g
            },
            effectDisplay() { return `x${format(this.effect())}` },
            cost: n(1),
        }, 
14: {
            description: `w加成b获取.`,
            effect() {
                var g = player.w.points.add(1).log10().add(1.25).pow(3)

                return g
            },
            effectDisplay() { return `x${format(this.effect())}` },
            cost: n(1),
        }, 
    },
 buyables: {
        11: {
            cost(x = getBuyableAmount(this.layer, this.id)) {
                var c = n(1400).mul(n(1.4).pow(x.pow(1.4)))
if(hasAchievement('cj',25))c=n(1.4).pow(x.pow(1.4))
                return c
            },
            display() { return `使a,b对s的加成<br />^${format(buyableEffect(this.layer, this.id), 2)}.(下一级: ${format(this.effect(getBuyableAmount(this.layer, this.id).add(1)))})<br />费用:${format(this.cost(getBuyableAmount(this.layer, this.id)))}w<br>等级:${formatWhole(getBuyableAmount(this.layer, this.id))}` },
            canAfford() { return player.w.points.gte(this.cost()) },
            buy() {
               
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            title() {
                return ""
            },
            effect(x = getBuyableAmount(this.layer, this.id)) {
                var g = x.mul(0.07).add(1)
if(g.gte(2.5)&&!hasAchievement('cj',26))g=g.div(2.5).add(1.5)
                return g
            },
            unlocked() { return hasAchievement('cj',17) },
        },
    },
    hotkeys: [
        {key: "w", description: "w: 进行w重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    microtabs:{
        tab:{
            "a":{
                name(){return '主要'}, // Name of tab button
                nameI18N(){return 'main'}, // Second name for internationalization (i18n) if internationalizationMod is enabled
                           content: [
 "buyables",
                "upgrades",
            ],
            },
           
        },
    },
    tabFormat: [
       ["display-text", function() { return getPointsDisplay() }],
       "main-display",
       "prestige-button",
      
     "buyables",
                "upgrades",
    ],
autoUpgrade() { return hasAchievement("cj", 18) },
update(diff) {
if (hasAchievement("cj", 29)) setBuyableAmount(this.layer, 11, player.w.points.add(1).log10().div(n(1.4).log10()).root(1.4).floor().add(1))

    },
    layerShown(){return  player.p.points.gte(100)||hasAchievement('cj',15)},
passiveGeneration() {
        return getBuyableAmount("i", 12).gte(1) ? new Decimal(1) : new Decimal(0)
    },
})