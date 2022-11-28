const Profile = require('../../models/profile')
const Game = require('../../models/game')

module.exports = {
    addGameToWishlist,
}

async function addGameToWishlist(req, res){
    const gameObj = {
        id: req.body.id,
        name: req.body.name,
        background_image: req.body.background_image
    }
    const game = await Game.create(gameObj)
    const profile = await Profile.findOne({user: req.user._id}).populate('wishlist')
    profile.wishlist.push(game)
    profile.save()
    console.log(profile, 'did I update correctly')
    res.json(profile)
}