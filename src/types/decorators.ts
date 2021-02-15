const Logger = (LogString: string) => {
  return (constructorFunc: Function) => {
    console.log(LogString);
    console.log(constructorFunc);
  };
};

const WithTemplate = (template: string, hookId: string) => {
  return (constructorFunc: any) => {
    const p = new constructorFunc();
    const hookEl = document.getElementById(hookId);

    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  };
};

@WithTemplate('<h1>My Person object</h1>', 'app')
class Person {
  name = 'olsw';
  constructor() {
    console.log('Creating Person object...');
  }
}

const person = new Person();
