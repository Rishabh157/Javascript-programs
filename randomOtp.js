// otpNum => function parameter which number otp you want e.g => 4 or5 or 6 ? 

const genRateOtp = (otpNum) => {
 // genrate a random number as an String
 let random = String(Math.round(Math.random() * Math.pow(10, otpNum)))

 // check if random number is not the length as you want then add 0 in first position
 if (random.length != otpNum) {
  let otpLen = otpNum - random.length
  random = "0".repeat(otpLen) + random
  return random
 }
 else {
  return random
 }
}

let otp = genRateOtp(6)
console.log(otp)

// below code => if you want to print 100 otp at once time you can change the number
// let arr = []
// for (let i = 0; i <= 100; i++) {
//  arr.push(genRateOtp(6))
// }
// console.log(arr)
