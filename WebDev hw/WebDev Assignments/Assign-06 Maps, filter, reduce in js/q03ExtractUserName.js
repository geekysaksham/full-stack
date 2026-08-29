const userObjects = [
    {name: "Rahul", email: "rahul@example.com"},
    {name: "Priya", email: "priya@example.com"}
];
const userNames = userObjects.map(user => user.name);
// const userNames = userObjects.map(({name}) => name); //Object Destructing
console.log(userNames);