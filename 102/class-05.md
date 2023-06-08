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

### Use of variable in JS - copy from class

let myName="Yaga";
console.log(myName);

let myPet = "Fish" // this data type is a string

let myPetAge = 1 // this data type is a number

let petDetails = "My pet is" + myPetAge;
console.log (petDetails);

console.log(typeof petDetails);

let likesSwimming = true; // this data string is a boolean
console.log(likesSwimming);
console.log(typeof likesSwimming);

// There are also Arrays and Objects
// arethemic operators

let addition = 7 + 7 // + is for addition
console.log(addition);

let substraction = 5-2 // - is for substraction
console.log(substraction);

let multiplication = 10 * 10 //is for multiplication
console.log(multiplication);

let division = 15 /3 // / is for division
console.log(division);

let myNum = 5
let thisNum = ++myNum // ++ increments by one
console.log(thisNum);

let thatNum = --myNum // decrements by one
console.log(thatNum)

// Comparison operators

// == equal to "7" == 7
// === equal value and equal type "7" === 7
// != not equal
// !== not equal value and not equal type
// > greater than
// < less than
// >= greater than or equal to
// <= les than or equal to

// conditional statement 
// a conditional statement controls behaviour ina javascript and detemines whether or not a piece of code shoiuld rin or not.

if (myNum === 5) {
    console.log("Bingo");
}

 if(myNum == "five") {
    console.log("flamingo");
 }

 if (myNum === 6) {
    console.log("you will win 1 milion dollars");
     }else{ 
       console.log("if I had a million dollars to give away I wouldn't be teaching this course :(");
    }
    if (myNum === 10) {
        console.log("I'm on this corse to win Tims 3rd printed game");
    }else if (myNum === 3) {
        console.log ("I'm on thid coure beasue they told me ther was Pizza");
    }else {
        console.log("I'm on this course because I want to eat sleep code repeat!")
    }

    // To complete the lab you will need to know about few built in methods
    // prompt()
    // document.write()

    let userName = prompt("Hi user :) please tell me your name");
    console.log(userName);

    const welcomeMsg = alert("Welcome to my page " + userName);

    document.write("Hello " + userName + " thank you for visiting my site");

### Notes from Rich:
// Types of variables

// var is the original way to declare a variable and you can declare it like this
var item1 = "Watch";
console.log(item1);

// let is the new way to declare a variable - 'let' variables can be re-assigned (changed)
let item2 = "Mouse";
console.log(item2);
// const is a variable that can't be changed - it's value remains constant and can't be re-assigned (changed)
const item3 = "Coca Cola";
console.log(item3);

// Types of data in JavaScript

//String (text)
("This is a string");

// Number
10;

// Boolean (true or false)
true;
false;

// Conditionals in JavaScript - comparing data to understand if they match

// Equals

// This uses double equals which only checks the value.
if (item2 == "Mouse") {
    console.log("Yeah, that's right");
}

if (0 == 0) {
    console.log("Yep, 0 is 0");
}

// Because we are using double equals it will run the console.log because it isn't fussy about one of them being a string and the other a number
if (0 == "0") {
    console.log("Yep 0 is '0', I dont care about the data type");
}

// This uses triple equals which checks the value and the data type. Below we are comparing two 0's but one is a string and one is a number. This means the console.log won't run.
if (0 === "0") {
    console.log(true);
}

// Does not equal

// This uses != which only checks the value
if (item3 != "Coca Cola") {
    console.log("Nah, thats coke mate");
}

if (0 != "0") {
    console.log("Thats not 0");
}

// This uses !== which checks the value and data type
if (0 !== "0") {
    console.log("Thats a zero but it's a string, not a number");
}

// More than or less than

// Less than comparsion
// This will run the console log if 0 is smaller than 1
if (0 < 1) {
    console.log("0 is smaller than 1");
}
// This won't run the console log because one is not smaller than 0
if (1 < 0) {
    console.log(false);
}

// More than comparison
// This will run the console log if 1 is greater than 0
if (1 > 0) {
    console.log("1 is greater than 0");
}
// This won't run the console log because 0 is not greater than 1
if (0 > 1) {
    console.log(false);
}

// Using a prompt
// This will ask 'Please tell me your name'
let username = prompt("Please tell me your name");

// This will ask the user to confirm their name
let confirmation = confirm("So I can call you " + username + "?");

// This will console log 'Hi username' if they click OK on the confirmation
if (confirmation == true) {
    console.log("Thanks, Hi " + username);
}

// This will console log 'Sorry, I got your name wrong' if they click cancel on the confirmation
if (confirmation != true) {
    console.log("Sorry, I got your name wrong");
}

### Questions and Answers:
1. What are variables in JavaScript?
Variables are 'containers' for storing data. 
JavaScript Variables can be declared in 4 ways: 
- Automatically; 
- Using var - do not use it; 
- Using let - allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used; 'let' overwrite 'let'; 
- Using const - use when value will never change; not changechable, constant variable.
2. What does it mean to declare a variable?
It menas to cerate a variable, which cam be done by using varable mentioned above
3. What is an “assignment” operator, and what does it do?
 Assigns the value  to a variable, a property. The result of an assignment expression is the value assigned to the operand.
4. What is information received from the user called?
It is a prompt