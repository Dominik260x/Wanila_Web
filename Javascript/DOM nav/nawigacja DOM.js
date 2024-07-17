// DOM Navigations
// #61
const ulElements = document.querySelectorAll("ul");
const elements = document.querySelector("#onions");
const child = document.querySelector("#fruits");

// .firstElementChild - wyświetla 1 element
ulElements.forEach((ulElements) => {
  const firstElement = ulElements.firstElementChild;
  firstElement.style.backgroundColor = "yellow";
});

// .lastElementChild - wyświetla ostatnie element
ulElements.forEach((ulElements) => {
  const lastElement = ulElements.lastElementChild;
  lastElement.style.backgroundColor = "blue";
});

// .nextElementChild - wyświetla nastepny element
const nextElement = elements.nextElementSibling;
nextElement.style.backgroundColor = "green";

// .previousElementChild - wyświetla poprzednią grupe elementów
const prevElement = elements.previousElementSibling;
prevElement.style.backgroundColor = "pink";

// .parentElement - wyświetla element rodzica
const parentElement = elements.parentElement;
parentElement.style.backgroundColor = "gray";

// .children - wyświetla element dziecka
const childElement = child.children;
Array.from(childElement).forEach((child) => {
  child.style.backgroundColor = "orange";
});
