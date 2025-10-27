// FOR-EACH LOOP
const coding = ["js","ruby","java","python","cpp"];

// coding.forEach(function (item){ // using normal function
//     console.log(item);
// });

// coding.forEach((item) => console.log(item)); // using arrow function


function printMe(item){ // USING A SEPERATE NORMAL FUNCTION
    console.log(item);
}

// coding.forEach(printMe);

// COMPLETE USE OF FOR-EACH
coding.forEach((item,idx,arr) => {
    // console.log(item,idx,arr);
})

// BEST USE OF FOR-EACH // GETTING DATABASE VALUES
const myCoding = [
    {
        langName: "javascript",
        langFile: "js"
    },
    {
        langName: "java",
        langFile: "java"
    },
    {
        langName: "python",
        langFile: "py"
    },
]

myCoding.forEach((item) => {
    console.log(`Langauge : ${item.langName}`);
    console.log(`Extension : ${item.langFile}`);
})