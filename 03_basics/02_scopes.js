const a = 300

if (true) {
   let a = 10
   const b = 20
   var c = 30 
//    console.log(a);
   
}
// console.log(a);


function one() {
   const username = "sahil"
   function two() {
      const website = "youtube"
      console.log(username); 
   }
   // console.log(website);        // error
   two()
}
one()




if (true) {
   const username = "sahil"
   if (username === "sahil") {
      const website = "youtube"
      console.log(username + website);
      
   }
   // console.log(website);              // error
   
}
// console.log(username);                // error






console.log(addone(2))
function addone(num) {
   return num + 1
}
// console.log(addone(2))


console.log(addtwo(2))             // error
const addtwo = function (num) {
   return num + 2
}
//console.log(addtwo(2))