addLayer("i", {
    name: "i", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "i", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolI18N: "a", // Second name of symbol for internationalization (i18n) if internationalizationMod is enabled
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    row: 5, // Row the layer is in on the tree (0 is the first row)
    startData() {
        return {
            unlocked: true,
            points: new Decimal(0),
        }
    },
    color: "#fff200",
    requires() { return new Decimal(layers.i.getNextAt()) },
    resource: "i", // Name of prestige currency
    resourceI18N: "声望点", // Second name of the resource for internationalization (i18n) if internationalizationMod is enabled
    baseResource: "s", // Name of resource prestige is based on
    baseResourceI18N: "点数", // Second name of the baseResource for internationalization (i18n) if internationalizationMod is enabled
    baseAmount() { return player.points }, // Get the current amount of baseResource
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
        let g = n("1.79e308")
let i = player.i.points
  if (i.gte(1))g = n("1.79e308").mul(n(2).mul(i).add(11).pow(n(i).pow(2).add(n(12).mul(i)).add(11)));
        if (i.gte(10)) g = n("1.79e308").mul(n(i).add(1).pow(n(i).add(1).pow(2).mul(n(i).sub(7))));
        return g
    },
    i1eff() {
        let g = n(10).pow(n(player.i.points).pow(1.5))
        if (hasAchievement('cj', 31)) g = n(16).pow(n(player.i.points.add(tmp["i"].buyables[11].eff3)).pow(1.6))
        return g
    },
    i2eff() {
        let g = n(4).pow(n(player.i.points).pow(1.4))
        if (hasAchievement('cj', 32)) g = n(5).pow(n(player.i.points).pow(1.5))
        return g
    },
    i3eff() {
        let g = n(3).pow(n(player.i.points.add(tmp["i"].buyables[12].eff3)).pow(1.3))

        return g
    },
    hotkeys: [
        { key: "i", description: "i: 进行大坍缩", onPress() { if (canReset(this.layer)) doReset(this.layer) } },
    ],
    buyables: {
        11: {
            cost(x = getBuyableAmount(this.layer, this.id)) {
                var g = n(12)
                return g
            },
            display() {
                return `u1加成:挑战4分数对b的效果x${format(tmp["i"].buyables[11].eff1, 2)}
u2加成:b的获取量x${format(tmp["i"].buyables[11].eff2, 2)}
u3加成:i在i1的公式中+${format(tmp["i"].buyables[11].eff3, 2)}.<br>数量:${formatWhole(getBuyableAmount(this.layer, this.id))}<br>拥有u时，b的基础获取指数为1`
            },
            canAfford() { return player.i.points.gte(this.cost()) },
            buy() {
var i =player.i.points.sub(11)
var a =getBuyableAmount(this.layer, 11).add(10).log10().mul(getBuyableAmount(this.layer, 12).add(10).log10()).mul(getBuyableAmount(this.layer, 13).add(10).log10())
doReset(this.layer,true)
player.i.points = n(0)
player.a1.challenges[11]= n(0)
player.a1.challenges[12]= n(0)
player.a1.challenges[21]= n(0)
player.a1.challenges[22]= n(0)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(i.pow(i).mul(a)))
            },
            title() {
                return "获得u"
            },
            eff1(x = getBuyableAmount(this.layer, this.id)) {
                var g = x.add(1).log10().add(1).log10().add(1)

                return g
            },
            eff2(x = getBuyableAmount(this.layer, this.id)) {
                var g = x.mul(10).pow(x.add(1).log10().add(1).log10().add(1).mul(5)).add(1)

                return g
            },
            eff3(x = getBuyableAmount(this.layer, this.id)) {
                var g = x.add(1).log10()

                return g
            },
            unlocked() { return hasAchievement('cj', 33) },
        },
12: {
            cost(x = getBuyableAmount(this.layer, this.id)) {
                var g = n(12)
                return g
            },
            display() {
                return `o1加成:w获取量x${format(tmp["i"].buyables[12].eff1, 2)}
o2加成:α加成w的效果^${format(tmp["i"].buyables[12].eff2, 2)}
o3加成:i在i3的公式中+${format(tmp["i"].buyables[12].eff3, 2)}.<br>数量:${formatWhole(getBuyableAmount(this.layer, this.id))}<br>拥有o时，每秒获取100%的p和w`
            },
            canAfford() { return player.i.points.gte(this.cost()) },
            buy() {
var i =player.i.points.sub(11)
var a =getBuyableAmount(this.layer, 11).add(10).log10().mul(getBuyableAmount(this.layer, 12).add(10).log10()).mul(getBuyableAmount(this.layer, 13).add(10).log10())
player.i.points = n(0)
player.a1.challenges[11]= n(0)
player.a1.challenges[12]= n(0)
player.a1.challenges[21]= n(0)
player.a1.challenges[22]= n(0)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(i.pow(i).mul(a)))
            },
            title() {
                return "获得o"
            },
            eff1(x = getBuyableAmount(this.layer, this.id)) {
                var g = x.mul(10).pow(x.add(1).log10().add(1).log10().add(1)).add(1)

                return g
            },
            eff2(x = getBuyableAmount(this.layer, this.id)) {
                var g = x.add(1).log10().add(1).log10().add(1).pow(0.8)

                return g
            },
            eff3(x = getBuyableAmount(this.layer, this.id)) {
                var g = x.add(1).log10().pow(1.2)

                return g
            },
            unlocked() { return hasAchievement('cj', 33) },
        },
