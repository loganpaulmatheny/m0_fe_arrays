var arrString = ["Arlo", "Lily", "Logan", "Delphine"];

var arrNumbers = [1, 2, 3, 4];

var arrBool = [true, false, false, true];

// push the string "Oly" to the end of the strings array
arrString.push("Oly");
console.log(arrString);

// returns the end two elements from the numbers array
var endNumbers = arrNumbers.slice(-2);
console.log(endNumbers);

// add false element to the beginning of the array
arrBool.unshift(false);
console.log(arrBool);
