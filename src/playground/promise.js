const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Something went wrong');
    }, 3000)
   
});

console.log('before');

promise.then((data) => {
    console.log(data);
}, (error) => {
    console.log('error', error);
});

console.log('after');