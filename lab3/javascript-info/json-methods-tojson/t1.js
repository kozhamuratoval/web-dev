let user = { name: "Lena", age: 23 };
let json = JSON.stringify(user);
console.log(json);

let parsed = JSON.parse(json);
console.log(parsed.name);

let room = {
  number: 101,
  toJSON() {
    return `Room ${this.number}`;
  }
};

console.log(JSON.stringify(room));

let list = [1, 2, 3];
console.log(JSON.stringify(list));
