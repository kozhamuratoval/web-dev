let nums = [1, 2, 3, 4];
let squares = nums.map(n => n * n);
console.log(squares);

let evens = nums.filter(n => n % 2 === 0);
console.log(evens);

let sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);

console.log(nums.includes(3));
