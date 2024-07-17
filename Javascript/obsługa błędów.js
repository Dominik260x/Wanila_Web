try {
  const divdent = Number(100);
  const divsor = Number(10);

  if (divsor == 0) {
    throw new Error("You can't divide by zero");
  }
  if (isNaN(divdent) || isNaN(divsor)) {
    throw new Error("Please enter a valid number");
  }
  const result = divdent / divsor;
  console.log(result);
} catch (error) {
  console.log(error);
}
