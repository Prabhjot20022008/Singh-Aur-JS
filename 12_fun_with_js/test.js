const myArr = [];
// %DebugPrint(myArr);

// Continous & Holey Array

// SMI  (small integer)
// Packed element
// double (string, float, function)



// PACKED_SMI_ELEMENTS // continous // best type of array for optimisation // it contains only small integer as element
const arr2 = [1,2,3,4,5]
console.log(arr2);

arr2.push(6.0); // PACKED_DOUBLE_ELEMENT 

arr2.push('7') // PACKED_ELEMENTS 

// *** once the array is degraded (double or string added) then it can never be upgraded (or made PACKED_SMI_ELEMENTS) again // even using pop() will not make it PACKED_EMI_ELEMENTS ***


arr2[10] = 11 // HOLEY_ELEMENTS // it has multiple types with gaps 

console.log(arr2);
console.log(arr2.length); // 11
console.log(arr2[9]); // undefined // tried to access empty position


// ** HOW ARRAY FIND AN INDEX **
// bound check (checks whether it is out of array range) // it is quite easy
// hasOwnProperty(arr2, 9)
// hasOwnProperty(arr2.prototype, 10)
// hasOwnProperty(Object.prototype, 10) // very expensive

// holes are very expensive in JS 


const arr3 = [1,2,3,4,5]
console.log(arr3[8]); // out-of-bound // 1-step check // DONE
console.log(arr3[2]); // in bound // element present (no holes) // 2-step check // DONE


// CONTINOUS TYPE  OPTIMISATION => SMI > DOUBLE > PACKED  (HIGH OPTIMISED)
// HOLES TYPE  OPTIMISATION => H_SMI > H_DOUBLE > H_PACKED (LOW OPTIMISED)


// less optimised approach
const arr4 = new Array(3)
// just three holes // HOLEY_SMI_ELEMENTS
arr4[0] = "1"; // HOLEY_ELEMENTS // H_PACKED
arr4[1] = "2"; // HOLEY_ELEMENTS // H_PACKED
arr4[2] = "3"; // HOLEY_ELEMENTS // H_PACKED

// better optimised approach
const arr5 = []; // SMI_ELEMENTS
arr5.push('1') // PACKED_ELEMENTS // continous 
arr5.push('2') // PACKED_ELEMENTS // continous 
arr5.push('3') // PACKED_ELEMENTS // continous 

// another example
const arr6 = [1,2,3,4,5] // PACKED_SMI_ELEMENTS
arr6.push(NaN) // PACKED_DOUBLE
arr6.push(Infinity) // PACKED_DOUBLE // now it can never upgraded to PACKED_EMI_ELEMENTS