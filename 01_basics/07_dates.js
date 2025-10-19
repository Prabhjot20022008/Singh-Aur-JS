// Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); // object

// month starts from 0, not 1
let myCreatedDate = new Date(2023,0,23,5,3,53); // YYYY MM DD HR MIN SEC 
console.log(myCreatedDate.toLocaleString()); // 23/1/2023 5:03:53 am

let anotherDate = new Date("10-21-2025"); // MM DD YYYY
console.log(anotherDate.toLocaleString()); 

let timeStamp = Date.now();

// console.log(timeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); // gives second

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

let modifyDate = newDate.toLocaleString("default",{
    weekday: "long",
    timeZoneName: "longGeneric",
});

console.log(modifyDate);