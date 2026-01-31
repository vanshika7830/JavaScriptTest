// -------------------------- Question 1--------------------------------------------------
/* Q1. Predict the output of the above code.
- undefined (from console.log(a))
- ReferenceError: Cannot access 'b' before initialization (The script stops here)*/

// -------------------------- Question 2--------------------------------------------------
/* Q2. Explain briefly: 
1.Why a prints undefined 
- Variables declared with var are hoisted to the top of their scope. However, only the declaration is hoisted, not the assignment

2.Why b throws an error 
- Variables declared with let (and const) are also hoisted, but they enter a Temporal Dead Zone (TDZ). They cannot be accessed until the code execution reaches the line where they are defined. Accessing them early triggers a ReferenceError.

3.Why c is undefined inside the function
- Just like a, var c is hoisted to the top of the function scope. Within the test() function, c is recognized as existing, but the value 30 hasn't been assigned to it yet when the console.log executes.*/

// -------------------------- Question 3--------------------------------------------------
/*Q3. Identify the line that causes the error.
- The line causing the error is: console.log(b) becuase it is a let variable and inside TDZ.*/

// Rewritten Code
var a = 10;
let b = 20;
console.log(a); 
console.log(b); 

function test() {
  var c = 30; 
  console.log(c); 
}
test();