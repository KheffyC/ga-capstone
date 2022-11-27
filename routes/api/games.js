const express = require('express')
const router = express.Router()
const gamesCtrl = require('../../controllers/api/games')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/', gamesCtrl.getGames)
router.get('/recent', gamesCtrl.recentGames)
router.get('/genres', gamesCtrl.genres)
router.get('/genres/:genre', gamesCtrl.getGenreCatalog)
router.get('/platforms', gamesCtrl.getPlatformData)
router.get('/platforms/:platformId', gamesCtrl.getAllPlatformGames)
router.get(`/games/:gameId`, gamesCtrl.getSingleGameData)

module.exports = router