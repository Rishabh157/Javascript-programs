function counterStringCharacters(string) {
    let count = {}
    for (let char of string) {
        console.log('char', char)
        count[char] = (count[char] || 0) + 1
    }
    return count
}

let result = counterStringCharacters("Look again at that dot");
console.log(result)
