const scramble = (str1, str2) => {

    let reArrangeString = ''

    for (let i = 0; i < str2.length; i++) {
        if (str1.includes(str2[i])) {
            str1 = str1.replace(str2[i], '')
            reArrangeString += str2[i]
        }
    }

    return str2 === reArrangeString
}


console.log(scramble('scriptjava', 'javascript')); // true
console.log(scramble('scriptingjava', 'javascript')); // true
console.log(scramble('scriptsjava', 'javascripts')); // true
console.log(scramble('jscripts', 'javascript')); // false
console.log(scramble('javscripts', 'javascript')); // false
console.log(scramble('lloewer', 'hello')); // false
console.log(scramble('llohewer', 'hello')); // true
