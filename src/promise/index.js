// Promise - algo puede ocurrir

const somethingWillHappen = () => {
    return new Promise((resolve,reject) => {
        if (true){
            resolve('Bien hecho');
        } else {
            reject('Mal hecho');
        }
    });
};

const somethingWillHappen2 = () => {
    return new Promise((resolve,reject) => {
        if (true) {
            setTimeout(()=> {
                resolve('Dios es el camino');
            },3000)
        } else {
            const error = new Error('No lo puedo creer');
            reject( error );
        }
    });
};


// Ejecutamos nuestra promesa

somethingWillHappen()
    .then( response => console.log(response))
    .catch( err => console.log(err));


somethingWillHappen2()
    .then( response => console.log(response))
    .catch( err => console.log(err));
    

Promise.all([somethingWillHappen(),somethingWillHappen2()])
    .then( response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.log(err);
    })


