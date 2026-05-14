type Email = `${string}@${string}.${string}`;

type Employee = {
    name: string;
    age: number;
    position: string;
    experience: number;
    address: Address;
    workAddress: Address;
    salary: number;
    phone: string;
    email: Email;
}

type Address = {
    street: string;
    city: string;
    state: string;
    zip: string;
}
// Example usage with the original data
const john: Employee = {
    name: "John",
    age: 25,
    position: 'developer',
    experience: 3,
    address: {
        street: 'Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001'
    },
    workAddress: {
        street: 'Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001'
    },
    salary: 50000,
    phone: '123123123',
    email: 'john@example.com'
}