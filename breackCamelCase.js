function solution(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        // Check if the current character is uppercase
        if (i > 0 && string[i] === string[i].toUpperCase() && string[i] !== ' ' && string[i - 1] !== ' ' && string[i - 1] !== string[i - 1].toUpperCase()) {
            result += ' ';
        }
        result += string[i];
    }
    return result;
}

// Test cases
console.log(solution('camelCasingHere')); // camel Casing Here
console.log(solution('No Camels here')); // No Camels here
console.log(solution('ABC')); // ABC
console.log(solution('')); // ''
