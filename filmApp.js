'use strict';



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 3; i++) {
            const film = prompt('Один из последних просмотренных фильмов', '');
            const rating = prompt('На сколько вы его оцените', '');

            if (film !== '' && rating != '' && film !== null && rating != null && film.length < 50) {
                personalMovieDB.movies[film] = rating;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function (property) {
        if (!property) {
            console.log(personalMovieDB)
        }
    },
    // writeYourGenres: function () {
    //     for (let i = 0; i <= 2; i++) {
    //         personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
    //         if (personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == "") {
    //             i--;
    //         }
    //     }
    //     personalMovieDB.genres.forEach((genre, i) => {
    //         console.log(`Любимый жанр #${i + 1} - это ${genre}`)
    //     })
    // },
    writeYourGenres: function () {
        for (let i = 0; i < 1; i++) {
            let genres = prompt("Введите любимые жанры через запятую").toLowerCase();
            if (genres == null || genres == "") {
                i--;
            } else {
                personalMovieDB.genres = genres.split(',');
                personalMovieDB.genres.sort();
                personalMovieDB.genres.forEach((genre, i) => {
                    console.log(`Любимый жанр #${i + 1} - это ${genre}`)
                })
            }
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};
personalMovieDB.start();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();


// console.log(personalMovieDB.genres);
