const combine = (input1: number | string, input2: number | string) => {
  const result = input1 + input2;
  return result;
};

const combinedAges = combine(36, 20);

console.log(combinedAges);

const combinedNames = combine('T', 'I');