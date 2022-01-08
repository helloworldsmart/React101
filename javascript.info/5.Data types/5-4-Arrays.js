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

// 
let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

alert( matrix[0][1] ) // 2

//- task
//-1
let fruits = ["Apples", "Pear", "Orange"]

let shoppingCart = fruits;
shoppingCart.push("Banana")

console.log( fruits.length ) // 4

//-2
let styles = ["Jazz", "Blues"]
styles.push("Rock-n-Roll")
// styles[(styles.length / 2) - 1] = "Classics" // My answer
styles[Math.floor((styles.length - 1) / 2)] = "Classics"
styles.shift()
styles.unshift("Rap", "Reggae")

//-3

//-4
function sumInput() {
	let numbers = [];
	while (true) {
		let value = prompt("A number please?", 0);

		if (value === "" || value === null || !isFinite(value)) break;
		numbers.push(+value)
	}

	let sum = 0;
	for (let number of numbers) {
		sum += number
	}
	return sum
}

alert( sumInput() )

//-5

