import * as mymodule from '../modules/module1.js'; // importing an entire module

console.log(mymodule.add(5,4));
console.log(mymodule.subtract(5,4));
console.log(mymodule.multiply(5,4));
console.log(mymodule.divide(5,4));

mymodule.default(5,4); // we can access the default export using the name of the module followed by .default

console.log(mymodule.a); // we can also access the named exports using the name of the module followed by . and the name of the export
console.log(mymodule.b);