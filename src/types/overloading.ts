type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Admin, Employee {}

type ElevatedEmployee = Admin & Employee;

const elevatedEmployee: ElevatedEmployee = {
  name: 'Timo',
  privileges: ['top1'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = boolean | number;
type Universal = Combinable & Numeric; // creates an intersection, not a union of unions

// function add(a: number, b: number): number;  overload
// function add(a: string, b: string): string;
// function add(a: Combinable, b: Combinable) {
//   if (typeof a === 'number' && typeof b === 'number') return a + b;

//   return a.toString() + b.toString();
// };

const add = (a: Combinable, b: Combinable) => {
  if (typeof a === 'number' && typeof b === 'number') return a + b;

  return a.toString() + b.toString();
};

const word = add('a', 'b') as string;
const num = add(5, 4) as number;

const fetchedData = {
  name: 'Acs',
  id: '3',
  job: { title: 'qwe', compane: 'ewq' },
};

console.log(fetchedData?.job?.title); // optional chaining

const someData = null;
const storedData = someData ?? 'DEFAULT'; // check if someData is null || undefined
console.log(storedData);

type UnknownEmployee = Employee | Admin;

const printEmployeeInfo = (emp: UnknownEmployee) => {
  console.log('Name ' + emp.name);
  if ('privileges' in emp) {
    console.log('Priveleges ' + emp.privileges);
  }

  if ('startDate' in emp) {
    console.log('Start date ' + emp.startDate);
  }
};

printEmployeeInfo(elevatedEmployee);

class Car {
  drive() {
    console.log('driving...');
  }
}

class Truck {
  drive() {
    console.log('driving a truck');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
};

useVehicle(v1);
useVehicle(v2);

// interface City {
//   name: string;
//   population: number;
// }

// interface Cities {
//   [name: string]: City;
// }

// const cities: Cities = {
//   city1: {
//     name: 'Moscow',
//     population: 15,
//   },
//   city2: {
//     name: 'NY',
//     population: 15,
//   },
// };

interface Horse {
  type: 'horse';
  groundSpeed: number;
}

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

type Animal = Horse | Bird;

const getAnimalSpeed = (animal: Animal) => {
  switch (animal.type) {
    case 'horse':
      console.log(animal.groundSpeed);
      break;
    case 'bird':
      console.log(animal.flyingSpeed);
      break;
  }
};

const horse: Horse = {
  type: 'horse',
  groundSpeed: 23,
};

getAnimalSpeed(horse);

const userInput = document.getElementById('user-input') as HTMLInputElement;
userInput.value = 'Hi there!';
