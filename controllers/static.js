//Get static homepage
function home(req, res) {
    res.render('welcome')
}

module.exports = {
    home: home,
}
