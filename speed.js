const speedDetector = require('prompt-sync');
const prompt = speedDetector();
// calculate speed
function speedMonitor(){
    let speed = prompt('speed:');//use prompt for input
    if(speed <= 70){
        console.log('Ok');//
    }
    else if(speed > 70 && speed <= 130){
        let demeritPoint =  (speed-70)/5;
        console.log(`points: ${demeritPoint}`);//calculate demerit points
    }
    else{
         console.log("License suspended")
    }
}
speedMonitor();