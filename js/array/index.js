// How to work on tech tasks. Step by step guide

// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

function getPrimes (num) {
  console.log ('NUM:', num);
for (const number = 2; number <= num; number += 1) {
let counter = 0;
for (let index = 2; index <= number; index +=1) {
if (number & index === 0) {
  counter += 1;
}
}
if ( counter == 2) {
console.log (number);
}
}
}
//test data
getPrimes(9);
// getPrimes(11);
// getPrimes(16);


/// input 10
// autput:
// 2
// 3
// 5
// 7



//// algoritm:

// a)  Not best variant:
// 1. iterate from 1 to num 
// 2. check if num is prime
// 2.0 create CountQueuingStrategy 
// 2.1 itarate 1..number
// 2.2 if number % index === 0 -> count ++
// 2.3 if coount >= 2  -> is not prime
// 3. if prime -> console.log








