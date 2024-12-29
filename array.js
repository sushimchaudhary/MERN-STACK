//______________ copyWithin()___________


//  const array1 = ['a', 'b', 'c', 'd', 'e'];

// console.log(array1.copyWithin(0, 3, 4))   // copy to index 0 the element at index 3
// console.log(array1.copyWithin(1))
// console.log(array1.copyWithin(4))


// // calling copyWIthin() non array object

// const arrayLike = {
//     length : 5,
//     3 : 1,
// };
// console.log(Array.prototype.copyWithin.call(arrayLike, 0, 3))
// console.log(Array.prototype.copyWithin.call(arrayLike, 3, 3))



//____________ Array.fill()__________

const array2 = [1, 2, 3, 4, 5];
console.log(array2.fill(1,2,3));   // fill with 0 from position 2 until position 4
console.log(array2.fill(3, 1))
console.log(array2.fill(2))


const arr1 = [2, 3];
const arr = new Array(4);
for (let i = 0; i < arr.length; i++){
    arr[i] = new Array(1). fill(2);
} arr[0][3] = 11;
console.log(arr[0][3])


//________ Using fill() to populate an empty array______

const fruits = Array(3).fill('apple', 2)
console.log(fruits)