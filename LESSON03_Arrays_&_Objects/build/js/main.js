"use strict";
let stringArr = ['one', 'hey', 'Arifien'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
let testArr = ['test', 239];
stringArr[0] = 'John';
stringArr.push('hello');
guitars[0] = 1992;
guitars.unshift('Jim');
// guitars = stringArr
let test = [];
let bands = [];
bands.push('Van Halen');
//* Tuple
let myTuple = ['Arifien', 42, true];
let mixed = ['John', 1, false];
// mixed = myTuple
// myTuple = mixed
myTuple[1] = 30;
//* Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Arifien',
    prop2: true,
};
exampleObj.prop1 = 'John';
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812'],
};
let jp = {
    active: true,
    albums: ['I', 'II', 'IV'],
};
// evh = jp
// evh.years = 40 - false
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(jp));
//* Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
