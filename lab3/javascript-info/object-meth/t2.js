let counter = {
  value: 0,
  inc() {
    this.value++;
  },
  dec() {
    this.value--;
  },
  reset() {
    this.value = 0;
  }
};

counter.inc();
counter.inc();
console.log(counter.value);
counter.dec();
console.log(counter.value);
counter.reset();
console.log(counter.value);
