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

// Converting number into string

const ONES = [
 '',
 'one',
 'two',
 'three',
 'four',
 'five',
 'six',
 'seven',
 'eight',
 'nine'
];

const TEENS = [
 'ten',
 'eleven',
 'twelve',
 'thirteen',
 'fourteen',
 'fifteen',
 'sixteen',
 'seventeen',
 'eighteen',
 'nineteen'
];

const TENS = [
 'twenty',
 'thirty',
 'forty',
 'fifty',
 'sixty',
 'seventy',
 'eighty',
 'ninety'
];

const HUNDREDS = [
 'one-hundred',
 'two-hundred',
 'three-hundred',
 'four-hundred',
 'five-hundred',
 'six-hundred',
 'seven-hundred',
 'eight-hundred',
 'nine-hundred',
];

function convert(int){
  if (int === 0) return;
  if (int < 10) return ONES[int];
  if (int < 20) return TEENS[int % 10];
  
  let divisor;
  if (int > 1000){
    divisor = 1000;
  }else if (int > 100){
    divisor = 100;
  }else {
    divisor = 10;
  }

  let remainder = int % divisor;
  let number = Math.floor(int / divisor);
  let stringified;

  if (divisor == 10){
    stringified = `${TENS[number - 2]} `;
  }else if (divisor == 100){
    stringified = ONES[number] + ' hundred and ';
  }else {
    stringified = ONES[number] + ' thousand ';
  }

  return stringified + convert(remainder);
}


console.log(convert(115));
console.log(convert(85));
console.log(convert(123));
console.log(convert(999));
console.log(convert(1115));
console.log(convert(9345));


var countAndSay = function (n) {
  let res = '1';

  for (let i = 1; i < n; i++) {
    let temp = '';
    let count = 1;
    for (let j = 0; j < res.length; j++) {
      if (res[j] === res[j + 1]) {
        count += 1;
      } else {
        temp += `${count}${res[j]}`;
        count = 1;
      }
    }
    res = temp;
  }


  return res;
};

var plusOne = function (digits) {
  let res = digits.slice().reverse();
  res[0] += 1;
  let i = 0;
  while (res[i] >= 10) {
    res[i] = 0;
    if (i + 1 === res.length) {
      res.push(1);
    } else {
      res[i + 1] += 1;
    }
    i += 1;
  }

  return res.reverse();
};

var isValid = function (str) {
  let pairs = {
    '}': '{',
    ')': '(',
    ']': '['
  };

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (pairs[current]) {
      let check = stack.pop();
      if (pairs[current] != check) return false;
    } else {
      stack.push(current);
    }
  }

  if (stack.length) return false;
  return true;
};

// O(n*m) can reduce amount of code O(n*m) space
var mergeTwoLists = function (l1, l2) {
  if (l1 === null && l2 === null) return null;
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  let head;
  let current1 = l1;
  let current2 = l2;

  if (l1.val <= l2.val) {
    head = new ListNode(l1.val);
    current1 = current1.next;
  } else {
    head = new ListNode(l2.val);
    current2 = current2.next;
  }

  let currentH = head;

  while (current1 && current2) {
    if (current1.val <= current2.val) {
      currentH.next = new ListNode(current1.val);
      current1 = current1.next;
    } else {
      currentH.next = new ListNode(current2.val);
      current2 = current2.next;
    }
    currentH = currentH.next;
  }

  if (current1) {
    currentH.next = current1;
  } else {
    currentH.next = current2;
  }
  return head;
};

// O(n*m) time, O(1) space, less code

var mergeTwoLists = function (l1, l2) {
  if (l1 === null && l2 === null) return null;
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  let current1 = l1;
  let current2 = l2;
  let currentH;


  if (l1.val <= l2.val) {
    currentH = l1;
    current1 = current1.next;
  } else {
    currentH = l2;
    current2 = current2.next;
  }
  let head = currentH;

  while (current1 && current2) {
    if (current1.val <= current2.val) {
      currentH.next = current1;
      current1 = current1.next;
    } else {
      currentH.next = current2;
      current2 = current2.next;
    }
    currentH = currentH.next;
  }

  if (current1) {
    currentH.next = current1;
  } else {
    currentH.next = current2;
  }
  return head;
};

// Very time inefficient O(n^2) 
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  let prefixes = "";
  strs.sort((a, b) => a.length - b.length);

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return prefixes;
      }
    }
    prefixes += char;
  }

  return prefixes;
};