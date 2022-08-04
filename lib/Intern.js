const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email,school) {
        super(name, id, email);

        this.school=school;
    }

    // returns users github username
    getSchool() {
        return this.school;
    }

    //returns "Intern"
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;