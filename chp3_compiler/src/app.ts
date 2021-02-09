console.log("anything...");
const input = "1 2 3 5 7 9";

function findOutlier(input:string) {
    const parityArray = input.split(' ').map(x => +x % 2);
    const paritySum = parityArray.reduce((con, arr) => con + arr);
    return parityArray.indexOf( paritySum > 1 ? 0:1);
}

console.log("Input string: " + input);
console.log("Position of outlier: " + findOutlier(input));
