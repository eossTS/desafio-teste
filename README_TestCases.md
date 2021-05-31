- Casos de testes
### Cenário feliz CT001
* Ação:
Acessar a página de cadastro, preencher todos os campos obrigatórios e clicar no botão: [Finalizar Cadastro]

* Resultado esperado: 
O cadastro deve ser realizado com sucesso e exibir uma mensagem ao usuário.


### Cenário alternativo CT001
* Ação:
 Acessar a página de cadastro e sem preencher nenhum campo, clicar no botão: [Finalizar Cadastro]

* Resultado esperado:
 A página não deve permitir a finalização da tarefa e deve exibir todos os campos obrigatórios destacados em vermelho, e suas respectivas mensagens de alerta abaixo de cada campo.


### -Cenário alternativo CT001
* Ação:
Acessar a página de cadastro e tentar cadastrar um usuário já cadastrado no sistema

* Resultado esperado:
O sistema não deverá permitir o cadastro e informar ao usuário que aqueles dados já foram cadastrados.

### Cenário feliz CT002

Given: Usuário acessa a página inicial do site
When: Digita o livro desejado no campo de busca
And: Acessa o livro no resultado da busca
Then: O sistema deverá exibir a página com o livro, preço e opção de livro digital se disponível.

### Cenário alternativo CT002

Given: Usuário busca por um livro digital
And: busca por um livro fisico
When: adiciona o livro digital ao carrinho
And: adiciona o livro fisico ao mesmo carrinho
Then: o sistema deverá bloquear a ação e exibir um alerta ao usuário
