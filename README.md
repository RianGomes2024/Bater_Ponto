API Pessoa
API REST para cadastro e gerenciamento de pessoas, desenvolvida com Node.js e MySQL.
Tecnologias

Node.js v20.20.0
MySQL2
Express
Dotenv

Como rodar localmente

Clone o repositório
Instale as dependências:

bashnpm install

Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=pessoa

Inicie o servidor:

bashnode src/Server.js
Rotas
MétodoRotaDescriçãoGET/UsersRetorna todos os usuáriosPOST/UsersCadastra um novo usuárioPUT/Users/:idAtualiza os dados de um usuárioDELETE/Users/:idDeleta um usuário
Observações
O arquivo .env não está incluído no repositório por conter dados sensíveis. Crie o seu localmente seguindo o exemplo acima.
