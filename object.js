// creating obkect

const  info =  {
  name : 'sushim',
  address : 'dang'
};

console.log(info)

// create new object

const obj = new Object();
info.name ='saran',
info.age=30,
info.address='Dang',
info.job='developer';
console.log(info)


// Accessing object 


console.log(info.name);
console.log(info['name']);

/// modifying object

info.age = 23;
console.log(info)

// Adding properties

info.study = 'Adarsh';
console.log(info)

// Removing

delete info.job;
console.log(info);

 // checking if a property
 ///-------- hasOwnProperty() method


console.log(info.hasOwnProperty('name'));  // true


/// for in loop object

const person ={
    name: 'Hari',
    address: 'ktm',
    age : '34',
    job :'developer'
};
for (let key in person) {
    console.log(key + ":" + person[key])
}


/// Merging object  
//OBJECT: SPREAD AND REST OPERATOR

let obj1 = {
    name :"sourav"
};
let obj2= {
    age : 23
};
let obj3 = { ...obj1, ...obj2};
console.log(obj3)


/// Spreading array:
 const arr1 = [1,2,3];
 const arr2 =[...arr1,4,5,6,7];
 console.log(arr2);


 


 // function argument

const number =[1,2,3]
function sum (x,y,z){
    return x + y + z
};
console.log(sum(...number))


// Rest op...............

function add (adding, ...number){
    return number.map(num => num * adding);
} console.log(add(2,3,4,5))