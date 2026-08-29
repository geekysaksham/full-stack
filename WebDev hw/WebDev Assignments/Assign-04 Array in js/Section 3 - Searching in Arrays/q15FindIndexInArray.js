let users = [
    {name: "Rahul", age: 20},
    {name: "Priya", age: 22}
]

let userIdx = users.findIndex(u => u.name === "Priya");
console.log(userIdx);