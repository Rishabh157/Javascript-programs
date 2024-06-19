function palindrome(string) {
    let newStr = ''
    for (let i = string.length - 1; i >= 0; i--) {
        newStr += string[i];
    }

    if (string !== newStr) {
        return `${string} is not a palindrome`;
    }

    return `${string} is a palindrome`
}

let result = palindrome('TENET')
console.log(result)
