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