function produceDrivingRange(drivingLength) {
    return function(start, end) {
        const startPoint = Number(start.slice(0,2))
        const endPoint = Number(end.slice(0,2))

        const total = endPoint - startPoint

        if(total < drivingLength) {
            return `within range by ${drivingLength - total}`
        } else {
            return `${Math.abs(total - drivingLength)} blocks out of range`
        }
    }
}

function produceTipCalculator(percentTip) {
    return function(price) {
        return price * percentTip
    }
}

function createDriver() {
    let driverId = 0

    return class{
        constructor(name) {
            this.name = name
            this.id = ++driverId
        }
    }
}