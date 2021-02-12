// Decorators are functions which accepts some parameters (depending on where they are used.)
// Class decorators accept one function: the constructor function of the class.
function Logger(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
}

// can also create a decorator factory:
// we can pass arguments to the decorator factory, which allows the decorator to have more complex logic or customization.
function LoggerFactory(logString: string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

// an example of more complex logic
// also creates an instance of the class (i.e. constructor), so we can use the data. 
function WithTemplate(template: string, hookId: string) {
    return function(constructor: any) { // need to use 'any' type here so TS doesn't complain when we call 'new'. hacky?
        const hookEl = document.getElementById(hookId);
        const p = new constructor(); // classes are just syntactic sugar for constructor functions. 
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

// class decorators get one argument, the "target", which is the constructor function
@LoggerFactory('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Russ';

    constructor () {
        console.log('Creating person object...');
    }

}

const pers = new Person();

console.log(pers);