const chai = require('chai')
const expect = chai.expect

const MathLib = require('../utils/Math')

describe('Application unit tests', (done) => {
  describe('Testing Math', () => {
    describe('add method', () => {
      it('should return with valid number', () => {
        expect(MathLib.add(1, 1)).to.be.equal(2)
      })
    })
  })
})
