"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators are functions which accepts some parameters (depending on where they are used.)
// Class decorators accept one function: the constructor function of the class.
function Logger(constructor) {
    console.log('Logging...');
    console.log(constructor);
}
// can also create a decorator factory:
// we can pass arguments to the decorator factory, which allows the decorator to have more complex logic or customization.
function LoggerFactory(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
// an example of more complex logic
// also creates an instance of the class (i.e. constructor), so we can use the data. 
function WithTemplate(template, hookId) {
    return function (constructor) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor(); // classes are just syntactic sugar for constructor functions. 
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
// class decorators get one argument, the "target", which is the constructor function
let Person = class Person {
    constructor() {
        this.name = 'Russ';
        console.log('Creating person object...');
    }
};
Person = __decorate([
    LoggerFactory('LOGGING - PERSON'),
    WithTemplate('<h1>My Person Object</h1>', 'app')
], Person);
const pers = new Person();
console.log(pers);
//# sourceMappingURL=app.js.map