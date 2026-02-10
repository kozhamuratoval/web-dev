function Car(brand, year) {
  this.brand = brand;
  this.year = year;
  this.info = function () {
    return `${this.brand} (${this.year})`;
  };
}

let car1 = new Car("Toyota", 2020);
let car2 = new Car("BMW", 2018);

console.log(car1.info());
console.log(car2.info());

function User(name) {
  this.name = name;
}

let user1 = new User("Nora");
let user2 = new User("Ivan");

console.log(user1.name);
console.log(user2.name);
