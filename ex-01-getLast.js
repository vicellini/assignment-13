/**
 * Ex-01: getLast()
 *
 * Write a function called getLast() that returns the last element of an array.
 *
**/

var getLast = function(someArray){
  var arrayLen = someArray.length
  for(var i = 0; i < someArray.length; i++){
    if(i === arrayLen - 1){
      var finalValue = someArray[i];
    }
  }
  return finalValue
}


console.assert( getLast([1,8,4,3]) === 3 )
console.assert( getLast([1,8,4,3,5]) === 5 )
console.assert( getLast(['a','b','c','d','e','f']) === 'f' )
console.assert( getLast([true, false, false, true, false]) === false )
