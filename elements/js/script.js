'use strict';

// let hearts = document.querySelectorAll('.heart');
// // let hearts = document.getElementsByClassName('heart');
// console.log(hearts);
// let box = document.querySelector('#box');

// hearts.forEach(item => {
//     item.style.width = '500px';
// });

// let div = document.createElement('div');
// div.innerHTML = 'hello';
// document.body.append(div);

// let text = document.createTextNode('sdoijoijcdsiono');
// document.body.prepend(text);

// let wrapper = document.querySelector('.wrapper');



// hearts[1].before(div);
// let neededButton4 = document.querySelectorAll('button')[3];

// neededButton4.after(div);

// let circles = document.querySelectorAll('.circle');
// console.log(circles);
// circles[0].remove();

// circles[1].replaceWith(hearts[2]);

// wrapper.appendChild(box);

// wrapper.insertBefore(neededButton4, hearts[0]);


// function vaporcode(string) {
//     return string.toUpperCase().split(" ").join("").split("").join("  ");
// }

// console.log(vaporcode('HELLO hello'));

let powersOfTwo = n => n ? [...powersOfTwo(n - 1), 2 ** n] : [1];
console.log(powersOfTwo(4));
