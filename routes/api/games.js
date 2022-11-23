const express = require('express')
const router = express.Router()
const gamesCtrl = require('../../controllers/api/games')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/', gamesCtrl.getGames)
router.get('/recent', gamesCtrl.recentGames)
router.get('/genres', gamesCtrl.genres)
router.get('/platforms', gamesCtrl.getPlatformData)

module.exports = router