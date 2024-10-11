// ES 6

// class User {
//     constructor(UserName, email, password){
//         this.UserName = UserName
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
// }

// const chai = new User('sahil','sk@gmail.com','123')
// console.log(chai.encryptPassword());

// behind the scene

function User(UserName, email, password){
    this.UserName = UserName
    this.email = email
    this.password = password
    }


User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
const chai = new User('sk','sk@gmail.com',"123")
console.log(chai.encryptPassword());



