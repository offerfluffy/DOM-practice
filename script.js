// getElementById
let msg = document.getElementById("message");
// console.log(msg);

// getElementsByName
let langs = document.getElementsByName("lang"); // node list
// console.log(langs);

// getElementsByTagName
let headings = document.getElementsByTagName("h1"); // htmlcollection
// console.log(headings);

// getElementsByClassName
let headingsClass = document.getElementsByClassName("heading"); // htmlcollection
// console.log(headingsClass);

// getElementsByClassName from specific
let container = document.getElementById("container");
let headingsClassContainer = container.getElementsByClassName("heading"); // htmlcollection
// console.log(headingsClassContainer);

// querySelector
let msgQuery = document.querySelector("#message");
// console.log(msgQuery);

// querySelectorAll
let headingsContainerQuery = container.querySelectorAll(".heading"); // node list
// console.log(headingsContainerQuery);

let headingsContainerINLQuery = document.querySelectorAll(
  "#container .heading"
); // node list
// console.log(headingsContainerINLQuery);

// TRAVERSING ELEMENTS

// parent element selecting
let txt = document.querySelector(".text");
// console.log(txt.parentNode);

// child element selecting
let title = document.querySelector(".title");

// console.log(title.firstChild); // node
// console.log(title.firstElementChild); // element

// console.log(title.lastChild);

// console.log(title.childNodes); // node list

// sibling elements selecting

let secondText = document.querySelector(".second");

// console.log(secondText.previousElementSibling); // element
// console.log(secondText.previousSibling); // node

// console.log(secondText.nextElementSibling);

// creating a new element

let div = document.createElement("div");

div.innerHTML = "<p>Welcome to JS DOM</p>";
div.id = "new title";

document.body.appendChild(div);

// appending an element

let menu = document.querySelector("#menu");

let listItem = document.createElement("li");

listItem.innerHTML = "item from js"
menu.appendChild(listItem)

// text content

console.log(menu.textContent)

console.log(menu.innerText) // only visible text

listItem.previousElementSibling.textContent = "text content from js"

