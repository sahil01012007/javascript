// for of loop

const myArray = [1,2,3,4,5]
for (const arr of myArray) {
    console.log(arr);
    
}

const string = "hello world"
for (const str of string) {
    console.log(str);
    
}

const MyMap = new Map()     // maps are not iterable
MyMap.set('IND','HINDI')
MyMap.set('UK','ENGLISH')
MyMap.set('GERMANY','GERMAN')
MyMap.set('UK','ENGLISH')      // does not take duplicate values
//console.log(MyMap);

for (const [keys, values] of MyMap) {
    console.log(`${keys} - ${values}`);
    
}

const MyObj = {                  // object is not iterable 
    name: "sahil",
    age: 17
}
for (const object of MyObj) {
    console.log(object);
    
}