
// input: obj, key, value;
// output: new object



function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}


//test data:

addPropertyV1({}, 'flat number', 'John');


// Object.assign;
// input: obj, key, value;
// output: undefined


function addPropertyV2(obj2, key, value) {
  return Object.assign(obj2, {[key]: value});
  }
console.log(addPropertyV2(obj1, 'age', 17));


// test
const obj1 = {};
console.log(addPropertyV2(obj1, 'age', 17));

const obj2 = {name: 'Vasya'};
console.log(addPropertyV2(obj1, 'age', 17));


function addPropertyV3(obj3, key, value) {
      return Object.assign({}, obj3, { [key]: value });
}
console.log(addPropertyV3(obj1, 'age', 17));


//через СПРЕД: спред розбиває обєкт на кі та валує та закидує у новий обєкт. !!!!!!!!!!!!

function addPropertyV4(obj4, key, value) {
  return  { ...obj4, [key]: value };
}


//rest operator: збирає всі аргументи які нададуть у ф-цію 
// (якщо вони не були заявлені  при створенні самої ф-ції) і створюють з низ масив

function sum(...args) {
  console.log(args(1, 9, 0)); //args - масив із аргументів.
}
