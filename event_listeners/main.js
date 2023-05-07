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

const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");
  view.addEventListener(
    "click",
    (event) => {
      view.style.backgroundColor = "purple";
      console.log("The view element was triggered");
    },
    true
  );
  div.addEventListener(
    "click",
    (event) => {
      div.style.backgroundColor = "blue";
      console.log("The div element was triggered");
    },
    true
  );
  h2.addEventListener(
    "click",
    (event) => {
      h2.textContent = "Clicked!";
      console.log("The h2 Element was triggered");
    },
    true
  );
};
