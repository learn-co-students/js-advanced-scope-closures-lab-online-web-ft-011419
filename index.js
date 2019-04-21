function produceDrivingRange(num) {
  return function (range1, range2) {
    const rangeCalc = Number(range2.substr(0, 2)) - Number(range1.substr(0, 2))
    if (rangeCalc < num) {
      return `within range by ${Math.abs(rangeCalc - num)}`
    }
    else {
      return `${Math.abs(rangeCalc - num)} blocks out of range`
    }
  }
}
function produceTipCalculator(percentage) {
  return function (fare) {
    return fare * percentage
  }
}
function createDriver() {
  let driverId = 0;
  return class {
  constructor(name) {
    this.id = ++driverId;
    this.name = name
    }
  }
}
