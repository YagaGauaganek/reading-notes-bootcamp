
//a method is a function that is attached to an object

let myVampire = {
    age: 1234,
    bloodDrunk: 40,
    drinkBlood : function (victorianBlood) {
        for (let i = victimBlood; i >= 0; i = i - 0.5 ) {
            console.log("the victim has ${i} of blood left")
        }
    }
}

myVampire.age
console.log(myVampire.age)
myVampire.capeStyle = "Victorian"
console.log(myVampire)
delete myVampire.capestyle


console.log(myVampire)

let allShirts = []

function TshirtConstructor (priceArg, color) {
    this.price = priceArg;
    this.color = color;
    this.type = "t-shirt";
    allShirts.push(this)
}

let fineRed = new TshirtConstructor(14.99, "red")

TshirtConstructor.water = "waterproof"

console.log(fineRed)
fineRed.frilly = true;
console.log(fineRed)
console.log(allShirts)