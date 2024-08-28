// Escolhe tamanho da campanha
Cypress.Commands.add('chooseCampaignSize', (size) => {
    switch (size) {
        case '10':
            cy.get('#btn_criar_10_produtos')
            .should('be.visible')
            .click()
            break
        case '15':
            cy.get('#btn_criar_15_produtos')
            .should('be.visible')
            .click()          
            break
        case '20':
            cy.get('#btn_criar_20_produtos')
            .should('be.visible')
            .click()
            break
        case '30':
            cy.get('#btn_criar_30_produtos')
            .should('be.visible')
            .click()
            break
        default:
            // Handle invalid size input
            break
    }
})