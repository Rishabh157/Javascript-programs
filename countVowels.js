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
console.log(result) // 14

function lenOfVowels(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let len = 0
    for (let ele of string) {
        if (vowels.includes(ele)) {
            len++
        }
    }
    return len
}

console.log(lenOfVowels('my pyx')); // 0
console.log(lenOfVowels('pear tree')); // 4
console.log(lenOfVowels('abracadabra')); // 5
console.log(lenOfVowels('o a kak ushakov lil vo kashu kakao')); // 13

