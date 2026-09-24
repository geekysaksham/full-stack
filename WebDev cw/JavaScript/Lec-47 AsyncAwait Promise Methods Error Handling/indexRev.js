// function fun2(){
//     return Promise.resolve("helllo");
//     // return new Promise((resolve, reject) => {
//     //     resolve("helllo");
//     // })
// }
// fun2().then(val => console.log(val));

async function fun1(){
    return "helllo";
}
async function fun3(){
    let data = await fun1();
    console.log(data);
}
fun3();