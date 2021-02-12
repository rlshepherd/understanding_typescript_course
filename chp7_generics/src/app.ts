// built-in generics.

const names: Array<string> = []; // array is a built in generic.

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});

promise.then(data => {
    data.split(' '); // TS knows this promise eventually will yield a string, so it can use the type information.
})

// generic functions

function merge(objA: object, objB: object) {
    return Object.assign(objA, objB)
}

console.log(merge({name: 'Russ'}, {age: 36}));
// in the above case TS doesn't know the type of the returned data

function mergeGeneric<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObject = mergeGeneric({name: 'Russ'}, {age: 36}); // now TS knows the type info
const mergedObject2 = mergeGeneric({ name: 'Russ', hobbies: ['Sports']}, { age: 36}); // this will have different type info.
console.log(mergedObject.age);
console.log(mergedObject2.hobbies); 

// another generic function, looking for some property:
interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let description = 'Got no value.';
    if (element.length === 1) {
        description = 'Got 1 element.';
    } else if (element.length > 1) {
        description = 'Got ' + element.length + ' elements.';
    }
    return [element, description];
}

console.log(countAndDescribe('Hello there!'));

// constraints using 'keyof'

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' +obj[key];
}

extractAndConvert({name: 'Russ'}, 'name');

// generic classes

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1); // returns -1 if it doesn't find anything
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Russ');

const numberStorage = new DataStorage<number>();

// in javascript, objects are reference types (including arrays)
// const objStorage = new DataStorage<object>();
// objStorage.addItem({name: 'Russ'}); // objects are a reference type
// objStorage.addItem({name: 'Paige'});
// objStorage.removeItem({name: 'Russ'}); // will not work. objects are reference types. 
// console.log(objStorage.getItems());

// Built-in types TS ships with that give certain utility
// there are many, these are some:

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}; // a generic which wraps our tpye and makes all properties optional. 
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const somenames: Readonly<string[]> = ['Russ', 'Paige']; // is this how we implement immutability in typescript?
// somenames.push('Ethan'); // this throws an error

