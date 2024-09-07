//const TinderUser = new Object() // singleton object
const tinderuser = {} // non singleton object
 
// console.log(tinderuser);

const User = {
    email: "sahil@gmail.com", // , matters
    fullname: {
        firstname:"sahil",
        lastname: "kharb"
    }
}

console.log(User.fullname.lastname);

const obj1 = {1: "a", 2:"b", 3:"c"}
const obj2 = {4:"a",5:"b", 6:"c"}

//console.log(obj1 , obj2); // xxxxx

//const obj3 = Object.assign({}, obj1, obj2)  // object.assignt(target,values)


const obj3 = {...obj1, ...obj2}
// console.log(obj3);

console.log(Object.keys(User));
console.log(Object.values(User));
console.log(Object.entries(User));

console.log(User.hasOwnProperty("email"));  // mistake--email not in double quotes

