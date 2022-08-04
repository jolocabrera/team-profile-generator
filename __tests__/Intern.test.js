const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Dave', 20, 'dave.jones@gmail.com','San Jose State University');

    expect(intern.name).toEqual('Dave');
    expect(intern.id).toEqual(20);
    expect(intern.email).toEqual('dave.jones@gmail.com');
    expect(intern.school).toEqual('San Jose State University');
});

test('returns school using getSchool', () => {
    const intern = new Intern('Dave', 20, 'dave.jones@gmail.com','San Jose State University');

    expect(intern.getSchool()).toEqual('San Jose State University');
});

test('return Intern using getRole', () => {
    const intern = new Intern('Dave', 20, 'dave.jones@gmail.com','San Jose State University');

    expect(intern.getRole()).toEqual('Intern');
});