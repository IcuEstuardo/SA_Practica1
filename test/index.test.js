const chai = require('chai');
const chaiHttp = require('chai-http');
var app = require('../app')

chai.use(chaiHttp)
var expect = chai.expect;

describe("Software Avanzado Server", () => {
  describe("GET /", () => {
    it("returns status code 200", (done) => { 
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done(); 
        });
    });

    it("returns Software Avanzado", (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res.body.data).to.have.string('Software Avanzado');
          done();
        });
    });
  });
});