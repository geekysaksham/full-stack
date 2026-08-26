// let arr = [45, 23, 12, 98, 57];
// console.log(arr);
// console.log(typeof arr);

// console.log(arr[4-3]);
// console.log(arr[6]);

// let langName = ["Cpp", "JAVA", "Rust", "C", "JAVASCRIPT"];
// console.log(langName[4]);

// let random = ["Hello", 76, true, {key: "value"}, 22];
// console.log(typeof random[1]);

// let arr = [23, 45, 56, 23, 79, 12];
// arr.push(45);
// console.log(arr.push(56,79)); //8
// console.log(arr);

// arr.pop();
// arr.pop();
// console.log(arr);

// let newArray = arr.concat(23,45,67);
// console.log(newArray);

// let ret = arr.indexOf(79);
// console.log(ret);

// let newArr = arr.join("/");
// console.log(newArr);

// console.log(arr.length);

// console.log(arr.reverse());

// arr.shift();
// console.log(arr);

// arr.unshift(1);
// console.log(arr);

// let newArr = arr.slice(1, 4);
// console.log(arr);
// console.log(newArr);

// let newArr = arr.splice(1, 4);
// console.log(arr);
// console.log(newArr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

let arr = [45, 63, 3, 34, 5, 3];
//Destructuring of this Array
// let [a, b, c, d] = arr;
// console.log(d);

//for of loop, for in loop, for each loop

// for (let value of arr) { //return value of array
//     console.log(value);
// }

// for (let value in arr) { //return indices or keys in Array
//     console.log(value);
// }

// for (let value in arr) {
//     console.log(arr[value]);
// }

//rest
let [a, b, c, d, ...remaining] = arr;
console.log(remaining);