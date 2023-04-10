// let babbling = ["aya", "yee", "u", "maa", "wyeoo"];
let babbling = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"];
console.log(babbling);

let arr = ["aya", "ye", "woo", "ma"];
console.log(arr);

let answer = 0;
// babbling.forEach(x => {
//     for (let i of arr) {
//         if (x.includes(i))
//             if ((x.indexOf(i) + i.length) == x.length) {
//                 answer++
//                 console.log(i)
//             }
//     }
// })

// console.log(answer)

babbling.forEach((x) => {
  for (let i of arr) {
    if (x.indexOf(i) == 0) {
    }
  }
});

console.log(answer);

let a = "abcde";
console.log(a.slice(1, 3));
// console.log(a.splice(1, 3))
console.log(a.substring(1, 3));
