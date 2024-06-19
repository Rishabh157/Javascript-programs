function factorial(number) {
    let factorial = 1

    if (number === 0) {
        return 1
    }

    for (let i = 1; i <= number; i++) {
        factorial *= i
    }
    return factorial
}

let result = factorial(0)
console.log(result)
