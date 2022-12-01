const express = require('express')
const router = express.Router()
const gamesCtrl = require('../../controllers/api/games')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/recent', gamesCtrl.recentGames)
router.get('/genres', gamesCtrl.genres)
router.get('/genres/:genre', gamesCtrl.getGenreCatalog)
router.get('/platforms', gamesCtrl.getPlatformData)
router.get('/platforms/:platformId', gamesCtrl.getAllPlatformGames)
router.get(`/games/:gameId`, gamesCtrl.getSingleGameData)
router.get('/tags/:tag/:page', gamesCtrl.getTagCatalog)
router.get('/search/:search/:page', gamesCtrl.getSearchCatalog)

module.exports = router