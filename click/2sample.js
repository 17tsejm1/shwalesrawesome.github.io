function myFunction() {
    var x;
    if (confirm("Choose wisely") == true) {
        x = "You pressed OK! woot woot go you";
    } else {
        x = "You pressed Cancel! meh...try ok";
    }
    document.getElementById("demo").innerHTML = x;
}
