function fun1(){
    return new   Promise((resolve, reject) => {
        resolve("fun1");
    })
}
function fun2(){
    setTimeout(() => {
        return Promise.resolve("fun2");
    }, 2000)
}
function fun3(){
    setTimeout(() => {
        return Promise.reject("fun3");
    }, 3000)
}

// let result = Promise.all([fun1(), fun2(), fun3()]);
let result = Promise.allSettled([fun1(), fun2(), fun3()]);
// let result = Promise.race([fun1(), fun2(), fun3()]);
// let result = Promise.any([fun1(), fun2(), fun3()]);

async function f1(){
    try {
        let data = await result;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
f1();
// console.log(result);