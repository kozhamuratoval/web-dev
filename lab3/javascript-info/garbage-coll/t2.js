let user = { name: "John" };
let admin = user;

user = null;
console.log(admin.name);

admin = null;

let a = {};
let b = {};

a.link = b;
b.link = a;
