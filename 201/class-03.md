##  Lists, The Box Model, and Loops

If not reset css file - then browser add elements itself (default by the browser)

### Box Model in CSS
- display:
 - flex and grid - very powerful, to learn later in the course
 -max-height - 100px - it is absolute, it cannot be altered 
 max-/min-hight - preferable to use in css 
 - overflow: scroll;  - other options:
    - overflow-y - vertical
    - overflow-x - horizontal
- padding 
- 20px is one unit 
- 20 px 10px - top amd bottom, rigt and left 
- 20px 10px 30px 40px - clock-wise order

### Java Script

- use strict
- link it in to html
- add console.log to make sure it is working

Sudocode (??):
Welcomimg user by alert
Difference between empty string and null
while loop

**Lab**

#### Array  

 **Arrays**  

Arrays allow us to hold more than one valoe in a single variable  
Array indexes start form 0  
Each item in the array is named an element  
Arrays should be declared using const as they cannot be reassigned  
Arrays can be manipulated using variety of array method  

**Array methods we will look at today**
.length - tell us the length of the array
.push - adds an element to the end of the array
.pop - removes the element from  the end of an array
.unshift - add an element to the start of an array
.shift - removes an element to the start of an array
.indexOf -tells you and index of an array (index start from)  

more often than not the 'for' loop is used to loop through an array

    the infinite loop: 
    const arr = [0, 1, 2, 3];

    for (let i = 0; i < arr.length; i++) {
        arr.push(i + 1);
        console.log(arr[i]);
    }


**Lighthouse screenshoot code**
  >  ! [Screenshot of Accessibility Score] (/LighthouseScore.png)
  >  OR
  >  ! [Screenshot of Accessibility Score] (LighthouseScore.png)


### Chris's Demo  
[Chris's Demo 201-03](https://github.com/CSEAMAN3/201-d5-class-demos/tree/main/201-class-03)  

### Readings 
[Learn HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)  
[Ordered Lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)  
[Unordered Lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)  
[Learn CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)  
[The Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)  
[Learn JS](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)  
[Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)  
[Operators and Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)  
[Conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)  
[Loops](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code)  

### Questions ans Answers:  
1. When should you use an unordered list in your HTML document?  
When we want to creat list of items and the items don't have to be in particular order. Unordered list represented by bullet points.  

2. How do you change the bullet style of unordered list items?  
By using list-style-type. 

3. When should you use an ordered list vs an unorder list in your HTML document?  
Depending on propose we wont use data for. If list of items is not relevant then we can use unordered list. If we require sequential list of items we should use order list.   

4. Describe two ways you can change the numbers on list items provided by an ordered list?  

5. Describe the CSS properties of margin and padding as characters in a story. What is their role in a story titled: “The Box Model”?  

6. List and describe the four parts of an HTML elements box as referred to by the box model.  

7. What data types can you store inside of an Array?  

8. Is the people array a valid JavaScript array? If so, how can I access the values stored? If not, why?  

9. List five shorthand operators for assignment in javascript and describe what they do.  

10. Read the code below and evaluate the last expression and explain what the result would be and why.  

11. Describe a real world example of when a conditional statement should be used in a JavaScript program.  

12. Give an example of when a Loop is use  

## Things I want to know more about