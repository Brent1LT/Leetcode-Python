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