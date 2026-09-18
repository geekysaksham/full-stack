// console.log("start");
// const promise1 = new Promise(function fun1(resolve, reject) {
//     console.log("Inside Promise");
//     resolve("Promise Resolved");
//     resolve();
// });
// console.log(promise1);
// console.log("end");

// const promise1 = new Promise(function fun1(resolve, reject) {
//     // resolve("Promise Resolved");
//     reject("promise Rejected");
// });

// promise1.then(function success(result){
//     console.log(result);
// }, function rejected(err){
//     console.log(err);
// })

// const promise1 = new Promise(function fun1(resolve, reject) {
//   // resolve("Promise Resolved");
//   reject("promise Rejected");
// }).then(
//   function success(result) {
//     console.log(result);
//   },
//   function rejected(err) {
//     console.log(err);
//   },
// );

function isData(item) {
  const promise1 = new Promise(function fun1(resolve, reject) {
    setTimeout(() => {
      if (item) {
        resolve("Promise Resolved");
      } else {
        reject("Data is Empty");
      }
    }, 4000);
  });

  return promise1;
}

let res = isData("Ketchup");

res.then(function success(result) {
  console.log(result);
});
