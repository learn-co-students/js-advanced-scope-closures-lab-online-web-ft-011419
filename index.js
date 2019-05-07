// class Ride

// create a function to determine the start and end distance of a trip
// passing the arg of the blockRange => startingBlock - endingBlock
function produceDrivingRange(blockRange) {
    return function(startingBlock, endingBlock) {

        // we need to use parseInt to convert the string to an integer
        let start = parseInt(startingBlock);
        let end = parseInt(endingBlock);

        // Math.abs to subtract our end and start point
        let distanceToTravel = Math.abs( end - start);
        let difference = blockRange - distanceToTravel;

        if (difference > 0) {
            return `within range by ${difference}`
        } else {
            return `${Math.abs(difference)} blocks out of range`
        }
    }
}

// function to determine the tip for the ride.
function produceTipCalculator(percentage) {
    return function(rideFare) {
        return rideFare * percentage;
    }
}
// class Driver


function createDriver() {
    let driverId = 0;
    return class {
        constructor(name) {
            this.id = ++driverId;
            this.name = name
        }
    }
}