function largestNumberInArray(array) {

    let max = array[0]

    for (let num of array) {
        if (max < num) {
            max = num
        }
    }
    return max
}

largestNumberInArray([2, 4, 6, 9, 3])