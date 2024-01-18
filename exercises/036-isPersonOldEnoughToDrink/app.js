function isPersonOldEnoughToDrink(person) {
  // Add your code after this line
  if (person.age >= 21)
    return true
  else
    return false
}

let obj = {
  age: 22
}

let output = isPersonOldEnoughToDrink(obj);
console.log(output);