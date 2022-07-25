/*** Spread oprator ***/

// javascript spread oprator allow us to quickly copy 
// all or part of an existing array or object into another array or object

/*** Arrays ***/

const first = [10, 20, 30]

const second = [80, 90, 100]

const copyFirst = [...first, 40, 50, 60, 70, ...second]

// console.log(copyFirst)    //[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

/** Spread Operator Destructuring. ***/

// if we want to some particular value in the array we can use it

let [one, two, three, ...all] = copyFirst

// console.log(one)    // 10
// console.log(two)    // 20
// console.log(three)  // 30
// console.log(all)    // [40, 50,  60, 70, 80, 90, 100]



/*** Objects ***/

let obj1 = {
 name: "Rishabh",
 lastName: "Kumar",
 bornDate: 30,
 bornMonth: "JULY",
 bornYear: 1970,
 currentAge: 19,
 passion: "Time & Space"
}

let obj2 = {
 name: "Christopher",
 lastName: "Nolan",
 bornDate: 30,
 bornMonth: "JULY",
 bornYear: 1970,
 currentAge: 51,
 passion: "Making a Science Fictions Movies"
}


let cpObj1 = { ...obj1, ...obj2, movie: ["Dark-Night", "Inception", "Interstellar", "Tenet", "Dunkrik"] }
// Notice the properties that did not match were combined like movie array, but 
// the property that did match, like name and so on , was overwritten by the last 
// object that was passed, obj2. The resulting name is now is => 'Christopher'

console.log(cpObj1)

