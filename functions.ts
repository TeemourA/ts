const add = (n1: number, n2: number) => {
  return n1 + n2;
};

const printResult = (num: number): void => console.log('result: ' + num);

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
}

printResult(add(18, 7));

let combineValues: (n1: number, n2: number) => number;
combineValues = add;

console.log(combineValues(2, 7));

addAndHandle(10, 20, console.log);

function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({data: 'Hi there!'});
}
 
console.log(typeof sendRequest('Send this!', (response) => { 
  console.log(response);
  return true;
 }));
