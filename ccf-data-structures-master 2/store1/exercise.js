var store1 = require('./store1-data.js');

// *********** ACCESSING DATA *********** \\

// How would you access the value '4.63' from store1?

console.log(store1['2015-01-06'][0][1];)

// How would you access how many 'Mint Wafers' were sold on January 6th?

console.log(store1['2015-01-06'][1][2]);
// Produce an array of the date keys in store1's data.

var anArray = store1[1];
console.log(anArray);

// *********** LOOPING OVER DATA *********** \\


// Create a loop to read which candies were sold by store1 on Jan 8. After simply outputting the data, try creating an array that contains the candy names.
var x = [];
for (var i = 0; i < store1['2015-01-08'].length; i++) {
    x.push(store1['2015-01-08'][i][0]);
}
console.log(x);
// Create a loop to count the total number of candies sold on Jan 10 at store1. Where do you have to initialize the counter variable? Why?

var y = 0;
for (var i = 0; i < store1['2015-01-10'].length; i++) {
    y += store1['2015-01-08'][i][2];
}
console.log(y);

// Use `Object.keys()` to get an array of the dates that candies were sold at store1.
console.log(Object.keys(store1));
var dates = Object.keys(store1);

// Iterate over the generated array of dates. Use each date to console.log the specific sale data for the day from store1.

var c = 0;
console.log(store1[dates[0]][0][2]);
for (var i = 0; i < dates.length; i++) {
    for (var u = 0; u < store1[dates[i]].length; u++) {
        c += store1[dates[i]][u][2];
    }
}
console.log(c);


// Use a loop to calculate the total number of candies sold at store1.

// In the previous exercise, where did you have to initialize the counter variable? Why?


// *********** CHALLENGE *********** \\

// Create an array of the candies sold by store1 on January 10th.
