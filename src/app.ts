class Department {
  // name: string;
  // private readonly id: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees, this.employees.length);
  }
}

const accounting = new Department('d1', 'Accounting');

accounting.describe();

// const accountingCopy = { name: 'dummy', describe: accounting.describe };

// accountingCopy.describe();

accounting.addEmployee('Tim');
