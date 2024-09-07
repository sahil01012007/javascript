// ARRAY

const myArr = [1,2,3,4]
// console.log(myArr[1]);

const myArr2 = new Array(1,3,4,5)
// console.log(myArr2[2]);

// join converts array into string datatype

// arrays methods

// myArr.push(5)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(1));
// console.log(myArr.indexOf(1)); // if value doesnot exist in array 
                               // then the ans will be -1
                             
const newArr = myArr.join() // join converts array into string datatype
// console.log(newArr);

// slice and splice 
// splice manupulates the original array but slice doesnot
// splice includes last number of the range

console.log("A" , myArr);

const myNewArray1 = myArr.slice(1,3)
console.log(myNewArray1);

console.log("B", myArr);

const myNewArray2 = myArr.splice(1,3)
console.log(myNewArray2);

console.log("C", myArr);






