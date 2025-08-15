const myPromise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        //!YO QUIERO MI DINERO
        // resolve(100);
        reject('Mi amigo se perdió');
    }, 2000);
});

myPromise.then((myMoney) => {
    console.log(`Tengo mi dinero ${myMoney}`);
}).catch( reason => {
    console.warn(reason);
}).finally(() => {
    console.log('Pues a seguir con mi vida');
});