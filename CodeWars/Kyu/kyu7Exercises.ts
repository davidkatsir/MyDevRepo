function endOfFunction() {
  console.log(
    "************************ End of question ***********************"
  );

  console.log(
    "                                                                "
  );
}

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

// String.prototype.toJadenCase = function () {
//   // Split the string into words
//   const words = this.split(' ');

//   // Capitalize the first letter of each word
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }

//   // Join the words back together with spaces
//   return words.join(' ');
// };

// // Extend the String interface to declare the new method
// interface String {
//   toJadenCase(): string;
// }

// // Now you can use the toJadenCase method on any string
// const exampleString = "this is a test";
// console.log(exampleString.toJadenCase()); // Outputs: "This Is A Test"

endOfFunction();
//******************************************************************************************************** */

// Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

export function findShort(s: string): number {
  const sToArray: string[] = s.split(" ");
  let shortestWord: number = sToArray[0].length;
  for (let i = 1; i < sToArray.length; i++) {
    shortestWord =
      sToArray[i].length < shortestWord ? sToArray[i].length : shortestWord;
  }
  return shortestWord;
}

endOfFunction();
//******************************************************************************************************** */
// Complementary DNA
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries
// the "instructions" for the development and functioning of living organisms.
// In DNA strings, symbols "A" and "T" are complements of each
// other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell);
// you need to return the other complementary side. DNA strand is never empty or
// there is no DNA at all (again, except for Haskell).
// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
// Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

export class KataComplementaryDNA {
  static dnaStrand(dna: string) {
    dna.toUpperCase();
    const dnaToArray: string[] = dna.split("");
    const complementaryDNA: string[] = [];
    for (let i = 0; i < dnaToArray.length; i++) {
      switch (dnaToArray[i]) {
        case "A":
          complementaryDNA.push("T");
          break;
        case "T":
          complementaryDNA.push("A");
          break;
        case "C":
          complementaryDNA.push("G");
          break;
        case "G":
          complementaryDNA.push("C");
          break;
      }
    }
    return complementaryDNA.join("");
  }
}

const ComplementaryDNA01 = "ATTGC"; // Expected output: 'TAACG'
const ComplementaryDNA02 = "TAACG"; // Expected output: 'ATTGC'
const ComplementaryDNA03 = "GTAT"; // Expected output: 'CATA'
const ComplementaryDNA04 = "CATA"; // Expected output: 'GTAT'

console.log(KataComplementaryDNA.dnaStrand(ComplementaryDNA01));
console.log(KataComplementaryDNA.dnaStrand(ComplementaryDNA02));
console.log(KataComplementaryDNA.dnaStrand(ComplementaryDNA03));
console.log(KataComplementaryDNA.dnaStrand(ComplementaryDNA04));

endOfFunction();
//******************************************************************************************************** */
// Credit Card Mask
// Usually when you buy something, you're asked whether your credit card number,
// phone number or answer to your most secret question is still correct.
// However, since someone could look over your shoulder, you don't want that shown on your screen.
// Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""
// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

export function maskify(cc: string): string {
  const ccToArray: string[] = cc.split("");
  const maskedString: String[] = [];
  if (ccToArray.length > 4) {
    for (let i = 0; i < ccToArray.length - 4; i++) {
      maskedString.push("#");
    }
    for (let i = ccToArray.length - 4; i < ccToArray.length; i++) {
      maskedString.push(ccToArray[i]);
    }
    return maskedString.join("");
  } else {
    return cc;
  }
}

endOfFunction();
//******************************************************************************************************** */
// Beginner Series #3 Sum of Numbers
// Given two integers a and b, which can be positive or negative, find the sum of
// all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

export function getSum(a: number, b: number): number {
  let sum = 0;
  if (a === b) {
    return a;
  } else if (a != b) {
    let lowerValue = a < b ? a : b;
    let higherValue = a < b ? b : a;
    for (let i = lowerValue; i <= higherValue; i++) {
      sum += i;
    }
  }
  return sum;
}

endOfFunction();
//******************************************************************************************************** */
// Two to One
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string,
// the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

export const longest = (s1: string, s2: string): string => {
  const s1ToArray: string[] = s1.split("");
  const s2ToArray: string[] = s2.split("");
  const s1s2Joined: string[] = s1ToArray.concat(s2ToArray).sort();
  const uniqueLongest: string[] = [...new Set(s1s2Joined)];
  const finalLongest: string = uniqueLongest.join("");
  return finalLongest;
};

endOfFunction();
//******************************************************************************************************** */
// Printer Errors
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use
// colors which, for the sake of simplicity, are named with letters from a to m.
// The colors used by the printer are recorded in a control string.
// For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used
// three times color a, four times color b, one time color h then one time color a...
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string
// is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
// You have to write a function printer_error which given a string will return the
// error rate of the printer as a string representing a rational whose numerator is the number of
// errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
// The string has a length greater or equal to one and contains only letters from ato z.
// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

export function printerError(s: string): string {
  const sToLowerCase: string = s.toLowerCase();
  const sToArray: string[] = sToLowerCase.split("");
  let sArrayLength = sToArray.length;
  let numOfErrors = 0;
  for (let i = 0; i < sToArray.length; i++) {
    if (
      sToArray[i] === "n" ||
      sToArray[i] === "o" ||
      sToArray[i] === "p" ||
      sToArray[i] === "q" ||
      sToArray[i] === "r" ||
      sToArray[i] === "s" ||
      sToArray[i] === "t" ||
      sToArray[i] === "u" ||
      sToArray[i] === "v" ||
      sToArray[i] === "w" ||
      sToArray[i] === "x" ||
      sToArray[i] === "y" ||
      sToArray[i] === "z"
    )
      numOfErrors += 1;
  }
  let printerErrorStr: string = `${numOfErrors}/${sArrayLength}`;
  return printerErrorStr;
}

endOfFunction();
//******************************************************************************************************** */

// Regex validate PIN code
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits
// or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

export class KataPinCode {
  static validatePin(pin: string): boolean {
    if (pin.match(/^\d{4}$|^\d{6}$/)) {
      return true;
    } else {
      return false;
    }
  }
}

endOfFunction();
//******************************************************************************************************** */
// Growth of a Population
// In a small town the population is p0 = 1000 at the beginning of a year.
// The population regularly increases by 2 percent per year and moreover 50 new inhabitants
// per year come to live in the town. How many years does the town need to see its population
// greater or equal to p = 1200 inhabitants?
// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)
// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213
// It will need 3 entire years.
// More generally given parameters:
// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)
// the function nb_year should return n number of entire years needed to get a population
// greater or equal to p.
// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your
// function: if the parameter percent is 2 you have to convert it to 0.02.

export const nbYear = (
  p0: number,
  percent: number,
  aug: number,
  p: number
): number => {
  let percentageIncrease = percent / 100;
  let populationCurrentValue = p0;
  let i = 0;
  while (populationCurrentValue < p) {
    i++;
    populationCurrentValue =
      populationCurrentValue +
      Math.floor(populationCurrentValue * percentageIncrease) +
      aug;
    Math.floor(populationCurrentValue);
  }
  return i;
};

endOfFunction();
//******************************************************************************************************** */
// Is this a triangle?
// Implement a function that accepts 3 integer values a, b, c. The function should return true
// if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

export function isTriangle(a: number, b: number, c: number): boolean {
  return a > 0 && b > 0 && c > 0 && a + b > c && b + c > a && c + a > b;
}

endOfFunction();
//******************************************************************************************************** */
// String ends with?
// Complete the solution so that it returns true
// if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

endOfFunction();
//******************************************************************************************************** */
