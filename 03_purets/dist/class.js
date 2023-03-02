"use strict";
class Employee {
    constructor(name, id, address) {
        this.name = name;
        this.id = id;
        this.address = address;
    }
    //static method. Can be called without creating an instance of the class ex: Employee.getEmployeeCount()
    static getEmployeeCount() {
        return 100;
    }
    //methods
    getNameWithAddress() {
        return `${this.name} lives at ${this.address}`;
    }
    //getter that gets the value of id
    get EmployeeId() {
        return this.id;
    }
    //setter that sets the value of id
    set EmployeeId(id) {
        this.id = id;
    }
}
//create an instance of Employee class
let quaid = new Employee("Quaid", 1, { street: "455 Morgan Street", city: "San Francisco", state: "CA", zip: "94103" });
quaid.EmployeeId = 200; //set a new value to id
console.log(quaid);
console.log(quaid.getNameWithAddress());
//inheritance
class Manager extends Employee {
    constructor(name, id, address, department) {
        super(name, id, address); //needed because we are extending the Employee class
        this.department = department;
    }
    getNameWithAddress() {
        return `${this.name} is a manager of ${this.department}`;
    }
}
//create an instance of Manager class
let karen = new Manager("Karen", 2, { street: "123 Anywhere Drive", city: "Anytown", state: "GA", zip: "12345" }, "Consulting");
console.log(karen);
console.log(karen.getNameWithAddress());
