# API Pessoa

API REST para cadastro e gerenciamento de pessoas, desenvolvida com Node.js e MySQL.

## Tecnologias

- Node.js v20.20.0
- MySQL2
- Express
- Dotenv

## Como rodar localmente

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```
3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=pessoa
```
4. Inicie o servidor:
```bash
node src/Server.js
```

## Rotas

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /Users | Retorna todos os usuários |
| GET | /Users/buscar | Buscar Usuário pelo email |
| GET | /logins | Retorna o registro de logins |
| GET | /login/buscar | Busca os logins realizados pelo email informado (Email e horário de login)|
| GET | /buscar/ponto | Retornar os pontos batidos |
| POST | /Users | Cadastra um novo usuário |
| POST | /token/ponto/entrada | Bater o ponto na entrada com o token gerado no login |
| POST |/token/ponto/saida | Bater o ponto na saida com o token gerado no login |
| POST | /Users/login | Realizar Login |
| PUT | /Users/:id | Atualiza os dados de um usuário |
| DELETE | /Users/:id | Deleta um usuário |



## Observações

O arquivo `.env` não está incluído no repositório por conter dados sensíveis. Crie o seu localmente seguindo o exemplo acima.
