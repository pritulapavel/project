const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Один из просмотренных фильмов?', ''),
      b = +prompt('На сколько оцените его?', ''),
      c = prompt('Один из просмотренных фильмов?', ''),
      d = +prompt('На сколько оцените его?', '');

personalMovieDb.movies[a] = b; // добавление в обьект
personalMovieDb.movies[c] = d; // добавление в обьект

console.log(personalMovieDb);
