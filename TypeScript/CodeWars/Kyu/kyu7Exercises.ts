// Question:
// Get a number as input and order it in descending order
// If the input would be: 52819, then the output should be: 98521

function orderDigitsDesc(inputNumber: number) {
  if (inputNumber < 0) {
    inputNumber = inputNumber * -1;
  }
  const digitsArray: number[] = [];
  while (inputNumber > 0) {
    digitsArray.push(inputNumber % 10);
    inputNumber = Math.floor(inputNumber / 10);
  }
  digitsArray.sort((a, b) => b - a);
  return digitsArray.join("");
}
const inputNumber01 = -121589;
const inputNumber02 = 851;
const inputNumber03 = 322569;
console.log(orderDigitsDesc(inputNumber01));
console.log(orderDigitsDesc(inputNumber02));
console.log(orderDigitsDesc(inputNumber03));

endOfFunction();
//******************************************************************************************************** */
// Question:
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

export class Kata {
  static getCount(str: string): number {
    let voulCounter = 0;
    const voulsArray: string[] = str.split("");
    const filteredArray = voulsArray.filter((letter) => {
      return (
        letter === "a" ||
        letter === "e" ||
        letter === "i" ||
        letter === "o" ||
        letter === "u"
      );
    });
    return filteredArray.length;
  }
}

const str01 = "abieu";
const str02 = "gggdddfffttt";

console.log(Kata.getCount(str01));
console.log(Kata.getCount(str02));

endOfFunction();
//******************************************************************************************************** */
// Question:
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
// Note: The function accepts an integer and returns an integer.

export class Kata01 {
  static squareDigits(num: number): number {
    const numToString = num.toString().split("");
    const numsArray: number[] = numToString.map(Number);
    const squaredDigits = numsArray.map((digit) => digit * digit);
    const backTowholeNumberStillAsString = squaredDigits.join("");
    const finalSquaredNmumber: number = parseInt(
      backTowholeNumberStillAsString
    );
    return finalSquaredNmumber;
  }
}

const num01 = 23;
const num02 = 222;
const num03 = 987;

console.log(Kata01.squareDigits(num01));  // Output = 49
console.log(Kata01.squareDigits(num02));  // Output = 444
console.log(Kata01.squareDigits(num03));  // Output = 816449



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
