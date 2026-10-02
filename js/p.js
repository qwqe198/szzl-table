addLayer("p", {
    name: "p", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolI18N: "a", // Second name of symbol for internationalization (i18n) if internationalizationMod is enabled
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    row: 2, // Row the layer is in on the tree (0 is the first row)
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#132adc",
    requires: new Decimal(1e7), // Can be a function that takes requirement increases into account
    resource: "p", // Name of prestige currency
    resourceI18N: "声望点", // Second name of the resource for internationalization (i18n) if internationalizationMod is enabled
    baseResource: "s", // Name of resource prestige is based on
    baseResourceI18N: "点数", // Second name of the baseResource for internationalization (i18n) if internationalizationMod is enabled
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.15, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        g = new Decimal(1)
g = g.mul(buyableEffect('a', 11))
g = g.mul(buyableEffect('b', 11))
if(hasUpgrade("w",11))g=g.mul(upgradeEffect("w",11))
        return g
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    upgrades: {
       11: {
            description: `p加成s获取.`,
            effect() {
                var g = player.p.points.add(2).log10().add(1.25).pow(6)

                return g
            },
            effectDisplay() { return `x${format(this.effect())}` },
            cost: n(1),
        }, 
12: {
            description: `p加成a获取.`,
            effect() {
                var g = player.p.points.add(2).log10().add(1.25).pow(4)

                return g
            },
            effectDisplay() { return `x${format(this.effect())}` },
            cost: n(1),
        }, 
13: {
            description: `p加成b获取.`,
            effect() {
                var g = player.p.points.add(2).log10().add(1.25).pow(2)

                return g
            },
            effectDisplay() { return `x${format(this.effect())}` },
            cost: n(1),
        }, 
    },
    hotkeys: [
        {key: "p", description: "p: 进行p重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    microtabs:{
        tab:{
            "a":{
                name(){return '主要'}, // Name of tab button
                nameI18N(){return 'main'}, // Second name for internationalization (i18n) if internationalizationMod is enabled
                           content: [

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
    layerShown(){return player.points.gte(1e7)||hasAchievement('cj',13)},
})