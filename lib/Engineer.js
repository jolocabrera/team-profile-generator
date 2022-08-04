const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email,github) {
        super(name, id, email);

        this.github=github;
    }

    // returns users github username
    getGithub() {
        return this.github;
    }

    //returns "engineer"
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;