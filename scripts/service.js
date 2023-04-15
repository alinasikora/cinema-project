import { sortMovies } from './helpers.js';

export function getMovies() {
    return fetch('https://run.mocky.io/v3/ca83b24a-1083-4362-953e-f6e2e0537f74')
        .then((res) => res.json())
        .then(sortMovies);
}