// ## Exercise1

// #### 1.1 let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
// - What is the length of the array?
// - Write a function called myAlphabetLength which console.logs the length of the array.

let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
console.log(myAlphabet.length);

function myAlphabetLength() {
  return myAlphabet.length;
}
console.log(myAlphabetLength());

// #### 1.2 Declare and initialize an array called 'Planets' with 5 string values with names of planets.
// - Console.log each item in the array. Also console.log the index for each planet.
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
planets.forEach(function (planet) {
  console.log(planet);
});

planets.forEach(function (index) {
  console.log(planets.indexOf(index));
});

// #### 1.3 Console.log each item in this array: let myArr = [ 1, 2, 'One', true];

let myArr = [1, 2, "One", true];

myArr.forEach(function (item) {
  console.log(item);
});
