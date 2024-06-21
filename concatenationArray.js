function concateArray(array){
    return [...array , ...array]
}

// let result = concateArray([1,2,3])
let result = concateArray([4, 3, 2, 1])
console.log(result)
