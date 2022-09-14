const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if (arrayOfString === null || arrayOfString === undefined) {
    return undefined;
  }
  let eachString = [...arrayOfString];
  let max = 0;
  let arr;
  for (let i = 0; i < eachString.length; i++) {
    if (eachString[i].length > max) {
        arr = [];
        max = eachString[i].length;
    }
    if (eachString[i].length === max) {
        arr.push(eachString[i]);
    }
  }
  return arr;
}
module.exports = getMaxLengthString
// console.log(getMaxLengthString(['hello', 'hi', 'hey', 'Good Evening', 'Good Morning']))