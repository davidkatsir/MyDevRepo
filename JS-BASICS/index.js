// This is my first JS Code
console.log('Hello World');

let firstName = "David";
let lastName = "Katsir";
console.log(firstName, lastName);

let age = 53;
const interestRate = 0.3;
// interestRate = 1;
let selectedColor = null;
let isApproved = Boolean;
let unknown = undefined;
console.log(interestRate, age, selectedColor, isApproved, unknown);

let person = {
    name: 'David',
    age: 53
};

console.log(`My name is: ${person.name} and my age is: ${person.age}`);


let selectedColors = ['Red', 'Green', 'Blue'];
console.log(selectedColors[2]);
console.log(selectedColors.length);
selectedColors.push('Yellow');
console.log(selectedColors);

function greet(greetFirstName, greetLastName) {
    console.log(`Hello ${greetFirstName} ${greetLastName}`);
}
greet(firstName, 'Katsir');
greet('Ronit', 'Katsir');


// Calculating a value
function square(number) {
    return number * number;
}

let numberForSquareCalculation = 16;
let squareNumber = square(numberForSquareCalculation);
console.log(squareNumber);

console.log(square(numberForSquareCalculation) + 1);



