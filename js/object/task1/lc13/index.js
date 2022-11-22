// Input: obj
// output: obj[]

// algo
// 1. create res arr
// 2. get key and values (?) - .entries
// 3. add new id key to value => new obj
// 4. push to the arr - .map
// 5. sort objs by age -.sort



const getCustomersList = obj => {
    const resArr = [];
  const entries = Object.entries(obj);
  console.log(entries);

for(let index = 0; index <entries.length; index +=1){
// 1.get key and value from entry: 
// 2. add new id key to value
// 3. push
//  coding:
// const entry = entries[index];
// const key = entry[0];
// const value = entry[1];

// console.log(key, value);

// const resObj = {...value, id: key};
// resArr.push(resObj);

    resArr.push({ ...entries[index][1], id: entries[index][0] });
console.log(resArr);
}
resArr.sort((a, b) =>a.age - b.age);
return resArr;
};


// test Data

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 20,
  },
  'customer-id-3': {
    name: 'Bob',
    age: 17,
  },
  'customer-id-4': {
    name: 'John',
    age: '22',
  },
};

getCustomersList(customers);