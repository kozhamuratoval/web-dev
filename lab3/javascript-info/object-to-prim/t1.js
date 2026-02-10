// Object to primitive conversion example
let money = {
  amount: 100,
  toString() {
    return String(this.amount);
  },
  valueOf() {
    return this.amount;
  }
};

console.log(String(money)); // "100"
console.log(money + 50); // 150 (valueOf used)

// Custom primitive conversion with Symbol.toPrimitive
let box = {
  value: 7,
  [Symbol.toPrimitive](hint) {
    return hint === "string" ? `box:${this.value}` : this.value;
  }
};

console.log(String(box)); // "box:7"
console.log(box + 3); // 10
