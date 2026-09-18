// console.log("a");
const p = new Promise(function (resolve, reject) {
    resolve("hii");
    reject("Server down a beta");
});
// console.log(typeof p); //Object
// console.log("c");
// console.log(p.then);

// p.then(function onFulfilled(val){
//     console.log(val);
// }, function onRejected(val){
//     console.log(val);
// })

// p.then(function (val){
//     console.log(val);
// }, function (val){
//     console.log(val);
// })

// const res = p.then(function (val) {
//     console.log(val);
// }, function (val) {
//     console.log(val);
// })
//     .then(() => {})
//     .then()
//     .then()

// p.catch(function (val){
//     console.log(val);
// });

// const res = p.then(function (val) {
//     console.log(val);
// })
//     .then(() => {})
//     .then()
//     .then()
//     .catch(function (val) {
//     console.log(val);
//     }).finally(() => {
//         console.log("Ye to Humesha chlega hi chlega");
//     })

// console.log("a");

// const p2 = new Promise(function f1(resolve, reject){
//     console.log("b");
//     resolve("Hello");
// });

// p2.then(function f2(val){
//     console.log("then");
//     console.log(val);
// }).catch(function f3(){
//     console.log("catch");
// }).finally(function f4(){
//     console.log("finally");
// })

// console.log("c");

const p3 = new Promise(function f1(resolve,reject){
    resolve();
})

Promise.resolve().then(function f2(){
    console.log("Inside resolve promise");
})

p3.then(function f3(){
    console.log("f3 function");
})