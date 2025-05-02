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

listItem.innerHTML = "item from js";
menu.appendChild(listItem);

// text content

// console.log(menu.textContent);

// console.log(menu.innerText); // only visible text

listItem.previousElementSibling.textContent = "text content from js";

// insert element

menu.insertAdjacentHTML(
  "afterbegin",
  "<li>text from insertAdjacent afterbegin</li>"
);

menu.insertAdjacentHTML(
  "beforebegin",
  "<li>text from insertAdjacent beforebegin</li>"
);

// parent.replaceChild(newChild, oldChild)

// node.cloneNode(false / true)

// parent.removeChild(parent.lastELementChild)

// parent.insertBefore(newNode, existingNode)

// ATTRIBUTE METHODS

let inputBox = document.querySelector("#username");

// console.log(inputBox.attributes); // namedNodeMap

// console.log(inputBox.getAttribute("type"));

inputBox.setAttribute("placeholder", "username");

//console.log(inputBox.hasAttribute("id"));

inputBox.removeAttribute("id");

// MANUPULATING STYLE

// console.log(inputBox.style); // CSSstyleDeclaration
// console.log(inputBox.style.fontSize);

inputBox.style.backgroundColor = "blue";

inputBox.style.cssText += "padding: 20px";

// console.log(window.getComputedStyle(inputBox)); // (element, pseudoElement) 
// CSSStyleDeclaration

// console.log(window.getComputedStyle(inputBox).fontSize); 
// Can get style from external styles

// Class Attribute

inputBox.className += " newClassName"
console.log(inputBox.className); // string of classes

inputBox.classList.add("newClassList")
console.log(inputBox.classList); // DOMTokenList

inputBox.classList.remove("newClassName") // can be multiple
inputBox.classList.replace("username", "userClassList") // (old, new)

console.log(inputBox.classList.contains("input"));

inputBox.classList.toggle("message") // if exists will remove, if not will add

// EVENTS 

/* 
  Event Bubbling:
    Event starts at the most specific element and flows towards least specific element
*/

/* 
  Event Capturing: (opposite)
    Event starts at the least specific element and flows towards most specific element
*/

/* 
  Event Handler:
    Piece of code that will be executed when the event occurs
  
  When event occurs browser passes event object to event handler

  'this keyword inside event handler refers to target element'

  event.type
  event.target
  event.preventDefault

  1) HTML inline handlers that are starting with on... = ""
  2) =>
*/

/* 
  Event Types:
    - mousemove: repeatedly when you move cursor around the element
    - mousedown: when you press the mouse down on the element
    - mouseup: when you release the mouse button on the element
    - mouseover: when cursor moves from outside to inside of the element
    - mouseout: when the cursor is over an element and then moves to another element
    - keydown: repeatedly when you a holding a key or if you just press
    - keyup: when you release a key
    - scroll: when you scroll
*/

let eventDiv = document.querySelector("#event");
let button = eventDiv.querySelector("button");

/* 
button.onclick = function (e) {
  console.log("clicked")
  console.log(this)
} 

button.onclick = null 
*/ 

button.addEventListener("click", function(e) {
  console.log("clicked")
  console.log(this)
}); // (event, func, useCapture)

/*
button.removeEventListener() // cant remove if anon func
*/