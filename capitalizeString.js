//  first approch
function capitalizeString(string) {

    let splited = string.split(' ');
    let newArr = []

    splited.forEach(words => {
        let convertedCaps = words.slice(0, 1).toUpperCase() + words.slice(1)
        newArr.push(convertedCaps)
    });

    return newArr.join(' ')
}

let result = capitalizeString('hi my name is jhon');
console.log(result)


//  second approch
function capitalizeStringWithInbuiltMethod(string) {
    return string.split(' ').map(words => words.slice(0, 1).toUpperCase() + words.slice(1)).join(' ');
}

let ans = capitalizeStringWithInbuiltMethod('hi my name is jhon')
console.log('ans', ans)
