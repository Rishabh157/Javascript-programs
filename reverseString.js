function reverseString(string) {


    if (!string.length) {
        return new Error('Please pass the string')
    }

    let reverseStr = '';

    for (let i = string.length - 1; i >= 0; i--) {
        reverseStr += string[i]
    }

    return reverseStr
}

let result = reverseString('john wick')
console.log(result);
