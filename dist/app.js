"use strict";
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // name: string;
        // private readonly id: string;
        this.employees = [];
        // this.id = id;
        // this.name = name;
    }
    Department.prototype.describe = function () {
        console.log("Department " + this.id + ": " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees, this.employees.length);
    };
    return Department;
}());
var accounting = new Department('d1', 'Accounting');
accounting.describe();
// const accountingCopy = { name: 'dummy', describe: accounting.describe };
// accountingCopy.describe();
accounting.addEmployee('Tim');
