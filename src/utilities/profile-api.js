import sendRequest from "./send-request";

const SERVER_URL = '/api/profiles'

export async function addGameToWishlist(game){
    return sendRequest(`${SERVER_URL}`, 'POST', game)
}