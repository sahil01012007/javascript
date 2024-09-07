// dates

let myDate = new Date()





// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());

console.log(typeof myDate);

// let myCreatedDate = new Date(2023,2,23)
// console.log(myCreatedDate);

let myCreatedDate = new Date("2-12-2024") // month-date-year
// console.log(myCreatedDate.toLocaleString());





let myTimeStamp = Date.now()





// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth());

// `${newDate.getDay()}` and the time is

console.log(newDate.toLocaleString(`default`, {
    dateStyle: "long"
}));







