const user = {
    username : "alien.x",
    inGameName:"UA-ALIEN.X",
    Rank : "grandmaster",

    getUserDetails: function () {
        console.log("got user details");
        console.log(this.username);
        console.log(this);
        
    }
}
// console.log(user);
// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, inGameName, Rank){
    this.username = username
    this.inGameName = inGameName
    this.Rank = Rank
    return this
}
const userone = User("sk","xyz","heroic")
console.log(userone);





// const output1 =  User("rorri", "AE-RORRI","master")
// const output2 =  User("silence", "AE-RORRI","heroic")
// console.log(output1);

// output ----  of output2..because original me change hogya ek naya istance nhi bana

// const output3 = new  User("rorri", "AE-RORRI","master")
// const output4 = new  User("silence", "AE-RORRI","heroic")
// console.log(output3);

// output -------  of output 3 only, no overwriting as new keyword is there


// new keyword working -----
// step1-- a new instance/empty object will create
// step2-- this function arguments will inject in it


// constructor is basically reference of its own

