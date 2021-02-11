// classes and interfaces
// class
// properties
// methods
// constructor
// inheritance
// super
// overriding and protected
// getters and setters

abstract class Department {
    static fiscalYear = 2020;
    protected employees: string[] = []; // can be accessed by extension classes.

    constructor(
        protected readonly id: string,
        public name: string,
        ) {
            console.log(Department.fiscalYear);
        }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.addEmployee.length);
        console.log(this.employees)
    }

    // don't need to intantiate the class
    // it's more like a namespace grouping for the method
    // common for utility functions
    // well known example is the Math class from JS. 
    static createEmployee(name: string) {
        return {name: name};
    }
}

// const accounting = new Department('d1', 'Accounting');

// accounting.describe();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe(); // if this does not have a name property, will get an error.

// inheritance
// can only inheriy from one class
class ITDepartment extends Department {
    admins: string[];

    // will use base class constructor by default
    constructor(id: string, admins: string[]) {
        super(id, 'IT'); // calls the constructor of the base class
        // must call super before using the 'this' keyword
        this.admins = admins;
    }

    describe(this: ITDepartment) {
        console.log('IT Department ID - ' + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    // getter
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("Error: No report found!");
    }

    // setter
    set mostRecentReport(value: string) {
        if (value) {
            this.addReport(value);
            return;
        }
        throw new Error("Please provide a valid value: " + value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports(this: AccountingDepartment) {
        console.log(this.reports)
    }

    addEmployee(name: string) {
        if (name === 'Russ') {
            return;
        }
        this.employees.push(name);
    }

    describe(this: AccountingDepartment) {
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

