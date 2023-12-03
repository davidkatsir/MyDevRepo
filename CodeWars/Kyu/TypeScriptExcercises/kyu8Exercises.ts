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

export class Kata {
  static opposite(n: number) {
    return -n;
  }
}

endOfFunction();
//******************************************************************************************************** */

// Question:
// Remove First and Last Character
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
//  You're given one parameter, the original string.
//   You don't have to worry with strings with less than two characters.

export const removeChar = (str: string): string => str.slice(1, -1);

let str011 = "Example String";
console.log(removeChar(str011)); // Output: 'xample Strin'

endOfFunction();
//******************************************************************************************************** */
// String repeat
// Write a function that accepts an
// integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

export function repeatStr(n: number, s: string): string {
  const repeatStrArray: String[] = [];
  for (let i = 0; i < n; i++) {
    repeatStrArray.push(s);
  }
  return repeatStrArray.join("");
}

let n = 19;
let s = "Hayom Yom Sheni";
console.log(repeatStr(n, s));
// Output:
// 'Hayom Yom SheniHayom Yom SheniHayom Yom SheniHayom Yom SheniHayom Yom Sheni
// Hayom Yom SheniHayom Yom SheniHayom Yom SheniHayom Yom SheniHayom Yom SheniHayom Yom SheniHayom Yom Sheni
// Hayom Yom SheniHayom Yom SheniHayom Yom SheniHayom Yom SheniHayom Yom SheniHayom Yom SheniHayom Yom Sheni'

endOfFunction();
//******************************************************************************************************** */
// Remove String Spaces
// Write a function that removes the spaces from the string, then return the resultant string.
// Examples:
// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

export function noSpace(x: string): string {
  const noSpaceStrToArray: string[] = x.split("");
  const resultStr: string[] = [];
  for (let i = 0; i <= noSpaceStrToArray.length; i++) {
    if (noSpaceStrToArray[i] !== " ") {
      resultStr.push(noSpaceStrToArray[i]);
    }
  }
  return resultStr.join("");
}

endOfFunction();
//******************************************************************************************************** */
// Square(n) Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9

export function squareSum(numbers: number[]): number {
  const squaredNumbers: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    let iMemberSquared = numbers[i] ** 2;
    squaredNumbers.push(iMemberSquared);
  }
  return squaredNumbers.reduce((a, b) => a + b, 0);
}

endOfFunction();
//******************************************************************************************************** */
