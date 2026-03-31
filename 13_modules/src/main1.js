// import * as mymodule from './module1.js' // importing an entire module

import calc, {add,subtract,multiply,divide} from '../modules/module1.js' // importing the default export from module1.js along with the named exports

console.log(add(5,4));
console.log(subtract(5,4));
console.log(multiply(5,4));
console.log(divide(5,4));
calc(5,4);

// running this file also runs the code inside module1.js