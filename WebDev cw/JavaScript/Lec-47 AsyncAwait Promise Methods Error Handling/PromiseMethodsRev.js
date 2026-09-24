
function api1(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("api1");
        }, 5000);
    })
}

function api2(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("api2");
        }, 7000)
    })
}

function api3(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("api3");
        }, 2000)
    })
}

// let x = Promise.all([api1(), api2(), api3()]);
// let x = Promise.allSettled([api1(), api2(), api3()]);
// let x = Promise.race([api1(), api2(), api3()]);
let x = Promise.any([api1(), api2(), api3()]);


x.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})