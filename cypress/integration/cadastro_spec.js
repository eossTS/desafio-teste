
 import Cadastro from '../support/PageObject/Cadastro';


describe ('Cad1', () => {
    it('Cadastrar usuario', () => {
   
        Cadastro.acessarCadastroUsuario();
        Cadastro.preencherCadastroUsuario();
        Cadastro.validarCadastroUsuarioFalha();

    });






});