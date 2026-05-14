export type Employee = { 
    name: string;
    age: number;
    salary: number;
}
const employees : Employee[] = [
    { name: "John" , age: 27, salary: 50000},
    { name: "Jane" , age: 25, salary: 60000},
    { name: "Bob" , age: 30, salary: 70000},
    { name: "Alice" , age: 35, salary: 80000},
    { name: "Tom", age: 45, salary: 90000},
    { name: "Michael", age: 32, salary: 650000},
    { name: "Sophia", age: 38, salary: 75000},
    { name: "David", age: 42, salary: 85000},
    { name: "Emma", age: 27, salary: 60000}
]

function findEmployeeByName(name: string): Employee | undefined {
    return employees.find(employee => employee.name === name);
}

function getEmployeesWithSalaryGreaterThan(salary: number): Employee[] {
    return employees.filter(employee => employee.salary > salary);
}

function getEmployeesWithSalaryGreaterThanAndAgeGreaterThan(salary: number, age: number): Employee[] {
    return employees.filter(employee => employee.salary > salary && employee.age > age);
}

function getAllEmployeeNames(): string[] { 
    return employees.map(employee => employee.name);
}

function getMaximumSalary(): number {
    return Math.max(...employees.map(employee => employee.salary));
}

// use reduce
function getMaximumSalary2(): number {
    return employees.reduce((max, employee) => Math.max(max, employee.salary), 0);
}

function getAverageSalary(): number {
    return employees.reduce((sum, employee) => sum + employee.salary, 0) / employees.length;
}