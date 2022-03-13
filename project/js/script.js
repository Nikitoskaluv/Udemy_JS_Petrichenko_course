/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// const advBlock = document.querySelector(".promo__adv");
// advBlock.remove();
const advBlock = document.querySelector(".promo__adv");
const advs = advBlock.querySelectorAll('img');
advs.forEach((item) => {
    item.remove();
})


const genre = document.querySelector(".promo__genre");
genre.textContent = "ДРАМА";

const promo__bg = document.querySelector(".promo__bg");
promo__bg.style.background = "url('../project/img/bg.jpg')";

const promo__interactivelist = document.querySelector('.promo__interactive-list');
promo__interactivelist.innerHTML = "";

movieDB.movies.sort();
for (let i = 0; i < movieDB.movies.length; i++) {
    const str = `<li class="promo__interactive-item">${i + 1} ${movieDB.movies[i]}
        <div class="delete"></div>
    </li>`
    promo__interactivelist.innerHTML += str;
}


