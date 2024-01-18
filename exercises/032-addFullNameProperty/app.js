function addFullNameProperty(obj) {
  // Add your code after this line
  obj.fullname = obj.firstName + " " + obj.lastName;
  return obj
}

console.log(addFullNameProperty({ firstName: "Jade", lastName: "Smith" }))