var yourName = prompt("What is your name?");

var firstchar = yourName.slice(0,1);

var upper = firstchar.toUpperCase();

var restofname = yourName.slice(1,yourName.length);

restofname = restofname.toLowerCase();

var capitalizedname = upper + restofname;

alert("Hello " + capitalizedname);