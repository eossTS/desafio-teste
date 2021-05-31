How to run the project and tests:
As etapas abaixo mostrarão como rodar o projeto através do Cypress. Presume-se que você não tenha nada instalado, exceto node + git.

1. Instalar o Cypress
https://on.cypress.io/guides/installing-and-running#section-installing

2. Realizar um Fork esse repositório (Utilizando visual code por exemplo)
Depois de realizar o fork do projeto no Github, Abra o terminal dentro do visual code (já na pasta do projeto) e execute estes comandos:

npm install cypress --save-dev

./node_modules/.bin/cypress open

o sistema irá abrir uma instância do Cypress, com o projeto aberto
Abra o arquivo:
cadastro_spec.js
O cypress irá abrir uma instância do browser e iniciar a execução dos testes





