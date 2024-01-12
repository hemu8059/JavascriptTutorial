//Javascript Language is case sensitive
// Javascript is dynamic type conversion language while Java is static type language
// Types in javascript => boolean, string, number, BigInt, Object, Symbol, undefined, null

// console.log('hey');   // debugging

// console.log('First Javascript code line');

// In Javascript we have three keyword which are used for defining or creating a variable. Those are -> var , let , const
var firstName = "Hemant";
var lastName = "Yadav"
var middelName = "Rao"

console.log(firstName, middelName, lastName);

// " typeof " keyword tells about the data type of varaiable
console.log(typeof firstName, typeof middelName, typeof lastName);


// " document.getElementById is used for show data in brower"
document.getElementById('navbar').innerHTML = firstName+" "+middelName+" "+lastName;


// Dynamic Type Conversion
var a = "Hemant";   // "string" data type
console.log(typeof a);
a = 1234; // "number" data type"
console.log(typeof a);
var a = 234;    // This will not give any error, re-declaration is allowed for var
console.log(a);

// For declarating new varaible you need to use either let, var or const 


b = 30;   // b = 30;  =>  var b = 30;
console.log(b);



// Any Mathematical number whether float, integer, negative number will be considered number is Javascript.
var c = 43.1234;
console.log(c, typeof c);
var d = 40;
console.log(d, typeof d);
var e = -12;
console.log(e, typeof e);



// window is nothing but simple object having key and value
console.log(window.a);



// INTERVIEW IMPORTANT QUESTION 
// Infinity and -Infinity
console.log(typeof Infinity);   // type of "Infinity" is number
console.log(typeof -Infinity);   // type of "-Infinity" is number




// Boolean
var check = true;
console.log(typeof check);