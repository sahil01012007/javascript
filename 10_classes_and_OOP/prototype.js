// function -
//           -
//            -
// Array------ ------> object ------> null     
//             -
//            -
//           -
//   String -    




// let myname = "sahil    "
// let email = "sk@google.com     "

// console.log(myname.trueLength());
// above is task


let myHeoes = ["thor","spiderman"]

let heroes = {
    thor: "hammer",
    spiderman: "sling",
    getSpidyPower: function(){
        console.log(`spidy power is ${this.spiderman}` );
    }
}

Object.prototype.hitesh = function(){
    console.log("hitesh is present in all");
}
myHeoes.hitesh()
heroes.hitesh()

Array.prototype.heyHitesh = function(){
    console.log("hitesh in array");
    
}
myHeoes.heyHitesh()



// inheritance

const User = {
    name: "sahil"
}
const Teacher = {
    makevideo: true
} 
const TeachingSupport = {
    isAvailable : true
}
const TASupport = {
    FullTime: true,
    makeAssisment: "JS Assisment",
    __proto__: TeachingSupport,
}

Teacher.__proto__ = User



// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)
//                      kon          , kiski prop.  access krega



// above task solution

let myname = "sahil    "
String.prototype.trueLength = function(){
    // console.log(`true length is ${myname.trim()}`);
    console.log(`true length is ${this.trim()}`);
    
    
}
myname.trueLength()

let email = "sk@google.com    "
email.trueLength()