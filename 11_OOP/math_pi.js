console.log(Math.PI);
Math.PI = 5 // can't overwrite the value directly
console.log(Math.PI);


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

descriptor.writable = true; // we cannot do this, it is because the value is very much rootly coded in the JS system
console.log(descriptor);


const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai : function(){
        console.log("Chai nhi banii");
    }
}

console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai)) // undefined // bcoz we have not specified the property

console.log(Object.getOwnPropertyDescriptor(chai, "name")) // ginger chai // as property is specified



// DESRUPTING PROPERTIES
Object.defineProperty(chai,"name", {  // (obj,property,changes to be made written in an object)
    // writable : false,
    enumerable: false, // name cannot be iterated
})

console.log(Object.getOwnPropertyDescriptor(chai, "name")) // properties get changed

// using for-in loop
console.log("Using for-in loop");
for(let key in chai){
    if(typeof chai[key] != 'function'){
        console.log(`${key} : ${chai[key]}`)
    }
}

console.log();

// using for-of loop
console.log("Using for-of loop");
for(let [key,val] of Object.entries(chai)){
    if(typeof val != 'function'){
        console.log(`${key} : ${val}`);
    }
}