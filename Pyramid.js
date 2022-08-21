/****  This function print the (*) as a pyramid look  ****/

function PyramidNumber(num = 5) {

 for (let i = 1; i <= num; i++) {
  let star = "";
  for (let j = 1; j <= i; j++) {
   star += "*";
  }
  console.log(star)
 }
}

PyramidNumber(90)                // call the function