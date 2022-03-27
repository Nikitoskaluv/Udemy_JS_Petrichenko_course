const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.red')) {
        console.log('Hello');
    }
})

// btns.forEach(btn => {
//     btn.addEventListener('click', () => console.log('hello'));
// })

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
// console.log(btns[0].classList.length);

// btns[0].classList.add('red');
// console.log(btns[0].classList);
// btns[0].classList.add('red','rertry');
// btns[0].classList.remove('red');
// btns[0].classList.toggle('blue');
// console.log(btns[0].classList);

// btns[1].classList.toggle('blue');
// if (btns[1].classList.contains('blue')) {
//     console.log('есть голубой');
// } else {
//     console.log('нет класса')
// }
// btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red')
    // } else {
    //     btns[1].classList.remove('red');
    // }
    // btns[1].classList.toggle('red');
// })

