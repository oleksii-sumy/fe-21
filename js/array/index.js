// input: callback, context
// out: array

const numbersList = [5, 0, 8, 10, -4, 50, 220];

// input: element, index, arr
// out:new element

const mapRes = numbersList.map((el) => {
  return el * el;
});

const numbersList = [5, 0, 8, 10, -4, 50, 220];
const mapRes2 = numbersList.map(el => (el > 0 ? el **2 : el));
console.log(mapRes2);


//find

// input: callback
// out: element  or undefined

// callback
// input: el, ind, arr
// out: boollean


const find = numbersList.find(el => el > 100); 

//forEach

// input: callback
// out: undefined

// callback
// input: el, ind, arr
// out: undefined!!!!!!!!!!!!!!--------------

const numbersList = [5, 0, 8, 10, -4, 50, 220];
numbersList.forEach(el =>{
 
   if(el > 0) {console.log(el )}
});
//  or console.log (el > 0 ? el : 'Err')
// ternary:
// condition & valueA : valueB (не дія !!!--------------)

//reduce

// input: callback, accInitValue (option)
// out: any type

// callback
// input: acc, el, ind(option), arr(option)
// out: any type-



const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

const reduceRes = transactions.reduce((acc, el) => {
  console.log('acc' + acc);
  if (el < 0) {
    acc += el;
  }
  return acc + el}, 0);

console.log(reduceRes);

// refactiring:
const reduceRes = transactions.reduce((acc, el) => (el < 0 ? acc + el : acc),0);
 
  
// FILTER - псевдофільтр своїми руками

// input: arr, callback;
// out: arr;

//callback
// input: el, ind, arr;
// out: bool;


// algo
// 0. create resulr arr;
// 1. iterate arr - loop
// 2. call callback for each el
// 3. if callback -true -> push el
// 4. return res





const filterArrayElements = (arr, callback) => {
  const resultArr = [];
  for(let index = 0; index <= arr.length; index += 1) {
    const callBackResult = callback(arr[index], index, arr);
if (callBackResult === true) {
  return resultArr.push(arr[index]);
}
  }
  return resultArr;
};
// refactoring:

const filterArrayElements = (arr, callback) => {
  const resultArr = [];
  for (let index = 0; index <= arr.length; index += 1) {
    const el = arr[index];
    if (callBackResult(el, index, arr)) {
      resultArr.push(el);
    }
  }
  return resultArr;
};


// testing

const arr = [1, 2, 3, 4, 5]

const func = (el, index, arr) => {
index > 2 && el > 5
}
console.log(filterArrayElements(arr, func));
