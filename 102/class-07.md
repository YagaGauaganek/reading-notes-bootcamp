## Operatos and Loops

[ ] - array
"" - string
### [Expressions and Operators](https://canvas.instructure.com/courses/6895894/assignments/37682690/submissions/91737300)  
> Focus only on Comparison operators and Assignment operators.  

### [Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)  
> Focus only on for statement and while statement loops.

### Questions and Answer:  
1. What is an expression in JavaScript?  
It is a valid unit of code that resolve the value. We have two types of expressions:  
- 1st one has side effects (assignes value), e.g., x = 16 ('=' operator assings value to the variable)  
- 2nd one only evaluates, eg 4 + 5 (operator '+' adds value and produces new one )  
2. Why would we use a loop in our code?  
Loops are whay to shortcut the code. For example code may have hundreds of lines, but it can be writen just in few lines of code. That helps to repeat it as many times as needed. With a loop statement can be executed again and again.  
3. When does a for loop stop executing?  
When we use a *break* statement, we can use it with a label
4. How many times will a while loop execute?  
Until the condtion is true:

    while(answer != 16) {
        answer = prompt ("Can you guess how many film cameras do I have?");
        if (answer !=16){
            alert("Try Again! But mind that number can change very soon!");
        } else {
            alert ("Congratulations! However it can be more soon ;)")
        }
    }

