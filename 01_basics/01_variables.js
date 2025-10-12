const accountId = 513162
let accountEmail = "prabhjot@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" // variable declared without any keyword (just for fun)
let accountState; // output is undefined as no value assigned

// accountId = 2 (cannot change const)

accountEmail = "singh@google.com"
accountPassword = "00000"
accountCity = "New Delhi"

console.log(accountId);

/* 
Prefer not to use var because of Scope-issues and functional-scope
*/


// Get tabular representation
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);