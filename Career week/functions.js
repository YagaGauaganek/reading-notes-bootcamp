//how the function is made


//defining function
function sayHello() {
    console.log("hello world")
}

//invoking/calling function
sayHello();


//parameters and arguments
function greet(name) {
    console.log("hello" + name)
}

greet("Rich");

//return value
function add (a, b) {
    let answer = a + b;
    return(answer);
}

let sum = add(2,3)

console.log(sum);

//function scope
// let name = "peter"; hoisted

function showName() {
    let name = "alice";
    console.log(name);
}

showName();
console.log(name);

//anonymous function - function that doesn't have name

let nameless= function() {
    console.log("I don't have a name")
}

nameless();

//function as metaphor
function bakeCookies(sugar, flow, chocolateChips){
    let oven = 200;
    let bakingTime = 12;
    let cookieDough = sugar + flour + chocolateChips;
    let cookies = (cookieDough = oven) * bakingTime;
    return chocolateChips + "cookies"
}

let milkChocolateChips = bakeCookies("caster sugar", "plain white flour", "milk chocolate chips");

let darkChocolateChips = bakeCookies("caster sugar", "plain white flour", "dark chocolate chips");

let whiteChocolateChips = bakeCookies("caster sugar", "plain white flour", "white chocolate chips");

let rubyChocolateChips = bakeCookies("caster sugar", "plain white flour", "ruby chocolate chips");

console.log(milkChocolateChips);
console.log(darkChocolateChips);
console.log(whiteChocolateChips);
console.log(rubyChocolateChips);
