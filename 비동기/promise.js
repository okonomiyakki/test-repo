// let promise = new Promise((resolve, reject) => {
//     if (Math.random() < 0.5) return reject('실패')
//     else return resolve('성공')
// })

// promise.then(data => {
//     console.log('성공 시 : ',data)
// })
//     .catch(data => {
//     console.log('실패 시 : ',data)
//     })
//     .finally(() => {
//         console.log('성공/실패 여부 상관 없이 출력')
// })

// //promise1, 2, 3이 선언되었다고 가정
// Promise.all([
//     promise1,
//     promise2,
//     promise3
// ]).then(dataArr => {
//     console.log('모두 성공시 Promise의 resolved 값을 배열로 반환 : ', dataArr)
// })
//     .catch(e => {
//         console.log('하나라도 실패시 에러 메시지 반환 : ', e)
// })

// console.log(Date.now())

// console.log(1)
// const p = new Promise((resolve, reject) => {
//     console.log(2)
//     setTimeout(() => console.log(4), 1000)
//     console.log(3)
// })

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then(
    (num) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(num - 1, 1000);
        });
      })
  )
  .then((num) => console.log(num));
// .then(function (num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(num - 1, 1000)
//         })
//     })
// })

// function all() {
//     return Promise.all([getApple(), getBanana()]).then(data=>data.join(' + '))
// }
// all().then(console.log)
