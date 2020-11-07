//- Object to primitive conversion
// 不重要吧
//- ToPrimitive

const { obj } = require("through2");

alert(obj);
anotherObj[obj] = 123;

let num = Number(obj);

let n = +obj;
let delta = date1 - date2;

let greater = user1 > user2;

//-
let total = obj1 + obj2;

//-
obj[Symbol.toPrimitive] = function(hint) {
  //
  //
}

let user = {
	name: "John",
	money: 1000,

	[Symbol.toPrimitive](hint) {
		alert(`hint: ${hint}`);
		return hint == "string" ? `{name: "${this.name}"}` : this.money;
	}
};

alert(user);
alert(+user);
alert(user + 500);

//-
// let user = {name: "John"};

alert(user);
alert(user.valueOf() === user);
