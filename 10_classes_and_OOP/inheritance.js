class User{
    constructor(userName){
        this.userName = userName
    }
    logMe(){
        console.log(`${this.userName} is logged In`);
        
    }
}

class teacher extends User{
    constructor(userName, email, password){
        super(userName)
        this.email = email
        this.password = password
    }
    addCousre(){
        console.log(`a new course was added by ${this.userName}`);
        
    }
}

const tea = new User('sk')
tea.logMe()

const chai = new teacher('sk','sk@fb.com','999')
chai.addCousre()
// chai.logMe()    working

console.log(tea instanceof teacher);    // false
console.log(tea instanceof User);       // true
console.log(chai instanceof teacher);   // true
console.log(chai instanceof User);      // true



