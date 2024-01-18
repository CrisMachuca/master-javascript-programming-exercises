function getElementsUpTo(array, n) {
  // your code here
  let upTo = array.slice(0,n);
  return upTo
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
