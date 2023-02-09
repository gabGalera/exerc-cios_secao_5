const { expect } = require('chai');
const sinon = require('sinon');

const { carModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { expected, newCar } = require('./mocks/car.model.mock');

describe('Testes sobre o carModel', function () {
  it('Testa o cadastro de novos carros', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

    // Act
    const result = await carModel.insert(newCar);

    // Assert
    expect(result).to.be.deep.equal(expected);
  });

  afterEach(function () {
    sinon.restore();
  });
});