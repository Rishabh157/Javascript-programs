function highAndLow(string) {
    const number = string.split(' ')
    // console.log(number)

    let high = 1
    let low = 1

    for (let num of number) {
        if (high < parseInt(num)) {
            high = parseInt(num)
        }

        if (low > parseInt(num)) {
            low = parseInt(num)
        }
    }
    return [high, low].join(' ')
}


console.log(highAndLow('1 2 3 4 5')); // '5 1'
console.log(highAndLow('1 2 -3 4 5')); // '5 -3'
console.log(highAndLow('1 9 3 4 -5')); // '9 -5'
console.log(highAndLow('0 -214 542')); // '542 -214'
