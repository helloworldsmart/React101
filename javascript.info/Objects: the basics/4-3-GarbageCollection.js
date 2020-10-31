// 4-3 Garbage collection

const { delete } = require("request-promise-native");

// Reachability
// https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)

let user = {
  name: "Michael"
};

let admin = user;

user = null;

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

let family = marry({
  name: "John"
}, {
  name: "Ann"  
});


delete family.father;
delete family.mother.husband;

family = null;

// mark-and-sweep

// - Generational collection
// - Inercemental collection
// - Idle-time collection