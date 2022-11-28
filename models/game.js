const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    id: {type: Number},
    name: {type: String},
    background_image: {type: String}
})



module.exports = mongoose.model('Game', gameSchema)