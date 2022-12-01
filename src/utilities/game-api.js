import sendRequest from "./send-request";

const SERVER_URL = '/api/games'


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
    return sendRequest(`${SERVER_URL}/genres/${genre}`)
}

export async function getAllPlatformGames(platformId){
    return sendRequest(`${SERVER_URL}/platforms/${platformId}`)
}

export async function getSingleGameData(gameId){
    return sendRequest(`${SERVER_URL}/games/${gameId}`)
}

export async function getTagCatalog(tagSlug){
    return sendRequest(`${SERVER_URL}/tags/${tagSlug}`)
}

export async function getSearchCatalog(searchParam, pageNumber){
    return sendRequest(`${SERVER_URL}/search/${searchParam}/${pageNumber}`)
}