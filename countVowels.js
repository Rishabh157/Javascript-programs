function countVowels(string) {
    const vowles = ['a', 'e', 'i', 'o', 'u']
    let count = 0;

    for (let ele of string) {
        if (vowles.includes(ele.toLowerCase())) {
            count++
        }
    }

    return count
}

let result = countVowels('The only thing we have to fear is fear itself.')
console.log(result)


