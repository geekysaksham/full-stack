const userObj = [
    {name: "Rahul", role: "student"},
    {name: "Priya", role: "student"}
];
let newObj = userObj.map(user => ({
    ...user,
    role: "developer"
}))

console.log(newObj);