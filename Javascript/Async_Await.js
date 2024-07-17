//#72
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
      const trashTakenOut = true;
      if (trashTakenOut) {
        resolve("Trash taken out");
      } else {
        reject("Trash didn't take out");
      }
    }, 1000);
  });
}

async function doChores() {
  try {
    const walkDogResult = await walkDog();
    const cleanKittenResult = await cleanKitten();
    const takeOutTrashResult = await takeOutTrash();
    console.log(walkDogResult);
    console.log(cleanKittenResult);
    console.log(takeOutTrashResult);
    console.log("Chores done");
  } catch (error) {
    console.log(error);
  }
}
doChores();
