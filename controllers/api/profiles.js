const Profile = require('../../models/profile')
const Game = require('../../models/game')

module.exports = {
    addGameToWishlist,
    getProfile,
    removeGameFromWishlist,
    addGameToAlreadyPlayed,
    removeGameFromPlayed,
}

async function addGameToWishlist(req, res){
    const gameObj = {
        id: req.body.id,
        name: req.body.name,
        background_image: req.body.background_image
    }
    const game = await Game.create(gameObj)
    const profile = await Profile.findOne({user: req.user._id}).populate(['wishlist','alreadyPlayed'])
    profile.wishlist.push(game)
    profile.save()
    res.json(profile)
}

async function getProfile(req, res){
    const profile = await Profile.findOne({user: req.user._id}).populate(['wishlist', 'alreadyPlayed'])
    res.json(profile)
}

async function removeGameFromWishlist(req, res){
    const game = await Game.findOne({id: req.body.id})
    const profile = await Profile.findOne({user: req.user._id}).populate(['alreadyPlayed', 'wishlist'])
    profile.wishlist.splice(profile.wishlist.indexOf(game._id),1)
    profile.save()
    res.json(profile)
}

async function addGameToAlreadyPlayed(req, res){
    const gameObj = {
        id: req.body.id,
        name: req.body.name,
        background_image: req.body.background_image
    }
    const game = await Game.create(gameObj)
    const profile = await Profile.findOne({user: req.user._id}).populate(['alreadyPlayed', 'wishlist'])
    profile.alreadyPlayed.push(game)
    profile.save()
    res.json(profile)
}

async function removeGameFromPlayed(req, res){
    const game = await Game.findOne({id: req.body.id})
    const profile = await Profile.findOne({user: req.user._id}).populate(['wishlist', 'alreadyPlayed'])
    profile.alreadyPlayed.splice(profile.alreadyPlayed.indexOf(game._id), 1)
    profile.save()
    res.json(profile)
}