console.log("anything...");
var inputString = "10 8 9 6 4";
function findOutlier(input) {
    var inputArray = input.split(' ').map(function (x) { return +x; });
    var lastSeenEven = null;
    var lastSeenOdd = null;
    var evenCount = 0;
    var oddCount = 0;
    for (var _i = 0, _a = inputArray.entries(); _i < _a.length; _i++) {
        var _b = _a[_i], index = _b[0], element = _b[1];
        if (element % 2 == 0) {
            lastSeenEven = index;
            evenCount++;
        }
        else {
            lastSeenOdd = index;
            oddCount++;
        }
        if (evenCount > 1 && lastSeenOdd) {
            return lastSeenOdd;
        }
        else if (oddCount > 1 && lastSeenEven) {
            return lastSeenEven;
        }
    }
}
console.log(findOutlier(inputString));
