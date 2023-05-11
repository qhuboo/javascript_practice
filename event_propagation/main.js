const div_one = document.querySelector(".one");
const div_two = document.querySelector(".two");
const div_three = document.querySelector(".three");
const div_four = document.querySelector(".four");

function logText(event) {
  console.log(this.classList.value);
}

div_one.addEventListener("click", logText, { capture: true });
div_two.addEventListener("click", logText, { capture: true });
div_three.addEventListener("click", logText, { capture: false });
div_four.addEventListener("click", logText, { capture: false });

// When clicking element four this the example above first the browser will read from the top to bottom
// firing any element with the capture: true and then fires the target element then it bubble us firing
// any element that has not been fired already in the first two phases

// So in this case the output will be one, two, four, three when clicking on the div with class four
