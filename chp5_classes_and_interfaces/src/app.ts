interface Named {
    readonly name: string | number;
    outputName?: string;
}

interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let person1: Person;

person1 = {
    name: 'Russ',
    age: 26,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

interface Greetable extends Named { // interfaces can have inheritance as well. 
    // readonly name: string; // can use read only in an interface
    // cannot use public or private modifiers in an interface.
    greet(phrase: string): void;
}

class User implements Greetable {
    constructor(
        public name: string,
        public outputName?: string) {}

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

let user1: Greetable;
user1 = new User('Russ');
// user1.name = 'Bill'; // throws an error because interface devlares this property as readonly, without needing to define it in the class.

// interfaces as function types
// can use custom type or interface to define function types. 
interface AddFn {
    (a: number, b: number): number;
}

// type AddFn = (a: number, b: number) => number;

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}