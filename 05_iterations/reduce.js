// REDUCE
const myNums = [1,2,3];

const myTotal = myNums.reduce((acc,curr) => {
    // console.log(`acc: ${acc} and curr: ${curr}`);
    return acc+curr;
}, 0); // initial value => 0 (can be anything)

// console.log(myTotal);


// INTERESTING EXAMPLE
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
];

const totalPrice = shoppingCart.reduce((acc,curr) => {
    return acc + curr.price;
}, 0)

console.log(totalPrice);