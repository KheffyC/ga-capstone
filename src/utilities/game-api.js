import sendRequest from "./send-request";

const BASE_URL = 'https://rawg.io/api'


export async function getAllGames(){
    return sendRequest(`${BASE_URL}/games?key=`)
}