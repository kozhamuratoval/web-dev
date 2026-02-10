let user = { name: "Ira" };
let weakMap = new WeakMap();
weakMap.set(user, "data");
console.log(weakMap.get(user));

let weakSet = new WeakSet();
weakSet.add(user);
console.log(weakSet.has(user));

user = null;

let cache = new WeakMap();
let obj = { id: 1 };
cache.set(obj, { saved: true });
console.log(cache.get(obj));
