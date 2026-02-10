// Map and Set examples
let map = new Map();
map.set("name", "Olga");
map.set(1, "one");
console.log(map.get("name")); // "Olga"
console.log(map.has(1)); // true

let set = new Set([1, 2, 2, 3]);
console.log(set.size); // 3
console.log(set.has(2)); // true

for (let key of map.keys()) {
	console.log(key);
}
