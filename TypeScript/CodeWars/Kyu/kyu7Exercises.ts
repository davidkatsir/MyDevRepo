// Question:
// Get a number as input and order it in descending order
// If the input would be: 52819, then the output should be: 98521

function orderDigitsDescending(inputNumber: number) {
  if (inputNumber < 0) {
    inputNumber = inputNumber * -1;
  }
  const digitsArray: number[] = [];
  while (inputNumber > 0) {
    let digit = inputNumber % 10;
    digitsArray.push(digit);
    inputNumber = Math.floor(inputNumber / 10);
  }
  digitsArray.sort((a, b) => b - a);

  return digitsArray.join("");
}

const exampleNumber01 = 13246252;
const exampleNumber02 = 1596;
const exampleNumber03 = -62541;

console.log(orderDigitsDescending(exampleNumber01)); // Output = 654321
console.log(orderDigitsDescending(exampleNumber02)); // Output = 9651
console.log(orderDigitsDescending(exampleNumber03)); // Output = 65421

endOfFunction();
//******************************************************************************************************** */

function endOfFunction() {
  console.log(
    "                                                                "
  );
  console.log(
    "****************************************************************"
  );
  console.log(
    "**********             End of question            **************"
  );
  console.log(
    "****************************************************************"
  );
  console.log(
    "                                                                "
  );
}
