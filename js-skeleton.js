"use strict";
/**
 * Calculates the sum of all numbers from 1 to n
 * @param {number} n the number to sum all numbers up to it
 * @return {number} sum. 
 */
function basic_sum(n) {
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += i; //increment sum by i
  }
  return sum;
}

/**
 * Calculates the sum of all numbers from 1 to n, if they are multiples of 3 OR 5.
 * @param {number} n the number to sum all numbers up to it, that are divisible by 3 OR 5.
 * @return {number} sum.
 */
function sum_3_5(n) {
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    if(i % 3 == 0 || i % 5 == 0) {
    sum += i; //increment sum by i which is multiple of 3 or 5.
    }
  }
  return sum;
}

/**
 * Finds the largest integer in arr.
 * @param {number[]} arr, the array to find the largest integer in.
 * @return {number} max. If not integer array, returns 0.
 */
function largest_int(arr) {
  let max = 0;
  for(let i = 0; i <= arr.length - 1; i++) {
    if(arr[i] > max) { //if current iteration's value of arr greater than max
      max = arr[i]; //Assign max to the next value in arr that is greater than previous max.
    }
  }
  return max;
}

/**
 * Checks whether value is in array. Essentially, Linear Search.
 * @param {array} arr, the array to search for the value.
 * @param {*} valToCheckFor, the value to search for in arr.
 * @return {boolean} true if found, false if not found.
 */
function in_array(arr, valToCheckFor) {
  for(let i = 0; i <= arr.length-1; i++) {
    if(arr[i] == valToCheckFor) { //if current iteration's value is equal to valToCheckFor argument
      return true;
    }
  }
  return false;
}

/**
 * Concatenates two arrays, using for loops to push onto new array.
 * @param {array} arr1, the first array to add to new array.
 * @param {array} arr2, the second array to add to new array.
 * @return {array} concat_array, has values of both arr1 and arr2.
 */
function concat_arrays(arr1, arr2) {
  let concat_array = new Array();

  for(let i = 0; i < arr1.length; i++) {
    concat_array.push(arr1[i]); //push each value of arr1 onto concat_array
  }

  for(let j = 0; j < arr2.length; j++) {
    concat_array.push(arr2[j]); //push each value of arr2 onto concat_array
  }
  return concat_array;
}

/**
 * Creates an object that has a property 'name' with the food name and a property 'ingredients' with an of array of ingredients
 * Example call: `let pizza = food_object_factory('pizza', 'tomato sauce', 'cheese', 'banana peppers')`
 * @param {string} name
 * @param {string} ingredients
 * @return {object} the food object
 */
function food_object_factory(name, ...ingredients) {

  //new array my_ingredients
  let my_ingredients = new Array();
  for(let i = 1; i < arguments.length; i++) {
    my_ingredients.push(arguments[i]); //push all arguments after index 0 onto my_ingredients.
  }
  //food object with name and ingredients property, with values name and my_ingredients.
  let food_object = {
    name: name,
    ingredients: my_ingredients
  }
  return food_object;
}

/**
 * Sums positive numbers within an array of mixed values
 *
 * ** IMPORTANT: **
 * use BOTH `Array.protoype.reduce()` and the `Array.protoype.filter()` methods
 * Do not use loops or conditionals of any other sort here
 *
 * Example call: `let sum = reduce_sum_positive([5, -2, 0, 'javascript', 'problems', 'are fun', 3])`; // sum should equal 8
 * @param {int[]} values the array of values to take
 * @return {int} the sum of all the positive integers in values
 */
function reduce_sum_positive(values) {
  let onlyPos = values.filter(value => {
    return value > 0;
  });

  let posSum = onlyPos.reduce((acc, val) => {
    return acc + val;
  });
  return posSum;
}

/**
 * Takes an array of integers and another integer to add to each value within the array
 * Example: increase_ints([1, 2, 4, 8], 3) returns [4, 5, 7, 11]
 *
 * ** IMPORTANT: **
 * use BOTH `Array.protoype.map()` method
 * Do not use loops of any other sort here
 *
 * @param {int[]} values the array of values to take
 * @param {int} valueToIncreaseBy the value to increase each int within the array by
 * @return {int[]} the modified array
 */
