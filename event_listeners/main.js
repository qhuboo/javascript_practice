// Javascript Event Listeners
document.querySelector("#view1").style.display = "none";
document.querySelector("#view2").style.display = "flex";
document.querySelector("#view3").style.display = "none";

// Syntax: addEventListener(event, function, useCaputure)

const doSomething = () => {
  alert("doing something");
};

// h2.addEventListener("click", doSomething, false);
// h2.removeEventListener("click", doSomething, false); // Now it wont work since we removed it as soon as we added it

// // Anonymous Event Listener
// h2.addEventListener("click", (event) => {
//   console.log(event.target);
//   event.target.textContent = "Clicked!";
// });

// ReadyStateChange Event
// This readystatechange even checks to see if the DOM has been loaded and "complete" is returned
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

// initApp that for the even listener examples with divs and other elements
// const initApp = () => {
//   const view = document.querySelector("#view2");
//   const div = view.querySelector("div");
//   const h2 = div.querySelector("h2");
//   view.addEventListener(
//     "click",
//     (event) => {
//       // view.style.backgroundColor = "purple";
//       view.classList.toggle("purple");
//       view.classList.toggle("darkblue");
//     },
//     true
//   );
//   div.addEventListener(
//     "click",
//     (event) => {
//       // div.style.backgroundColor = "blue";
//       div.classList.toggle("blue");
//       div.classList.toggle("black");
//     },
//     false
//   );
//   h2.addEventListener(
//     "click",
//     (event) => {
//       const myText = event.target.textContent;
//       myText === "My 2nd View"
//         ? (event.target.textContent = "Clicked!")
//         : (event.target.textContent = "My 2nd View");
//     },
//     false
//   );

//   // Now for the form submit event
//   const nav = document.querySelector("nav");
//   nav.addEventListener("mouseover", (event) => {
//     nav.classList.add("height100");
//   });
//   nav.addEventListener("mouseout", (event) => {
//     nav.classList.remove("height100");
//   });
// };

// Now we move onto the input form
document.querySelector("#view1").style.display = "none";
document.querySelector("#view2").style.display = "none";
document.querySelector("#view3").style.display = "flex";

// The initApp for the form event listener example
const initApp = () => {
  const view3 = document.querySelector("#view3");
  const myForm = view3.querySelector("#myForm");
  myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submit event");
  });
};
