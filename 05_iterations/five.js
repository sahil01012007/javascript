 // for each 

 const coding =["aa","bb","cc","dd"]

//  coding.forEach( function (val) {
//     console.log(val);
    
//  } )

//  coding.forEach( (item)=> {
//     console.log(item);
    
//  } )



// function printme(val) {
//     console.log(val);
    
// }
// coding.forEach(printme)




// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// } )


const MyCoding = [
    {
        languageName: "javascript",
        languageFileName: "js",
    },
    {
        languageName: "python",
        languageFileName: "py",
    },
    {
        languageName: "java",
        languageFileName: "java",
    }
]
MyCoding.forEach((item) => {
    console.log(item.languageName);
    
});