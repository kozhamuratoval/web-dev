let user = {
  name: "Anna",
  age: 20,
  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  },
  isAdult() {
    return this.age >= 18;
  }
};

user.sayHi();
console.log(user.isAdult());

let admin = {
  name: "Admin",
  age: 30,
  sayHi: user.sayHi
};

admin.sayHi();
