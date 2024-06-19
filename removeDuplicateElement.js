function removeDuplicateElements(array) {

    if (!array.length) return 'Please provide the array'

    let newArray = [];

    for (let ele of array) {
        if (!newArray.includes(ele)) {
            newArray = [...newArray, ele]
        }
    }
    return newArray
}

let result = removeDuplicateElements([1, 2, 3, 4, 4, 5, 6, 6]);
console.log(result)
