// Problem Title: Replace With Alphabet Position
// Link: https://www.codewars.com/kata/546f922b54af40e1e90001da
//Solution: 
function alphabetPosition(text) {
    let letters = ("abcdefghijklmnopqrstuvwxyz").split("");
    text = [...text.toLowerCase()].filter((el) => el !== " ").map((el) => [...letters].indexOf(el) + 1).filter((el) => el !== 0);
    text = text.join(' '); 
    return text.slice(0,text.length); 
  }