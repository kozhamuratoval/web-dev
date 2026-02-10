// Destructuring assignment examples
let [a, b] = [1, 2];
console.log(a, b); // 1 2

let { name, age } = { name: "Max", age: 19 };
console.log(name, age); // Max 19

let { title = "Untitled" } = {};
console.log(title); // "Untitled"

let [x, , y] = [10, 20, 30];
console.log(x, y); // 10 30
