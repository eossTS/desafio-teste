//ações de interacao com a página 

const el = require('./elements').ELEMENTS;

class Cadastro {
    acessarCadastroUsuario(){
       cy.visit ('https://login.saraiva.com.br/registro.html?clientId=authorization_code&redirect_uri=https://vtexid.vtex.com.br/VtexIdAuthSiteKnockout/ReceiveAuthorizationCode.ashx&state=eyJhbGciOiJFUzI1NiIsImtpZCI6IjMwNDQ0NEEwRUEyQkEyNEU2OTVERDhCN0VEMzFEMUM4RDZGNDFGQTIiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiI4OUQ0NEFEQzAwRkJBMzZFNzI3MTc1Mjc5NjlDQjZBMTc2QzYxNjE2ODBEOTQxNzMwQzQ1NDZFRTk4NkI4QjczIiwiaXNzIjoidG9rZW4tZW1pdHRlciIsImV4cCI6MTYyMjQ2NTkyOSwicHJvdmlkZXIiOiJDbGllbnRlIFNhcmFpdmEiLCJpYXQiOjE2MjI0NjUzMjksImp0aSI6IjI1Y2U3MGU5LTM4ZWEtNDQ5Ny05NGY0LTk3NTE2YWJlMjEzOSJ9.1LEGLuoC4AVOd-pojAtFqX1j9DP-no_F4stuDcxwTtx9Z7d4t3K2gYSG0pa9Dx7GHwgs9ntcJM8xEoKemro2uQ');
       cy.get(el.cadastroTitle).should('have.value', '');
    }

    preencherCadastroUsuario(){
        cy.get(el.nome).type('Mario');
        cy.get(el.sobrenome).type('Gomes');
        cy.get(el.email).type("mariogomes@example.com");
        cy.get(el.senha).type('senha1');
        cy.get(el.confirmsenha).type('senha1');
        cy.get(el.cpf).type('96935723000');
        cy.get(el.sMasculino).check();
        cy.get(el.dataNascimento).type('01012001');
        cy.get(el.celular).type('81988888888');
        cy.get(el.cep).type('51021220').tab();
        cy.get(el.numeroEnd).type('123');
        cy.get(el.telefone).type('81988888888');

        cy.get(el.finalizarCadastroBtn).click();
    }
    validarCadastroUsuarioFalha(){

        cy.get(el.modalConfirmationHeader).should('have.value', 'Solicitação de Cadastro');
        cy.get(el.modalConfirmationBody).should('have.value', 'Por favor aguarde seu cadastro está sendo processado.');
       
        cy.get(el.errorLoginGeneralMensage).should('have.value', 'Desculpe houve um erro no seu cadastro tente novamente.');
    }

}

export default new Cadastro();