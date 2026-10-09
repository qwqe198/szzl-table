function layerDisplay(id){
    if(tmp[id].layerShown===undefined){
        return true
    }
    return tmp[id].layerShown
}

function layerDisplayTotal(id){
    for(i in id){
        let a = layerDisplay(id[i])
        if(a==true){
            return true
        }
    }
}



addLayer("Setting", {
    name: "设置",
    position: -998,
    row: 0,
    symbol() {return i18n('设置', '设置', false)},
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "rgb(230, 230, 236)",
    type: "none",
    tooltip(){return false},
    tabFormat: [
        ["display-text", function() { return getPointsDisplay() }],
    ],
})

addLayer("Information", {
    name: "信息",
    position: -997,
    row: 0,
    symbol() {return '信息'},
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "rgb(230, 230, 236)",
    type: "none",
    tooltip(){return false},
    tabFormat: [
        ["display-text", function() { return getPointsDisplay() }],
    ],
})

addLayer("Changelog", {
    name: "更新日志",
    position: -996,
    row: 0,
    symbol() {return i18n('更新日志', '更新日志', false)},
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "rgb(230, 230, 236)",
    type: "none",
    tooltip(){return false},
    tabFormat: [
        ["display-text", function() { return getPointsDisplay() }],
    ],
})
