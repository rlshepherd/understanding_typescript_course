const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = { // object
    name: "Russell", // string
    age: 36, // number
    hobbies: ["Music", "Camping"], // array
    role: [2, ''] // tuple
}

person.role = [1,2,3]
person.role.push('something')

console.log(person.role)