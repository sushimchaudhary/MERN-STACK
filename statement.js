// // If Statement condition

// let age = 17;
// if (age >= 18){
//     console.log("you can vote");
// }
// if (age < 18){
//     console.log("you cannot vote");
// }



// // let mode = "light";
// // let color ;

// if(mode = "dark"){
//     color = "black";
// }
// if(mode =  "light"){
//     color = "white";
// }
// console.log(color);

// // If-else condition 
// let weight = 90;
// if(weight > 60){
//     console.log("medium");
// }
// else {
//     console.log("heigh");
// }

// // odd or even
// let a = 24;
// if (a % 2 === 0) {
//     console.log(a, "is even");
// }
// else { 
//      console.log(a, "iss odd")
// }

// // else if statement
  
// let speedcheck = 20;
// let speed; 
// if (speedcheck === 200){
//     speed = "high";
// }
// else if (speedcheck === 100){
//     speed = "medium";
// }
// else if (speedcheck === 50){
//     speed = "normal";
// } else {
//     speed = "low";
// }
// console.log(speed);



// let num = 10;
// if (num % 5 === 0){
//     console.log(num, "is multiple of 5");
// } else {
//     console.log(num, "is not multiple of 5");
// }
 

// // practice

// let score = 94;

//  if (score >= 90 && score <= 100){
//     console.log(score,"Grade A", "EXCELLENT");
//  } else if (score >= 70 && score <= 89){
//     console.log(score, "Grade B", "GOOD");
//  } 
//  else if (score >= 60  && score <= 69){
//    console.log(score,"Grade C", "ACCEPTABLE");
//  }
//   else if (score >= 50 && score <= 59){
//    console.log(score, "Grade D", "BASIC");
//  } 
//  else if (score >= 0 && score <= 49){
//     console.log(score, "Grade E", "NON_GRADED");
//  }
//  console.log(score); 
 

// // comparision condition

// let age = 20;
// if (age >= 20) {
//     console.log("Rohan")
// } else {
//     console.log("not Rohan")
// };


// const s = 9;
//  if (s >= 8){
//     console.log("true...");
//  } else if (s >= 9){
//     console.log("false..");
//  } else {
//     console.log("none...");
//  }



//  // Switch statement

//  const marks = 70;
//  let Branch;

//  switch (true) {
//     case marks >= 100:
//         Branch = "Computer";
//         break;
//     case marks >= 80:
//         Branch = "Maths";
//         break;
//     case marks >= 70:
//         Branch = "Science";
//         break;
//     default: 
//         Branch = "null";
//         break;
//  }
//  console.log(`your subject is : ${Branch}`);

// // else if statement

// const mark = 10;
// if (mark >= 90){
//     console.log("computer....");
// } else if (mark >= 80){
//     console.log("english....");
// } else if (mark >= 70){
//     console.log("Maths...");
// } else {
//     console.log("opt...");
// }


// // Ternary Operator (?:)


let year = 20;
 const result = (year >= 23) ?
    "You are elegible to vote"
    : "You are not elegible to vote";
    console.log(result);



// //  Nested if... else 

// let weather = "sunny";
// let temp = 25;
// if (weather === "sunny"){
//     if (temp >= 30){
//         console.log("today very Hot ...");
//     } else if (temp >= 20){
//         console.log("today very warm");
//     } else {
//         console.log("today bit cool..");
//     }
// } else if (weather === "rainy"){
//     console.log("don't forget your umbrella..");
// } else {
//     console.log("check the weather ");
// }


let b = 2;
let c = 3;
let d = 4;

if (b > c && b > d){
    console.log("b is grater");
} else if (c > b && c > d){
    console.log("c is grater");
} else {
    console.log(" d is grater");
}
  

// switch case

let num1 = 20;
let num2 = 25;
let op = "*";

switch (op) {
    case "+":
        console.log(num1 + num2);
        break;

    case "-":
        console.log(num1 - num2);
        break;

    case "%":
        console.log(num1 % num2);
        break;

    default:
        console.log("invalid operation");
}



// ternary op

let age = 20;
 age >= 20 ? 
 console.log("eligible") :
  console.log("not elegible");


age <= 0 ? 
console.log("invalid age")
: age  >= 20 
? console.log("eligible") 
: console.log("not eligible");

let n1 = 3;
let n2 = 4;
let ab = "%";
 switch (ab) {
    case "*":
        console.log(n1 * n2);
        break;
    case "+":
        console.log(n1 + n2);
        break;
    case "%":
        console.log(n1 % n2);
        break;
    default:
        console.log("ended");
 }

