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

export async function getGenreCatalog(genre, pageNumber){
    return sendRequest(`${SERVER_URL}/genres/${genre}/${pageNumber}`)
}

export async function getAllPlatformGames(platformId, pageNumber){
    return sendRequest(`${SERVER_URL}/platforms/${platformId}/${pageNumber}`)
}

export async function getSingleGameData(gameId){
    return sendRequest(`${SERVER_URL}/games/${gameId}`)
}

export async function getTagCatalog(tagSlug, pageNumber){
    return sendRequest(`${SERVER_URL}/tags/${tagSlug}/${pageNumber}`)
}

export async function getSearchCatalog(searchParam, pageNumber){
    return sendRequest(`${SERVER_URL}/search/${searchParam}/${pageNumber}`)
}