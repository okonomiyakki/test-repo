// var tmp = 'global';    // 1번

// var fin;
// fin = function () {
// 	var tmp = 'local'; // 2번

//   	console.log(tmp);  // local

// 	return tmp;
// }

// fin();

// console.log(tmp)       // global








// (function () {
//     function fin() {
//         console.log(this)
//     }
//     fin()
//     function Fin() {
//         console.log(this)
//     }
//     new Fin()
// }())



function User() {
	this.name = 'muzi';
	console.log(this);                 
}
														
const myFin = new User();           
// new 연산자를 이용해서 
// 새로운 myfn 객체를 얻는다.		 
// this는 해당 myfn 객체를 바인딩한다
// myfn 객체에 title = 'Hello World!'
// 을 할당한다

// myFin // MyFn {title: 'Hello World!'}