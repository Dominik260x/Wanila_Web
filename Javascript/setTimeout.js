// setTimeout(callback, daley);
//#52 

let timeOutID;

function startTimer(){
    timeOutID = setTimeout(() => window.alert('hello'), 2000);
    console.log("startTimer");
}

function stopTimer(){
    clearTimeout(timeOutID);
    console.log("stopTimer");
}

startTimer();

setTimeout(() => stopTimer(), 5000);



//const timeOutID = setTimeout(() => window.alert('hello'), 2000);
//
//console.log(timeOutID);