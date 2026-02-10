let str = "hi";
for (let ch of str) {
  console.log(ch);
}

let set = new Set([1, 2, 3]);
for (let value of set) {
  console.log(value);
}

let range = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {
    let current = this.from;
    let last = this.to;
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        }
        return { done: true };
      }
    };
  }
};

for (let num of range) {
  console.log(num);
}

let arr = ["a", "b", "c"];
let iterator = arr[Symbol.iterator]();
console.log(iterator.next());
