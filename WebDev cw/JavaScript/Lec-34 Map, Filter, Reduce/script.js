// let student = {
//     name: "Varad",
//     rollNo: 34,
//     subjects: ["Maths", "English", "Hindi"],
//     totalMarks: 600
// };

// let {rollNo, name, subjects} = student;
// console.log(name, rollNo, subjects);

// let {subjects, ...hello} = student;
// console.log(hello);

// let {subjects : vishay, totalMarks = 123, ...hello} = student;
// let vishay = subjects;
// console.log(subjects); //error
// console.log(vishay);
// console.log(totalMarks);
 
//object Merge
// let obj1 = {
//     name: "Saksham",
//     phone: 9485321223
// };

// let obj2 = {
//     country: "India",
//     adhaarCard: 828738419384,
//     name: "yash"    
// };

// let objMerged = {...obj1, ...obj2};
// console.log(objMerged);

//Array and Obj Update
// const arr = [1, 2, 3, 4];
//fully Update or reinitialized
// arr = [5, 6, 7];
// console.log(arr);

// arr[0] = 5;
// console.log(arr);

// const obj = {
//     name: "kasturi",
//     rollNo: 23,
//     address: null
// };

// obj = {
//     add: "ssdfaf"
// };

// obj["name"] = "sumit";
// obj.name = "Laadle";

// delete obj.rollNo;
// console.log(obj);

// console.log(obj?.address); //Optional Chaining
// console.log(obj.address?.street); //Optional Chaining


//Splice
// let arr1 = [1, 2, 3, 4, 5, 6];
// let newArr = arr1.splice(1,3); //delete
// arr1.splice(3, 0, "laadla"); //add
// arr1.splice(2,1,7); //replace
// console.log(arr1);
// console.log(newArr);

//Slice
// let arr2 = [1, 2, 3, 4, 5];
// let trimArr = arr2.slice(1,4);
// console.log(trimArr); //Immutable

// let arr3 = [1, 2, 3, 3, 4, 5];
// console.log(arr3.indexOf(5));
// console.log(arr3.indexOf(235)); //-1

// let res = arr3.find((value) => { //undefined
//     if (value === 11) {
//         return value;
//     }
// })

// let res = arr3.find((value) => { //undefined
//     if (value === 3) {
//         return value;
//     }
// })

// console.log(res);

//same thing up and down

// let res = arr3.find((value) => { //undefined
//         return value === 11;
// })
// console.log(res);


// let arr3 = [1, 2, 3, 4, 5];

// let res = arr3.findIndex((value) => { //undefined
//         return value === 3;
// })

// let res = arr3.findIndex((value) => { //undefined
//         if (value === 4) return value;
// })
// console.log(res);

//flat

// let arr3 = [1, 2, 3, 4, 5, [6, [7, 8], 9]];
// console.log(arr3.flat(Infinity));

//mutability
// let arr4 = [4, 5, 6, 62, 213, 13];
// let arrCopy = arr4;
// let arrCopy = [...arr4]; //spread

// arrCopy.pop();
// console.log("arr4", arr4);
// console.log("arrCopy", arrCopy);
