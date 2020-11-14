//-Methods of primitices

let john = {
	name: "John",
	sayHi: function() {
		alert("Hi buddy!");
	}
};

john.sayHi();

// - 
let str = "Hello";

alert( str.toUpperCase() );

let n = 1.23456;

alert( n.toFixed(2) );

//-

alert( typeof 0 );

alert( typeof new Number(0) );

let zero = new Number(0);

if (zero) {
	alert( "zero is truthy?!?" );
}

let num = Number("123");
alert(null.test); // error

// - task
let str = "Hello";

str.test = 5;

alert(str.test);

// TypeError

// 請用 TypeScript