// Return Types
function add(n1:number, n2:number) { // number return type. 
    return n1 + n2; 
}

function printResult(num: number) { // void return type. 
    console.log('Result:' + num);
}

function printResultUndefined(num: number): undefined { // undefined is not the same as void.
    console.log(num);
    return;
}

// Function as a Type
let combineValues: Function;
combineValues = add; // this could be any function, even if it is wrong!
console.log(combineValues(8, 8));


// Function Types describe a function
let combinedValues: (a: number, b: number) => number; // two params which are numbers, and returns one number. 
combinedValues = add; 
console.log(combinedValues(8, 8));

// Callbacks and Function Types
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result)
});
// using a void return type for the callback lets you know that any result returned by the call back will not be used. 
