// Problem Title: Moving Zeros To The End
// Link: https://www.codewars.com/kata/52597aa56021e91c93000cb0
//Solution: 
var moveZeros = function (arr) {
    let zeros = arr.filter((el) => el === 0); //returns an array of all the zeros from arr. 
    let res = arr.filter((el) => el !== 0);  // returns an array of all the nonzeros from arr.
    return res.concat(zeros); //adds the arr together. 
   }