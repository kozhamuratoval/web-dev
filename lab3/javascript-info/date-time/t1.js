// Date and time examples
let now = new Date();
console.log(now.toISOString());

let birthday = new Date(2000, 0, 15); // Jan 15, 2000
console.log(birthday.getFullYear()); // 2000

let diffMs = now - birthday;
console.log(diffMs);

let future = new Date(now.getTime() + 1000 * 60 * 60);
console.log(future.toISOString());
