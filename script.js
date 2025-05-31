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

// let fn = (a, b, c) => a + b + c;
// let onceFn = once(fn);

// console.log(onceFn(1, 2, 3));
// console.log(onceFn(2, 3, 6));
let callCount = 0;

function memoize(fn) {
  let cache = {};

  return function (...args) {
    if (cache.hasOwnProperty(fn(...args))) {
      console.log(cache, "cac");
      return cache[fn(...args)];
    } else {
      cache[fn(...args)] = fn(...args);
      return fn(...args);
    }
  };
}

const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
// memoizedFn(2, 3); // 5
// memoizedFn(2, 3); // 5
// console.log(memoizedFn(2, 3));
// console.log(memoizedFn(2, 6));
// console.log(memoizedFn(2, 5));

let remove = function removeDuplicates(nums) {
  let uniqueKey = {};
  let result = [];
  let i = 0;
  for (i = 0; i < nums.length; i++) {
    if (typeof nums[i] === "number") {
      if (!uniqueKey.hasOwnProperty(nums[i])) {
        uniqueKey[nums[i]] = nums[i];
        result.push(nums[i]);
      }
    }
  }
  return result.length;
};
let removeDup = function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

// console.log(removeDup([2, 10, 10, 30, 30, 30]));

let removeEl = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
console.log(removeEl([1, 1, 2, 3, 4], 2));
