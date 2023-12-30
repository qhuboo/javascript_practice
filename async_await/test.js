function printHello() {
  console.log("hello");
}
function blockFor3000ms() {
  let sum = 0;
  for (let i = 0; i < 9000000; i++) {
    sum += i;
    if (i == 9000000 - 1) {
      console.log("Blocking done");
    }
  }
}
setTimeout(printHello, 0);

const futureData = fetch("https://dummyjson.com/products/1");
futureData.then(
  (data) => console.log("Im done"),
  () => console.log("There was an error with the network request")
);

blockFor3000ms();
console.log("Me first");

// Doesn't behave how the course said it would -_-
