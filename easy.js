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