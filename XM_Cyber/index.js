function findEvenBrackets(stringWithBrackets) {
    let countLeftBrackets = 0;
    let countRightBrackets = 0;
    for (let char of stringWithBrackets) {
        if (char === '(')
            countLeftBrackets++;
        if (char === ')')
            countRightBrackets++;
    }
    if (countLeftBrackets == countRightBrackets)
        return true;
    else
        return false;
}

let evenBracketsStrin01 = '( )';         // Even Brackets
let notEvenBracketsStrin02 = '(abc()';   // Not even Brackets
let evenBracketsStrin03 = '(abc())';     // Even Brackets


let checkIfStringHasEvenBrackets = findEvenBrackets(evenBracketsStrin01);
console.log(checkIfStringHasEvenBrackets)

checkIfStringHasEvenBrackets = findEvenBrackets(notEvenBracketsStrin02);
console.log(checkIfStringHasEvenBrackets)

checkIfStringHasEvenBrackets = findEvenBrackets(evenBracketsStrin03);
console.log(checkIfStringHasEvenBrackets)