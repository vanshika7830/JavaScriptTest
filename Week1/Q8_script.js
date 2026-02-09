// -------------------------------Incorrect code----------------------------------------

/* sayHello();
function sayHello() {
  console.log("Hello");
}
sayHi();
var sayHi = function () {
  console.log("Hi");
};
*/

// -------------------------------------Reason??------------------------------------------
// The sayHello() function is a Function Declaration. In JavaScript, function declarations are completely hoisted to the top of their scope. This means the engine "loads" the entire function before any code is executed. Therefore, you can call sayHello() anywhere in the script, even before its definition.

/* - The sayHi variable is a Function Expression assigned to a var
- It hoists the variable declaration var sayHi; to the top and initializes it with undefined.
- When the code reaches sayHi();, the value of sayHi is still undefined.
- Because you cannot "call" undefined like a function, JavaScript throws a TypeError. */

// ------------------------------------Correct Code------------------------------------------
sayHello();
function sayHello() {
  console.log("Hello");
}

var sayHi = function () {
  console.log("Hi");
};
sayHi(); // Call it AFTER it has been defined