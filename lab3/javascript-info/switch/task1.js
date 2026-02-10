let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    console.log("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    console.log("this doesn't run");
}

let d= 3;

switch (d) {
  case 4:
    alert('Right!');
    break;

  case 3: 
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
