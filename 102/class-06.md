## Programming with Java Script

### Functions - notes from class
1. Strict - almost all browser use them

    hoisted function

    //function exspression - we can declare it as variable

    ()=>{} - check this function

    Nan - not a number
    envoking function - calling the function

    Using console helps to spot errors

    Initialization

    "&&" say ant - condition must be tru, conditions are more complex
    '||' - is all, either the condition is true it will do it


### Control flow
The control flow is the order in which the computer executes statements in a script.  
Control flow means that when you read a script, you must not only read from start to finish but also look at program structure and how it affects order of execution.  
The script uses a conditional structure or if...else, so that different code executes depending on whether the form is complete or not.  
Typical script in Java Script includes manu control structures:
- conditionals  
- loops  
- functions - (function can include loop)  

### [Java Script Functions](9https://www.w3schools.com/js/js_functions.asp)
A JavaScript function is a block of code designed to perform a particular task.  
A JavaScript function is executed when "something" invokes it (calls it).  
**Function invocation**  
The code inside the function will execute when "something" invokes (calls) the function:  
- When an event occurs (when a user clicks a button)  
- When it is invoked (called) from JavaScript code  
- Automatically (self invoked)  
**Function Return**  
- When JavaScript reaches a return statement, the function will stop executing
- If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement  
**The () Operator**  
The () operator invokes (calls) the function  
**Functions Used as Variable Values**  
- Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations  
**Local Variables**  
- Variables declared within a JavaScript function, become *LOCAL* to the function  
- Local variables can only be accessed from within the function  

**[Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators) !!**  
**[Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)**  



### Questions and Answers:  

1. What is control flow?  
This i the order in which computer executes statements of the script.  
2. What is a JavaScript function?  
Functions are fundamental for Java Script. Can be understood as building blocks. Function in JS is similar to a procedure: set of statement performs a task or caclutes a value. To use function, you must define it  
3. What does it mean to invoke - or call - a function?  
Invoking (or calling) the function is bassically telling it to run. Also invoiking and calling can be little be confusing and some developers state that there is a defference between calling and invoking, which is very subtle in semnatcis: *you invoke a function, you are letting something run it*  
4. What are the parenthesis () for when you define a function?    
To make it more cleary to understand we call parenthesis s place in function where we name it. Their use is for grouping and containing expressions and parameters. Some functions have no parameters and in this case, the space between parentheses is blank.  