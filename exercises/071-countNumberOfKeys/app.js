let obj = {
    firstName: "Rafael",
    lastName: "Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27
}

function countNumberOfKeys(obj) {
    // your code here
    for (let key in obj) {
   for (let i = 0; i<= obj.length; i++) {
    return obj
   }
   }
}

let output = countNumberOfKeys(obj);
console.log(output); // --> 6
