// using Employee constructor 
const Employee = require('../lib/Employee');

// creates employee object 
test('creates an employee object', () => {
    const employee = new Employee('Dave', 20, 'dave.jones@gmail.com');

    expect(employee.name).toEqual('Dave');
    expect(employee.id).toEqual(20);
    expect(employee.email).toEqual('dave.jones@gmail.com');
});

// gets name from getName() 
test('gets employee name', () => {
    const employee = new Employee('Dave', 20, 'dave.jones@gmail.com');

    expect(employee.getName()).toEqual('Dave');
});

// gets id from getId() 
test('gets employee ID', () => {
    const employee = new Employee('Dave', 20, 'dave.jones@gmail.com');

    expect(employee.getId()).toEqual(20);
});

// gets emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Dave', 20, 'dave.jones@gmail.com');

    expect(employee.getEmail()).toEqual('dave.jones@gmail.com');
});

// gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Dave', 20, 'dave.jones@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 
