//-Arrays
let arr = new Array();
let arr1 = [];

let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] );
alert( fruits[1] );
alert( fruits[2] );

fruits[2] = "Pear";
fruits[3] = "Lemon";
alert( fruits.length );
alert( fruits );

let otherArr = [ "Apple", { name: 'John' }, true, function() { alert('Hello'); } ];

alert( otherArr[1].name );
otherArr[3]();

//- pop/push, shift/unshift
// queue: shift / push FIFO (First-In-First-Out)
// stack: push / pop LIFO (Last-In-First-Out)
// deque: double-ended queue

fruits.pop();
alert( fruits ); // Apple, Orange

fruits.push("Pear");
alert( fruits ); // Apple, Orange, Pear

fruits.shift()
alert( fruits ); // Orange, Pear

fruits.unshift('Apple');
alert( fruits ); // Apple, Orange, Pear

let fruitsBag = ["Apple"];
fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");
alert( fruitsBag );

let arr = fruitsBag;
alert( arr === fruitsBag );
arr.push("Pear");
alert( fruitsBag );

let otherFruits = [];
otherFruits[9999] = 5;
otherFruits.age = 25;

//-Performance
//Methods push/pop run fast, while shift/unshift are slow

// Loops
for (let i = 0; i < fruitsBag.length; i++) {
  alert( fruitsBag[i] );
}

for (let fruit of fruitsBag) {
	alert( fruit );
}

for (let key in fruitsBag) {
	alert( fruitsBag[key] );
}

// for..in slower ?!

//-About "length"
let gyFruits = [];
gyFruits[78] = "Durian"
alert( gyFruits.length );