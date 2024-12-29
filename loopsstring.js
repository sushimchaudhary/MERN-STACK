// // for loop 
 
// // print 1 to 5

// // for (let i = 1; i <= 5; i++){
// //     console.log("sushim")
// // }
// // console.log("loop has ended");

// // ****  calculate sum of 1 to 5

// // let sum = 0;
// // let n = 10;
// // for(let i = 3; i <= n; i++){
// //     sum = sum + i;
// // }
// // console.log("sum", sum);
// // console.log("loop has ended");


// // While loops 

// //  let i = 1;
// //  while (i <= 5) {
// //     console.log("sushim"); i++;
// //  }
// //  console.log("loops has ended");

// // do while 
//  let a = 1;
//  do{
//     console.log("sushim"); a++;
//  } while (a <= 10);
//  console.log("ended");

//  // for-of loop

// let str = "sushim";
// let size = 0;
// for (let a of str) {
//    console.log("a =", a);
//    size++;
// }
// console.log("string size =", size);

// // for in loop

// let student = {
//    name: "Sushim Chaudhary",
//    age: 20,
//    address: "Dang",
// };
// for (let key in student) {
//    console.log(key, student[key]);
// }

// // let practice 

// // Qs.1 Print all even numbers from 0 to 100 ?

// for(let a = 0; a <= 100; a++){
//    if (a % 2 === 0){
//       console.log("a =", a);
//    }
// }
   



// // /// *** For loop 


// for (let s = 1; s < 10; s++){
//    console.log("js");
// } console.log("loop has ended");
      


// even number

for (let a = 0; a <= 100; a++){
   if (a % 2 ){
      console.log(a);
   }
}


/// multiple of 2
let a = 2;
for (b = 1; b <= 10; b++){
   console.log(a + "*" + b + "=" + a * b);
}   


// Pattern using nested for loop

var x,y, chr;
for(x = 1; x <= 6; x++){
   for(y = 1; y < x; y++){
      chr = chr + ("x");
   }
   console.log(chr);
   chr = '';
}




