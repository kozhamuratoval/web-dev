function User(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(`Hi, I'm ${this.name}`);
  };
}

let user1 = new User("Kate", 21);
let user2 = new User("Max", 19);

user1.sayHi();
user2.sayHi();
