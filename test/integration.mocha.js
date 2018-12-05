const chai = require('chai')
const request = require('supertest')
const expect = chai.expect
const app = require('../server')

const MathLib = require('../utils/Math')

describe('Application integration tests', () => {
    it('/add should return with valid number for queryParams', (done) => {
      request(app).get('/add')
        .query({ leftOperand: '15', rightOperand: '5' })
        .end((err, res) => {
          expect(res.statusCode).to.equal(200)
          expect(res.text).to.be.equal('20')
          done()
        })
    })
})
