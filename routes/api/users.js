const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/', ensureLoggedIn, usersCtrl.create)
router.post('/login', usersCtrl.login)
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)


module.exports = router