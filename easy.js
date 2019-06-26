// find if a linked list has a cycle
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let pointer1 = head;
  let pointer2 = head.next;

  while (pointer1 && pointer2) {
    if (pointer1 === pointer2) return true;
    pointer1 = pointer1.next;
    if (!pointer2.next) {
      return false;
    } else {
      pointer2 = pointer2.next.next;
    }
  }

  return false;
};

// find max triplet product of arr
// O(nlog(n)) because of sorting

var maximumProduct = function (nums) {
  let sortedNums = nums.slice().sort((a, b) => a - b);
  let size = sortedNums.length;

  let ans1 = sortedNums[0] * sortedNums[1] * sortedNums[size - 1];
  let ans2 = sortedNums[size - 1] * sortedNums[size - 2] * sortedNums[size - 3]
  return Math.max(ans1, ans2);
};