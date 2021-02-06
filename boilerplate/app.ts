console.log("anything...");

const inputString: string = "10 8 9 6 4";

function findOutliers(input: string) {
    const parities = input.split(" ").map(s => parseInt(s) % 2)
    const paritySum = parities.reduce((acc, curr) => acc + curr)
    return parities.indexOf(paritySum > 1 ? 0 : 1) + 1
  }

function findOutlier(input:string) {
    const inputArray = input.split(' ').map(x=>+x);
    
    let lastSeenEven: number | null = null;
    let lastSeenOdd: number | null = null;
    let evenCount = 0;
    let oddCount = 0;

    for (const [index, element] of inputArray.entries()) {
        if (element % 2 == 0) {
            lastSeenEven = index;
            evenCount++;
        } else {
            lastSeenOdd = index;
            oddCount++;
        }
        if (evenCount > 1 && lastSeenOdd) {
            return lastSeenOdd;
        } else if (oddCount > 1 && lastSeenEven) {
            return lastSeenEven;
        }
    }
    
}

console.log(findOutlier(inputString));