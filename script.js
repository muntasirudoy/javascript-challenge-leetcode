// find max sub array

let arr = [4, 6, 1, 3, 5, 5];
let k = 6;

function findMaxAverage(nums, k) {
  if (nums.length < k) {
    throw new Error("Array length is smaller than the subarray size k.");
  }

  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  let maxSum = windowSum;

  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum / k;
}

// console.log(findMaxAverage(arr, k));

var expect = function (val) {
  return {
    toBe: function (v) {
      if (val !== v) throw new Error("Not Equal");
      return true;
    },
    notToBe: function (v) {
      if (val === v) throw new Error("Equal");
      return true;
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

// console.log(expect(5).toBe(5));

var createCounter = function (init) {
  let orgValue = init;
  let current = init;
  return {
    increment: () => {
      return ++current;
    },
    reset: () => {
      current = orgValue;
      return current;
    },
    decrement: (v) => {
      return --current;
    },
  };
};

// console.log(createCounter(5).increment());
// console.log(createCounter(5).decrement());
// console.log(createCounter(5).decrement());

// let arra = [null, null, null];
var map = function (arr, fn) {
  let returnedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== null && typeof arr[i] === "number") {
      returnedArray.push(fn(arr[i], i));
    }
  }

  return returnedArray;
};

// console.log(
//   map(arra, (n, i) => {
//     return n + i;
//   })
// );

let arra = [0, 2, 3];
var filter = function (arr, fn) {
  let filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Boolean(fn(arr[i], i))) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};
// console.log(
//   filter(arra, (n, i) => {
//     return n > i;
//   })
// );

var once = function (fn) {
  let called = false;

  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    } else {
      return undefined;
    }
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));
