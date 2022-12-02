const express = require('express')
const router = express.Router()
const profilesCtrl = require('../../controllers/api/profiles')
const ensureLoggedIn = require('../../config/ensureLoggedIn')


router.post('/',ensureLoggedIn, profilesCtrl.addGameToWishlist)
router.get('/profile',ensureLoggedIn, profilesCtrl.getProfile)
router.delete('/delete',ensureLoggedIn, profilesCtrl.removeGameFromWishlist)
router.post('/played',ensureLoggedIn, profilesCtrl.addGameToAlreadyPlayed)
router.delete('/played/delete',ensureLoggedIn, profilesCtrl.removeGameFromPlayed)





module.exports = router