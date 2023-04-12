// const common = [1, 2, 3, 4]
const common = [2, 4, 8]

// for (let i = 0; i < common1.length; i++) {
//     if(common1[i+1]-common1[i] == )
//     console.log(common1[i])
// }

// if (common[1] == 2 * common[0]) {
//     if (common[2] == common[0] + common[1]) {
//         console.log(common[common.length - 1] + common[0])
//         return common[common.length - 1] + common[0]
//     }
//     else if (common[2] == common[0] * common[1]) {
//         console.log(common[common.length - 1] * common[0])
//         return common[common.length - 1] * common[0]
//     }
// }

const sum = common.reduce((x, y) => x + y)
// console.log(sum)
if ((2 * common[0] + (common.length - 1) * (common[1] - common[0])) * common.length / 2 == sum) {
    console.log(common[common.length - 1] + common[0])
    return common[common.length - 1] + common[1] - common[0]
}
else {
    console.log(common[common.length - 1] * common[0])
    return common[common.length - 1] * common[1] / common[0]
}


// if (common[1] ** 2 == common[0] * common[2]) {
//     return common[common.length - 1] * common[0]
// }
// else if (common[1] == (common[0] + common[2]) / 2) {
//     return common[common.length - 1] + common[0]
// }