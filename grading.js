const grade = require('prompt-sync');
const prompt = grade();
function generator(){
    let grade = prompt('Enter your mark:');
// calculate using function
    if(grade <= 100 && grade >= 79){
        console.log('Scored A');
    }
    else if(grade >= 60 && grade <= 79){
        console.log('Scored B');
    }
    else if(grade >= 49 && grade <= 59){
        console.log('Scored C');
    }
    else if(grade >= 40 && grade <= 49){
        console.log('Scored D');
    }
    else if(grade < 40){
        console.log('Scored E');
    }
    else{
        console.log('enter valid marks');
    }
}

generator();
