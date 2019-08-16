//returns a boolean
// asdf dsaf -> true
// asdf sadf -> false

// asdf dsdf 
// even1 = {
//   a => 1 
//   d => 1
// }

// even2{
//   d => 2

// }
function switchable(str1, str2){
  if(str1.length !== str2.length) return false;
  let even1 = {};
  let even2 = {};
  let odd1 = {};
  let odd2 = {};

  for(let i = 0; i < str1.length; i++){
    if( i % 2 === 0){
      if(even1[str1[i]] === undefined){
        even1[str1[i]] = 1;
      } else even1[str1[i]] += 1;

      if (even2[str2[i]] === undefined) {
        even2[str2[i]] = 1;
      } else even2[str2[i]] += 1;
    }else{
      if (odd1[str1[i]] === undefined) {
        odd1[str1[i]] = 1;
      } else odd1[str1[i]] += 1;

      if (odd2[str2[i]] === undefined) {
        odd2[str2[i]] = 1;
      } else odd2[str2[i]] += 1;
    }
  } 

  // console.log(even1, even2)
  // console.log(odd1, odd2)

  
  for(let key in even1){
    if(even1[key] !== even2[key]) return false;
  }


  for (let key in odd1) {
    if (odd1[key] !== odd2[key]) return false;
  }
  return true;
}

function switchable(str1, str2){
  if (str1.length !== str2.length) return false;
  let even = {};
  let odd = {};

  for(let i = 0; i < str1.length; i++){
    if( i % 2 === 0){
      if (even[str1[i]] === undefined) {
        even[str1[i]] = 1;
      } else even[str1[i]] += 1;
    }else{
      if (odd[str1[i]] === undefined) {
        odd[str1[i]] = 1;
      } else odd[str1[i]] += 1;
    }
  }

  for(let i = 0; i < str2.length; i++){
    if (i % 2 === 0) {
      if (even[str1[i]] === undefined) {
        return false;
      } else even[str1[i]] -= 1;
    } else {
      if (odd[str1[i]] === undefined) {
        return false;
      } else odd[str1[i]] -= 1;
    }
  }

  for(let key in even){
    if(even[key] !== 0) return false;
  }

  for(let key in odd){
    if(odd[key] !== 0) return false;
  }


  return true;
}

// not best time solution
function spellingBeeSolutions(wordlist, puzzles) {
  // Write your code here
  let result = [];
  for (let index = 0; index < puzzles.length; index++) {
    let count = 0;
    let puzzle = puzzles[index];
    let set = new Set(...puzzle.split());

    for (let current = 0; current < wordlist.length; current++) {
      let word = wordlist[current];
      if (!word.includes(puzzle[0])) continue;
      let add = true;
      for (let letter = 0; letter < word.length; letter++) {
        if (!set.has(word[letter])) add = false;
      }

      if (add) count += 1;
    }

    result.push(count);
  }

  return result;
}

// input:
//  wordlist = ["APPLE", 'PLEAS', 'PLEASE'] 
//  puzzles = ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPXY', 'XAELPSY']

//output: 
//  [0, 1, 3, 2, 0] 
//can make 0 of the words with first puzzle, 1 with the second, etc.
//and none of the words contain the key letter 'X' for the last one 