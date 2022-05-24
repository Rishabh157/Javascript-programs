// Q - 1 ) variable vs Property 
// explation => obj.greet() is a methods invocations, 
// that's why this keyword inside the method equal object

const obj = {
 msg: "Hello, COSMOS!",

 greet() {
  const msg = "Hello, WORLD!"
  return this.msg  // print property values if we remove this keyword then print variable in the function
 }
}

let ans = obj.greet()
console.log(ans)



// -----------------------------------------------------------------------------------------
// Q - 2 )  PLANET Name ?
// explation => When a function invoked as a constructor new Planet("EARTH !")
// this keyword inside the constructor function equals the constructed object


function Planet(name) {
 this.name = name

 this.getPlanetName = () => this.name
}

const names = new Planet("EARTH !")

console.log(names.getPlanetName())

let {getPlanetName} = names
console.log(getPlanetName())



// -----------------------------------------------------------------------------------------
// Q - 3 )  Delayed Greetings ?
// explation => while setTimeOut() function uses the timeObj.getMessage() as
// a callback, still, it invokes timeObj.getMessage() as a Regular function,
// rather then method  

let timeObj = {
 msg: "Hello Time !",

 getMessage() {
  console.log(this.msg)
 }
}

setTimeout(timeObj.getMessage, 3000)


// -----------------------------------------------------------------------------------------
// Q - 4 )  Artificial method ?
// explation => there are at least 3 ways how to loggedMessage() as a Method on the object

let artObj = {
 msg: "Hello AI !"
}

function loggedMessage() {
 console.log(this.msg)
}

//using call() method 
loggedMessage.call(artObj)

// using apply() method
loggedMessage.apply(artObj)

//using bind() method it's create a Bound function
let bindAns = loggedMessage.bind(artObj)
bindAns()


// -----------------------------------------------------------------------------------------
// Q - 5 )  Greeting and farewell ?
// explation => When calling greetObj.greet(), inside the method greet() this value equals object. 
// because greet is a regular function. Thus greetObj.greet() returns 'Hello, COSMOS!'.
// But arroGreet() is an arrow function, so this value inside of an arrow function 
// always equals this of the outer scope. The outer scope of farewell() is the global 
// scope, where this is the global object. Thus greetObj.arroGreet() actually returns 
// 'HELLO, ${window.who}!', which evaluates to 'HELLO, undefined!'.
 

let greetObj = {
 who: "COSMOS!",

 greet() {
  return `HELLO ${this.who}`
 },

 arroGreet: () => {
  return `HELLO ${this.who}`
 }

}

console.log(greetObj.greet())
console.log(greetObj.arroGreet())
