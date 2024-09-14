const NewNums = [1,2,3,4,5,6,7,8,9]
// const TotalNums = NewNums.reduce( function (acc,currval) {
//     return acc + currval
// } , 0 )

const TotalNums = NewNums.reduce( (acc,currval) =>(acc+currval) , 0 )

console.log(TotalNums);

const shopping_cart = [
    {
        course: "js course",
        price: 2999
    },
    {
        course: "py course",
        price: 999
    },
    {
        course: "web dev course",
        price: 3999
    }
]

const MyTotal = shopping_cart.reduce( (acc,currval) => acc+currval.price   ,0)
console.log(MyTotal);
