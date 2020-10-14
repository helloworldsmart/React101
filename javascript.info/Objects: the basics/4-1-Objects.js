let user = new Object(); // "object constructor" syntax
let user2 = {}; // "object literal" syntax

let user3 = {
  name: "John",
  age: 30
};

alert( user3.name );
alert( user3.age );

user3.isAdmin = true;

delete user3.age

//-

let user4 = {
	name: "John",
	age: 30,
	"likes birds": true,
};

//Tip: Object with const can be changed!!

let user5 = {};

user5["likes birds"] = true;

alert(user5["likes birds"]);

delete user5["likes birds"];

let key = "likes cats";
user5[key] = true;

let keyPrompt = prompt("What do you want to know about the user?", "name");
alert( user5[keyPrompt] );

//-

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
	[fruit]: 5,
};

alter( bag.apple );

//-

let fruit2 = prompt("Which fruit to buy?", "apple");
let bag2 = {};

bag[fruit] = 5;

//-

let fruit3 = "apple";
let bag = {
	[fruit + "Computers"]: 5 // bag.appleComputers = 5
};

function makeUser(name, age) {
	return {
		name: name,
		age: age
	};
}

let user6 = makeUser("Peter", 25);
alert(user.name); // Peter

//-

function makeUser2(name, age) {
	return {
		name,
		age,
	}
}

//-

let user7 = {
	name,
	age: 30,
};

//-

let obj = {
	for: 1,
	let: 2,
	return: 3,
}

alter( obj.for + obj.let + obj.return );

let obj1 = {
	0: "test" // same as "0": "test"
};

alter( obj1["0"] ); // test
alert( obj1[0] ); // test

// Gotcha: __proto__

let obj2 = {};
obj2.__proto__ = 5;
alert(obj2.__proto__); // [object Object]

//-