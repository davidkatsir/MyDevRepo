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

console.log(Kata01.squareDigits(num01)); // Output = 49
console.log(Kata01.squareDigits(num02)); // Output = 444
console.log(Kata01.squareDigits(num03)); // Output = 816449

endOfFunction();
//******************************************************************************************************** */
// Highest and Lowest
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

export class Kata03 {
  static highAndLow(numbers: string): string {
    const splitInputStringToArray: string[] = numbers.split(" ");
    const convertSrtingToNumber: number[] = splitInputStringToArray
      .map(Number)
      .sort((a, b) => b - a);
    const highestNumber = convertSrtingToNumber[0].toString();
    const lowestNumber =
      convertSrtingToNumber[convertSrtingToNumber.length - 1].toString();
    const lowestAndHighest = highestNumber + " " + lowestNumber;
    return lowestAndHighest;
  }
}

const highAndLow01 = "1 2 -3 4 5";

console.log(Kata03.highAndLow(highAndLow01)); // Output: "5 -3"

endOfFunction();
//******************************************************************************************************** */
// Disemvowel Trolls
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, 
// neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

export class Kata04 {
  static disemvowel(str: string): string {
    
    
    return str;
  }
}






endOfFunction();
//******************************************************************************************************** */



function endOfFunction() {
  console.log(
    "************************ End of question ***********************"
  );

  console.log(
    "                                                                "
  );
}
