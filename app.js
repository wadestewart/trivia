const express   = require('express')
const hbs       = require('hand')

const app = express()

const PORT = 4001

app.set('port', process.env.PORT || PORT)
app.set('view engine', 'hbs')

app.engine('.hbs', hbs({
    extname:        '.hbs',
    partialsDir:    'views/',
    layoutsDir:     'views/',
    defaultLayout:  'layout'
}))

app.listen(PORT, () => console.log(`Live on port ${PORT}`))
