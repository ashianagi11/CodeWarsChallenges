//Problem Title: Format a string of names like 'Bart, Lisa & Maggie'.
//Link: https://www.codewars.com/kata/53368a47e38700bd8300030d

//Solution: 
function list(names){
  if(names.length === 1) {
    return names[0].name;
    }
  if(names.length < 1) {
    return ''; 
  }
  return names.map((el) => el.name).slice(0,-1).join(", ") + " & " + names[names.length -1].name; 
}