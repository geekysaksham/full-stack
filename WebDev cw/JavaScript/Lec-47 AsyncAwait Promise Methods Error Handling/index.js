// async function fun1(){
//     // console.log("Hii");
//     return 5;
// }
// function  fun2(){
//     // console.log("Hello");
//     // const prom = Promise.resolve(10);
//     // return prom;
//     return 10;
// }
// const returned_prom = fun1();
// returned_prom.then((val) => {
//     console.log(val);
// })
// console.log(fun1());

// fun1().then((val) => {
//     console.log(val);
// })
// console.log(fun2());

// console.log("a");
async function fun3(){
    // console.log("b");
    return "hii";
}

function fun4(){
    return Promise.resolve("hello");
}

// fun3().then((val) => {
//     console.log(val);
// })
// console.log("1");
// async function fun5(){
//     // fun3().then((val) => {
//     // console.log(val);
//     // });

//     console.log("2");
//     let data1 = await fun3();
//     console.log("3");
//     let data2 = await fun4();
//     console.log("4");
//     console.log(data1, data2);
// };
// console.log("Saksham");
// fun5();
// console.log("5");

// console.log("a");
// async function random(){
//     console.log("b");   
//     await 1;
//     console.log("c");
// }
// random();
// console.log("d");

function fun4(){
    return Promise.reject("Error aa gaya");
};

async function fun3(){
    try {
        let data = await fun4();
        console.log(data);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Mai to humesha run karunga");
    }
}
fun3();