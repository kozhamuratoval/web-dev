let obj = { name: "Kate", age: 22 };

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

for (let [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}

let entries = Object.entries({ a: 1, b: 2 });
console.log(entries.length);
