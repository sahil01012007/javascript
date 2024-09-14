const myNums = [1,2,3,4,5,6,7,8,9]

// const Numbers = myNums.map( (num) => {
//     return num + 10
// } )
// console.log(Numbers);

const Numbers = myNums
         .map( (num) => num*10 )
         .map( (num) => num +1 )
         .filter( (num) => num>=60 )    // filter me true or false vala funda chlta hai

console.log(Numbers);
