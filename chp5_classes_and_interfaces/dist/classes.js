"use strict";
// classes and interfaces
// class
// properties
// methods
// constructor
// inheritance
// super
// overriding and protected
// getters and setters
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = []; // can be accessed by extension classes.
        console.log(Department.fiscalYear);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.addEmployee.length);
        console.log(this.employees);
    }
    // don't need to intantiate the class
    // it's more like a namespace grouping for the method
    // common for utility functions
    // well known example is the Math class from JS. 
    static createEmployee(name) {
        return { name: name };
    }
}
Department.fiscalYear = 2020;
// const accounting = new Department('d1', 'Accounting');
// accounting.describe();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe(); // if this does not have a name property, will get an error.
// inheritance
// can only inheriy from one class
class ITDepartment extends Department {
    // will use base class constructor by default
    constructor(id, admins) {
        super(id, 'IT'); // calls the constructor of the base class
        // must call super before using the 'this' keyword
        this.admins = admins;
    }
    describe() {
        console.log('IT Department ID - ' + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    // getter
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("Error: No report found!");
    }
    // setter
    set mostRecentReport(value) {
        if (value) {
            this.addReport(value);
            return;
        }
        throw new Error("Please provide a valid value: " + value);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === 'Russ') {
            return;
        }
        this.employees.push(name);
    }
    describe() {
        console.log('Accounting Department ID - ' + this.id);
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('ad1', []);
        return this.instance;
    }
}
const itdepartment = new ITDepartment('d2', ['Russ']);
const accounting = AccountingDepartment.getInstance();
accounting.addEmployee('Russ');
accounting.addReport('something went wrong!');
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = 'something else went wrong!';
//# sourceMappingURL=classes.js.map