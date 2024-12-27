// Arithmetic Operator

var a = 10;
var b = 5;
var c = a + b ;
console.log("a + b =" , c);
console.log("a - b =", a - b);
console.log("a / b =", a / b);
console.log("a * b =", a * b);
console.log("a % b=", a % b); 

 //Unarry Operator

 let a = 10;
 let b = 5;
 console.log("a++ =", a++);  // 10
console.log("++a =", ++a);     // 11
 console.log("a =", a);      // 12

 console.log("--a =", --a);  // 10
 console.log("a =", a);      // 10
console.log("a + 1 =", a + 1);

console.log("a * b =", a * b);
console.log("a / b =", a / b);

// Asignment Operator

let a = 5
let b = 5;
a **= 4;
console.log("a =", a);  // 625


a += 5;
console.log("a =", a)   //630

b -= 5;
console.log("b =", b);  // 0

// Comparison Operators

let a = 5;
let b = 10;
console.log("a == b", a == b);  // false
console.log("a <= b", a <= b);  // true
console.log("a >= b", a >= b);  // false
console.log("a != b", a != b);  // true
console.log("a !== b",a !== b); // true
console.log("a < b", a < b);    // true
console.log("a > b", a > b);    // false

// Logical Operator

let a = 10;
let b = 5;
let cond1 = a > b;
let cond2 = a == 10;
console.log("cond1 && cond2 =", cond1 && cond2);   // true

let cond3 = a < b;
let cond4 = a == 10;
console.log("cond3 || cond4 =", cond3 || cond4);  // true

console.log("!(10 > 5) =",!(10 > 5))   // false