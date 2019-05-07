function produceDrivingRange(blockRange){
 return  function(startingBlock,endingBlock){
    const start = parseInt(startingBlock)
    const end = parseInt(endingBlock)
   let distanceToTravel =  end- start
    if (distanceToTravel < blockRange ){
     return `within range by ${distanceToTravel}`
    }
   else {
     return `${Math.abs(blockRange - distanceToTravel)} blocks out of range`
    }
   
  }
}
function produceTipCalculator(percentage){
  return function(fare) {
    return fare * percentage

  }
}
function createDriver(){
 let  driverId  = 0 
 
 return class{
   constructor(name){
     this.name = name
     this.id = ++driverId  
    }
 }
}