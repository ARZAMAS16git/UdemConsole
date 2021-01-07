

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
      c = prompt('дин из последних просмотренных фильмов',""),
      d = prompt("На сколько оцените его?" ,"");
      
personalMovieDB.movies[a] = b;      
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);