//- Numbers

const { react } = require("babel-types");

let billion = 1000000000;

let billion2 = 1e9;
alert( 7.3e9 );

1e3 = 1*1000;
1.23e6 = 1.23 * 1000000;

let ms = 0.000001;
let ms2 = 1e-6;

1e-3 = 1 / 1000 // 0.001
1.23e-6 = 1.23 / 1000000 // 0.00000123

//- Hex, binary and octal numbers
alert( Oxff );
alert( 0xFF );

let a = 0b11111111;
let b = 0o377;

alert( a == b);

//-

let num = 255;
alert( num.toString(16) );
alert( num.toString(2) );
alert( 123456..toString(36) );

// Math.floor
// Math.ceil
// Math.round
// Math.trunc

let num2 = 1.23456;
alert( Math.floor(num * 100) / 100 );

let num = 12.34;
alert( num.toFixed(1) );

let num2 = 12.36;
alert( num2.toFixed(1) );

// toFixed is String type
alter( typeof num2.toFixed(5) );

// - imprecise calculations
alert( 1e500 ); // Infinity

alert( 0.1 + 0.2 == 0.3 ); // false !!
alert( 0.1 + 0.2 ); // 0.30000000000000004 !!

alert( 0.1.toFixed(20) );

let sum = 0.1 + 0.3;
alert( sum.toFixed(2) ); // 0.30
alert( +sum.toFixed(2) ); // 0.3

alert( (0.1 * 10 + 0.2 * 10) / 10 );
alert( (0.28 * 100 + 0.14 * 100) / 100);

//- 
alert( 9999999999999999 ); // show 10000000000000000 !

// -Infinity
// NaN

alert( isNaN(NaN) ); // true
alert( isNaN("Str") ); // true
alert( NaN === NaN ); // false

alert( isFinite("15") ); // true
alert( isFinite("str") ); // false
alert( isFinite(Infinity) ); // false

let num1 = +prompt("Enter a  number", '');

alert( isFinite(num1) );

alert( +"100px" );

alert( parseInt('100px') );
alert( parseFloat('12.5em') );

alert( parseInt('12.3') );
alert( parseFloat('12.3.4') );

alert( parseInt('a123') );

alert( parseInt('Oxff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255
alert( parseInt('2n9c', 36) ); // 123456

alert( Math.random() );

alert( Math.max(3, 5, -10, 0, 1) );
alert( Math.min(1, 2) );

alert( Math.pow(2, 10) );


//- Hex: 0x
//- Octal numbers: 0o
//- Binary: 0b

//-task

//1.
let number1 = +prompt('number1 input here :', '');
let number2 = +prompt('number2 input here :', '');

let sum = parseFloat(number1) + parseFloat(number2);
alert(sum);

//2.
alert( Math.round(6.35 * 10) / 10 );
//3.
function readNumber() {
	let num;
	do {
		num = +prompt("input number", 0);
	} while ( !isFinite(num) );
	if (num === null || num === "") {
		return null;
	}
}

alert(`Read: ${readNumber()}`);
//4.
let i = 0;
while ( i < 11 ) {
	i += 0.2;
	if (i > 9.8 && i < 10.2) alert( i );
}

//5.

function random(min, max) {
	return min + Math.random() * (max - min);
}

//6. 

// easy but error
function randomInteger(min, max) {
	return Math.round(min + Math.random() * (max - min));
}

// current

function randomInteger2(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}