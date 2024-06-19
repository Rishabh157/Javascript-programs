function removeWhhiteSpace(string) {
    return string.replaceAll(' ', '')
}

let result = removeWhhiteSpace('Life  is like riding a bicycle. To keep your balance, you must keep moving.	')
console.log(result)
