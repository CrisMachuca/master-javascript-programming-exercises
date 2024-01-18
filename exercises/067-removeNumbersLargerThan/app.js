let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
    // your code here
    for (let k in obj) {
        if (typeof obj[k] === 'number' && obj[k] > num) {
            delete obj[k];
        }
    }
    return obj;
}

  removeNumbersLargerThan(5, obj);
  console.log(obj); // --> { b: 2, c: 'montana' }
