type Combinable = number | string; // Type Alias
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
    input1: Combinable, // union type, aliased.
    input2: Combinable,
    resultType: ConversionDescriptor) { // literal type 
    let result; // any
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
        result = +input1 + +input') 2
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedNamges = combine("Max", "Anna", 'as-number');
console.log(combinedNamges);