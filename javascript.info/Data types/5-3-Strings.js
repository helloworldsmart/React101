// 5-3-Strings

const { Str } = require("prelude-ls");
const { Alert } = require("react-native");

let singleString = 'single-quoted';
let doubleString = "double-quoted";

let backticks = `backticks`;

function sum(a, b) {
  return a + b;
}

alter(`1 + 2 = ${sum(1, 2)}.`);

let guestList = `Guests:
  * John
  * Pete
  * Mary
`;

alert(guestList);

let guestList2 = "Guest:\n * John\n * Pete\n * Mary";

alert(guestList2);

let str1 = "Hello\nWorld";

let str2 = `Hello
World`;

alert(str1 == str2);

// \n
// \r
// \', \"
// \t
// \b, \f, \v
// \xXX\
// \uXXXX
// \U{X...XXX}

alert( "\u00A9" );
alert( "\u{20331}" );
alert( "\u{1F60D}" );

alert( 'I\'m the Walrus!' );

alert( `I'm the Walrus!` );

alert( `The backslash: \\` );

alert( `My\n`.length ); // 3

// 
let str = `Hello`;

alert( str[0] ); // H
alert( str.charAt(0) ); // H

alert( str[str.length - 1] );

alert( str[1000] );
alert( str.charAt(1000) );

for (let char of "Hello") {
	alert(char);
}

//- 

let str3 = 'Hi';
// str3[0] = 'h'; // error
// alter( str3[0] );

str3 = 'H' + str3[1];

alert( str );

// Changing the case
alert( 'Interface'.toUpperCase() );
alert( 'Interface'.toLowerCase() );

alert( 'Interface'[0].toLowerCase() );

// Searching for a subsstring

let str4 = "Widget with id";


alert( str4.indexOf('Widget') ); //0
alert( str4.indexOf('widget') ); // -1

alert( str4.indexOf('id') ); //1

alter( str4.indexOf('id', 2) ) //12

//-

let str5 = 'As sly as a fox, as strong as an ox';

let target = 'as';

let pos = 0;
while (true) {
	let foundPos = str5.indexOf(target, pos);
	if (foundPos == -1) break;

	alert(`Found at ${foundPos}`);
	pos = foundPos + 1;
}

let pos1 = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
	alert( pos );
}

// 
let str6 = "Widget with id";

if (str6.indexOf("Widget") != -1) {
	alert("We found it");
}

alert( ~2 );
alert( ~1 );
alert( ~0 );
alert( ~-1 );

if (~str.indexOf("Widget")) {
	alert( 'Found it!' );
}

alert( "Widget".includes("id") );
alert(  "Widget".includes("id", 3) );

alert( "Widget".startsWith("Wid") );
alert( "Widget".endsWith("get") );

//- slice

let str7 = "stringify";
alert( str7.slice(0, 5) );
alert( str7.slice(0, 1) );

alert( str7.slice(-4, -1) );

// substring
alert( str7.substring(2, 6) );
alert( str7.substring(6, 2) );

// slice(start, end)
// substring(start, end)
// substr(start, length)

alter( "z".codePointAt(0) );
alert( "Z".codePointAt(0) );

alert( String.fromCodePoint(90) );
alter( '\u005a' );

let str8 = '';
for (let i = 65; i <= 220; i++) {
	str8 += String.fromCodePoint(i);
}
alter(str8);

// -
alert( 'Österreich'.localeCompare('Zealand') ); // -1