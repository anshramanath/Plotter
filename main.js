const xAxis = [
    1, 2, 3, 4, 5, 6, 7, 8,
    9, 10, 11, 12, 13, 14, 15, 
    16, 17, 18, 19, 20, 21, 22, 
    23, 24, 25, 26, 27, 28
]

const expandedAxis = [
    -14, -13, -12, -11, -10, -9, -8,
    -7, -6, -5, -4, -3, -2, -1, 
    1, 2, 3, 4, 5, 6, 7, 8,
    9, 10, 11, 12, 13, 14
]

function lightUp(cords) {
    sq = document.getElementById(cords)
    sq.setAttribute('class', 'square-light')
}

function clearAll() {
    for(let r = 1; r < xAxis.length + 1; r++) {
        for(let c = 1; c < xAxis.length + 1; c++) {
            cords = "(" + String(r) + "," + String(c) + ")"
            sq = document.getElementById(cords)
            sq.setAttribute('class', 'square')
        }
    }
}

function linear() {
    clearAll()
    for(let i = 0; i < xAxis.length; i++) {
        let cords = "(" + String(xAxis[i]) + "," + String(xAxis[i]) + ")"
        lightUp(cords)
    }
}

function negLinear() {
    clearAll()
    for(let i = 0; i < xAxis.length; i++) {
        let cords = "(" + String(xAxis[i]) + "," + String(xAxis[xAxis.length - 1 - i]) + ")"
        lightUp(cords)
    }
}

function squared() {
    clearAll()
    for(let i = 0; i < xAxis.length; i++) {
        let cords = "(" + String(xAxis[i]) + "," + String(Math.pow(expandedAxis[i], 2)) + ")"
        if(Math.pow(expandedAxis[i], 2) <= xAxis[xAxis.length - 1]) {
            lightUp(cords)
        }
    }
}

function quarted() {
    clearAll()
    for(let i = 0; i < xAxis.length; i++) {
        let cords = "(" + String(xAxis[i]) + "," + String(Math.pow(xAxis[i], 4)) + ")"
        if(Math.pow(xAxis[i], 4) <= xAxis[xAxis.length - 1]) {
            lightUp(cords)
        }
    }
}