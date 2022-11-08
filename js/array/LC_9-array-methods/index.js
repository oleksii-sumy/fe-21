function getSensOfLife() {
  return 42;
}

const res = getSensOfLife();
console.log (res);
console.log(getSensOfLife());

function getSqure(number) {
  return number ** 2;
}
// test data
console.log(getSqure(5));
console.log(getSqure(-7));
console.log(getSqure(0));
console.log(getSqure('2'));
console.log(getSqure('w'));

function sum(a, b) {
  return a + b;
}
 console.log(sum(0, 1));
 console.log(sum(-3, 1));
//  console.log(sum(a, 2));

function getMessage(age) {
  console.log ('I am ' + age + ' years old');
}

console.log(getMessage(44));
function getMessage(age) {
    if (age < 0 || typeof age !== 'number') {
        return null;
    }
  console.log('I am ' + age + ' years old');
}

console.log(getMessage(42));
console.log(getMessage(-7));
console.log(getMessage('fs'));
console.log(getMessage(100));

mult = (a, b) => {
  return a * b; // без ретюрна можна коли одна дія
};
console.log(mult(2, -7));
console.log(mult('2', '-7'));
console.log(mult(0, 100));
console.log(mult('ds', 'sdd'));

const getMagicNumber = () => 17;
console.log(getMagicNumber());
console.log(getMagicNumber(23));
