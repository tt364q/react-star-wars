const BASE_URI = 'https://swapi.dev/api/';

// define a function to get all starship resources 
export function getStarShips() {
    return fetch(BASE_URI + 'starships/').then(res => res.json());
}