const promise = new Promise((resolve, reject) => {
    reject('Error');
})
    .catch((error) => console.log(error)) // Catch the rejection

console.log("Start counting");
Promise.resolve("One")
    .then(value => console.log(value))
    .then(() => Promise.resolve("Two"))
    .then(value => console.log(value))
    .then(() => Promise.resolve("Three"))
    .then(value => console.log(value));