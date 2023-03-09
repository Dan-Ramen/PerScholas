//Homework Function Drills

// 1 . ) Write a function that outputs the sum of the first and the last index of an array.
var sampleArray = [1,2,3,4,5] 
function sum(sampleArray) {
    return Number(sampleArray[0]) + Number(sampleArray[sampleArray.length - 1]);
}
 
console.log(sum([1, 5]));
//expected output =>  sum = 6

// 2. Write a JavaScript program to find the leap years in a given range of years. 
function leapYearRange(startYear, endYear) {
        var yearRange = [];
        for (let i = startYear; i <= endYear; i++)
        {
             yearRange.push(i);
        }
        var newArray = [];
  yearRange.forEach(
   function(year)
    { 
       if (testLeapYear(year)) 
       newArray.push(year);
    });
  return newArray;
     }
function testLeapYear(year) {
   if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
                return year;
        } else {
                return false;
        }
}
console.log(leapYearRange(2000,2012));
// 3. Write a JavaScript function to sort the following array of objects by title value.
 var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
function compareToSort(x,y) 
 {
  if (x.title < y.title)
    return -1;
  if (x.title > y.title)
    return 1;
  return 0;
 }
console.log(library.sort(compareToSort));
 // 4. Write a JavaScript program that takes an array with mixed data type and calculate the sum of all numbers.
 // Test Data :
// arrayMix = [2, "11", 3, "a2", false, 5, 7, 1]
arrayMix = [2, 3, 0, 5, 7, 8, true, false]
function addAll(arrayMix) {
  var total = 0;
  for(var i = 0; i <= arrayMix.length; i++){
    if (typeof arrayMix[i] === "number")
      total = total+arrayMix[i];
  }
return total; 
}
console.log("Original array: "+ arrayMix)
console.log("Sum all numbers of the said array: "+ addAll(arrayMix));
// Expected Output:
// Original array: 2,11,3,a2,false,5,7,1
// Sum all numbers of the said array: 18

// 5. You will be given an array of drinks, with each drink being an object with two properties: name and price. 
   // Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
   // Assume that the following array of drink objects needs to be sorted:
   drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
  ]
console.log(drinks.sort((a, b) => (a.name < b.name) ? 1 : -1)); //this is how you syntax an arrow function right?

//Example output =>
  // sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
