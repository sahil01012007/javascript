// for

for (let i = 0; i < 10; i++) {
    console.log(i);
    
    
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(`value of j ${j}`);   
    }
    console.log(`value of i ${i}`);
    
    
}




for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
        
        
    }
    
    
}

let myArray = ["a", "b", "c"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}


// break and continue


for (let i = 0; i < 11; i++) {
     
    if (i == 5) {
        console.log("breaked");
        break
    }
    console.log(i);
}

for (let i = 0; i < 11; i++) {
     
    if (i == 5) {
        console.log("continued");
        continue
    }
    console.log(i);
}

