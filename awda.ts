// Example TypeScript code

// Define an interface
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

// Create a class that implements the interface
class Employee implements Person {
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private employeeId: number
    ) {}

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getDetails(): string {
        return `${this.getFullName()}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
    }
}

// Create an instance of the Employee class
const employee = new Employee("John", "Doe", 30, 12345);

// Use type inference
let manager = {
    name: "Jane Smithh",
    department: "IT",
    yearsOfExperience: 8
};

// Function with type annotations
function greet(person: Person): string {
    return `Hello, ${person.firstName} ${person.lastName}!`;
}

// Array with union type
let mixedArray: (number | string)[] = [1, "two", 3, "four", 5];

// Enum example
enum Color {
    Red,
    Green,
    Blue
}

// Usage examples
console.log(employee.getDetails());
console.log(greet(employee));
console.log(`Manager: ${manager.name}, Department: ${manager.department}`);
console.log(`Mixed array: ${mixedArray.join(", ")}`);
console.log(`Enum example: ${Color.Blue}`);
