//#71
function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogwalked = true;
      if (dogwalked) {
        resolve("Dog walked");
      } else {
        reject("Dog didn't walk");
      }
    }, 1000);
  });
}

function cleanKitten() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kittenCleaned = true;
      if (kittenCleaned) {
        resolve("Kitten cleaned");
      } else {
        reject("Kitten didn't clean");
      }
    }, 1000);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = false;
      if (trashTakenOut) {
        resolve("Trash taken out");
      } else {
        reject("Trash didn't take out");
      }
    }, 1000);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitten();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("Finished");
  })
  .catch((err) => {
    console.error(err);
  });
