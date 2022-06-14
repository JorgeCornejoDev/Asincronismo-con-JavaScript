
const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(()=> resolve('Do something Async'),3000)
            : reject(new Error('Test error'))
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log( something );
};

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log( something );
    } catch (error) {
        console.error(error);
    }
};


console.log('Before');
doSomething();
console.log('After');

console.log('Before2');
anotherFunction();
console.log('After2');