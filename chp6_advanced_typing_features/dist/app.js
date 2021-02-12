"use strict";
var _a;
// interface ElevatedEmployee extends Admin, Employee {};
const e1 = {
    name: 'Russ',
    priviledges: ['create server'],
    startDate: new Date()
};
// Type Gaurds
// lets you use union types and know which type you are working with at runtime
// basic type guard using built in types
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add(1, 5); // result is of type combinable, but it might matter if it is a number or string. 
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    // can't check type of 'Employee' because JS doesn't know it, and this check is at runtime. 
    if ('priviledges' in emp) { // this feels hacky :(
        console.log('Priviledges: ' + emp.priviledges);
        ;
    }
    if ('startDate' in emp) {
        console.log('Start date: ' + emp.startDate);
    }
}
class Car {
    driving() {
        console.log('Driving ...');
    }
}
class Truck {
    driving() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('Loading cargo ... ' + amount);
    }
}
function useVehicle(vehicle) {
    vehicle.driving;
    if (vehicle instanceof Truck) { // check type at runtime, works because types are changed to constructor functions. 
        vehicle.loadCargo(1000);
    }
}
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving with speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 200 });
// Type Casting
const paragraph = document.querySelector('p');
// const input = <HTMLInputElement>document.getElementById('user-input');
const input = document.getElementById('user-input');
input.value = 'Hi there!'; // without typecasting, will throw an error. 
const errorBag = {
    email: 'Not a valid email!',
};
function addTyped(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const results = addTyped('Russ', 'Shepherd');
console.log(results[0].split(' ')); // can use this method b/c type script now knows the type.
// Optional Chaining
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
};
// we might not know which data is returned
// JS way of checking nested results: console.log(fetchedUserData.job && fetchedUserData.job.title);
// Typescript provides an optional chaining operator to make this easier (TS >= 3.7)
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
// Nullish coalescing
// how to check if some userInput or DOM el is null before working with it?
// assume some null input. 
const userInput = null;
const storedData = userInput || 'DEFAULT'; // get the second value if the first value is false-y. Including an empty string. 
const storedData1 = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT'; // fall back to second value if value is null or undefined
//# sourceMappingURL=app.js.map