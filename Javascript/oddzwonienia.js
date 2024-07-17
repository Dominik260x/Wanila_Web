// callback
//#30

sum(displayConsole, 1, 2);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}

//hello(wait);
//
//function hello(callback){
//    setTimeout(function(){console.log("Hello")}, 3000);
//    callback();
//}
//
//function wait(){
//    console.log("Wait!");
//}
//
//function leave(){
//    console.log("Leave!");
//}
//
//function goodbye(){
//    console.log("Goodbye");
//}

//hello(),
//goodbye();
//
//function hello(){
//    setTimeout(function(){
//        console.log("Hello");
//    }, 3000);
//}
//
//function goodbye(){
//    console.log("Goodbye");
//}
