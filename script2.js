// want to import all of the functions that we did on script 1
import { Name, Address, Age } from './script1.js'; // ./ is meaning the current page

var val = Name("John"); // val is used to specify the value of an iput element such as button.
var age = Age(26);
var item = val + " and " + age;

console.log(item);

document.getElementById("new").innerHTML = item; // grab this element Id new within index.html
