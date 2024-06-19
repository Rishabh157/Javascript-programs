function findLongestWord(string) {
    if (!string.length) {
        return new Error('please pass the string')
    }

    let splitArr = string.split(' ')
    let max = 0

    for (let i = 0; i < splitArr.length; i++) {

        if (splitArr[max].length < splitArr[i].length) {
            max = i
        }
    }
    return splitArr[max]
}

let result = findLongestWord('with great power comes great responsibility :)')
console.log(result)
