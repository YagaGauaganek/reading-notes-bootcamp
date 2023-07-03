## Object-Oriented Programming, HTML Tables

### Reading
[HTML Table Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics)  
[Introducing Constructors](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics)  
[Object Prototypes Using A Constructor](https://ui.dev/beginners-guide-to-javascript-prototype)  
[HTML Table Advanced Features and Accessibility](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced)  
[Domain Modeling](https://github.com/codefellows/domain_modeling#domain-modeling)  

### Morning session
**[Chris's code from mornig class](https://github.com/CSEAMAN3/201-d5-class-demos/blob/main/201-class-07/app.js)**  

**constructor function**  
- key word `this`
- allows us to create object with less code.
- is written in almost same way as normal function, except that we Must capitalize first letter:  
function Kitten()
this.name = "bob";
this.age = 0;
this.interests = ["cuddling", "chasing string", "catnip"];
isGoodWithKids = true;
isGoodWithDogs = false;
isGoodWithCats = true;


// const eric = new Kitten();
// const bob = new Kitten();
// console.log(eric);
// console.log(bob);
**Prototype**
- every object has prototype object
    - allows us to create a method outside of constructor function
- Prototype method:
     - start declaring constructor function
- Prototype inheritance (??)  

### Chris's Demo
[Chris's Demo 201-07](https://github.com/CSEAMAN3/201-d5-class-demos/tree/main/201-class-07)  

### Reading  
[Domain Modeling](https://github.com/codefellows/domain_modeling#domain-modeling)  
[HTML Table Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics)  
[Introducing Constructors](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#introducing_constructors)  
[Object Prototypes Using A Constructor](https://ui.dev/beginners-guide-to-javascript-prototype)  
[HTML Table Advanced Features and Accessibility](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced)  

### Questions and Answers:  
1. Why should tables not be used for page layouts?  
There is few reasons:  
- Lack of Semantic Structure - making difficult for search engines and assitive technologies to understand the content    
- Accessibility Issues - struggle for readers to interpret the content correctly, poor UI for visually impared individuals  
- Responsiveness Challenges - tables are not inherently responsive to different size and devices, desinging table-base layout is time-consuming  
- Maintenance Complexity - ue to website and app evolution that can be chalenging, modifying the structure or adding/removing elements may require significant changes to the table structure, leading to code complexity and potential errors  
- Limited Styling Options - limited styling options compared to modern CSS-based layout techniques  
- Future Compatibility - not future proof, relying on table-based layouts may hinder the ability to adapt to these advancements   
- Separation of Concerns  
2. List and describe 3 different semantic HTML elements used in an HTML `table`.  
- `caption`: The `caption` element is used to provide a title or a caption for a table. It is typically placed as the first child of the `table` element. The caption helps users understand the purpose or context of the table  
- `thead`, `tbody`, `tfoot`: These three elements are used to group the different parts of a table, namely the table header, table body, and table footer

    - `thead` stands for "table head" and is used to group the header content of the table. It typically contains one or more `tr` (table row) elements with `th` (table header cell) elements inside  

    - `tbody` stands for "table body" and contains the main content of the table. It should include one or more `tr` elements, each representing a row of data, with `td` (table data cell) elements inside  

    - `tfoot` stands for "table footer" and is used to group the footer content of the table. Similar to `thead`, it can contain one or more `tr` elements with `th` or `td` elements inside  
- while these elements contribute to the semantic structure of the table, they do not dictate the visual layout. CSS is still required to style and position the table elements  
3. What is a constructor and what are some advantages to using it?  
Constructors in JavaScript are special methods used for object initialization. They offer advantages such as easy object setup, encapsulation of private variables, code reusability, inheritance, access to prototypes, and improved code organization  
**Advantages**
- Object Initialization - sets up the initial state or properties of an object, developer can define default values or accept arguments to initialize object properties during instantiation  
- Encapsulation - constructors enable encapsulation by defining private variables and methods within the constructor function using closures  
- Code Reusability - allows to create multiple instances of objects with the same properties and methods; time saver  
- Inheritance - allows to use constructor functions or classes to create parent and child objects, allowing child objects to inherit properties and methods from their parent objects  
- Prototype Access - provides access to the prototype of an object, which allows you to add or modify properties and methods that will be shared by all instances of the object  
- Code Organization - help in organizing code by grouping related properties and methods within a single entity  
**Summary:** Constructors in JavaScript are special methods used for object initialization. They offer advantages such as easy object setup, encapsulation of private variables, code reusability, inheritance, access to prototypes, and improved code organization  
4. How does the term `this` differ when used in an object literal versus when used in a constructor?  
- in the object literal, this.name refers to the name property of the person object  
- in the constructor function, this.name refers to the name property of the specific instance created with new  object
5. Explain prototypes and inheritance via an analogy from your previous work experience.  
> NOTE: This is a very common front end developer interview question. 

Analogy: Imagine you work at a company where employees have different roles and responsibilities. The company has a hierarchy of positions, with each position having certain tasks and abilities.

In this analogy, the company's position hierarchy represents the prototype chain, and each position represents an object.

Prototypes: In this context, prototypes can be compared to higher-level positions within the company. For example, the CEO position can be considered the prototype, as it sets the foundation and provides a blueprint for other positions.

Inheritance: Inheritance can be seen as the process of employees inheriting skills, knowledge, and responsibilities from higher-level positions. For instance, a manager inherits certain abilities and tasks from the CEO, and a team leader inherits from the manager. Each position builds upon the capabilities and responsibilities of the positions above it.

Methods and Properties: Just as positions within a company have specific tasks and abilities, objects in JavaScript can have methods and properties. These methods and properties can be seen as the skills and attributes associated with each position. Employees (objects) can access and use these methods and properties inherited from higher-level positions.

By utilizing prototypes and inheritance, objects can inherit and share methods and properties, creating a hierarchical structure that promotes code reuse and organization, similar to how employees within a company inherit abilities and responsibilities from higher-level positions.

## Things I want to know more about  