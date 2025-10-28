const coding = ["js","ruby","java","python","cpp"];

const values = coding.forEach((item) => { // for-each doesnot return values
    // console.log(item);
    return item;
});

// console.log(values); // undefined // no value returned



// FILTER
const myNums = [1,2,3,4,5,6,7,8,9,10];

// const evenNums = myNums.filter((num) => {
    //     // return num%2==0; // use return if we open scope // explicit return
    // });
    
const evenNums = myNums.filter(num => num%2==0);
// console.log(myNums); // original array
// console.log(evenNums); // filtered array


// DOING SAME USING FOR-EACH LOOP
const anotherNums = [];
myNums.forEach((num) => {
    if(num%2==0){
        anotherNums.push(num);
    }
});
// console.log(anotherNums);


// LEARNING FOR HANDLING DATABASE INFO
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


const historyBooks = books.filter(bk => bk.genre==="History");
// console.log(historyBooks);

const publishBook = books.filter(bk => {
    return bk.publish>=1995 && bk.genre==="History"
});
console.log(publishBook);
