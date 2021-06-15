/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if(i === nums.length - 1){
    return nums[nums.length - 1];
  }
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {

  function _longest(words, highest = '', i = 0){
    if(words[i].length > highest.length){
      highest = words[i];
    }

    // base case here
    if(i === words.length - 1){
      return highest.length; 
    }

    return _longest(words, highest, i + 1);
  }
  return _longest(words); 
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  function _everyOther(str, acc = '', i = 0){
    if(i % 2 === 0){
      acc += str[i]; 
    }
    
    // base case here
    if(i === str.length - 1){
      return acc; 
    }

    return _everyOther(str, acc, i + 1);

  }

  return _everyOther(str); 
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  let even = (str.length % 2 === 0) ? true : false;

  function _isPalindrome(str, leftI = 0, rightI = str.length - 1){
    // base cases
    if(str[leftI] !== str[rightI]){
      return false; 
    }
    else if(even && leftI + 1 === rightI){
      return true; 
    }
    else if(leftI === rightI){
      return true;
    }

    return _isPalindrome(str, leftI + 1, rightI - 1);
    
  }
  return _isPalindrome(str);
}



/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  function _findIndex(arr, val, i = 0){
    if(arr[i] === val){
      return i; 
    }
    else if(i === arr.length - 1){
      return -1; 
    }

    return _findIndex(arr, val, i + 1);
  }

  return _findIndex(arr, val);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  function _revString(str, copy='', i=str.length - 1){
    copy += str[i]; 
    
    // base cases
    if(i === 0){
      return copy; 
    }

    return _revString(str, copy, i - 1);
  }

  return _revString(str);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const values = Object.values(obj);
  function _gatherStrings(values, acc=[], i=0){
    if(typeof values[i] === 'string'){
      acc.push(values[i]);
    }
    else if(typeof values[i] === 'object'){
      const nestedValues = Object.values(values[i]); 
      _gatherStrings(nestedValues, acc); 
    }

    // base case 
    if(i === values.length -1 ){
      return acc; 
    }

    return _gatherStrings(values, acc, i + 1);
  }
  
  return _gatherStrings(values);
}


// ONLINE INSTRUCTIONS MARK BINARY SEARCH AND BEYOND AS FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
