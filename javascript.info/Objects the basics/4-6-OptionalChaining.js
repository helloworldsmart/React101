// 4-6 Optional Chaining
let user = {};
alert(user.address.street); // Error!
alert( user && user.address && user.address.street ); // undefined // Good
alert( user?.address.street );  // undefined // Very Good

//TypeError: Cannot read property 'innerHTML' of null
let html = document.querySelector('./my-element').innerHTML;

//-
let nullMan = null;
let x = 0;

user?.sayHi(x++);

alert(x) // 0

//-

let user1 = {
  sayWhoIAm() {
		alert("I am batman!!");
	}
}

let user2 = {};

user1.admin?.(); // I am batman!!
user2.admin?.();

//-
let user3 = {
	firstName: "Joker"
};

let user4 = null;

let key = "firstName";

alert( user3?.[key] ); // Joker
alert( user4?.[key] ); // undefine

alert( user3?.[key]?.something?.not?.existing );

delete user3?.firstName;

// SyntaxError: Invalid left-hand side in assignment
user?.name = "Joker";