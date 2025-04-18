console.log("Nilesh Kuamr")

// node.js ,javascript file ko execute karata hai
/* open terminal check version of node.js 
   Run the js file using this command :- node test.js
*/
// 2. variable

// const, var and let

const accountId = 1234   // value can not change 

var accountPassword="12345"

let accountEmail= "nilesh@gmail.com"   // let:- we can change the value of accountEmail

accountCity="patna"   // it is possible but it is bad practise
console.log(accountCity)

accountEmail="nileshkr123@gmail.com"
console.log(accountEmail)

// accountId = 1432  // gives error 
console.log(accountId)


// account 2
accountPassword="342627"
accountEmail="Nk@gmail.com"
accountCity="Delhi"
let accountState;  // give undefine because it is not assign a value

console.log(accountId)
console.log(accountPassword)

// printing all variable in a table 
console.table([accountId,accountPassword,accountEmail,accountCity,accountState])



    