function increase_ints(values, valueToIncreaseBy) {
  let plusValue = values.map((val, i, arr) => {
    return val + valueToIncreaseBy;
  });
  return plusValue;
}

const Test = {
  run: () => {
    Test.basicSum();
    Test.sum35();
    Test.largestInt();
    Test.inArray();
    Test.concatArrays();
    Test.foodObjectFactory();
    Test.reduceSumPositive();
    Test.increaseInts();
  },

  rand10Plus: (max) => Math.floor(Math.random() * (max-10)) + 10,
  basicSum: () => {
    if (basic_sum(5) === 1 + 2 + 3 + 4 + 5
      && basic_sum(10) === basic_sum(5) + 6 + 7 + 8 + 9 + 10) {
      console.log("basic_sum() passes");
    } else {
      console.error("basic_sum() fails");
    }
  },

  sum35: () => {
    // n = 19 => sum = [3, 5, 6, 9, 10, 12, 15, 18] = 78
    // n = 23 => sum = [3, 5, 6, 9, 10, 12, 15, 18, 20, 21] = 119
    if (sum_3_5(19) === 78
      && sum_3_5(23) === 119) {
      console.log("sum_3_5() passes");
    } else {
      console.error("sum_3_5() fails");
    }
  },

  largestInt: () => {
    if (largest_int([-20, 327, 0, 218, 5, 12, 474, 388]) === 474) {
      console.log("largest_int() passes");
    } else {
      console.error("largest_int() fails");
    }
  },

  inArray: () => {
    if (in_array([-20, 327, 0, 218, 5, 12, 474, 388], 218) === true
      && in_array([73, "hello", 3, "world"], 5) === false
      && in_array(['truth be told', 'i think this assignment is too easy', 'right?'], 'truth be told') === true) {
      console.log("in_array() passes");
    } else {
      console.error("in_array() fails");
    }
  },

  concatArrays: () => {
    let result = concat_arrays([-20, 327, 0, 474, 388], [218, 50]);
    let expected = [-20, 327, 0, 474, 388, 218, 50];
    if (JSON.stringify(result) === JSON.stringify(expected)) {
      console.log("concat_arrays() passes");
    } else {
      console.error(`concat_arrays() fails:\n\tReturned: ${result}\n\tExpected: ${expected}`);
    }
  },

  foodObjectFactory: () => {
    let expected = '{"name":"pizza","ingredients":["tomato sauce","crust","cheese","banana peppers"]}';
    let result = food_object_factory('pizza', 'tomato sauce', 'crust', 'cheese', 'banana peppers');
    if (result && JSON.stringify(result) === expected){
      console.log("food_object_factory() passes");
    } else {
      console.error(`food_object_factory() fails:\n\tReturned: ${result}\n\tExpected: ${expected}`);
    }
  },

  reduceSumPositive: () => {
    let testVals = [Test.rand10Plus(1000), Test.rand10Plus(1000), Test.rand10Plus(1000)];
    let testArr = ['this', 'is', testVals[0], 0, -127, testVals[1],  -342, -1, 'a', testVals[2], 'test'];
    let result = reduce_sum_positive(testArr);
    let expected = testVals[0] + testVals[1] + testVals[2];

    if (result === expected){
      console.log("reduce_sum_positive() passes -- but ensure you are using filter() & reduce()");
    } else {
      console.error(`reduce_sum_positive() fails:\n\tReturned: ${result}\n\tExpected: ${expected}`);
    }
  },

  increaseInts: () => {
    let testVals = [Test.rand10Plus(1000), Test.rand10Plus(1000), Test.rand10Plus(1000)];
    let testIncrementer = Test.rand10Plus(5);

    let increaseIntsResult = increase_ints(testVals, testIncrementer);

    if ( increaseIntsResult
      && increaseIntsResult[0] === testVals[0] + testIncrementer
      && increaseIntsResult[1] === testVals[1] + testIncrementer
      && increaseIntsResult[2] === testVals[2] + testIncrementer) {
      console.log("increase_ints() passes -- but ensure you are using map()");
    } else {
      console.error("increase_ints() fails");
    }
  }
};

Test.run();
