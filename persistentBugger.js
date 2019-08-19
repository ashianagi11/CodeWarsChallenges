// Problem Title: Persistent Bugger.
// Link: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
//Solution: 
function persistence(num) {
    let count=0;
    helper(num); 
    function helper(num) {
       let str = '';
       str += num;
       if(str[1] === undefined) {
         return count;  
       } else {
       count++; 
       str = [...str].reduce((a,b) => a * b); 
       } 
       return helper(str); 
    }
    return count; 
  }