function produceDrivingRange(blocks) {
  return function(start, end) {
    let trip = Math.abs(Number.parseInt(start) - Number.parseInt(end));

    if (trip > blocks) {
      return `${trip - blocks} blocks out of range`;
    } else {
      return `within range by ${blocks - trip}`;
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
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    };
  };
};
