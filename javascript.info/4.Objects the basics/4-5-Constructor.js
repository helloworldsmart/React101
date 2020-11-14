const { sum, multiply } = require("lodash");

// 4-5 Constructor, operator "new"
function User(name) {
	// this = {};

	this.name = name;
	this.isAdmin = false;

	// return this;
}

let user = new User("Jack");

alert(user.name);
alert(user.isAdmin);

let user = {
	name: "Jack",
	isAdmin: false
};

let user2 = new function() {
	this.name = "John";
	this.isAdmin = false;

	//
}

// - new.target 很少用
// function User() {
// 	alert(new.target);
// }

// User(); // undefined

// new User();

function User2(name) {
	if (!new.target) {
		return new User(name);
	}

	this.name = name;
}

// -return

let john = User("John");
alert(john.name);

function BigUser() {

	this.name = "John";

	return { name: "Godzilla" };

}

alert( new BigUser().name );

function SamllUser() {
	this.name = "John";

	return;
}

alert( new SamllUser().name );

//- 

function lastUser(name) {
	this.name = name;

	this.sayHi = function() {
		alert( "My name is: " + this.name );
	};
}

let john = new User("John");

john.sayHi();

/*
john = {
	name: "John",
	sayHi: function() {...}
}
*/

// Task:
//1.
let obj = {};

function A() {
	return obj;
}

function B() {
	return obj;
}

alert ( new A() == new B() );

//2.

function Calculator() {
	
	this.read = function() {
		this.a = +prompt("a?", a);
		this.b = +prompt("b?", b);
	};

	this.sum() = function() {
		return this.a + this.b;
	};

	this.mul() = function() {
		return this.a * this.b;
	};
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

// Accumulator

function Accumulator(startingValue) {
	this.value = startingValue;

	this.read = function() {
		this.value += +prompt("How much to add?", 0);
	};
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);