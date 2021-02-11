"use strict";
let person1;
person1 = {
    name: 'Russ',
    age: 26,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
class User {
    constructor(name, outputName) {
        this.name = name;
        this.outputName = outputName;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user1;
user1 = new User('Russ');
// type AddFn = (a: number, b: number) => number;
let add;
add = (n1, n2) => {
    return n1 + n2;
};
//# sourceMappingURL=app.js.map