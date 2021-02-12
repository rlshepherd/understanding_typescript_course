// intersection types
type Admin = {
    name: string;
    priviledges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
}


type ElevatedEmployee = Admin & Employee; // combo of object type properties.
// interface ElevatedEmployee extends Admin, Employee {};

const e1: ElevatedEmployee = {
    name: 'Russ',
    priviledges: ['create server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // type they have in common. 

// Type Gaurds

// lets you use union types and know which type you are working with at runtime

// basic type guard using built in types
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add(1,5) // result is of type combinable, but it might matter if it is a number or string. 


// now type gaurds with custom types
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    // can't check type of 'Employee' because JS doesn't know it, and this check is at runtime. 
    if ('priviledges' in emp) { // this feels hacky :(
        console.log('Priviledges: ' + emp.priviledges);;
    }
    if ('startDate' in emp) {
        console.log('Start date: ' + emp.startDate);
    }
}

// using instanceOf
interface Driveable {
    driving(): void;
}

interface Loadable {
    loadCargo(amount: number): void;
}

class Car implements Driveable{
    driving() {
        console.log('Driving ...');
    }
}

class Truck implements Driveable, Loadable {
    driving() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ... ' + amount);
    }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
    vehicle.driving;
    if (vehicle instanceof Truck) { // check type at runtime, works because types are changed to constructor functions. 
        vehicle.loadCargo(1000);
    }
}

// Discriminated Union Pattern

interface Bird {
    type: 'bird'; // literal type, must be this value. 
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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

moveAnimal({type: 'bird', flyingSpeed: 200});

// Type Casting

const paragraph = document.querySelector('p');
// const input = <HTMLInputElement>document.getElementById('user-input');
const input = document.getElementById('user-input')! as HTMLInputElement;

input.value = 'Hi there!'; // without typecasting, will throw an error. 

// index types

interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character.' }
    [prop: string]: string; // don't know property name, and don't know the property count
                            // every prop must be of type string
                            // also it's value must be of type string.
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    // 1: 'someting else' would throw an error b/c it's not a string. 
}

// function overloading
// this isn't as nice as being able ot overload and redefine the function with pattern matching. 
function addTyped(a: number, b: number): number
function addTyped(a: string, b: string): string
function addTyped(a: string, b: number): string
function addTyped(a: number, b: string): string
function addTyped(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }    
    return a + b;
}

const results = addTyped('Russ', 'Shepherd')
console.log(results[0].split(' ')); // can use this method b/c type script now knows the type.


// Optional Chaining

const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: {title: 'CEO', description: 'My own company'}
}

// we might not know which data is returned
// JS way of checking nested results: console.log(fetchedUserData.job && fetchedUserData.job.title);
// Typescript provides an optional chaining operator to make this easier (TS >= 3.7)
console.log(fetchedUserData?.job?.title);

// Nullish coalescing
// how to check if some userInput or DOM el is null before working with it?

// assume some null input. 
const userInput = null; 

const storedData = userInput || 'DEFAULT'; // get the second value if the first value is false-y. Including an empty string. 

const storedData1 = userInput ?? 'DEFAULT'; // fall back to second value if value is null or undefined
