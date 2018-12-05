const MathLib = require('../utils/Math')
module.exports = {
  addTwoNumbers (req, res) {
    let a = req.query.leftOperand
    let b = req.query.rightOperand

    res.send(MathLib.add(a, b).toString())
  }
}
