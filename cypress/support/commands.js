
import { elmProducts } from '../support/elements';
import { faker } from '@faker-js/faker'
import * as data from '../fixtures/mkt_fixtures.json';

//login no imkt
Cypress.Commands.add('LoginImkt', (email, password) => {
    cy.visit('https://imkt.qa.mobiis.com.br/', { failOnStatusCode: false })
    cy.get('#btn_entrar_login').click()
    cy.get('#input_email_login').type(email)
    cy.get('#input_senha_login').type(password)
    cy.get('#btn_entrar_cadastrado').click()
})

// Cria a campanha
Cypress.Commands.add('createCampaign', () => {
    
        //const { campaingName, startDate, endDate } = data;
        const startDate = faker.date.past().toLocaleDateString('pt-BR');
        cy.get(elmProducts.buttonNewCampaing).click(),
        cy.get(elmProducts.inputNameCampaing).type(faker.commerce.productName()),
        cy.get(elmProducts.inputInicialDate).type(startDate),
        cy.get(elmProducts.inputFinalDate).type(faker.date.future().toLocaleDateString('pt-BR', { minDate: startDate })),
        cy.get(elmProducts.buttonNextCreation).click()
    });


// Cria dados de produtos para campanha

// Cria dados de produtos para campanha



// Cria dados de campanha
Cypress.Commands.add('createCampaignData', () => {
    const { campaignName, startDate, endDate } = data
        const newData = {
            'campaingName': faker.commerce.productName(),
            'startDate': faker.date.past().toLocaleDateString('pt-BR'),
            'endDate': faker.date.future().toLocaleDateString('pt-BR', { minDate: startDate })
        }
        const mergedData = { ...data, ...newData }
        cy.writeFile('cypress/fixtures/mkt_fixtures.json', mergedData)
    })



Cypress.Commands.add('addProductsToCampaign', (numProducts) => {
   
        cy.get('#btn_buscar_produto').click()

        const produtos = data.produtos.slice(0, numProducts)
        for (const produto of produtos)  {            
           
        cy.get('#input_buscar_produto').clear().type(produto.name)
            .get('#btn_0', { timeout: 30000 }).should('be.visible').click()
            if (produto.de_preco) {
                cy.get('#check_oferta_especial').invoke('css','opacity', '1') //FIXME: opacity igual a zero é sacanagem
                cy.get('#check_oferta_especial').should('be.visible')
                cy.get('#check_oferta_especial').check()
                cy.get('#input_preco_de').type(produto.de_preco)
                }
            cy.get('#input_preco_por').type(produto.por_preco)
            .get('#btn_adicionar').click();
        }
    })