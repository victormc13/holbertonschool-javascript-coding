#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];
const characterId = 18;
const character = `https://swapi-api.hbtn.io/api/people/${characterId}/`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  } else {
    const films = JSON.parse(body).results;
    const filteredFilms = films.filter((film) =>
      film.characters.includes(character)
    );
    const numberOfFilms = filteredFilms.length;
    console.log(numberOfFilms);
  }
});
