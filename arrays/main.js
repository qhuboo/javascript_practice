// Arrays

const myArray = [1, 2, 3];

console.log(myArray[1]);

myArray[1] = 4;

console.log(myArray);

myArray.length = 0;
console.log(myArray);
// The push method add items to the *end* of the array so in the following case the numbers 5, 6, and 7 will be added to the array myArray
myArray.push(5, 6, 7);
console.log(myArray);
console.log(myArray.length);

myArray.push("hello", false, 8);
console.log(myArray);

if (!myArray[4]) {
  console.log("Got em'");
}

// The pop method removes the last item of the array and returns it
myArray.pop();
console.log(myArray);

const lastItem = myArray.pop();
console.log(lastItem);

// The shift method removes the first item of the array and returns it
const firstItem = myArray.shift();
console.log(firstItem);
console.log(myArray);

// The unshift method adds items to the *beginning* of the array so the in the following example the numbers 1, 2, 3, and 4 are added to the beginning of the array myArray
const newLength = myArray.unshift(1, 2, 3, 4);
console.log(myArray);
console.log(`The new length of the array is: ${newLength}`);
// Both the push and unshift methods return the new length of the array

// The splice method is used to remove elements from the array according to the starting index and deleteCount, and add elements to the array given an item list
// The basic syntax is the following array.splice(starting index, deleteCount, item1, item2, ..., itemN)
myArray.splice(2, 3, "item1", "item2", "item3", "item4", "item5"); // In this case the splice method will remove 3 (deleteCount = 3) items starting at index 2 (starting index = 2) and will add 5 items to the array item1, item2, ..., item5. The item list need not be the same length as the deleteCount
console.log(myArray);
// The splice method returns an array of the items removed, if only one item is removed an array of one element is removed, if no items are removed and empty array
// is removed
// If we want to add an element at an arbitrary index we can set the deleteCount parameter to 0
myArray.splice(2, 0, "muhItem");
console.log(myArray);

// The slice method returns a shallow copy of a portion of an array into a new array object selected from a start index to and end index not including the end.
const newArray = myArray.slice(2, 7);
console.log(newArray);
console.log(myArray);
// If slice is used without inputs then the array returned is a copy of the entire array
// If slice is used with only one input then that is taken as the starting index and the array is copied from that index to the end

// Difference between a shallow copy and a deep copy is that a shallow copy is only copying a reference to the same memory location as the original but changing values
// in either the original or copy is reflectead in the other.
// Example
const originalArray = [{ name: "Jose" }, { name: "Alan" }];
console.log(originalArray);
const shallowCopy = originalArray.slice();
console.log(shallowCopy);
// Now we make a change to the shallow copy and see if this changes the originalArray
shallowCopy[0].name = "Mishi";
console.log(shallowCopy);
console.log(originalArray);
// It indeed does, now we make a change to the originalArray and see if it changes the shallowCopy
originalArray[1].name = "Naty";
console.log(originalArray);
console.log(shallowCopy);
// It indeed does, so the making of a shallow copy is only relevant if the array we are copying contains objects or arrays as elements, if neither of those are present
// the resulting copy is a deep copy

// The reverse method
// This method reverses an array *in place* and returns a reference to the same array
const regArray = [1, 2, 3];
console.log(regArray);
const reversedArray = regArray.reverse();
console.log(regArray);
console.log(reversedArray);
regArray[0] = 100;
console.log(regArray); // The same as the reversedArray
console.log(reversedArray); // The same as the regArray and thus reversedArray is just a reference to the regArray

// The join method
// The join method creates and returns a new string by concatenating all of the elements in an array separated by commas or a specified separator string.
// If the array only has one item then that item will be returned without using the separator.
// Join method syntax: array.join(separator) example: array.join("-"), if no separator is provided the default is a comma
const elements = ["Fire", "Air", "Water"];
const joinString = elements.join();
console.log(joinString); // This prints out "Fire,Air,Water"

// To reverse this we can use the string split method
// The split method takes a pattern and divides a string into an orderes list of substrings by searching for a pattern, puts these substrings into an array
// and returns the array
// Split method syntax: string.split(separator, limit), the separator in this case is the string pattern where each split will occur. The limit is a number
// specifying a limit on the number of substrings to be included in the array, if 0 then the array returned is []
// Since the string joinString contains a comma between each element we can use this as the separator as shown below
const newElements = joinString.split(",");
console.log(newElements); // This prints out an array: ["Fire", "Air", "Water"]
