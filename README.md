1. What is the difference between var, let, and const?
   var : by using var we can redeclare or reassign a variable.var doesnot maintain block scope( if we declare a variable within a block scope using var , we access the variable outside the block scope ).var maintain only functional scope.

let: by using var we can reassign a variable but we cannot redeclare any variable.let maintains all type of scope(functional,block)

const: by using var we cannot redeclare or reassign any variable.const maintains all type of scope(functional,block)

2. What is the spread operator (...)?
   Ans: when we spread various type of data within array and object by using three dots(...).that is called spread operator

3.What is the difference between map(), filter(), and forEach()?
map: (.Map)---> this method calls a defined callback function on each element like loop of an array, and returns an array that contains the results.this method updated or modify values
Syntax :
array_variable.Map(defined callback function);

forEach: this is an array method which continue looping each element within an array but does not return any value.
filter: filters method is working condition based.it returns multiple elements or new array based on condition
array.filter((variable) => condition)

4. What is an arrow function?
   traditional function is hoisted but arrow function is not hoisted.
   the value of this in traditional function is object and the value of this in arrow function is undifined
   const variable_name = (parameters) => a oparator b; //single line arrow function
   const variable_name = parameter => x \* x; //execute with one parameter

5. What are template literals?
   To create dynamic html by using variable and expression within ${``} is called template literal or template string or dynamic string or backtic.it support multiline.ternary operator is using within template string.
