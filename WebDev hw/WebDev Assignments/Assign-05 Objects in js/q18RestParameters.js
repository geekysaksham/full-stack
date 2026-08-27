function showSKills(name, ...restSKills) {
    console.log(`Name: ${name}`);
    console.log(`Skills: ${restSKills.join(", ")}`);
}

showSKills("Rahul", "HTML", "CSS", "JavaScript");