13: {
            cost(x = getBuyableAmount(this.layer, this.id)) {
                var g = n(12)
                return g
            },
            display() {
                return `q1加成:α获取量x${format(tmp["i"].buyables[13].eff1, 2)}
q2加成:β加成α获取指数x${format(tmp["i"].buyables[13].eff2, 2)}
q3加成:β获取量x${format(tmp["i"].buyables[13].eff3, 2)}.<br>数量:${formatWhole(getBuyableAmount(this.layer, this.id))}<br>拥有q时，移除β效果的一重软上限`
            },
            canAfford() { return player.i.points.gte(this.cost()) },
            buy() {
var i =player.i.points.sub(11)
var a =getBuyableAmount(this.layer, 11).add(10).log10().mul(getBuyableAmount(this.layer, 12).add(10).log10()).mul(getBuyableAmount(this.layer, 13).add(10).log10())

player.i.points = n(0)
player.a1.challenges[11]= n(0)
player.a1.challenges[12]= n(0)
player.a1.challenges[21]= n(0)
player.a1.challenges[22]= n(0)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(i.pow(i).mul(a)))
            },
            title() {
                return "获得q"
            },
            eff1(x = getBuyableAmount(this.layer, this.id)) {
                var g = x.mul(10).pow(x.add(1).log10().add(1).log10().add(1).pow(0.8)).add(1)

                return g
            },
            eff2(x = getBuyableAmount(this.layer, this.id)) {
                var g = getBuyableAmount("a1", 11).add(1).log10().max(0).pow(x.mul(10).add(1).log10().add(1).log10().max(0)).sub(1).max(0).mul(0.1).add(1)

                return g
            },
            eff3(x = getBuyableAmount(this.layer, this.id)) {
                var g = x.add(1).log10().add(1).log10().add(1).pow(0.65)

                return g
            },
            unlocked() { return hasAchievement('cj', 33) },
        },
    },
    microtabs: {
        tab: {
            "a": {
                name() { return '主要' }, // Name of tab button
                nameI18N() { return 'main' }, // Second name for internationalization (i18n) if internationalizationMod is enabled
                content: [

                ],
            },

        },
    },
    tabFormat: [
        ["display-text", function () { return getPointsDisplay() }],
        "main-display",
        "prestige-button",
      
        ["display-text", () =>
            hasAchievement('cj', 28) ? `i:sx${format(layers.i.i1eff())}` : ``,
            { "font-size": "20px" }
        ],
        ["display-text", () =>
            hasAchievement('cj', 29) ? `i2:px${format(layers.i.i2eff())}` : ``,
            { "font-size": "20px" }
        ],
        ["display-text", () =>
            hasAchievement('cj', 31) ? `i3:wx${format(layers.i.i3eff())}` : ``,
            { "font-size": "20px" }
        ],
["display-text", () =>
                   hasAchievement("cj", 33) ?`大撕裂将重置前面所有东西.下方有三种撕裂模式，每种模式会在不同的方面给予加成<br>撕裂资源获取受i和自身互相加成`:``,
                    { "font-size": "20px" }
                ],

"buyables",
    ],
    layerShown() { return player.points.gte("1.79e308") || hasAchievement('cj', 28) },

})