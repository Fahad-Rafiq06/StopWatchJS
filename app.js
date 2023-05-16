// function timer(){
//     console.log("Running..")
// }

// setInterval(timer, 2000)

// function timeout(){
//     console.log("Running...")
// }

// setTimeout(timeout, 2000)

// var count = 0;
// var interval;

// function timer(){
//     count++;
    
//     console.log(count)
// }
// interval = setInterval(timer, 1000);

// setTimeout(function(){
//     clearInterval(interval)
// },5000)

// ================ Stop Watch Code begins Now ==============

var min = 0;
var sec = 0;
var msec = 0;

var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");

var interval;

function timer(){
    msec++;
    msecHeading.innerHTML = msec;
    // console.log(msech)
    if(msec >= 100){
        sec++;
        secHeading.innerHTML = sec
        msec = 0
    }
    if(sec >=59 ){
        min++;
        minHeading.innerHTML = min;
        sec=0;
    }

}

interval = setInterval(timer, 10)
