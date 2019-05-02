function produceDrivingRange(blockRange) {
  return function(start, end) {
    let range = parseInt(end, 10) - parseInt(start, 10);
    if (range <= blockRange) {
      return `within range by ${blockRange - range}`;
    }
    if (range > blockRange) {
      return `${range - blockRange} blocks out of range`;
    }
  }
}

function produceTipCalculator(percentage) {
  return function(fare) {
    return (fare * percentage);
  }
}

function createDriver() {
  let driverId = 0;

  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++driverId
    }
  }
}
