const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

chai.use(chaiHttp);

const app = require('../../src/app')

describe('Usando o método GET em /teams', function () {
    it('Retorna a lista completa de times!', async function () {
        const output = [
          {
            id: 1,
            name: 'São Paulo Futebol Clube',
            initials: 'SPF',
          },
          {
            id: 2,
            name: 'Clube Atlético Mineiro',
            initials: 'CAM',
          },
        ]

        const response = await chai
          .request(app)
          .get('/teams');
        expect(response.status).to.be.equal(200);
        expect(response.body.teams).to.be.deep.equal(output);
    });
});