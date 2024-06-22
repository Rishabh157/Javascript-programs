function moveZeros(array) {

    let totalSum = 0

    // for (let ele of array) {
    //     console.log('ele', ele)
    //     if (ele === 0) {
    //         totalSum++
    //         array[array.length-1] = array[i]
    //     }
    // }

    for (let i = 0; i < array.length; i++) {

        if (array[i] === 0) {
            // array[array.length - 1] = array[i]
            totalSum++
        } else {
            // array[i] = array[i]
            console.log('))))))',array[i])
        }

    }

    console.log('totalSum', totalSum)
    console.log('array', array)
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] === 0) {
    //         // console.log('first', i, '===', array)
    //         array.splice(i, 1)
    //         array.push(0)
    //         console.log('newArr', i, array)
    //     }
    // }
    // console.log(array)
}


// moveZeros([0, 1, 0, 3, 12])
moveZeros([0, 0, 1])

