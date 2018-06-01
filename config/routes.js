const express   = require('express')
const mongoose  = require('mongoose')
const router    = express.Router()

const staticsController = require('../controllers/static.js')

router.route('/')
    .get(staticsController.home)

module.exports = router
