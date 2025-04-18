/*-------------------Lecture 05-------------------------*/

// data types

"use strict" // treat all js code as newer version

// alert(5+5) // we are using node js ,not browser

console.log(3
    +3           // it executes but it is not readable , it is bad practices
)

let name ="raj"
let age =23;
let isLoggedIn = false

// number range => 2 to power 52 or 53
// bigint -> for big number
// string=""
// boolean => true/false
// null => standalone value    let temp = null;
// undefined =>   let state;  => console.log(typeof state) is undefine

console.log(typeof age)

console.log(typeof null) // object

console.log(typeof undefined) // undefined


 // console.table([typeof  age,name,isLoggedIn,null,undefined]) 
  /*  multiple separate arguments, not a single array or object — so only the first one
      (typeof age) is passed to console.table(), and the rest are ignored or cause an error.
  */

      // syntax =>   console.table({ key1: value1, key2: value2 });
      console.table({
        age: typeof age,
        name: typeof name,
        isLoggedIn: typeof isLoggedIn,
        nullType: typeof null,
        undefinedType: typeof undefined
      });                    
           //This is using console.table() to display a JavaScript object in a table format in the console.




// But
// syntax  => console.table([value1, value2, value3]);
console.table([name,age,isLoggedIn]) 


let fruits = ["apple", "banana", "cherry"];
console.table(fruits);



const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
  ];
  console.table(users);
  
