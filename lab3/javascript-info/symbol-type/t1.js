// Symbol type example
let id = Symbol("id");
let user = {
  name: "Mila",
  [id]: 123
};

console.log(user.name);
console.log(user[id]); // 123

// Symbols are unique
let id2 = Symbol("id");
console.log(id === id2); // false

// Symbol as non-enumerable key
let secret = Symbol("secret");
let obj = {
  name: "Lena",
  [secret]: "hidden"
};

console.log(Object.keys(obj)); // ["name"]
console.log(obj[secret]); // "hidden"
