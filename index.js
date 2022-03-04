'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 3; i++) {
    const film = prompt('Один из последних просмотренных фильмов', '');
    const rating = prompt('На сколько вы его оцените', '');

    if (film !== '' && rating != '' && film !== null && rating != null && film.length < 50) {
        personalMovieDB.movies[film] = rating;
    } else {
        i--;
    }
}
if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}









console.log(personalMovieDB);
console.log(personalMovieDB.movies);