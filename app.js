const express   = require('express')
const hbs       = require('express-handlebars')
// const mongoose  = require('mongoose')
const routes    = require('./config/routes')

const app       = express()


const PORT      = 4001

app.set('port', process.env.PORT || PORT)
app.set('view engine', 'hbs')

app.engine('.hbs', hbs({
    extname:        '.hbs',
    partialsDir:    'views/',
    layoutsDir:     'views/',
    defaultLayout:  'layout'
}))

app.use(routes)
app.use('/assets', express.static('/public'))

app.listen(PORT, () => console.log(`Live on port ${PORT}`))

