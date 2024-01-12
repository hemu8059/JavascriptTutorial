//Javascript Language is case sensitive

// console.log('hey');   // debugging

// console.log('First Javascript code line');


var firstName = "Hemant";
var lastName = "Yadav"
var middelName = "Rao"

console.log(firstName, middelName, lastName);

console.log(typeof firstName, typeof middelName, typeof lastName);

document.getElementById('navbar').innerHTML = firstName+" "+middelName+" "+lastName;

// Dynamic Type Conversion
var a = "Hemant";   // string
console.log(typeof a);
a = 1234; // number
console.log(typeof a);
var a = 234;    // This will not give any error, re-declaration is allowed for var
console.log(a);

// For declarating new varaible you need to use either let, var or const 


b = 30;   // b = 30;  =>  var b = 30;
console.log(b);  

// window is nothing but simple object having key and value
console.log(window.a);


// Types in javascript => boolean, string, number, BigInt, Object, Symbol, undefined, null


// INTERVIEW IMPORTANT QUESTION 
// Infinity and -Infinity
console.log(typeof Infinity);   // type of "Infinity" is number
console.log(typeof -Infinity);   // type of "-Infinity" is number