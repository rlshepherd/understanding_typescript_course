// Return Types
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result:' + num);
}
function printResultUndefined(num) {
    console.log(num);
    return;
}
// Function as a Type
var combineValues;
combineValues = add; // this could be any function, even if it is wrong!
console.log(combineValues(8, 8));
// Function Types describe a function
var combinedValues; // two params which are numbers, and returns one number. 
combinedValues = add;
console.log(combinedValues(8, 8));
// Callbacks and Function Types
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
