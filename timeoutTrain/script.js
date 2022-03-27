// const timer = setInterval(function (text) {
//     console.log(text);
// }, 1000, 'hello');

// setTimeout(() => {
//     clearInterval(timer)
// }, 5000
// );


// const btn = document.querySelector('.btn');
// let timerId;
// let i = 0;

// function logger() {
//     console.log('text');
//     i++;
//     if (i == 3) {
//         clearInterval(timerId);
//     }
// }


// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 3000);
//     timerId = setInterval(logger, 3000);
//     console.log('timerId' + timerId);
// });



// function logger(num) {
//     const timer = setInterval(() => {
//         const sec = num;
//         console.log(num);
//         num++;
//         setTimeout(() => {
//             clearInterval(timer);
//         }, 6000)
//     }, 2000);
// }
// logger(3);






// let timerId = setTimeout(function tick() {
//     console.log('tick');
//     timerId = setTimeout(tick, 2000); // (*)
// }, 2000);
// let timer = setTimeout(function showTime() {
//     console.log('time');
//     setTimeout(showTime, 2000);
// }, 2000)


// function printNumbers(from, to) {
//     let currentNum = from;
//     let timer = setInterval(() => {
//         console.log(currentNum);
//         currentNum++;
//         if (currentNum > to) {
//             clearInterval(timer);
//         }
//     }, 2000);

// }
// printNumbers(5, 10);


// function printNumbers(from, to) {
//     let currentNum = from;
//     setTimeout(function time() {
//         console.log(currentNum);
//         currentNum++;
//         if (currentNum < to) {
//             setTimeout(time, 2000);
//         }
//     }, 2000)
// }
// printNumbers(5, 19)

// const btn = document.querySelector('.btn');

// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(animate, 10);
//     function animate() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }
// btn.addEventListener('click', myAnimation);




// const btn = document.querySelector('.btn'),
//     box = document.querySelector('.box');
// let pos = 0;
// let id;
// btn.addEventListener('click', () => {
//     id = setInterval(moveBox, 10);
// })


// function moveBox() {
//     if (pos == 300) {
//         clearInterval(id);
//     } else {
//         pos++;
//         box.style.top = pos + 'px';
//         box.style.left = pos + 'px';
//     }
// }

const now = new Date();
console.log(now.setHours(10, 40));
console.log(now);
// console.log(typeof (now));
// const now = new Date();
// console.log(now.getTime());




// console.log(now.getTimezoneOffset());
// console.log(now.getHours());
// console.log(now.getUTCHours());
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getMilliseconds());
// console.log(now.getDay());

