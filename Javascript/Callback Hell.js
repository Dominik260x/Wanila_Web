//#70

function task1(callback) {
  setTimeout(() => {
    console.log("1");
    callback();
  }, 3000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("2");
    callback();
  }, 2000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("3");
    callback();
  }, 1000);
}

function task4(callback) {
  setTimeout(() => {
    console.log("4");
    callback();
  }, 4000);
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        console.log("task completed");
      });
    });
  });
});
