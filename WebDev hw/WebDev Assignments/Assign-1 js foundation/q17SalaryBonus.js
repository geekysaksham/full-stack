let salary = 60000;
let yearsOfExperience = 3;
let bonus = 0;
let finalSalary = salary;

if (yearsOfExperience < 0) {
    console.log("Invalid Data");
} else if (yearsOfExperience >= 10) {
    bonus = 20;
    finalSalary += (salary * 20) / 100;
} else if (yearsOfExperience >= 5) {
    bonus = 10;
    finalSalary += (salary * 10)/100;
} else if (yearsOfExperience >= 2) {
    bonus = 5;
    finalSalary += (salary * 5)/100;
} else {
    bonus = 0;
}

if (yearsOfExperience >= 0) {
    console.log(`Original Salary = ${salary}`);
    console.log(`Bonus = ${bonus}%`);
    console.log(`Bonus Amount =`,finalSalary - salary)
    console.log(`Final Salary = ${finalSalary}`);
}