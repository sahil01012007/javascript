// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named iife
    console.log("DB CONNECTED");
})() ; // important to put ;

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})("sahil")