
import { elmProducts } from '../support/elements';
import { faker } from '@faker-js/faker'


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
    cy.readFile('cypress/fixtures/campaing.json').then((data) => {
        const { campaingName, startDate, endDate } = data;
        cy.get(elmProducts.buttonNewCampaing).click(),
        cy.get(elmProducts.inputNameCampaing).type(campaingName),
        cy.get(elmProducts.inputInicialDate).type(startDate),
        cy.get(elmProducts.inputFinalDate).type(endDate),
        cy.get(elmProducts.buttonNextCreation).click()
    });
});

// Cria dados de produtos para campanha

// Cria dados de produtos para campanha

Cypress.Commands.add('createProductsFixture', (numHits) => {
    cy.readFile('cypress/fixtures/campaing.json').then((data) => {
        const existingData = data || {}; // Verificar se o arquivo já possui dados
        const newData = {
            'Products': Cypress._.times(numHits, () => {
                return {
                    'name': faker.person.firstName(),
                    'id': faker.number.int(),
                    'price_before': faker.commerce.price(),
                    'price_after': faker.commerce.price()
                }
            })
        }
        const mergedData = { ...existingData, ...newData }; // Faz o merge dos dados existentes com os novos dados
        cy.writeFile('cypress/fixtures/campaing.json', mergedData)
    })
})

// Cria dados de campanha
Cypress.Commands.add('createCampaignData', () => {
    cy.readFile('cypress/fixtures/campaing.json').then((data) => {
        const { initialDate, finalDate } = data;
        const newData = {
            'campaingName': faker.commerce.productName(),
            'startDate': faker.date.past().toLocaleDateString('pt-BR'),
            'endDate': faker.date.future().toLocaleDateString('pt-BR', { minDate: initialDate })
        }
        const mergedData = { ...data, ...newData }
        cy.writeFile('cypress/fixtures/campaing.json', mergedData);
    });
});


Cypress.Commands.add('addProductsToCampaign', (numProducts) => {
    cy.readFile('cypress/fixtures/campaing.json').then((data) => {
        const { Products } = data;
        for (let i = 0; i < numProducts; i++) {
            const product = Products[i % Products.length];
            cy.get('#btn_buscar_produto').click()
                .get('#input_buscar_produto').clear().type(product.name)
                .get('#btn_0', { timeout: 30000 }).should('be.visible').click()
                .get('#check_oferta_especial').check()
                .get('#input_preco_de').type(product.price_before)
                .get('#input_preco_por').type(product.price_after)
                .get('#btn_adicionar').click();
        }
    });
});