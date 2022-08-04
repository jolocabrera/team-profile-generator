const Employee =require('./Employee');


class Manager extends Employee{
    constructor(name, id, email,officeNumber) {
        super(name, id, email);

        this.officeNumber=officeNumber;
    }


    //returns "Manager"
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;