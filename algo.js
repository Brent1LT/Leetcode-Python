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

