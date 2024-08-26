

describe('CRUD, caminho feliz de criação de campanha', () => {
  const prod = require('../fixtures/mkt_fixtures.json');
  beforeEach(() => {
    cy.LoginImkt(prod.data_user.login, prod.data_user.pwd)
  });  

  //executando login, criando uma campanha com 10 produtos
  it.only('Criação de campanha', () => {
    cy.createProductsFixture(10)
    cy.createCampaignData()
    cy.createCampaign()
    cy.addProductsToCampaign(10)
  //preenche os 10 produtos da campanha

    })
})  