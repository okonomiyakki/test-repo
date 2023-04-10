// f1(function (data1) {
//     f2(data1, function (data2) {
//         f3(data2, function (data3) {
//             console.log('Result:', data3);
//         });
//     });
// });

// f1(data1 => {
//     f2(data1, data2 => {
//         f3(data2, data3 => {
//             console.log(data3)
//         })
//     })
// })


// function f1(cb1) {
//     setTimeout(() => {  // 2초가 걸려서 data1에 10을 받고 cb1 콜백함수에 반환
//         let data1 = 10
//         console.log(`1초후 data1 반환 ${data1}`)
//         cb1(data1)
//     }, 1000)
// }
// function f2(data1, cb2) {
//     setTimeout(() => {  // 데이터 받아오는 비동기 코드
//         let data2 = 20
//         console.log(`1초후 data2 추가해서 반환 ${data1 + data2}`)
//         cb2(data1 + data2)
//     }, 1000)
// }
// function f3(data2, cb3) {
//     setTimeout(() => {  // 데이터 받아오는 비동기 코드
//         let data3 = 30
//         console.log(`1초후 data3 추가해서 반환 ${data2 + data3}`)
//         cb3(data2 + data3)
//     }, 1000)
// }



// setTimeout(() => {
//     let tmp = 1
//     console.log(`${tmp++}초 후 출력`)
//     setTimeout(() => {
//         console.log(`${tmp++}초 후 출력`)
//         setTimeout(() => {
//             console.log(`${tmp++}초 후 출력`)
//             setTimeout(() => {
//                 console.log(`${tmp++}초 후 출력`)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)
