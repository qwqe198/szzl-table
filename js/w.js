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
    requires: new Decimal(100), // Can be a function that takes requirement increases into account
    resource: "w", // Name of prestige currency
    resourceI18N: "声望点", // Second name of the resource for internationalization (i18n) if internationalizationMod is enabled
    baseResource: "p", // Name of resource prestige is based on
    baseResourceI18N: "点数", // Second name of the baseResource for internationalization (i18n) if internationalizationMod is enabled
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        g = new Decimal(1)

        return g
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
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
       "blank",
       ["microtabs","tab"]
    ],
    layerShown(){return  player.p.points.gte(100)||hasAchievement('cj',15)},
})