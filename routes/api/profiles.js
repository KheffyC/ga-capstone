const express = require('express')
const router = express.Router()
const profilesCtrl = require('../../controllers/api/profiles')
const ensureLoggedIn = require('../../config/ensureLoggedIn')


router.post('/', profilesCtrl.addGameToWishlist)
router.get('/profile', profilesCtrl.getProfile)
router.delete('/delete', profilesCtrl.removeGameFromWishlist)
router.post('/played', profilesCtrl.addGameToAlreadyPlayed)
router.delete('/played/delete', profilesCtrl.removeGameFromPlayed)





module.exports = router