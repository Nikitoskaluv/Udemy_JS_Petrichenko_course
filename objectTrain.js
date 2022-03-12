"use strict"

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log("test method");
//     }
// }
// console.log(options.colors.border);
// console.log(options["colors"]["border"]);


// let b = 0;
// for (let key in options) {
//     if (typeof (options[key]) == 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             b++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         b++;
//     }
// }
// console.log(`всего свойств ${b}`);
// console.log(Object.keys(options).length
// );

// options.makeTest();

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr[3]);

// arr.unshift(333);
// console.log(arr);
// console.log(arr[3]);
// for (let number of arr) {
//     console.log(number);
// }

// for (let i = 0; i < arr.length; i++) {
//     console.log(`${i} = ${arr[i]}`);
// }


// arr.forEach((item, i, array) => {
//     console.log(`${i}: ${item} in ${array}`);
// })

// let products = prompt('', '');
// let arr = products.split(', ');
// let newStr = (arr.join(';'))
// console.log(newStr);

// const arr = [345, 55, 35, 67];
// arr.sort(sortNum);
// function sortNum(a, b) {
//     return a - b;
// }
// console.log(arr);


// const obj = {
//     a: 10,
//     b: 2,
//     c: {
//         x: 5,
//         y: 9
//     },
//     d: ['dasdsd', "d", "d"]
// }

// function copy(mainObj) {
//     let copyObj = {};

//     let key;
//     for (key in mainObj) {
//         copyObj[key] = mainObj[key]
//     }
//     return copyObj;
// }

// const newObj = copy(obj);

// newObj.c.x = 2000;
// newObj.d[2] = "hello";


// const add = {
//     bbb: 333,
//     vvv: 777,
// }
// const addedObj = Object.assign({}, newObj, add);

// addedObj.bbb = 444;

// console.log(newObj);
// console.log(obj);
// console.log(addedObj);
// console.log(add);


// function copy(mainObj) {
//     let copyObj = {};
//     for (let key in mainObj) {
//         copyObj[key] = mainObj[key];
//     }
//     return copyObj;
// }

// const oldArr = ['a', 'b', 'c'];
// const newArr = oldArr.slice(0, 3);
// newArr[0] = 'ascdscdsc';
// console.log(oldArr);
// console.log(newArr);

// const arr1 = ['s', 'd', 'a'];
// const arr2 = ['x', 'a', 'q'];
// const arr = [...arr2, ...arr1, 'g', 'j'];

// console.log(arr);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// log(...arr1);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function () {
//         console.log('hello')
//     }
// }
// // const john = {};
// // Object.setPrototypeOf(john, soldier);
// const john = Object.create(soldier);

// console.log(john.sayHello());


// function fourth() {
//     console.log("это должно быть в конце")
// }
// function first(lang, callback) {
//     console.log(`Я учу ${lang}`);
//     callback(third);
// }
// function third(callback) {
//     console.log('это должно быть предпоследним');
//     callback();
// }

// function done(callback) {
//     console.log(`Выучил`)
//     callback(fourth);
// }
// first('английский', done);

console.log(!!(1 && 2));
console.log(1 && undefined && 3 && 333);


