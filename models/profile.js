const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    username: {type: String},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    wishlist: [{type: Schema.Types.ObjectId, ref: 'Game'}],
    alreadyPlayed: [{type: Schema.Types.ObjectId, ref: 'Game'}]
}, {
    timestamps: true
})



module.exports = mongoose.model('Profile', profileSchema)