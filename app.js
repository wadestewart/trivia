const express   = require('express')
const hbs       = require('express-handlebars')
const mongoose  = require('mongoose')

const app       = express()

app.use(express.static(__dirname + '/public'))

const PORT      = 4001

app.set('port', process.env.PORT || PORT)
app.set('view engine', 'hbs')

app.engine('.hbs', hbs({
    extname:        '.hbs',
    partialsDir:    'views/',
    layoutsDir:     'views/',
    defaultLayout:  'layout'
}))

let routes = require('./config/routes')
app.use(routes)

app.listen(PORT, () => console.log(`Live on port ${PORT}`))

app.get('/', (req, res) => {
    res.render('welcome')
})
