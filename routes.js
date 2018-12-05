const AddController = require('./controllers/AddController')
module.exports = function (app) {

  app.get('/', (req, res) => {
    res.send("HEllo World")
  })
  app.get('/add', AddController.addTwoNumbers)
}
