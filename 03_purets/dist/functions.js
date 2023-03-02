"use strict";
//function expression
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 2));
//function declaration (arrow function)
const multiply = (num1, num2) => num1 * num2;
console.log(multiply(2, 3));
//rest parm example 
function subtract(num1, num2, ...nums) {
    return num1 - num2 - nums.reduce((a, b) => a + b, 0);
}
let numsArray = [1, 2, 3, 4, 5];
console.log(subtract(15, 12, ...numsArray));
//generic function
function getItems(items) {
    return new Array().concat(items);
}
let result = getItems([1, 2, 3, 4, 5]);
let resultString = getItems(["a", "b", "c", "d", "e"]);
