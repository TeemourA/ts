// type AddFn = (n1: number, n2: number) => number;
interface AddFn {
  (n1: number, n2: number): number; 
}

let add: AddFn;
add = (n1: number, n2: number) => n1 + n2;
interface Named {
  readonly name: string;
  outputData?: string;
}
interface Greetable extends Named {
  greet: (phrase: string) => void;
}

class Person implements Greetable {
  age = 25;

  constructor(public name: string) {}

  greet(phrase: string) {
    console.log(`${this.name} says: ${phrase}`);
  }
}

let user1: Greetable;
user1 = new Person('Timo');
user1.greet('yo nigga!!!');
console.log(user1);
