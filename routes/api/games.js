const express = require('express')
const router = express.Router()
const gamesCtrl = require('../../controllers/api/games')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/recent',ensureLoggedIn, gamesCtrl.recentGames)
router.get('/genres',ensureLoggedIn, gamesCtrl.genres)
router.get('/genres/:genre/:page',ensureLoggedIn, gamesCtrl.getGenreCatalog)
router.get('/platforms',ensureLoggedIn, gamesCtrl.getPlatformData)
router.get('/platforms/:platformId/:page',ensureLoggedIn, gamesCtrl.getAllPlatformGames)
router.get(`/games/:gameId`,ensureLoggedIn, gamesCtrl.getSingleGameData)
router.get('/tags/:tag/:page',ensureLoggedIn, gamesCtrl.getTagCatalog)
router.get('/search/:search/:page',ensureLoggedIn, gamesCtrl.getSearchCatalog)

module.exports = router