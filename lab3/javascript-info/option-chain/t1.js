// Optional chaining example
let user = {
  name: "Lina",
  address: {
    city: "Kyiv"
  }
};

console.log(user.address?.city); // "Kyiv"
console.log(user.contact?.phone); // undefined (no error)

let admin = null;
console.log(admin?.name); // undefined (no error)

// Optional chaining with function call
let api = {
  getData() {
    return "ok";
  }
};

console.log(api.getData?.()); // "ok"
console.log(api.fetch?.()); // undefined (no error)
