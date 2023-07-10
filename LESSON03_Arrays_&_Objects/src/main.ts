let stringArr = ['one', 'hey', 'Arifien']

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

let testArr: (string | number)[] = ['test', 239]

stringArr[0] = 'John'
stringArr.push('hello')

guitars[0] = 1992
guitars.unshift('Jim')

// guitars = stringArr

let test = []
let bands: string[] = []
bands.push('Van Halen')

//* Tuple
let myTuple: [string, number, boolean] = ['Arifien', 42, true]

let mixed = ['John', 1, false]

// mixed = myTuple
// myTuple = mixed

myTuple[1] = 30

//* Objects
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
  prop1: 'Arifien',
  prop2: true,
}

exampleObj.prop1 = 'John'

interface Guitarist {
  // type Guitarist = {}
  name?: string
  active?: boolean
  albums: (string | number)[]
}

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [1984, 5150, 'OU812'],
}

let jp: Guitarist = {
  active: true,
  albums: ['I', 'II', 'IV'],
}

// evh = jp
// evh.years = 40 - false

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`
  }
  return 'Hello!'
}

console.log(greetGuitarist(jp))

//* Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U)
