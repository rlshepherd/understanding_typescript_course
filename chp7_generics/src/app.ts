// built-in generics.

const names : Array<string> = []; // array is a built in generic.

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});

promise.then(data => {
    data.split(' '); // TS knows this promise eventually will yield a string, so it can use the type information.
})

