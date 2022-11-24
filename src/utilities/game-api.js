import sendRequest from "./send-request";

const SERVER_URL = '/api/games'


export async function getGames(){
    return sendRequest(`${SERVER_URL}`)
}

export async function getMostRecentGames(){
    return sendRequest(`${SERVER_URL}/recent`)
}

export async function getGenres(){
    return sendRequest(`${SERVER_URL}/genres`)
}

export async function getPlatformData(){
    return sendRequest(`${SERVER_URL}/platforms`)
}

export async function getGenreCatalog(genre){
    console.log(genre, ' in the api request')
    return sendRequest(`${SERVER_URL}/genres/${genre}`)
}