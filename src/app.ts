const names: Array<string> = []; // string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved!');
  }, 2000);
});

promise.then(data => data.split(''));

// generic function // named generic types to get TS support
const mergeObjects = <T extends object, U extends object>(objA: T, objB: U) =>
  Object.assign(objA, objB);

console.log(mergeObjects({ name: 'x' }, { age: 25 }));

interface Lengthy {
  length: number;
}

const countAndDescribe = <T extends Lengthy>(element: T) => {
  const description =
    element.length >= 1
      ? `Got ${element.length} element${element.length > 1 ? 's' : ''}.`
      : 'Got no value';

  return [element, description];
};
console.log(countAndDescribe('qweqeqewqeqe'));

const extractAndConvet = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => `Value ${obj[key]}`;

extractAndConvet({ name: 'qwerty' }, 'name');

class DataStorage<T extends string | number | boolean> { // kind of type variable 
  protected data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const stringStorage = new DataStorage<string>();
stringStorage.addItem('qwerty1');
stringStorage.addItem('qwerty2');
console.log(stringStorage.getItems());
stringStorage.removeItem('qwerty1');
console.log(stringStorage.getItems());
