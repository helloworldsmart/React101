// - Symbol type
// 不重要吧

let id1 = Symbol("id");

let id2 = Symbol("id");

alert(id1 == id2); // false

alert(id1.toString());
alert(id1.descriptipn);

// - 

let user = {
  name: "John"
}

let id3 = Symbol("id");

user[id3] = 1;

alert( user[id3] );

user[id3] = "Their id value";

user.id = "Our id value";
user.id = "Their id value";

let id4 = Symbol("id");

let user2 = {
	name = "John",
	age: 30,
	[id]: 123
}

for (let key in user2) alert(key);

alert( "Direct: " + user[id] );

let clone = Object.assign({}, user);
alert( clone[id4] );

//-

let id5 = Symbol.for("id");
let idAgain = Symbol.for("id");

alert( id === idAgain );

//-

let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

alert( Symbol.keyFor(sym) );
alert( Symbol.keyFor(sym2) );

//- 
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) );
alert( Symbol.keyFor(localSymbol) );

alert( localSymbol.descriptipn );