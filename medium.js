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
  for (let i = 0; i < sorted.length - 2; i++) {
    while (sorted[i] === sorted[i - 1]) {
      i += 1;
    }
    let equalizer = sorted[i];
    let j = i + 1;
    let k = sorted.length - 1;
    while (j < k) {
      if (sorted[j] + sorted[k] === -equalizer) {
        result.push([equalizer, sorted[j], sorted[k]]);
        j += 1;
        while (sorted[j] === sorted[j - 1]) {
          j += 1;
        }
      } else if (sorted[j] + sorted[k] > -equalizer) {
        k -= 1;
      } else {
        j += 1;
      }
    }
  }

  return result;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */

var inorderArray = function (root) {
  if (!root) return [];

  return inorderArray(root.left).concat([root.val]).concat(inorderArray(root.right));
}



//helper func
var inorderArray = function (root) {
  if (!root) return [];

  return inorderArray(root.left).concat([root.val]).concat(inorderArray(root.right));
};

//condensed and finished code
// O(height of tree) 
var deleteNode = function (root, key) {
  if (root === null) return root;
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else {
    if (!root.left && !root.right) {
      root = null;
    } else if (!root.left && root.right) {
      root = root.right;
    } else if (root.left && !root.right) {
      root = root.left;
    } else {
      let inorder = inorderArray(root);
      for (let i = 0; i < inorder.length; i++) {
        if (inorder[i] === root.val) {
          root.val = inorder[i + 1];
          root.right = deleteNode(root.right, inorder[i + 1]);
          break;
        }
      }
    }
  }

  return root;
};

// O(n) time solution and O(1) space 
var oddEvenList = function (head) {
  if (!head || !head.next) return head;
  let evenHead = head.next;
  let currentOdd = head;
  let currentEven = head.next;
  let current = head.next.next;
  let counter = 1;
  while (current) {
    if (counter % 2 === 0) {
      currentEven.next = current;
      currentEven = currentEven.next
    } else {
      currentOdd.next = current;
      currentOdd = currentOdd.next;
    }
    current = current.next;
    counter += 1;
  }

  currentEven.next = null;
  currentOdd.next = evenHead;
  return head;
};

