// "half pyramid"

let rows = 5;
let output = ''
for(let i = 0; i < rows; i++) {
    output += '#'
    console.log(output)
}

// "pyramid"
const numRows = pa

for(let i = 0; i < numRows; i++) {
    let row = "";
    
    for(let j = 0; j < numRows - i - 1; j++) {
        row += " ";
    }
    for(let k = 0; k < i + 1; k++) {
        row +="#";
    }

    for(let l = 0; l < i; l++) {
        row += "#";
    }

    console.log(row);
}

// while loop

let samArr = [ "sam", ]

// check roman integrer 