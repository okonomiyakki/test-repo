
// const promise = new Promise((resolve, reject) => {
//     if (true) {
//         return resolve('성공이요')

//     }
//     else {
//         return reject('실패요')
//     }
// })

// promise.then(data => {
//     console.log(data)
// }).catch(err => {
//     throw new Error(err)
// })


// function promise() {
//     return new Promise((resolve, reject) => {
//         resolve('성공이요')
//     })
// }

// const promise = (tmp, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`${tmp}초 후 출력`)
//             resolve(tmp)
//         }, delay)
//     })
// }

// console.log("딴짓1")
// console.log("딴짓2")

// promise(1, 1000)
//     .then((tmp) => {
//         return promise(tmp + 1, 1000)
//     })
//     .then((tmp) => {
//         return promise(tmp + 1, 1000)
//     })
//     .then((tmp) => {
//         return promise(tmp + 1, 1000)
//     })


// .catch(err => {
//     throw new Error(err)
// })


// const pp = new Promise((resolve, reject) => {
//     resolve(10)
// })

// pp
//     .then(tmp => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(tmp)
//                 console.log(tmp)
//             }, 1000)
//         })
//     })
//     .then(tmp => setTimeout(() => console.log(tmp + 10), 1000))



Promise.resolve().then(setTimeout(() => console.log('promise'), 0))

setTimeout(() => console.log('setTimeout'), 0)


console.log('전역')




