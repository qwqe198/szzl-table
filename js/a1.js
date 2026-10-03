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
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    upgrades: {
       11: {
            description: `α加成s获取.`,
            effect() {
                var g = player.a1.points.add(1).log10().add(2).pow(5)

                return g
            },
            effectDisplay() { return `x${format(this.effect())}` },
            cost: n(1),
        }, 
12: {
            description: `α加成a获取.`,
            effect() {
                var g = player.a1.points.add(1).log10().add(2).pow(4)

                return g
            },
            effectDisplay() { return `x${format(this.effect())}` },
            cost: n(1),
        }, 
13: {
            description: `α加成b获取.`,
            effect() {
                var g = player.a1.points.add(1).log10().add(2).pow(3)

                return g
            },
            effectDisplay() { return `x${format(this.effect())}` },
            cost: n(1),
        }, 
14: {
            description: `α加成p获取.`,
            effect() {
                var g = player.a1.points.add(1).log10().add(2).pow(2)

                return g
            },
            effectDisplay() { return `x${format(this.effect())}` },
            cost: n(1),
        }, 
15: {
            description: `α加成w获取.`,
            effect() {
                var g = player.a1.points.add(1).log10().add(2)

                return g
            },
            effectDisplay() { return `x${format(this.effect())}` },
            cost: n(1),
        }, 
    },
 buyables: {
      
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
    layerShown(){return hasAchievement('cj',18)},

})