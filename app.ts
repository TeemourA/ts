let userInput: unknown;
let userName: string;

userInput = 2;
userInput = '22';

if (userInput === 'string') {
  userName = userInput;
}

const generateError = (message: string, code: number): never => {
  throw { message, code };
};

generateError('Not found', 404);
