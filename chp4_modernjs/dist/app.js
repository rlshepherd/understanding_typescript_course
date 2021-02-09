"use strict";
// let and const
const userName = "Russ";
let age = 36;
// userName = "Russell" // error: cannot modify because it is a const.
// why let instead of var?
// let and const have one important difference: scoping
// var has global and function scope.
// 1. variables defined outside any function are avaiable everywhere in your script.
// 2. variables defined in a function are only available in a function. 
// function scoping variables
function add(a, b) {
    var result = a + b;
    return result;
}
// console.log (result); // error: cannot find result
// global scoping variables
var myResult;
function addGlobalResult(a, b) {
    myResult = a + b;
    return myResult;
}
console.log(myResult); // doesn't throw an error. 
// Difference between let and var:
if (age > 35) {
    var isOld = true;
}
// console.log(isOld); // error in TS, but will run in JS. 
// let uses block scoping. 
if (age > 35) {
    let isOlder = true;
}
// console.log(isOlder); // throws error in browser and TS. 
// arrow functions:
const addFunction = (a, b) => {
    return a + b;
};
console.log(addFunction(3, 5));
// can omit curly braces and return statement if you only have one expressiion
// does not work for 2 or more expressions. 
const addExpression = (a, b) => a + b;
// if you only have one parameter, you can omit parenthesis
const printOutput = output => console.log(output);
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => console.log(event));
}
// default arguments
// always must be last, b/c default arguments are not skipped,
// so if you define first parameter with default, and second without
// and you can with only one argument
// then you will be missing an argument.
const addWithDefault = (a, b = 1) => a + b;
console.log(addWithDefault(5));
// Spread operators. 
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
// we can push to a constant value b/c 
// in JS arrays are an object,
// and objects are reference types,
// and when you push you are modifying the memeory but not the pointer.
// activeHobbies.push(hobbies) // cannot add an array to an arrary of string
activeHobbies.push(...hobbies); // no errors. 
// Spread also works on objects
const person = {
    firstName: 'Russ',
    aged: 36
};
// this just copies the pointer, not the data. 
const copiedPerson = person;
// fills in the key-value pairs into a new object. 
const deepCopiedPerson = Object.assign({}, person);
// Rest paramters allow you to accept an unlimited amount of arguments. 
const addAdInfinitum = (...numbers) => {
    return numbers.reduce((cur, acc) => cur + acc, 0);
};
const addedNumbers = addAdInfinitum(1, 2, 3, 4, 5.7);
// you can also mix rest parameters and tuples
const addThree = (...numbers) => {
    return numbers.reduce((cur, acc) => cur + acc, 0);
};
// array and object destructuring
// one line of code per variables:
const hobby1 = hobbies[0];
const hobby2 = hobbies[1];
// ... or we can use destructuring:
const [hobby1st, hobby2nd, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1st, hobby2nd); // notice destructuring doesn't change the original, very FP!
// objects can also be destructured: 
const { firstName, aged } = person; // must be property names found in object
const { firstName: nickname, aged: ageOfUser } = person; // you can rename with the colon
//# sourceMappingURL=app.js.map