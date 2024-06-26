function squareDigits(number) {
    if (number < 0) return 'invalid number'

    let str = number.toString()
    // console.log(str)
    // console.log(typeof str)
    let square = ''
    for (let num of str) {
        square += num * num
    }

    return Number(square)
}

console.log(squareDigits(2112)); // 4114
console.log(squareDigits(3212)); // 9414
console.log(squareDigits(9159)); // 8112581
