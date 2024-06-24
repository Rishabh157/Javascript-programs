function findMiddleCharOfString(string) {

    let mid = string.length / 2

    if (string.length % 2 !== 0) {
        return string[Math.floor(mid)]
    } else {
        // console.log('even')
        return string[mid - 1] + string[mid]
    }

}


console.log(findMiddleCharOfString('test')); // 'es'
console.log(findMiddleCharOfString('testing')); // 't'
console.log(findMiddleCharOfString('middle')); // 'dd'
console.log(findMiddleCharOfString('A')); // 'A'
