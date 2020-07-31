"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    start: function(){
        personalMovieDB.count = +prompt("How much films have you seen?", "");
    
        while (personalMovieDB.count != '' || personalMovieDB.count != null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("How much films have you seen?", "");
        }
    }, 

    rememberMyFilms: function(){
        for(let i = 0; i < personalMovieDB.count; i++){
            const lastFilm = prompt("What last film have you seen?", ""),
                  score = +prompt("How can you score it?", "");
            if (lastFilm == null || score == null || lastFilm == '' || score == '' || lastFilm.length >= 50){
                console.log("error");
            }
            else {
                personalMovieDB.movies[lastFilm] = score;
                console.log("done");
            }
        }
    },

    detectMyLevel: function(){
        if (personalMovieDB.count < 10){
            console.log("You've not seen a lot films");
        } else {
            if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
                console.log("You are normal viewer");
            }
            else{
                if (personalMovieDB.count > 30){
                    console.log("You're film-maniac");
                }
                else {
                    console.log("Error");
                }
            }
        }
    },

    showMyDB: function(){
        if (!personalMovieDB.private){
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function(){
        for (let i = 1; i <= 2; i++){
            const genre = prompt(`Your favourite genre #${i}`);
            if (genre == '' || genre == null){
                console.log("Error");
                --i;
            } else {
                personalMovieDB.genres = genre.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`your favourite genre #${i} is ${item}`);
        });
    },

    toggleVisibleMyDB: function(){
        //return !personalMovieDB.private;
        if (personalMovieDB.private){
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    }
};
