const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Dave', 20, 'dave.jones@gmail.com','davejones');

    expect(engineer.name).toEqual('Dave');
    expect(engineer.id).toEqual(20);
    expect(engineer.email).toEqual('dave.jones@gmail.com');
    expect(engineer.github).toEqual('davejones');
});

test('get users github username using getGithub', () => {
    const engineer = new Engineer('Dave', 20, 'dave.jones@gmail.com','davejones');

    expect(engineer.getGithub()).toEqual('davejones');
});


test('return Engineer using getRole', () => {
    const engineer = new Engineer('Dave', 20, 'dave.jones@gmail.com','davejones');

    expect(engineer.getRole()).toEqual('Engineer');
});