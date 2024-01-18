function addObjectProperty(obj1, key, obj2) {
  // Add your code after this line
  obj1[key] = obj2
  return obj1
}

let obj1 = {
  name: 'Joe Blow',
  role: 'schlub'
};
let obj2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};
console.log(addObjectProperty(obj1, 'manager', obj2));
console.log(obj1.manager);