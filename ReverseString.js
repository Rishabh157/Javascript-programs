/******  function for reverse the string   ******/

function reverseString(str = "Hello World") {
 let ans = "";
 for (let i = str.length - 1; i >= 0; i--) {
  ans += str[i]
 }
 return ans
}


let result = reverseString("GOPAL")
console.log(result)