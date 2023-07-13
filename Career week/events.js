//local storage
//JSON

let person = {
    name: 'Joe Doe',
    age: 30,
    city: 'London',
    hobbies: ["reading", "gaming", "hiking"],
};

let jsonString = JSON.stringify(person);
let jsonString2 = JSON.stringify(person2);

// console.log(person);
// console.log(jsonString);

localStorage.setItem("person1", jsonString);
localStorage.setItem("person2", jsonString2);

let retrievedData = localStorage.getItem("person1");
console.log(retrievedData, retrievedData2);

let parsedData = JSON.parse(retrievedData);
let parsedData2 = JSON.parse(retrievedData2);

console.log(parsedData, parsedData2)

// localStorage.removeItem("person1");
localStorage.clear();

