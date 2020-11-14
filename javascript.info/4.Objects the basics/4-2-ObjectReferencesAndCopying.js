// 4-2 Object references and copying
let message = "Hello!";
let phrase = message;

let user = {
  name: "John"
};

let admin = user;

admin.name = "Pete";
alert(user.name);

let a = {};
let b = a;

alert( a == b );
alert( a === b );

let c = {};
let b = {};

alert( c == d );

let userInformation = {
	name: "Michael",
	age: 18,
}

let clone = {};

for (let key in user) {
	clone[key] = user[key];
}

clone.name = "Pete";
alert( user.name );

//- Object.assign

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(userInformation, permissions1, permissions2);

Object.assign(userInformation, { name: "Tony Stark"});

alert( userInformation.name );

let clone = Object.assign({}, user);

let handsomeBoy = {
	name: "Michael",
	sizes: {
		height: 182,
		cm: 30
	}
};

let cloneBody = Object.assign({}, handsomeBoy);

alert( user.sizes === cloneBody.sizes );

handsomeBoy.sizes.cm++;
alert(cloneBody.sizes.cm);

// https://html.spec.whatwg.org/multipage/structured-data.html#safe-passing-of-structured-data
// URL
// 1:https://lodash.com/
// 2:https://lodash.com/docs/4.17.15#cloneDeep