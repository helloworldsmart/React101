//-Map Set

let map = new Map();

map.set('1', 'str1')
map.set(1, 'num1')
map.set(true, 'bool1')

console.log( map.get(1) ) // 'num1'
console.log( map.get('1') ) // 'str1'

console.log( map.size )

let john = { name: "John" };

let visitsCountMap = new Map();

visitsCountMap.set(john, 123)

console.log( visitsCountMap.get(john) )

map.set('1', 'str1')
  .set(1, 'num')
  .set(true, 'bool1')

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50]
])

for (let vegetable of recipeMap.keys()) {
  console.log(vegetable)
}

for (let amount of recipeMap.values()) {
  console.log(amount)
}

for (let entry of recipeMap.entries()) {
  console.log(entry)
}

recipeMap.forEach( (value, key, map) => {
  console.log(`${key}: ${value}`)
})

// - Object.entries

let obj = {
  name: 'John',
  age: 30
}

let map = new Map(obj.entries(obj))

console.log( map.get('name') )

// - Object.fromEntries

let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
])

console.log(prices.orange)

// Set
let set = new Set()

let john = { name: "John" }
let pete = { name: "Pete" }
let mary = { name: "Mary" }

set.add(john)
set.add(pete)
set.add(mary)
set.add(john)
set.add(mary)

console.log( set.size )
for ( let user of set) {
  console.log(user.name)
}

let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) console.log(value)

set.forEach((value, valueAgain, set) => {
  console.log(value)
})

//- task
//-1

// MyAnswer
// function unique(arr) {
//   let set = new Set();
//   for (let value of arr) {
//     set.add(value)
//   }
//   return set
// }

function unique(arr) {
  return Array.from(new Set(arr))
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

//-2

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// TODO

console.log(arr)

