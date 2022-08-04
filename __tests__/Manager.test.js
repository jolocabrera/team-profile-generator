const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Dave', 20, 'dave.jones@gmail.com',5);

    expect(manager.name).toEqual('Dave');
    expect(manager.id).toEqual(20);
    expect(manager.email).toEqual('dave.jones@gmail.com');
    expect(manager.officeNumber).toEqual(5);
});


test('return Manager using getRole', () => {
    const manager = new Manager('Dave', 20, 'dave.jones@gmail.com',5);

    expect(manager.getRole()).toEqual('Manager');
});