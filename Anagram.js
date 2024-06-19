// without using any built in method 
function isAnagram(str1, str2) {
    if (str1.length === str2.length) {             // check if both string length is same is true 

        let count = {}

        for (let ele of str1) {                       // itrate str1 string array
            count[ele] = (count[ele] || 0) + 1           // store elements in the count object
        }

        console.log(count)

        for (let letter of str2) {                    // itrate str2 string array
            if (!count[letter]) {                        // check str2 element in the count obj if not return false
                return false
            }
            count[letter] -= 1
        }
        return true
    }
    else {
        return false
    }
}

let result = isAnagram("hello", "elloh")
console.log(result)


//  Short way
function checkAnagram(string1, string2) {
    const sortedStr1 = string1.split('').sort().join('')
    const sortedStr2 = string2.split('').sort().join('')

    if (sortedStr1 !== sortedStr2) {
        return false
    }
    return true
}

let ans = checkAnagram('hello', 'llohe')
console.log(ans)
