addLayer("i", {
    name: "i", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "i", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolI18N: "a", // Second name of symbol for internationalization (i18n) if internationalizationMod is enabled
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    row: 5, // Row the layer is in on the tree (0 is the first row)
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#fff200",
   requires() { return   new Decimal(layers.i.getNextAt()) },
    resource: "i", // Name of prestige currency
    resourceI18N: "声望点", // Second name of the resource for internationalization (i18n) if internationalizationMod is enabled
    baseResource: "s", // Name of resource prestige is based on
    baseResourceI18N: "点数", // Second name of the baseResource for internationalization (i18n) if internationalizationMod is enabled
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        g = new Decimal(1)


        return g
    },
   gainExp() { // Calculate the exponent on main currency from bonuses
       g = new Decimal(1)

        return g
    },
getResetGain() {
        var g = n(1)

        return g.floor()
    },
getNextAt() {
let g = n("1.79e308").mul(n(2).mul(player.i.points).add(11).pow(n(player.i.points).pow(2).add(n(12).mul(player.i.points)).add(11)));
if(player.i.points.gte(10))g=n("1.79e308").mul(n(player.i.points).add(1).pow(n(player.i.points).add(1).pow(2).mul(n(player.i.points).sub(7))));
    return g
},
i1eff() {
        let g = n(10).pow(n(player.i.points).pow(1.5))
if(hasAchievement('cj',31))g=n(16).pow(n(player.i.points).pow(1.6))
        return g
    },
i2eff() {
        let g = n(4).pow(n(player.i.points).pow(1.4))
if(hasAchievement('cj',32))g=n(5).pow(n(player.i.points).pow(1.5))
        return g
    },
i3eff() {
        let g = n(3).pow(n(player.i.points).pow(1.3))

        return g
    },
    hotkeys: [
        {key: "i", description: "i: 进行大坍缩", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    microtabs:{
        tab:{
            "a":{
                name(){return '主要'}, // Name of tab button
                nameI18N(){return 'main'}, // Second name for internationalization (i18n) if internationalizationMod is enabled
                           content: [

            ],
            },
           
        },
    },
    tabFormat: [
       ["display-text", function() { return getPointsDisplay() }],
       "main-display",
       "prestige-button",
       "blank",
["display-text", () =>
                   player.i.points.gte(1) ?`i:sx${format(layers.i.i1eff())}`:``,
                    { "font-size": "20px" }
                ],
["display-text", () =>
                   player.i.points.gte(2) ?`i2:px${format(layers.i.i2eff())}`:``,
                    { "font-size": "20px" }
                ],
["display-text", () =>
                   player.i.points.gte(4) ?`i3:wx${format(layers.i.i3eff())}`:``,
                    { "font-size": "20px" }
                ],
       ["microtabs","tab"]
    ],
    layerShown(){return  player.points.gte("1.79e308")||hasAchievement('cj',28)},

})