## Basics of HTML, CSS & JS  

### HTML List  
Classes and IDs  
CSS colors  
Java Script confirm  
Conditional switch  

#### Using colour in CSS - three ways
 - normal commend for colour: 
 h1{
    color: green;
 }
 - rgb/hex codes (what's hex??) - in the past it was 'rgba'
 h1 {
    background-color: rgb (255, 255, 255, 0.7);
    color: rgb(128, 69, 116, 0.5);
 }
 - :root selector - represent the <html> element and is identical to the swlwctor html, except that its specificity is higher. Using CSS Custom properties. You creating variables in css 
 :root {
--grn: #606c5d;
--pnk: #fff4f4;
--beige: #7e6c4
--mainbackgroundcolor: #f1c
 }
 h1 {
    background-color: var(--pnk);
 }
> **Google Fonts** do not choose all font's weight as it will slow down our page, choose what's needed as we won't use them all anyway
 #### Classes and IDs
- attribute (src, alt)
- class - traget sth specifically, we van give class to pretty much everything. to be used for more than one element
    <p class="content"Here is some content>

- ID is unique, be only usee once per HTML doc, we can have many IDs though. Specific for one element 
#more-content {
    background-color: green;
}
**List Target**
ul,
ol {
    list-styling: none;
}

section ul {
    list-style: disc;
}

padding - creates size inside box
margine - 

> Check specificity - each selectop have points, some  
> selectors can overwrite others. *{} can be   
> overwritten by >h1 {}

#### Java Script - confirm

#### Switch statement 
- when js reaches a break keywod ir breaks out of the switch block
- this will stop tje exectution inside the switch block
- it is not necessery to break the ;ast vase in tjhe switch block or block breaks (enss) there anyway
- the switch ecpression is evaluated onece
- the value of the exoression is compared with with the valyes of each case
if there os a matcjh the associated block of code is executed
if thre os mpo ,acy yje degait block of the code is exceuted
- it can be added inside finction

Use the *story*

### Chris's Demo
[Chris's Demo 201-02](https://github.com/CSEAMAN3/201-d5-class-demos/tree/main/201-class-02)  

### Readings  
[Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)  
[HTML Text Fundamentals](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)  
[ HTML Advanced Text Formatting](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)  
[How CSS Is Structured](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured)  
[JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)  
[Making Decisions In Your Code – Conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)  
[Bookmark and Review](https://chris.beams.io/posts/git-commit/)  

### Questions and Answers
1. Why is it important to use semantic elements in our HTML?  

2. How many levels of headings are there in HTML?  

3. What are some uses for the <sup> and <sub> elements?  

4. When using the <abbr> element, what attribute must be added to provide the full expansion of the term?  

5. What are ways we can apply CSS to our HTML?  

6. Why should we avoid using inline styles?  

7. Review the block of code below and answer the following questions:  
    - What is representing the selector?  

    - Which components are the CSS declarations?  

    - Which components are considered properties?  

11. What data type is a sequence of text enclosed in single quote marks?  

12. List 4 types of JavaScript operators.  

13. Describe a real world Problem you could solve with a Function.  

14. An if statement checks a __ and if it evaluates to ___, then the code block will execute.  

15. What is the use of an else if?  

16. List 3 different types of comparison operators.  

17. What is the difference between the logical operator && and ||?  

## Things I want to know more about
