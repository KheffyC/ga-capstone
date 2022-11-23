import sendRequest from "./send-request";

const BASE_URL = 'https://rawg.io/api'
const SERVER_URL = '/api/games'



export async function getAllGames(){
    return sendRequest(`${BASE_URL}/games?key=${process.env.REACT_APP_API_KEY}&page_size=100`)
}

// export async function getMostRecentGames(){
//     return sendRequest(`${BASE_URL}/games?key=${process.env.REACT_APP_API_KEY}&dates=2022-11-01,2022-11-20&platforms=187,186,7`)
// }

export async function getGames(){
    return sendRequest(`${SERVER_URL}`)
}

export async function getMostRecentGames(){
    return sendRequest(`${SERVER_URL}/recent`)
}

export async function getGenres(){
    return sendRequest(`${SERVER_URL}/genres`)
}