// Question:
// Get a number as input and order it in descending order
// If the input would be: 52819, then the output should be: 98521

function orderDigitsDesc(inputNumber: number): string {
  let absoluteNumber = Math.abs(inputNumber);
  const digitsArray: number[] = [];

  while (absoluteNumber > 0) {
    digitsArray.push(absoluteNumber % 10);
    absoluteNumber = Math.floor(absoluteNumber / 10);
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

export class Kata02 {
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

console.log(Kata02.highAndLow(highAndLow01)); // Output: "5 -3"

endOfFunction();
//******************************************************************************************************** */
// Disemvowel Trolls
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments,
// neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

export class Kata03 {
  static disemvowel(str: string): string {
    const strToArray: string[] = str.split("");
    const disemvoweledArray: string[] = [];
    for (let i = 0; i < strToArray.length; i++) {
      if (
        strToArray[i] != "a" &&
        strToArray[i] != "e" &&
        strToArray[i] != "i" &&
        strToArray[i] != "o" &&
        strToArray[i] != "u" &&
        strToArray[i] != "A" &&
        strToArray[i] != "E" &&
        strToArray[i] != "I" &&
        strToArray[i] != "O" &&
        strToArray[i] != "U"
      ) {
        disemvoweledArray.push(strToArray[i]);
      }
    }
    str = disemvoweledArray.join("");
    return str;
  }
}

const disemvowel01 = "This website is for losers LOL!";
console.log(Kata03.disemvowel(disemvowel01));

endOfFunction();
//******************************************************************************************************** */

// Descending Order
// Your task is to make a function that can take any non-negative integer as an argument
// and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

export function descendingOrder(n: number): number {
  const nToStrArray: string[] = n.toString().split("");
  const nStrArrayToNumArray = nToStrArray
    .map(Number)
    .sort((a, b) => b - a)
    .join("");

  return parseInt(nStrArrayToNumArray);
}

const descendingOrderInput01 = 123456789;
console.log(descendingOrder(descendingOrderInput01));

endOfFunction();
//******************************************************************************************************** */

// Get the Middle Character
// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.
// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"
// #Input
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more
// than 1000 in some test cases due to an error in the test cases). You do not need to test for this.
// This is only here to tell you that you do not need to worry about your solution timing out.
// #Output
// The middle character(s) of the word represented as a string.

export function getMiddle(s: string): string {
  const inputStrSplit: string[] = s.split("");
  const middleCharacters: string[] = [];
  if (inputStrSplit.length % 2 === 0) {
    middleCharacters.push(inputStrSplit[inputStrSplit.length / 2 - 1]);
    middleCharacters.push(inputStrSplit[inputStrSplit.length / 2]);
  } else {
    const oddMiddleIndex = Math.floor(inputStrSplit.length / 2);
    middleCharacters.push(inputStrSplit[oddMiddleIndex]);
  }
  return middleCharacters.join("");
}

const oddStringInput = "character";
const evenStringInput = "characters";

console.log(getMiddle(oddStringInput)); // Output: a
console.log(getMiddle(evenStringInput)); // Output: ac

endOfFunction();
//******************************************************************************************************** */
// Mumbling
// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("acbd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

export function accum(s: string): string {
  const accumArray: string[] = [];
  const sToArray: string[] = s.split("");

  for (let i = 0; i < sToArray.length; i++) {
    if (i === 0) {
      const upperCaseChar = sToArray[i].toUpperCase();
      accumArray.push(upperCaseChar + "-");
    } else if (i < sToArray.length - 1) {
      let firstIsUppercase = sToArray[i].toUpperCase();
      let nextAreLowercase = sToArray[i].toLowerCase();
      let nextLowerCaseArray: string[] = [];
      for (let y = 0; y < i; y++) {
        nextLowerCaseArray.push(nextAreLowercase);
      }
      let nextLowerCase = nextLowerCaseArray.join("");
      accumArray.push(`${firstIsUppercase}${nextLowerCase}-`);
      nextLowerCaseArray = [];
    } else if (i < sToArray.length) {
      let lastIndexFirstIsUppercase = sToArray[i].toUpperCase();
      let lastIndexNextAreLowercase = sToArray[i].toLowerCase();
      let lastIndexNextLowerCaseArray: string[] = [];
      for (let y = 0; y < i; y++) {
        lastIndexNextLowerCaseArray.push(lastIndexNextAreLowercase);
      }
      let lastNextLowerCase = lastIndexNextLowerCaseArray.join("");
      accumArray.push(`${lastIndexFirstIsUppercase}${lastNextLowerCase}`);
      lastIndexNextLowerCaseArray = [];
    }
  }
  return accumArray.join("");
}

const accumInput01 = "RqaEzty";
const accumInput02 = "cwAt";
console.log(accum(accumInput01)); // Output:'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
console.log(accum(accumInput02)); // Output:'C-Ww-Aaa-Tttt'

endOfFunction();
//******************************************************************************************************** */
// You're a square!
// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer;
// in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.
// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false
export default function isSquare(n: number): boolean {
  let isNSquare = Math.sqrt(n) === Math.floor(Math.sqrt(n)) ? true : false;
  return isNSquare;
}

endOfFunction();
//******************************************************************************************************** */
// Isogram
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a
// function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

export function isIsogram(str: string): boolean {
  const strLowerCase = str.toLowerCase();
  const strToArray: string[] = strLowerCase.split("");
  for (let i = 0; i < strToArray.length; i++) {
    for (let y = i + 1; y < strToArray.length; y++) {
      if (strToArray[i] === strToArray[y]) {
        return false;
      }
    }
  }
  return true;
}

endOfFunction();
//******************************************************************************************************** */
// Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
export function xo(str: string): boolean {
  const xoToLowerCase = str.toLowerCase();
  const xoStrToArray: string[] = xoToLowerCase.split("");
  let xCountInTheArray: number = 0;
  let oCountInTheArray: number = 0;
  for (let i = 0; i < xoStrToArray.length; i++) {
    if (xoStrToArray[i] === "x") {
      xCountInTheArray++;
    }
    if (xoStrToArray[i] === "o") {
      oCountInTheArray++;
    }
  }
  if (xCountInTheArray === 0 && oCountInTheArray === 0) {
    return true;
  } else if (xCountInTheArray / oCountInTheArray === 1) {
    return true;
  }
  return false;
}

endOfFunction();
//******************************************************************************************************** */
// Jaden Casing Strings
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


String.prototype.toJadenCase = function () {
  // Split the string into words
  const words = this.split(' ');

  // Capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  // Join the words back together with spaces
  return words.join(' ');
};

// Extend the String interface to declare the new method
interface String {
  toJadenCase(): string;
}

// Now you can use the toJadenCase method on any string
const exampleString = "this is a test";
console.log(exampleString.toJadenCase()); // Outputs: "This Is A Test"



























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
