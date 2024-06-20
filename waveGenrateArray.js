function returnFullString(string, index) {

    let waveCapitalize = ''
    for (let i = 0; i < string.length; i++) {
        if (i === index) {
            waveCapitalize += string[i].toUpperCase()
        } else {
            waveCapitalize += string[i]
        }
    }

    return waveCapitalize
}



function wave(string) {

    let arr = []

    for (let i = 0; i < string.length; i++) {
        let waveText = returnFullString(string, i)
        arr = [...arr, waveText]
    }

    return arr
}

let result = wave('hello')
console.log(result)
