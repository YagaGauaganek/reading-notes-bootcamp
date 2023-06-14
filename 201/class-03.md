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


