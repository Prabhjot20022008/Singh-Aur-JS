// Singleton object
// const tinderUser = new Object();

// // Object Literal
// const tinderUser = {};
// tinderUser.id = "123abc";
// tinderUser.name = "Prabh";
// tinderUser.isLoggedIn = false;

// // console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "Prabhjot",
//             lastname: "Singh",
//         }
//     }
// }
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b",};
// const obj2 = {3: "a", 4: "b",};
// const obj4 = {5: "a", 6: "b",};

// // const obj3 = {obj1,obj2}; // not a better value
// // const obj3 = Object.assign({}, obj1, obj2,obj4); // {} is used as an target object where the new object will be returned

// const obj3 = {...obj1, ...obj2,...obj4}; // a BETTER-WAY than previous ones (SPREAD-OPERATOR)
// console.log(obj3);

// // HOW OBJECTS ARE GIVEN BY DATA-BASES
// const users = [
//     {
//         id:1,
//         email: "one@gmail.com",
//     },
//     {
//         id:2,
//         email: "two@gmail.com",
//     },
//     {
//         id:3,
//         email: "three@gmail.com",
//     }
// ];
// // console.log(users[1].email); // two@gmail.com

// console.log(tinderUser);

// // OBJECTS => ARRAYS
// console.log(Object.keys(tinderUser)); // converts into array of keys
// console.log(Object.values(tinderUser)); // converts into array of values
// console.log(Object.entries(tinderUser)); // converts into array of values and keys 

// // check whether a property is present or not
// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true
// console.log(tinderUser.hasOwnProperty("isLogged")); // false 

// OBJECT DE-STRUCTURE
const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// new syntax for de-structuring objects
const {courseInstructor: ins} = course;
console.log(ins);

// JSON AND API

// {
//     "name": "hitesh",
//     "courseName": "js in hindi",
//     "price": "free",
// }

[
    {},
    {},
    {}
]

