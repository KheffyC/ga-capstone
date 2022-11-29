import sendRequest from "./send-request";

const SERVER_URL = '/api/profiles'

export async function getProfile(){
    return sendRequest(`${SERVER_URL}/profile`)
}

export async function addGameToWishlist(game){
    return sendRequest(`${SERVER_URL}`, 'POST', game)
}

export async function removeGameFromWishlist(game){
    return sendRequest(`${SERVER_URL}/delete`, 'DELETE', game)
}
