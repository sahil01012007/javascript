// ===, !==

// const val1 = 100
// if (val1>10) {
//     const name = "sahil"
//     console.log("yes greater");
    
// } else {
//     console.log("no");
// }

// console.log(name);                   // not run scope funda

const balance = 10000

// if (balance>500) console.log("more"),   // without {}
// console.log("greater");

if (balance<500) {
    console.log("less than 500");
    
} else if (balance<750) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");     
}


const userloggedin = true
const DebitCard = true
const loggenInfromGmail = false
const loggenInfromGoogle = true

if (userloggedin && DebitCard) {
    console.log("logged in successfully");  
}
 if (loggenInfromGmail || loggenInfromGoogle) {
     console.log("loggen in");
     
}
 