type Combined = number | string;
type ConvertionFlags = 'as-number' | 'as-text';

const combine = (
  input1: Combined,
  input2: Combined,
  resultConvertion: ConvertionFlags
) => {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultConvertion === 'as-number') {
    return Number(result);
  } else {
    return result;
  }
};

const combinedAges = combine(36, 20, 'as-number');
const combinedNames = combine('T', 'I', 'as-text');
const combinedStringAges = combine('36', '20', 'as-text');

console.log(combinedAges, combinedNames, combinedStringAges);
