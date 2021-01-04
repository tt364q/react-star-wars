const BASE_URL = 'http://swapi.dev/api/';

// get all the starship resources
export function getStarShips() {
    return fetch(BASE_URL + 'starships/').then(res => res.json());
}