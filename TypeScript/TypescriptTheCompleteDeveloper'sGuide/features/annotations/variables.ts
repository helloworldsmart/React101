let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date()

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3]
// 類型 '[number, number, number]' 不可指派給類型 '[number]'。
// 來源具有 3 個元素，但目標只允許 1 個。
// let myNumbers: [number] = [1, 2, 3]

let truths: boolean[] = [true, true, false];

// Classes 
class Car {

};
let car: Car = new Car();

// Object literal
let point: {x: number; y: number } = {
  x: 10,
  y: 20
};

// Function 
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

