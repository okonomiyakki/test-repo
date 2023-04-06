// fetch(serverURL).then(response => {
//     response.ok
//     response.status
//     response.statusText
//     response.url
//     response.bodyUsed
// })
//     document.createElement



// async function foo() {
//   return;
// }

// function foo() {
//   return new Promise((resolve, reject) => {
//     resolve();
//   });
// }


// async function getData() {
//     const response = await fetch('https://api.example.com/data');
//     const data = await response.json(); // 얘도 비동기 함수
//     console.log(data);
// }

// getData();


async function sayHello() {
    await wait(1000);
    console.log("1");
    await wait(1000);
    console.log("2");
    await wait(1000);
    console.log("3");
    return 10
}

// sayHello();

sayHello().then(console.log)

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}