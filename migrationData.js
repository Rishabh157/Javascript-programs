let obj = [
    {
        key: 'Sample 1',
        data: 'Data1'
    },
    {
        key: 'Sample 1',
        data: 'Data1'
    },
    {
        key: 'Sample 2',
        data: 'Data2'
    },
    {
        key: 'Sample 1',
        data: 'Data1'
    },
    {
        key: 'Sample 3',
        data: 'Data3'
    },
    {
        key: 'Sample 4',
        data: 'Data4'
    },
]

let output = {}

obj.forEach((ele) => {
    let key = ele.key
    output[key] = []
})

obj.forEach((ele) => {
    let key = ele.key
    if (output.hasOwnProperty(key)) {
        output[key] = [...output[key], ele]
    }
})

const a = [1, 2, 3, [4, [5, 6]], 7, 8]

let arr = []

a.forEach((item) => {

    if (Array.isArray(item)) {
        console.log('item', item)
        item.forEach((ele) => {
            if (Array.isArray(ele)) {
                console.log('ele', ele)
                ele.forEach((k) => {
                    arr.push(k)
                })
            } else {
                arr.push(ele)
            }
        })

    } else {
        arr.push(item)
    }

})

console.log(arr)

// let output = {
//     "Sample 1": [
//         {
//             key: 'Sample 1',
//             data: 'Data1'
//         },
//         {
//             key: 'Sample 1',
//             data: 'Data1'
//         }, {
//             key: 'Sample 1',
//             data: 'Data1'
//         },
//         {
//             key: 'Sample 1',
//             data: 'Data1'
//         },
//     ],
//     "Sample 2": [],
//     "Sample 3": [],
//     "Sample 4": []
// }


