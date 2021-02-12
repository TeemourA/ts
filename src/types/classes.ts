abstract class Department {
  // name: string;
  // private readonly id: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  static createEmployee(name: string) {
    return {
      name,
    };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees, this.employees.length);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log(this);
  }
}

class AccountingDep extends Department {
  // singleton pattern
  private lastReport: string;
  private static instance: AccountingDep; // singleton pattern

  set mostRecentReport(value: string) {
    this.addReport(value);
  }

  get mostRecentReport() {
    return this.lastReport;
  }

  private constructor(id: string, private reports: string[]) {
    // singleton pattern
    super(id, 'Accounting');
    this.lastReport = this.reports[this.reports.length - 1]
      ? this.reports[this.reports.length - 1]
      : 'no reports added';
  }

  static createInstance(id: string, reports: string[]) {
    // singleton pattern constructor instead of 'new' keyword
    if (this.instance) {
      return this.instance;
    }

    this.instance = new AccountingDep(id, reports);
    return this.instance;
  }

  describe() {
    console.log('Accounting Department ID - ', this.id);
  }

  addEmployee(...employeesList: string[]) {
    this.employees = [...this.employees, ...employeesList];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = AccountingDep.createInstance('d1', []); // same instances
const accounting2 = AccountingDep.createInstance('d2', ['blalba']); // same instances
console.log(accounting, accounting2);

accounting.addReport('New report');
accounting.addEmployee('Lol', 'Kek', 'Cheburek');
accounting.describe();
accounting.mostRecentReport = 'updated rep';
console.log(accounting.mostRecentReport);
accounting.printReports();

const employee1 = Department.createEmployee('Timus');
console.log(employee1);

const it = new ITDepartment('d2', ['Timo']);
it.describe();

// const accountingCopy = { name: 'dummy', describe: accounting.describe };

// accountingCopy.describe();

accounting.addEmployee('Tim');
