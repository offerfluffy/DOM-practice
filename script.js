const main = document.createElement("main")
main.style.display = "flex"
main.style.justifyContent = "center"
main.style.alignItems = "center"
main.style.flexDirection = "column"
main.style.height = "100vh"

document.body.appendChild(main)

const form = document.createElement("form");
main.appendChild(form)

const input = document.createElement("input");
input.placeholder = "TO DO";
input.style.marginRight = "15px"
input.style.padding = "15px"
form.appendChild(input);

const button = document.createElement("button");
button.innerText = "ADD";
button.type = "submit"
button.style.padding = "15px"
form.appendChild(button);

const ul = document.createElement("ul");
ul.style.width = getComputedStyle(form).width
ul.style.fontSize = "20px"
ul.style.textTransform = "capitalize"
main.appendChild(ul)

form.addEventListener("submit", function (e) {
  e.preventDefault() // prevent refresh

  const li = document.createElement("li");
  li.innerText = input.value;
  li.style.justifySelf = "start"
  ul.appendChild(li);

  input.value = ""
});

ul.addEventListener("click", function(e) { // event delegation
  e.target.remove()
})