// DOM - Document Object Model
const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");

view1.style.display = "flex";
view2.style.display = "flex";

const views = document.getElementsByClassName("view");
console.log(views);

const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

const divs = view1.querySelectorAll("div");
console.log(divs);

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "darkblue";
}

const navText = document.querySelector("nav h1");
console.log(navText);
const navTextContent = navText.textContent;
const navInnerHTML = navText.innerHTML;
console.log(`This is the result of the text content: ${navTextContent}`);
console.log(`This is the result of the inner html: ${navInnerHTML}`);

const navBar = document.querySelector("nav");
console.log(navBar);
navBar.innerHTML = "<h1>Hello!</h1> <p>This is some text</p>";
navBar.style.justifyContent = "flex-start";
navBar.innerHTML += "<h2>Adding another header</h2>";

const newNavText = document.querySelector("nav h1");
navText.innerHTML = "Hellooooooooo"; // This doesn't change anything since the navText has been overwritten by the navBar.innerHTML statement above.

console.log(evenDivs[1].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);

console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);

const testDiv = document.querySelector(".test");
console.log(testDiv);
console.log(testDiv.lastChild);
console.log(testDiv.lastElementChild); // This should be the span element
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);

// Moving on to removing all the nodes in parent element
view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

// This removes all nodes inside the view2 section not just elements
while (view2.lastChild) {
  view2.lastChild.remove();
}

const createDivs = (parent, iter) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = iter;
  newDiv.style.backgroundColor = "black";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.margin = "10px";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  parent.append(newDiv);
};

for (let i = 0; i <= 12; i++) {
  createDivs(view2, i);
}
