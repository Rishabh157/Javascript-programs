

// Promise is a way to handle asynchronous operations in JavaScript. 
// It allows handlers with an asynchronous action's eventual success value or failure reason.
// the asynchronous method returns a promise to supply the value at some point in the future.


// A Promise is in one of these states:

//     Pending: initial state, neither fulfilled nor rejected.
//     Fulfilled: meaning that the operation completed successfully.
//     Rejected: meaning that the operation failed.


const callBack = (err, success) => {
 if (err) {
  console.log(err)
 } else {
  console.log(success)
 }
}

// CallBack Function 
const doSomething = callback => {
 setTimeout(() => {
  const skills = ["HTML", "Reactjs", "Nodejs"]
  console.log("it will call you back", skills)
 }, 3000)
}

doSomething(callBack)


