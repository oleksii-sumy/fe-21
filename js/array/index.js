// How to work on tech tasks. Step by step guide

// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution


// problems
// loop inside loop

function getPrimes(num) {
  // console.log('NUM:', num);   for testing

  for (let number = 2; number <= num; number += 1) {
    // console.log ('CHECKING IF NUMBER IS PRIME' + number);  for testing
    let counter = 0;

    for (let index = 1; index <= number; index += 1) {
      if (number % index === 0) {
        counter += 1;
      }
    }
    // console.log('For number ' + number + ' counter find ' + counter);  for testing
    if (counter == 2) {
      console.log(number);
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



function getPrimes(num) {

  for (let number = 2; number <= num; number += 1) {
              console.log('ПЕрший цикл: ' + number);

    for (let index = 1; index <= number; index += 1) {
                    console.log( 'Другий цикл: ' + index);

      if (number % index === 0) {
              console.log('Шукане числоЖ ' + number);
      }
  }
}
}
//test data
getPrimes(7);


//refactoring
// input: number;
// output: boolean;

function isPrime (number) {
  console.log('NUM', num);

  for (let index = 1; index <= number; index += 1) {
    if (number % index === 0) {
      counter += 1;
    }
  }
  return counter === 2;
}

function getPrimes(num) {
  for (let number = 2; number <= num; number += 1) {
          if (isPrime(number)) {
        console.log(number);
      
}
  }
}
