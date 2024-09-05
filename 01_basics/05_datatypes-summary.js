// primitive datatype
// 7 types: string, number, null, boolean, undefined, symbol, bigint

// const score = 100
// const scorevalue = 100.3
// const isloggedin = false
// const outtemp = null   // """null datatype is object"""
// let useremail = undefined

// const id = Symbol("abc")        // use of symbol
// const anotherid = Symbol("abc")
// console.log(id===anotherid);

// const bignumber = 273678138763n // n converts this num into bigint



// reference(non-primitive) datatype
//Array, Objects, functions
// the above all three are object datatype but functions is object function datatype
 

// array
const heroes = ["shaktiman","naagraj"]

// objects
// let aboutme = {
//     name:sahil
//     age :17
// } 
// const myfunction = function(){
//     console.log("hello world");
    
// }




// *******************************************************************************

// stack (primitive) , heap (non-primitive)
// In stack we get copy and In heap we get direct reference


let myyoutubename = "sahilyt"
 
let anotheryoutubename = myyoutubename
anotheryoutubename = "sahilkharbyt"

console.log(myyoutubename);
console.log(anotheryoutubename);
 

let userone= {
    email: "sahil@gmail.com"
}

let usertwo=userone

usertwo.email = "sahil123@gmail.com"

console.log(userone.email);
console.log(usertwo.email);




