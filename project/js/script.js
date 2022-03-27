/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const advBlock = document.querySelector(".promo__adv");
    const advs = advBlock.querySelectorAll('img');
    const genre = document.querySelector(".promo__genre");
    const promo__bg = document.querySelector(".promo__bg");
    const promo__interactivelist = document.querySelector('.promo__interactive-list');
    const addForm = document.querySelector('form.add');
    const addingInput = document.querySelector('.adding__input');
    const addingBtn = document.querySelector('button');
    const checkbox = addForm.querySelector('[type="checkbox"]');


    const makeChanges = () => {

        genre.textContent = "ДРАМА";
        promo__bg.style.background = "url('../project/img/bg.jpg')";
    }

    const sortArr = (arr) => {
        // let arr2 = arr.map(item => { return item.toLowerCase() }).sort();
        // return arr2;
        arr.sort();
    }

    const deleteAdv = (el) => {
        el.forEach((item) => {
            item.remove();
        })
    }

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        films.forEach((film, i) => {
            const str = `<li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>`
            parent.innerHTML += str;
        });
        document.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click', () => {
                item.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            })
        })
    }

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let newFilm = addingInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            if (favorite) {
                console.log("Добавить любимый фильм");
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, promo__interactivelist);
        }
        addForm.reset();
        //event.target.reset();


    })




    makeChanges();

    deleteAdv(advs);
    createMovieList(movieDB.movies, promo__interactivelist);




    // showFilms();

    // function showFilms() {
    //     movieDB.movies.sort();
    //     promo__interactivelist.innerHTML = "";
    //     for (let i = 0; i < movieDB.movies.length; i++) {
    //         const str = `<li class="promo__interactive-item">${i + 1} ${movieDB.movies[i]}
    //             <div class="delete"></div>
    //         </li>`
    //         promo__interactivelist.innerHTML += str;
    //     }
    // }

    // function addFilmToDB(string) {
    //     movieDB.movies.push(string);
    // }
    // addForm.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     addFilmToDB(addingInput.value);
    //     console.log(movieDB.movies);
    //     showFilms();
    // })





})