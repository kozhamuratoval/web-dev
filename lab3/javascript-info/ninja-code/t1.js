const f = (a, b) => (a + b) * 1.07;
const x = [12, 5, 9].map(v => f(v, 3)).filter(v => v > 15);
console.log(x);