function produceDrivingRange(blockRange){
  return function(beginning, end){

    let startingPoint = parseInt(beginning)
    let endingPoint = parseInt(end)
    let totalDistance = Math.abs(endingPoint - startingPoint)
    let difference = blockRange - totalDistance

    if (difference > 0){
      return `within range by ${difference}`
    }else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(tip){
  return function(fare){
    return totalTip = fare * tip
  }
}

function createDriver() {
let driverId = 0
return class {
  constructor(name) {
    this.name = name
    this.id = ++driverId
  }
}
}
// .
