// let username = "sushim.Chaudhary";
// let age = "100";
// console.log(username.charAt(13));  // a
// console.log(username.includes("i"));  // true
// console.log(username.indexOf("h"));   // 3
// console.log(username.lastIndexOf("s"));  // 2
// console.log(username.toUpperCase());  // SUSHIM.cHAUDHARY
// console.log(username);  // sushim.chaudhary


// //  SLICE Method

// console.log(username.slice(0, 6));  // sushim
// console.log(username.split("."));   // [ 'sushim', 'Chaudhary' ]

// // CONCAT Method

// let fname = "sushim";
// let lname = "Chaudhary";
// let fullname = fname + " " + lname;
// console.log(fullname);

// // Replace method
// let str = "hello";
// console.log(str.replace("lo", "p"));  // help

// // String literal 

// // let name = "Sushim Chaudhary" ;
// // let greeting = "hello" + name ;
// // console.log(greeting); 


// // Template literal

// let name = "sushim";
// let userage =  20;
// let output = `HELLO , My name is ${name} and I am ${userage} years old.`;
// console.log(output);


// // practice 

// let user = "SushimChaudhary";
// let num = 30;
// let output =  `Hello ${user} and your number is ${num}`;
// console.log(output);


// let obj ={
//     item: "Book",
//     price: 200,
// };
// let details = `the cost of ${obj.item}, \n it's price is ${obj.price}`;    // \n = break
// console.log(details);
 
// output 
// //the cost of Book,
//  // it's price is 200


//  // strim 
//  let strim = "    Sushim chaudhary    ??"
//  console.log(strim);   //   Sushim chaudhary    ??

//  // practices

//  let user_name = "sushimchaudhary";
//   console.log("@"+ user_name + user_name.length);  //@sushimchaudhary15

// comparing String 

// const a = 10;
// const b = 9;
// if (a > b) {
//     console.log(`${a} is greater then ${b}`);
// } else if (a < b) {
//     console.log(`${a} is less then ${b}`);
// } else {
//     console.log(`${a} and ${b} are equal.`);
// } 


 // ex
// let num = "one";
// console.log(typeof num);
// console.log(num);
// num = String(num);
// console.log(typeof num);
// console.log(num);

// num = Number(num);
// num = Boolean(num);
// console.log(typeof num);
// console.log(num);



// //

// console.log(1 + "1"); 
// console.log(1 + "one");
// console.log(1 - "one");

// console.log(1 + 1 + "2");
// console.log(1 + - "2");



// -------------- String length ---------//


let name = "Hello World"


let length = name.length;
console.log(length);    // output : 11


// ---------- String charAt()------------//

let char = name.charAt(0); 
console.log(char)   // output : H

//--------- String at() ----------//

let letter = name.at(2)
console.log(letter);    // output: l

console.log(name[2])


//----- Property Acces ----------//

console.log(name[0])    //output: H



//--------String slice()--------//  tukarnu
let text = name.slice(2,9);
console.log(text)   // output: llo Wor

console.log(name.slice(-4))   // output: orld

console.log(name.substr(2 ,9))



// ----- calculate string length

let a = "sushim"
console.log(a.length);


function getLength(str){
    return str.length;
} 
let output = getLength('javaScript')
console.log(output)

// //----- Check minimum / minimum length 
function max(str, maxlength){
    return str.length >= maxlength;
}
console.log(max('sushim', 5))

// //-----------compare string-------------

function compareLength(str1, str2){
    if (str1.length > str2.length){
        return 1;
    }
    else if (str1.length < str2.length){
        return -1;
    }
    else {
        return 0;
    }
}
let obj = compareLength('apple', 'orange');
console.log(obj)


// //----------empty String--------- return : true , false
 
function emptyString(str){
    return str.length === 0;
}
let empty = emptyString("");
console.log(empty)

// //---------- Count sentence--------


function countWord(sentence){
    if (sentence.trim() === ""){
        return 0;
    } return sentence.trim().split(/\s+/).length;
} let word = countWord('javaScript is programming lg')
console.log(word)



//-------- Shorten string length----------


function shortLength(str, maxLength){
    if(maxLength > 0){
        return str.substring(0, maxLength)
    }
}
console.log(shortLength('helloWorld', 5))