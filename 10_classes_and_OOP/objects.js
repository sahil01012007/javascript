function multiplyBy5(num){
    return num*5
}
multiplyBy5.power = 2

// console.log(multiplyBy5(3));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.printMe = function(){
    console.log( `score is ${this.score++}`);
    
}

const chai = new createUser('sk', 25)

chai.printMe()