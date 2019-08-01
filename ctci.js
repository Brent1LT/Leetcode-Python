function uniqueStr(string){
  let set = new Set();

  for(let i = 0; i < string.length; i++){
    if(set.has(string[i])){
      return false;
    }else{
      set.add(string[i]);
    }
  }

  return true;
}

function checkPermutation(string1, string2){
  if(string1.length !== string2.length) return false;

  let items = new Proxy({}, {
    get: function(object, property){
      return object.hasOwnProperty(property) ? object[property] : 0;
    }
  });
  
  for(let i = 0; i < string1.length; i++){
    items[string1[i]] += 1;
  }

  for(let j = 0; j < string2.length; j++){
    if(items[string2[j]] === 0) return false;
    items[string2[j]] -= 1;
  }

  return true;
}