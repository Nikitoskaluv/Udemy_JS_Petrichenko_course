'use strict';

// const box = document.querySelector('.box');

// const height = box.scrollHeight;
// const width = box.scrollWidth;

// console.log(`height-${height}, width-${width}`);
// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     // box.style.height = `${height}px`;
//     console.log(box.getBoundingClientRect().top);
// })

// console.log(window.getComputedStyle(box).display);


// function User(name, id) {
//     this.name = name,
//         this.id = id,
//         this.human = true,
//         this.sayHello = function () {
//             console.log(`Hello, ${this.name}`);
//         }

// }
// const alex = new User('Alex', '222');
// const max = new User('Max', 1234);

// console.log(alex.sayHello());
// console.log(max.sayHello());

// User.prototype.exit = function () {
//     console.log(`Пользователь ${this.name} вышел`);
// }

// const dan = new User('Dan',23435);
// console.log(max.exit());
// console.log(dan.exit());


// 'use strict'

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);
//         return this.a + this.b
//     }
// };
// console.log(obj.sum());

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// }
// sayName.call(user, 'Smith')
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this * num;
// }
// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//     console.log(this);
//     this.style.backgroundColor = 'red';
// })


// const obj = {
//     num: 5,
//     sayNum: function () {
//         const say = () => {
//             console.log(this.num);
//         };
//         say();
//     }
// };
// console.log(obj.sayNum());

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}
const first = new Rectangle(34, 20);
console.log(first);
console.log(first.calcArea());

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст:${this.text},цвет:${this.bgColor},ширина:${this.width},высота:${this.height}`);
    }
}
const coloredRect = new ColoredRectangleWithText(20, 30, 'kdncnon', 'синий');
console.log(coloredRect);
console.log(coloredRect.calcArea());
console.log(coloredRect.showMyProps());