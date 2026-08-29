const usersObj = [
    {name: "Rahul", isActive: true}, 
    {name: "Priya", isActive: false} 
];
const newUsersObj = usersObj.filter(user => user.isActive);
console.log(newUsersObj);