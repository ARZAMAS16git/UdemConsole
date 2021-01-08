"user strict";

const numberOfFilms = +prompt (' Сколько фильмов вы уже просмотрели',"");

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false

};

const a = prompt('Oдин из последних просмотренных фильмов',""),
      b = prompt("На сколько оцените его?" ,""),
      c = prompt('Oдин из последних просмотренных фильмов',""),
      d = prompt("На сколько оцените его?" ,"");
      
personalMovieDB.movies[a] = b;      
personalMovieDB.movies[c] = d;
for (let i = 0; i < 2; i)

console.log(personalMovieDB);