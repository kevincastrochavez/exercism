// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
function twoSum(array1, array2) {
  const newStringFromArray1 = array1.map((item) => String(item)).join('');
  const newStringFromArray2 = array2.map((item) => String(item)).join('');

  const numberOne = Number(newStringFromArray1);
  const numberTwo = Number(newStringFromArray2);

  return numberOne + numberTwo;
}

// console.log(twoSum([1, 2, 3], [0, 7]));

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
function luckyNumber(value) {
  const splittedValue = String(value).split('');
  const reversedValue = splittedValue.reverse();
  const reversedString = reversedValue.join('');

  if (String(value) == reversedString) {
    return true;
  }

  return false;
}

// console.log(luckyNumber(1441));
// console.log(luckyNumber(123));

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
function errorMessage(input) {
  if (String(input) === '' || input === null || input === undefined) {
    return 'Required field';
  }

  if (isNaN(input) || input == 0) {
    return 'Must be a number besides 0';
  }

  return '';
}

// console.log(errorMessage('123'));
// console.log(errorMessage(''));
// console.log(errorMessage(null));
// console.log(errorMessage(undefined));
console.log(errorMessage('abc'));
console.log(errorMessage('some text'));
console.log(errorMessage('86f1'));
console.log(errorMessage('0'));
console.log(errorMessage('4 2'));
