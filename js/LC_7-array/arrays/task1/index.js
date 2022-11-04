// How to work on tech tasks. Step by step guide

// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// pop method
// INPUT: NONE;
// OUTPUT: NUMBER (last element);
const numberList = [1, 2, 3, 4, 5, 6, 7];
console.log('ARRAY BEFORE POP ' + numberList);
const resultPop = numberList.pop();
console.log(' POP ' + resultPop);
console.log('ARRAY AFTER POP ' + numberList);


// push method
// INPUT: any type;
// OUTPUT: array length;

const numberList2 = [1, 2, 3, 4, 5, 6, 7];
console.log('ARRAY BEFORE PUSH ' + numberList2);
const resultPush = numberList2.push(100);
console.log(' Push ' + resultPush);
console.log('ARRAY AFTER PUSH    ' + numberList2);

// .shift() удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива.


// unshift method
// INPUT: any type;
// OUTPUT: length;

const numberList3 = [1, 2, 3, 4, 5, 6, 7];
console.log('ARRAY BEFORE SUNHIFT ' + numberList3);
const resultShift = numberList3.shift();
console.log(' UNSHIFT ' + resultPush);
console.log('ARRAY AFTER UNSHIFT ' + numberList3);


/////////// FILTER
// INPUT: callback;
// OUTPUT: array;

// CALLBACK:
// INPUT: el, index. array
// OUTPUT: array;




const onatherArr = [1, 200, 3, 400, 105, 6, 7];

    function callBacFilter (num) {num > 5}

    const filterRes = onatherArr.filter(el => el >100);
    console.log (filterRes);