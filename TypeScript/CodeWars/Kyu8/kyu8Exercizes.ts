// Create a function that takes an integer as an argument 
//  and returns "Even" for even numbers or "Odd" for odd numbers.

export function evenOrOdd(n: number): string {
  let inputNumber = n % 2 === 0 ? "This Nmuber is even" : "This Nmuber is odd";
  return inputNumber;
}
