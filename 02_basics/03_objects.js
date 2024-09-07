// singleton
// object.create
// object literals

const mysym = Symbol("key1")

const User ={
    name: "sahil",
    "full name": "sahil kharb",
    [mysym] : "mykey1",   //  way to represent a symbol in object[mysym], if we use sym then the output will be same but its datatype will not be same, also if we check its datatype by using typeof , then in both the cases the output will be string but that string is the datatype of the value of that key. but in interviews the correct method is using []
    email: "sahil@123.com"
}
  
console.log(User.email);
console.log(User["full name"]);
console.log(User[mysym]);

User.email = "sahil@google.com"
Object.freeze(User)
User.email = "sahilkharb@microsoft.com"
console.log(User);
"

