function fun1(callback) {
  setTimeout(() => {
    console.log("1");
    callback();
  }, 3000);
}

function fun2() {
  console.log("2");
  console.log("3");
  console.log("4");
}

fun1(fun2);
