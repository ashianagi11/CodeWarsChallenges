//Problem Title: Where my anagrams at? 
//Link: https://www.codewars.com/kata/523a86aa4230ebb5420001e1


//Solution: 
function anagrams(word, words) { 
    word = [...word].sort().join(''); 
    let sorted = words.filter(function(el) {
        if([...el].sort().join('') === word) {
         return el; 
      }
    }
  )
    return sorted;
  }