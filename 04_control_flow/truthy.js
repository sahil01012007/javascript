// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values
// all except falsy 
// some of them "0", `false`, " ", [], {}, function(){}

const useremail = "s@google.com"
if (useremail) {
    console.log("user got mail");
    
} else{
    console.log("user not have gmail");
    
}

const usermail = []

if (usermail.length === 0) {
    console.log("array is empty");
    
}
const emptyobj = {}
if (Object.keys(emptyobj)) {
    console.log("obj is empty");
    
}


// Nullish Coalescing Operator (??):  null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 5
// val1 = undefined ?? 5
val1 = null ?? 10 ?? 20

console.log(val1);


// terniary operator

// condition ? true : false

const iceteaprice = 100
iceteaprice <=80 ? console.log("less than 80"): console.log("more than 80");

