// The Hashtag Generator

function hashTagGenerator(string) {
    if (!string.length || string === ' ') return false

    if (string.length >= 140) {
        return false
    }

    string = '#' + string.replaceAll(' ', '')
    return string
}

console.log(hashTagGenerator('JavaScript')); // #JavaScript
console.log(hashTagGenerator('Do we have a Hashtag')); // #DoWeHaveAHashtag
console.log(hashTagGenerator('    Hello     World   ')); // #HelloWorld
console.log(hashTagGenerator('')); // false
console.log(hashTagGenerator(' ')); // false
console.log(hashTagGenerator('a'.repeat(140))); // false
console.log(hashTagGenerator(' '.repeat(200))); // false
