const fetch = require('node-fetch');
const fs = require('fs');

async function fetchMovies() {
  try {
    const response = await fetch('https://mymovie.uz/db.js');
    const movies = await response.json();
    fs.writeFileSync('./src/movies.js', `export const movies = ${JSON.stringify(movies, null, 2)};`);
    console.log('Movies data fetched and saved to movies.js');
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

fetchMovies();
