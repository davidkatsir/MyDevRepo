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






endOfFunction();
//******************************************************************************************************** */
