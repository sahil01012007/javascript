function saymyname() {
    // console.log("S");
    // console.log("A");
    // console.log("H");
    // console.log("I");
    // console.log("L");
}
saymyname()

function addition(number1, number2){
 //   // console.log(number1+number2);
 //   let result = number1+ number2
 //   // console.log("sahil");  // will work
 //   return result // after return it will print nothing
 //   // console.log("sahil"); // will not work


            //   another way 


      return number1+ number2
    
}

const result= addition(3, 4)
console.log(result);


function loginUserMsg(username="sam") {
    if(username===undefined){
        console.log("plz Log In");
        return
    }
    return `${username} just logged in`

}

// console.log(loginUserMsg("sahil"));
console.log(loginUserMsg("sahil")); // "sahil" will overwrite "sam" 




function calculateCartPrice(val1, val2, ...num1) {
    return num1
    
}
console.log(calculateCartPrice(200, 400, 500, 6000);


const user = {
    username: "sahil",
    price: 999
}

function handleobject(getuser) {
    return `${getuser.username} is the user and its price is${getuser.price}`
     
}
// console.log(handleobject(user));

console.log(handleobject({
    username: "sahil",
    price: 999
}));


const myArray = [100, 200, 300]

function handleArray(getArray){
    console.log(getArray[1]);
    
}

// handleArray(myArray)
handleArray([100, 200, 300])