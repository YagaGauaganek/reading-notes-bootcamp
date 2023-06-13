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

> Check specificity - each selectopr have points, some  
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

Use the story 