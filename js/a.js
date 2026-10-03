addLayer("a", {
    name: "a", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "a", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolI18N: "a", // Second name of symbol for internationalization (i18n) if internationalizationMod is enabled
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    row: 1, // Row the layer is in on the tree (0 is the first row)
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
   requires() { return  hasAchievement('cj',17) ? new Decimal(1) : new Decimal(10) },
    resource: "a", // Name of prestige currency
    resourceI18N: "声望点", // Second name of the resource for internationalization (i18n) if internationalizationMod is enabled
    baseResource: "s", // Name of resource prestige is based on
    baseResourceI18N: "点数", // Second name of the baseResource for internationalization (i18n) if internationalizationMod is enabled
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        g = new Decimal(1)
if(hasUpgrade("b",12))g=g.mul(upgradeEffect("b",12))
if(hasUpgrade("p",12))g=g.mul(upgradeEffect("p",12))
if(hasUpgrade("w",13))g=g.mul(upgradeEffect("w",13))
if(hasUpgrade("a1",12))g=g.mul(upgradeEffect("a1",12))
        return g
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    upgrades: {
       11: {
            description: `a加成s获取.`,
            effect() {
                var g = player.a.points.add(1).log10().add(1.25).pow(3.5)
g = g.pow(buyableEffect('w', 11))
                return g
            },
            effectDisplay() { return `x${format(this.effect())}` },
            cost: n(1),
        }, 
12: {
            description: `解锁b.`,
           
            cost: n(100),
        }, 
    },
 buyables: {
        11: {
            cost(x = getBuyableAmount(this.layer, this.id)) {
                var c = n(1000000).mul(n(10).pow(x.pow(1.4)))
if(hasAchievement('cj',17))c=n(10).pow(x.pow(1.4))
                return c
            },
            display() { return `p获取<br />x${format(buyableEffect(this.layer, this.id), 2)}.(下一级: ${format(this.effect(getBuyableAmount(this.layer, this.id).add(1)))})<br />费用:${format(this.cost(getBuyableAmount(this.layer, this.id)))}a<br>等级:${formatWhole(getBuyableAmount(this.layer, this.id))}` },
            canAfford() { return player.a.points.gte(this.cost()) },
            buy() {
               
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            title() {
                return ""
            },
            effect(x = getBuyableAmount(this.layer, this.id)) {
                var eff = n(1.5).pow(x)

                return eff
            },
            unlocked() { return hasAchievement('cj',14) },
        },
    },
    hotkeys: [
        {key: "a", description: "a: 进行a重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
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
       "blank",
       ["microtabs","tab"]
    ],
    layerShown(){return true},
autoUpgrade() { return hasAchievement("cj", 15) },
  update(diff) {
if (hasAchievement("cj", 19)) setBuyableAmount(this.layer, 11, player.a.points.add(1).log10().root(1.4).floor().add(1))

    },
 passiveGeneration() {
        return format(buyableEffect("a1", 12), 0)
    },
})
