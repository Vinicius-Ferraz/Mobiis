describe('Caminho feliz de criação de campanha', () => {
  
  //executando login, criando uma campanha com 30 produtos
  it.only('Login user e criação de oferta de 20 produtos', () => {
    const prod = require('../fixtures/mkt_fixtures.json')
        //login no imkt
      cy.visit('https://imkt.qa.mobiis.com.br/', { failOnStatusCode: false })
        .get('#btn_entrar_login').click()
        .get('#input_email_login').type(prod.data_user.login)
        .get('#input_senha_login').type(prod.data_user.pwd)
        .get('#btn_entrar_cadastrado').click()
    //dados iniciais de criação de campanha: nome, data inicio, data final
    cy.get('#btn_criar_nova_campanha').click()
      .get('#input_nome_campanha').type(prod.camp_details.name)
      .get('#input_data_inicial').type(prod.camp_details.start)
      .get('#input_data_final').type(prod.camp_details.end)
      .get('#btn_criacao_proximo').click()

    /*Selecionando 30 produtos e indo para a selação de produtos */
    cy.get('#btn_buscar_produto').click()

    /*1 produto*/
      .get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[0].name)
      .get('#btn_0', { timeout: 30000 }).should('be.visible').click()
      .get('#check_oferta_especial').check()
      .get('#input_preco_de').type(prod.produtos[0].de_preco)
      .get('#input_preco_por').type(prod.produtos[0].por_preco)
      .get('#btn_adicionar').click()

    /*2 produto*/
      .get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[1].name)
      .get('#btn_0', { timeout: 30000 }).should('be.visible').click()
      .get('#check_oferta_especial').check()
      .get('#input_preco_de').type(prod.produtos[1].de_preco)
      .get('#input_preco_por').type(prod.produtos[1].por_preco)
      .get('#btn_adicionar').click()

    /*3 produto*/
      .get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[2].name)
      .get('#btn_0', { timeout: 30000 }).should('be.visible').click()
      .get('#check_oferta_especial').check()
      .get('#input_preco_de').type(prod.produtos[2].de_preco)
      .get('#input_preco_por').type(prod.produtos[2].por_preco)
      .get('#btn_adicionar').click()

    /*4 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[3].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#check_oferta_especial').check()
      .get('#input_preco_de').type(prod.produtos[3].de_preco)
      .get('#input_preco_por').type(prod.produtos[3].por_preco)
      .get('#btn_adicionar').click()

    /*5 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[4].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#check_oferta_especial').check()
      .get('#input_preco_de').type(prod.produtos[4].de_preco)
      .get('#input_preco_por').type(prod.produtos[4].por_preco)
      .get('#btn_adicionar').click()

    /*6 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[5].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#check_oferta_especial').check()
      .get('#input_preco_de').type(prod.produtos[5].de_preco)
      .get('#input_preco_por').type(prod.produtos[5].por_preco)
      .get('#btn_adicionar').click()

    /*7 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[6].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[6].por_preco)
      .get('#btn_adicionar').click()
     
    /*8 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[7].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[7].por_preco)
      .get('#btn_adicionar').click()
     
    /*9 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[8].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[8].por_preco)
      .get('#btn_adicionar').click()

    /*10 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[9].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[9].por_preco)
      .get('#btn_adicionar').click()

    /*11 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[10].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[10].por_preco)
      .get('#btn_adicionar').click()
     
    /*12 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[11].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[11].por_preco)
      .get('#btn_adicionar').click()
          
    /*13 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[12].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[12].por_preco)
      .get('#btn_adicionar').click()
     
    /*14 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[13].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[13].por_preco)
      .get('#btn_adicionar').click()

    /*15 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[14].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[14].por_preco)
      .get('#btn_adicionar').click()

    /*16 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[15].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[15].por_preco)
      .get('#btn_adicionar').click()

    /*17 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[16].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[16].por_preco)
      .get('#btn_adicionar').click()

    /*18 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[17].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[17].por_preco)
      .get('#btn_adicionar').click()

    /*19 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[18].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[18].por_preco)
      .get('#btn_adicionar').click()

    /*20 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[19].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[19].por_preco)
      .get('#btn_adicionar').click()

    /*21 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[20].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[20].por_preco)
      .get('#btn_adicionar').click()

    /*22 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[21].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[21].por_preco)
      .get('#btn_adicionar').click()

    /*23 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[22].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[22].por_preco)
      .get('#btn_adicionar').click()

    /*24 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[23].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[23].por_preco)
      .get('#btn_adicionar').click()

    /*25 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[24].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[24].por_preco)
      .get('#btn_adicionar').click()

    /*26 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[25].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[25].por_preco)
      .get('#btn_adicionar').click()

    /*27 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[26].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[26].por_preco)
      .get('#btn_adicionar').click()

    /*28 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[27].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[27].por_preco)
      .get('#btn_adicionar').click()

    /*29 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[28].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[28].por_preco)
      .get('#btn_adicionar').click()

    /*30 produto*/
    cy.get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[29].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[29].por_preco)
      .get('#btn_adicionar').click()

    /*clicar avançar e clicar em Gerar Campanha*/
    cy.get('#btnwzd_criacao_proximo').click()
      .get('#btn_saz_são_joão').click()
      .get('#btnwzd_criacao_proximo').click()
      .get('#btn_encarte').click()
      .get('#btn_story').click()
      .get('#btn_gerar_campanha').click()

  /*checagem de campanha criada com sucesso*/
    cy.get('#card_campanha_0').click()
      .get('#btn_encarte_download').should('be.visible')
      .get('#btn_encarte_visualizar').should('be.visible')
      .get('#btn_story_download').should('be.visible')
      .get('#btn_story_visualizar').should('be.visible')
  })
})