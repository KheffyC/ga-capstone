const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    gameId: {type: Number}
})



module.exports = mongoose.model('Game', gameSchema)