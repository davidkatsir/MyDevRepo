


// console.log(a);
// var a = 5;

// console.log(a);


// let a = 1;
// let b = '1';

// console.log(a == b);

// console.log(a === b);

const array03 = [1, 5, 100, 0, 20];

function findLargestNumber(numbers) {
    let largestNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i];
        }
    }
    return largestNumber;
}

const largestNumberOfArray = findLargestNumber(array03);
console.log(largestNumberOfArray);


