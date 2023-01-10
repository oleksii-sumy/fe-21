// -- good----
const compareObjects = (firstObj, secondObj) => {
  const firstObjKeys = Object.keys(firstObj);
  if (firstObjKeys.length !== Object.keys(secondObj).length) {
    return false;
  }
  return firstObjKeys.every(key => firstObj[key] === secondObj[key]);
};

// -- norm----
// const compareObjects = (firstObj, secondObj) =>
//   JSON.stringify(Object.entries(firstObj).sort()) ===
//   JSON.stringify(Object.entries(secondObj).sort());
// -------цей метод тільки для однорівневих обєктів!!!!!! бо stringify може не так перекласти ф-ції/методи---------

// -- bad----
// const compareObjects = (firstObj, secondObj) =>
//   Object.entries(firstObj).sort().join() ===
//   Object.entries(secondObj).sort().join();
