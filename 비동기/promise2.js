
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





// const promise = (tmp) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`${tmp}초 후 출력`)
//             resolve(tmp)
//         }, 1000)
//     })
// }

// console.log("딴짓1")
// console.log("딴짓2")

// promise(1)
//     .then((tmp) => {
//         return promise(tmp + 1)
//     })
//     .then((tmp) => {
//         return promise(tmp + 1)
//     })
//     .then((tmp) => {
//         return promise(tmp + 1)
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



// Promise.resolve().then(setTimeout(() => console.log('promise'), 0))

// setTimeout(() => console.log('setTimeout'), 0)


// console.log('전역')




// function getUserInfo(userId) {
//     return new Promise((resolve, reject) => {
//         // 데이터베이스에서 userId에 해당하는 사용자 정보를 가져오는 비동기 작업을 실행합니다.
//         db.getUserInfo(userId, (error, userInfo) => {
//             if (error) {
//                 reject(error); // 에러가 발생한 경우 reject 함수를 호출합니다.
//             } else {
//                 resolve(userInfo); // 정보를 가져온 경우 resolve 함수를 호출하여 결과를 반환합니다.
//             }
//         });
//     });
// }

// function sendEmail(email, message) {
//     // 이메일을 보내는 비동기 작업을 실행합니다.
// }

// // 사용자 정보를 가져오는 Promise를 실행합니다.
// getUserInfo(userId)
//     .then(userInfo => {
//         // 가져온 사용자 정보를 이용하여 이메일을 보내는 비동기 작업을 실행합니다.
//         return sendEmail(userInfo.email, "안녕하세요!");
//     })
//     .then(() => {
//         console.log("이메일을 성공적으로 보냈습니다.");
//     })
//     .catch(error => {
//         console.error(error);
//     });




// console.log('before promise')
// const promise = new Promise((resolve, reject) => {
//     // 비동기 작업을 수행하는 코드
//     // 작업이 완료되면 resolve나 reject 함수를 호출합니다.
//     setTimeout(() => {
//         resolve('promise')
//         console.log('promise')
//     }, 1000)
// });

// console.log('after promise')

// promise.then((data) => {
//     setTimeout(() => console.log(data + '.then'), 1000)
//     return num = 2
// }).then(data => console.log(data))



// //     .then(data => {
// //     return new Promise(resolve => {
// //         setTimeout(() => {
// //             console.log(data + '.then return promise')
// //             resolve('promis')
// //         }, 1000)
// //     })
// // })


//프로미스를 반환
const promise = new Promise((resolve, reject) => {
    // 비동기 작업 수행
    const result = "Success";
    resolve(result);
});

// promise.then((value) => {
//     console.log(value); // "Success"
//     return new Promise((resolve, reject) => {
//         resolve("Next step");
//     });
// })
//     .then((value) => {
//         console.log(value); // "Next step" (1초 뒤 출력)
//     });


// //값을 반환
// const promise2 = new Promise((resolve, reject) => {
//     // 비동기 작업 수행
//     const result = "Success";
//     resolve(result);
// });

// promise2.then((value) => {
//     console.log(value); // "Success"
//     return "Next step";
// })
//     .then((value) => {
//         console.log(value); // "Next step"
//     });

//값을 반환2
const promise2 = new Promise((resolve, reject) => {
    // 비동기 작업 수행
    const result = "Success";
    resolve(result);
});

promise2.then((value) => {
    console.log(value); // "Success"
    return Promise.resolve("Next step");
})
    .then((value) => {
        console.log(value); // "Next step"
    });