"use strict";
var userInput;
var userName;
userInput = 2;
userInput = '2';
if (userInput === 'string') {
    userName = userInput;
}
var generateError = function (message, code) {
    throw { message: message, code: code };
};
generateError('Not found', 404);
