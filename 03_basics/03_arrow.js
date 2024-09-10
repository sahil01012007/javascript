const user = {
    username: "sahil",
    price: 999 ,
    welcomemsg: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}
// user.welcomemsg()
// user.username = "sam"
// user.welcomemsg()

// console.log(this);


//  function chai(){
//     console.log(this);      
// }

// chai()



// function chai(){                   //  "this" mainly works in objects not in functions
//     let username = "sahil"
//      console.log(this.username);
    
//  }
//  chai()

// 


// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// const addtwo = (num1, num2) => num1 + num2

//const addtwo = (num1, num2) => (num1+ num2)

const addtwo = (num1, num2) => ({username: "sahil"})


console.log(addtwo(5, 7));

