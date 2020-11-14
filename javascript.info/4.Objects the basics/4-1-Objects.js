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

let user8 = {};

alert( user8.noSuchProperty === undefined );

// "key" in object;

let user9 = { name: "John", age: 30 };

alert( "age" in user );
alert( "blabla" in user );

let key1 = "age";
alert( key1 in user9 );

let obj3 = {
	test: undefined
};

alert( obj3.test );
alert( "test" in obj );

//- for in
let handsomeBoy = {
	name: "Michael",
	age: 18,
	isAdmin: true,
	cm: 30,
	soBigSoLong: true
};

for ( let key in handsomeBoy ) {
	// keys
	alert(key);
	// values
	alert( handsomeBoy[key] );
}


//-Tip
alert( String(Math.trunc(Number("49"))) );
alert( String(Math.trunc(Number("+49"))) );
alert( String(Math.trunc(Number("1.2"))) );

//-Tip: 電話問題用, 用"+"前綴來排序

//-Task:
// #1
let userInformation = {};
userInformation.name = "John";
userInformation.surname = "Smith";

userInformation.name = "Pete";
delete userInformation.name;

// #2

function isEmpty(value) {
	return value && Object.keys(value).length === 0 && value.constructor === Object;
}

// #Reference
// - https://www.samanthaming.com/tidbits/94-how-to-check-if-object-is-empty/
// - https://coderwall.com/p/_g3x9q/how-to-check-if-javascript-object-is-empty

// #3

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
}

let sum = 0;
for ( let money in salaries ) {
	sum += salaries[money];
}

alert(sum);

// #4

let menu = {
	width: 200,
	height: 300,
	title: "My menu"
};

function multiplyNumber(obj) {
	for ( let key in obj ) {
		if ( typeof obj[key] == "number" ) {
			obj[key] *= 2;
		}
	}
}