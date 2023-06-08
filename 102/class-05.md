## Read 06: Dynamic web pages with Java Script
HTML
CSS
Java Script

Variables - we can declare them:
1. 'var'-never use it
var hisName="Rich"
undefined
console.log (hisNAme)
undefined
2. let - (it replaces 'var')- use it; let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used; 'let' overwrite 'let'
let myName="Chris"
undefined
console.log(myName)
Chris
undefined
myName="Victor"
'Victor'
console.log(maName)
Victor
undefined
let banana
undefined
banadana=;m"Fruit"
'Fruit'
console.log (banana)
Fruit
undefined
3. const - use when value will never change; not changechable, constant variable
const henName="sam"
undefined
console.log (herName)
Sam
undefined
hername="Samantha"- error, assigment to constant variable


**camelcase** is naming things like this 'myVar' 'coolFunction' ect - It's called Camel case because it starts and ends with lower case but has the odd uppercase letter in the middle (like a camels back having humps, the text has capitals here and there).
lowercase then uppercase - remember we can't use spaces e.g. '*myName*'
';' - semi-colons tell the computer that they've reached the end of that command

In modern JavaScript, it is generally not recommended to use `document.write` for dynamically generating content. The `document.write` method is primarily used during the initial page load, and calling it after the page has finished loading can overwrite the entire document, leading to unexpected results.

Commiting out in HTML Ctr + /