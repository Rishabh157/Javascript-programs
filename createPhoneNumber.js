function createIndianPhoneNumber(array) {
    for (let num of array) {
        if (num.toString().length > 1) {
            return 'invalid array'
        }
    }

    let string = array.join('')

    return `(${string.substring(0, 3)}) ${string.substring(3, 6)}-${string.substring(6, string.length)}`

}

console.log(createIndianPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'
console.log(createIndianPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // '(111) 111-1111'
console.log(createIndianPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'
