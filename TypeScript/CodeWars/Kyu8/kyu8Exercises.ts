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

// Question:
// Create a function that takes an integer as an argument
//    and returns "Even" for even numbers or "Odd" for odd numbers.
export function evenOrOdd01(n: number): string {
  let inputNumber = n % 2 === 0 ? "This Number is even" : "This Number is odd";
  return inputNumber;
}

// Another solution -
export const evenOrOdd02 = (n: number): string =>
  n % 2 === 0 ? "Even" : "Odd";

const evenOrOdd03 = (n: number): string => {
  return n % 2 === 0 ? "Even03" : "Odd03";
};

//Testing both solutions
const evenNumber = 16;
const oddNumber = 217;
console.log(evenOrOdd01(evenNumber)); // Output: This Number is even
console.log(evenOrOdd01(oddNumber)); // Output: This Number is odd
console.log(evenOrOdd02(evenNumber)); // Output: Even
console.log(evenOrOdd02(oddNumber)); // Output: Odd
console.log(evenOrOdd03(evenNumber)); // Output: Even
console.log(evenOrOdd03(oddNumber)); // Output: Odd

endOfFunction();
//******************************************************************************************************** */

// Question:
// Sum of all positive array members
// You get an array of numbers, return the sum of all of the positives ones.
//    Example: [1,-4,7,12] => 1 + 7 + 12 = 20
//    Note: if there is nothing to sum, the sum is default to 0.

let originalArray: number[] = [1, -4, 7, 12];

export function positiveSum(arr: number[]): number {
  if (arr.length !== 0) {
    const filterPositiveArrayMembers = arr.filter(
      (arrayMember) => arrayMember > 0
    );
    const sumAllPrositiveArrayMembers = filterPositiveArrayMembers.reduce(
      (a, b) => a + b,
      0
    );
    return sumAllPrositiveArrayMembers;
  }
  return 0;
}

console.log(positiveSum(originalArray)); // Output = 20

endOfFunction();
//******************************************************************************************************** */

// Question:
// Return Negative
// In this simple assignment you are given a number and have to make it negative.
//    But maybe the number is already negative?
// Examples
// makeNegative(1);  // return -1
// makeNegative(-5); // return -5
// makeNegative(0);  // return 0
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

export const makeNegative = (inputNumber: number): number => {
  if (inputNumber > 0) {
    inputNumber *= -1;
    return inputNumber;
  }
  return inputNumber;
};

let input01 = 0;
let input02 = -512310;
let input03 = 987;

console.log(makeNegative(input01)); // Output: 0
console.log(makeNegative(input02)); // Output: -512310
console.log(makeNegative(input03)); // Output: -987

endOfFunction();
//******************************************************************************************************** */

// Question:
// Reversed Strings
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

export function solution(str: string): string {
  // Create an empty string to store the reversed characters.
  let reversedStr = "";
  // Iterate through the input string in reverse order.
  for (let i = str.length - 1; i >= 0; i--) {
    // Concatenate each character to the reversedStr variable.
    reversedStr += str[i];
  }
  // Return the reversed string.
  return reversedStr;
}

const str01 = "Yom Yavo";
const str02 = "Golan Ben Lulu";
console.log(solution(str01)); // Output: 'ovaY moY'
console.log(solution(str02)); // Output: 'uluL neB naloG'

endOfFunction();
//******************************************************************************************************** */

// Question:
// Convert boolean values to strings 'Yes' or 'No'.
//   Complete the method that takes a boolean value
//      and return a "Yes" string for true, or a "No" string for false.

export const boolToWord = (bool: boolean): string => {
  let boolValueToReturn: string;
  switch (bool) {
    case true:
      boolValueToReturn = "Yes";
      break;
    case false:
      boolValueToReturn = "No";
      break;
  }
  return boolValueToReturn;
};

endOfFunction();
//******************************************************************************************************** */

// Question:
// Convert a Number to a String!
// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?
// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

const numberToString = (num: number): string => num.toString();

let numToStr01 = 769;
let numToStr02 = -712369;
console.log(numberToString(numToStr01));
console.log(numberToString(numToStr02));

endOfFunction();
//******************************************************************************************************** */

// Question:
// Opposite number
// Very simple, given an integer or a floating-point number, find its opposite.
// Examples:
// 1: -1
// 14: -14
// -34: 34




endOfFunction();
//******************************************************************************************************** */
