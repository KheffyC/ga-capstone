const Profile = require('../../models/profile')
const Game = require('../../models/game')

module.exports = {
    addGameToWishlist,
    getProfile,
    removeGameFromWishlist,
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
    res.json(profile)
}

async function getProfile(req, res){
    const profile = await Profile.findOne({user: req.user._id}).populate('wishlist')
    res.json(profile)
}

async function removeGameFromWishlist(req, res){
    const game = await Game.findOne({id: req.body.id})
    const profile = await Profile.findOne({user: req.user._id})
    profile.wishlist.remove(game._id)
    profile.save()
    console.log(profile, 'after save')
    res.json(profile)
}