// Problem Title: IQ Test
// Link: https://www.codewars.com/kata/552c028c030765286c00007d
//Solution: 
function iqTest(numbers){ 
    let countOdd = 0; 
    let countEven = 0; 
    let numArr = numbers.split(" "); 
    for(let i=0; i < numArr.length; i++) {
        if(numArr[i] % 2 ===0) {
            countEven++;
        } else {
            countOdd++; 
        }
    }
    if(countOdd > countEven) {
          let result = numArr.filter((el) => el % 2 === 0)[0]; 
          return numArr.indexOf(result) + 1;
      } else {
        let result = numArr.filter((el) => el % 2 !== 0)[0];
        return numArr.indexOf(result) + 1;
      }
      return -1; 
    }