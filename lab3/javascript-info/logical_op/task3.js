let question1 = prompt("Who is there?", "");

if (question1 == "admin") {
    let question2 = prompt("What's the password?", "");
    
    if (question2 == "themaster") {
        alert('welcome');
    } else if (question2 == null) {
        alert("canceled");
    } else {
        alert("no");
    }
} else if (question1 == null) {
    alert("canceled");
} else {
    alert("I don't know you");
}