// console.log(Math.floor(Math.random() * 10 + 1));

let min = 10; 
let max = 100;
for (let i = 1; i <= 100; i++);
console.log(Math.floor(Math.random() * (max - min + 1) + min));

// conditional statement

const readlineSync =  require("readline-sync");

const userAge = readlineSync.question("How old are you ?")

if (userAge > 16){
    console.log("Hey you are adult..");
} else {
    console.log("you are not adult")
}
