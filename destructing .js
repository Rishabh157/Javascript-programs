
/*** Destructing ***/

// For Example if want to make a sandwich. will we take everything in 
// Refrigerator to make our sandwich ? or we take only those items who 
// helps us to make a sandwich  

// Destructuring is exactly the same. We may have an array or object 
// that we are working with, but we only need some of the items contained in these.


/*** Array Destructing ***/

let movies = ["Inception", "Dark Night", "Dark Nigh Rises", "tenet", "Batman begins", "Dunkrik", "Interstellar", "Momento"]

let [dream, batman, space, ...all] = movies

// console.log(dream)    // inception
// console.log(batman)   // dark-night
// console.log(space)    // dark-nigh rises
// console.log(all)      // [ 'tenet', 'Batman begins', 'Dunkrik', 'Interstellar', 'Momento' ]



/*** Object Destructing ***/


let director = {
 name: "Christopher",
 lastname: "Nolan",
 age: 51,
 spouse: "Emma Thomas",
 movies: ["Inception", "Dark Night", "Dark Nigh Rises", "tenet", "Batman begins", "Dunkrik", "Interstellar", "Momento"],
 bornYear : 1970
}

// if i want only name and lastname in this director object so we can help with this destructing

let {name , lastname} = director

console.log(name, lastname)