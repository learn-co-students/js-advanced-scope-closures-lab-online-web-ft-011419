function produceDrivingRange(blocks) {
  return function(start, end) {
    let range = Math.abs(Number.parseInt(start) - Number.parseInt(end));

    if (range > blocks) {
      return `${range - blocks} blocks out of range`;
    } else {
      return `within range by ${blocks - range}`;
    };
  };
};

function produceTipCalculator(percent) {
  return function(fare) {
    return fare * percent;
  };
};

function createDriver() {
  let driverId = 0
  return class Driver {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    };
  };
};
