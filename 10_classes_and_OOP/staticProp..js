class User{
    constructor(Username){
        this.Username = Username
    }
    logMe(){
        console.log(`${this.Username} is logged In`);
    }
    static createId(){
        return "123"
    }    
}

class teacher extends User{
    constructor(Username, email){
        super(Username)
        this.email = email
    }
}

const chai = new User('sk')
const tea  = new teacher('skk','sk@ff.com')
chai.logMe()
tea.logMe()
console.log(tea.createId());    // error       static createId
console.log(chai.createId());   // error       static createId

