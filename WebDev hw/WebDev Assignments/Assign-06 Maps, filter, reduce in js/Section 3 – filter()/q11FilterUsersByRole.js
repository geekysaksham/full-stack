const usersObj = [
    {name: "Rahul", role: "developer"},
    {name: "Priya", role: "student"}
];
const newUsersObj = usersObj.filter(user => user.role === "developer");
console.log(newUsersObj);