const fetch = require('node-fetch')

module.exports ={
    getGames, 
    recentGames,
    genres,
    getPlatformData,
}


async function getGames(req, res){  
    const url = `https://rawg.io/api/games?key=${process.env.API_KEY}&page_size=100`;
    
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try{
        const response = await fetch(url, options)
        const data = await response.json()
        res.json(data)
    } catch(err){
        console.log(err.message)
    }
}

async function recentGames(req, res){  
    const url = `https://rawg.io/api/games?key=${process.env.API_KEY}&dates=2022-11-01,2022-11-20&platforms=187,186,7`;
    
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try{
        const response = await fetch(url, options)
        const data = await response.json()
        res.json(data)
    } catch(err){
        console.log(err.message)
    }
}

async function genres(req, res){
    const url = `https://rawg.io/api/genres?key=${process.env.API_KEY}`;
    
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try{
        const response = await fetch(url, options)
        const data = await response.json()
        res.json(data)
    } catch(err){
        console.log(err.message)
    }
}

async function getPlatformData(req, res){
    const url = `https://rawg.io/api/platforms/lists/parents?key=${process.env.API_KEY}`;
    
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try{
        const response = await fetch(url, options)
        const data = await response.json()
        res.json(data)
    } catch(err){
        console.log(err.message)
    }
}