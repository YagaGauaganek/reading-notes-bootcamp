## Domain Modeling, Intro to the DOM, and Object Literal Notation

[Java Script object basis](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)

[Intro to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)


### DOM  

- allows us to manipulate with page 
- we are using DOM to access documents and its elements
- DOM is not part of js
- not a programming languaue, independent from programming langauage
- will dynamically change page (?)

Manipulating script with DOM by using document - two important elements to use:  
- **appendChild**  
- **setAttribute**   

### How to use DOM with JS  

### Lab 06 - Salmon Cookies  
#### Guidence for lab-06  
- create a repository on Github named cookie-stand  

- set this up with a README.md file not a licence  

- Clone the repository to you local machine  
- open the project in VSCode
- create:  
    index.html  
    sales.html  
    style.css  
    app.js  
- enter the biolerplate code for the html files and link your style.css and app.js files  
- in app.js  
- create an object literal named seattle  
- inside the object create key / value pairs for:  
    minCustPerHour  
    maxCustPerHour  
    avgCookiesPerCust  
    customersEachHour - set this to an array with elelment that store a number for each hour the store is open.  
    cookiesEachHour - set this to an array with elements that store a number for the cookies sold for each hour the store is open  
    totalDailyCookies - initialise this to number - the number is all your numbers from cookiesEachHour added together.  
    Note: The properties above should have hard coded values at this stage.  
- In your html file:  
    - inside the body element nest a div and give it an id of container.  
- In your app.js file:  
    - at the top of the file declare a variable that get the div element by its id container  
**NOTE IMPORTANT:** add a storeName property to your object as the first key / value pair and set the value to the name of your object. for example storeName: "seattle"  
- create a render method inside your object that:    
    - performs dom manipulation to create:  
    article - as a container  
    h3 - store title  
    ul for the list of hours and cookies sold  
    a loop to create each list item  
> **Note:** Your list items should read for example 6am: 16 cookies.  
- Therefore you should declare a variable named hours at the top of app.js (outside of your object not inside your object). This should be eqaul to an array that stores strings for each hour the store is open.  
**Example:**
    const hours = ["6am", "7am", "8am",......ect]
    outside of the object create a function that generates a random number for customers per hour based on the minCustPerHour and maxCustPerHour object properties. This should have parameters of min and max to take arguments when invoked.  
- remove the elements from the following arrays to make them empty arrays:  
    customersEachHour - set this to an empty array  
    cookiesEachHour - set this to an empty array Also set:  
    totalDailyCookies - initialise this as 0  
- inside the object create the following methods:  
    calcCustomersEachHour  
    calcCookiesEachHour  
- The calcCustomersEachHour method should:  
    use a loop  
    an array method  
    the random Number function  
- the calcCookiesEachHour method should:  
    invoke the calcCustomersEachHour  
    use a loop  
    have a variable that stores the product of the number customer for the hour by the avgCookiesPerCust  
    use an array method to add the variable to the cookiesEachHour array  
    use an operator to reassign the value of totalDailyCookies based on the variable the stores the product of the number customer for the hour by the avgCookiesPerCust  
- The calcCustomersEachHour method should:  
    use a loop  
    an array method  
    the random Number function  
- the calcCookiesEachHour method should:  
    invoke the calcCustomersEachHour  
    use a loop  
    have a variable that stores the product of the number customer for the hour by the avgCookiesPerCust
    use an array method to add the variable to the cookiesEachHour array  
    use an operator to reassign the value of totalDailyCookies based on the variable the stores the product of the number customer for the hour by the avgCookiesPerCust  
- Your render method should invoke the the calcCustomersEachHour and then the calcCookiesEachHour as the first thing it does before doing any of the dom manipulation.  

1. How would you describe an object to a non-technical friend you grew up with?  
Object can be compared to a container that holds reletaed and relevant information and function together. As with similar real-life object has characteristics and functions, as in Javascript an object has properties and can perform actions. Flet's take real life object like a mobile phone. Its properties can be colour, brand, model, its action can be taking or making call, being able to use apps and so on, and so on. JS objects work in similar way, allowing us to organize and work with data in structured and convenient manner.  
2. What are some advantages to creating object literals?  
*object literals* - way to define and create objects using concise syntax; also reffered to as object initializers. Object literals allow us to define properties and their valuse directly within curly braces `{}` without the need for constructor function.  
*Advantages*:  
- Simplicity and Readability  
- Quick object creation  
- Flexibility  
- Property Value Expressions  
- Shorthand property Definition   
- Object Composition  
- Ease of Data Manipulation - Object literals make it convenient to access, modify, and manipulate object data using **dot notation** or **bracket notation**  
> Example:  
const cat = {  
  name: "Bob",  
  age: 0,  
  interests: ["cuddling", "chasing string", "catnip"],  
  getAge: function () {   
  console.log(this.age);  
    }  
};    
3. How do objects differ from arrays?  
OBJECTS:  
- used to store unordered data with key-value pairs, providing named access to values  
- ideal for modeling real-world entities with properties and behaviors  - 
ARRAYS:
- used to store ordered collections of data accessed by numerical indices (s. index) 
- arrays are suitable for storing and manipulating lists of related data
4. Give an example for when you would need to use bracket notation to access an object’s property instead of dot notation.  
- We use bracket notation when we want to acces an object's property, when the property name needs to be dynamically determines or when property name includes special characters or spaces. bracket notation is used, allowing us to access the properties by providing the property name as a string enclosed in square brackets.   
- Using dot notation to access these properties would result in a syntax error.  

const cat = {  
  name: "Bob",  
  age: 0,  
  interests: ["cuddling", "chasing string", "catnip"],
};   
const propertName = "name";  

5. Evaluate the code below. What does the term this refer to and what is the advantage to using this?  
- term `this`refers to the current object `dog`on which the method `humanAge` is being called  
- it refers to the objecy that owns the method  
- `this` allows the method to access and reference the object's own properties and methods dynamically. In this specific example, `this.name` and `this.age` are used within `humanAge` method to retrive the specific `name` and `age` properties of `dog` object  
- `this` enables code's reusability and flexibility  as the methid can work witj dofferent instances of objects that have the same property names but different values. It avoids hard-coding specific object names or property values and allows for more generic and adaptable code.   
6. What is the DOM?  
-abbreviation for Document Object Model  
-programming interface provided by web browsers that represents HTML (or XML)structure of a web pages as a tree-like structure  
- allows js to dinamically access and manipulate the elements, attributes and content of a web page  
7. Briefly describe the relationship between the DOM and JavaScript.  
avaScript interacts with the DOM by accessing, modifying, and responding to web page elements. It can retrieve elements, manipulate their properties and content, register event handlers, and update styles. This interaction allows JavaScript to create dynamic and interactive web pages.  
