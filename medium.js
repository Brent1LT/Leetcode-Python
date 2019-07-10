// how to determine where linked list meets

var detectCycle = function (head) {
  let walk = head;
  let run = head;

  while (run && run.next) {
    walk = walk.next;
    run = run.next.next;

    if (walk === run) {
      let start = head;
      // if there is s cycle, head and walk will meet at the beginning of cycle
      while (start !== walk) {
        start = start.next;
        walk = walk.next;
      }

      return walk;
    }
  }

  return null;
};

// find min in a rotated but sorted array
// O(n) solution
var findMin = function (nums) {
  let min = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) min = nums[i];
  }
  return min;
};

// O(log(n)) solution
// augmented binary search

var findMin = function (nums) {
  if (nums.length === 1) return nums[0];
  let left = 0;
  let right = nums.length - 1;

  if (nums[left] < nums[right]) return nums[left];

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
    if (nums[mid - 1] > nums[mid]) return nums[mid];
    if (nums[mid] > nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};

// O(n^2) solution
var threeSum = function (nums) {
  let result = [];
  let sorted = nums.slice(0).sort((a, b) => a - b);
  for (let i = 0; i < sorted.length - 3; i++) {
    let equalizer = sorted[i];
    let j = i + 1;
    let k = sorted.length - 1;
    while (j < k) {
      if (j + k === -equalizer) {
        result.push([equalizer, sorted[j], sorted[k]]);
        j += 1;
        while (sorted[j] === sorted[j - 1]) {
          j += 1;
        }
      }
      if (j + k > -equalizer) {
        k -= 1;
      } else {
        j += 1;
      }
    }
  }

  return result;
};