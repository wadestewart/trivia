const express   = require('express')
const router    = express.Router()

const staticsController = require('../controllers/static')

router.route('/', staticsController.home)

module.exports = router
