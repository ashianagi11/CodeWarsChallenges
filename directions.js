//Problem Title: Directions Reduction
//Link: https://www.codewars.com/kata/550f22f4d758534c1100025a
//Solution:
function dirReduc(arr){
    let dir = {
      'NORTH': 'SOUTH',
      'SOUTH': 'NORTH',
      'EAST': 'WEST',
      'WEST': 'EAST'
    }
    
    for (let i = 0; i < arr.length; i++) {
      if (dir[arr[i]] === arr[i+1]) {
        arr.splice(i, 2);
        i === 0 ? i-=1 : i-=2 
      }
    }
    return arr;
  }