function countCharachters(string) {
    const countObj = {}

    if (!string.length) return countObj

    for (let ele of string) {
        countObj[ele] = (countObj[ele] || 0) + 1
    }

    return countObj
}

let result = countCharachters('aba')
console.log(result)
