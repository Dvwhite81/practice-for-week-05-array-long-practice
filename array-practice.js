// Time: O(n)
// Space: O(1)
// Loops through n, no extra space
const findMinimum = arr => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (current < min) {
      min = current;
    }
  }
  return min;
};

// Time: O(n)
// Space: O(n)
// Loop through n, new space for n
const runningSum = arr => {
  let results = [];
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    total += current;
    results.push(total);
  }
  return results;
};

// Time: O(n)
// Space: O(1)
// Loops through n, no extra space
const evenNumOfChars = arr => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (current.length % 2 === 0) {
      count++;
    }
  }
  return count;
};

// Time: O(n^2)
// Space: O(n)
// Loops through n * n, new space for n
const smallerThanCurr = arr => {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let current = arr[i];
    for (let j = 0; j < arr.length; j++) {
      let newCurrent = arr[j];
      if (newCurrent < current) {
        count++;
      }
    }
    results.push(count);
  }
  return results;
};

// Time: O(n^2)
// Space: O(1)
// Loops through n * n-1, no extra space
const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    let first = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let second = arr[j];
      if (first + second === target) {
        return true;
      }
    }
  }
  return false;
};

// Time: O(n log n)
// Space: O(n)
// Sort is n log n, extra space for n
const secondLargest = arr => {
  let results = arr.sort((a, b) => b - a);
  return results[1];
};

// Time: O(log n)
// Space: O(n)
// I think? Time is linear while n is exponential = log n?
const shuffle = (arr) => {
  let results = [];
  while (results.length < arr.length) {
    let random = Math.floor(Math.random() * arr.length);
    let current = arr[random];
    if(!results.includes(current)) {
      results.push(current);
    }
  }
  return results;
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
