let user = {
	name: "Michael",
	age: 18
};

// user.sayHi = function() {
// 	alert("Hello!");
// };

function sayHi() {
	alert("Hello!");
};

user.sayHi = sayHi;

user.sayHi();

user = {
	sayHi: function() {
		alert("Hello");
	}
};

let user2 = {
	sayHi() {
		alert("Hello");
	}
};

let user3 = {
	name: "Michael",
	age: 30,

	sayHi() {
		alert(this.name); // Good
		// alert(user3.name); // Bad
	}
};

let admin = user3;
user3 = null;

user3.sayHi();

//-

let user4 = { name: "Michael" };
let admin = { name: "Admin" };

function sayHi() {
	alert( this.name );
}

user4.f = sayHi;
admin.f = sayHi;

user4.f();
admin.f();

admin['f']();


let userInfo = {
	firstName: "Ilya",
	sayHi() {
		let arrow = () => alert(this.firstName);
		arrow();
	}
};

userInfo.sayHi();

//- task

// 1. TypeError: Cannot read property 'name' of undefined
function makeUser() {
	return {
		name: "K",
		ref() {
			return this;
		}
	};
};

let AgentK = makeUser();

alert( AgentK.ref().name );

//2. 
let calculator = {
	read() {
		this.a = +prompt('a?', 0);
		this.b = +prompt('b?', 0);
	},
	sum() {
		return this.a + this.b;
	},
	mul() {
		return this.a * this.b;
	}
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//3.
let ladder = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
	down() {
		this.step--;
		return this;
	},
	showStep: function() {
		alert( this.step );
		return this;
	}
}

ladder
	.up()
	.up()
	.down()
	.up()
	.down()
	.showStep();