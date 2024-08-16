describe('CRUD, caminho feliz de criação de campanha', () => {
  const prod = require('../fixtures/mkt_fixtures.json');
  beforeEach(() => {
    cy.visit('https://imkt.qa.mobiis.com.br/', { failOnStatusCode: false })
    //login no imkt
    cy.get('#btn_entrar_login').click()
      .get('#input_email_login').type(prod.data_user.login)
      .get('#input_senha_login').type(prod.data_user.pwd)
      .get('#btn_entrar_cadastrado').click()

  });  
  //executando login, criando uma campanha com 10 produtos
  it('Login user e criação de oferta de 10 produtos', () => {

  //dados iniciais de criação de campanha: nome, data inicio, data final
    cy.get('#btn_criar_nova_campanha').click()
      .get('#input_nome_campanha').type(prod.camp_details.name)
      .get('#input_data_inicial').type(prod.camp_details.start)
      .get('#input_data_final').type(prod.camp_details.end)
      .get('#btn_criacao_proximo').click()

  /*Indo para a selação de produtos */
      .get('#btn_buscar_produto').click()

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
      .get('#input_preco_por').type(prod.produtos[2].por_preco)
      .get('#btn_adicionar').click()

  /*4 produto*/
      .get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[3].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[3].por_preco)
      .get('#btn_adicionar').click()

  /*5 produto*/
      .get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[4].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[4].por_preco)
      .get('#btn_adicionar').click()

  /*6 produto*/
      .get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[5].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[5].por_preco)
      .get('#btn_adicionar').click()

  /*7 produto*/
      .get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[6].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[6].por_preco)
      .get('#btn_adicionar').click()
     
  /*8 produto*/
      .get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[7].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[7].por_preco)
      .get('#btn_adicionar').click()
     
  /*9 produto*/
      .get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[8].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[8].por_preco)
      .get('#btn_adicionar').click()

  /*10 produto*/
      .get('#input_buscar_produto').clear('z')
      .get('#input_buscar_produto').type(prod.produtos[9].name)
      .get('#btn_0',{ timeout: 30000 }).should('be.visible').click()
      .get('#input_preco_por').type(prod.produtos[9].por_preco)
      .get('#btn_adicionar').click()

  /*clicar em fechar busca, em 10 produtos, avançar e clicar em Gerar Campanha*/
    cy.get('#btn_fechar_busca').click()
      .get('#btn_criar_10_produtos').click()
      .get('#btnwzd_criacao_proximo').click()
      .get('#btn_saz_dia_das_crianças').click()
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
  

//   it('Conferir material criado pela campanha', () => {
//     //conferindo encartes
  })
})