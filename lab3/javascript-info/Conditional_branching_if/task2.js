let accessAllowed;
let age = prompt("how old are you?", '');
if (age > 18) {
    accessAllowed= true;
} else {
    accessAllowed = false;
}
alert(accessAllowed);