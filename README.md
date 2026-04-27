# Bater_Ponto
API REST para registro de ponto de funcionários com autenticação via JWT, desenvolvida com Node.js e MySQL.

## Tecnologias
- Node.js v20.20.0
- MySQL2
- Express
- Dotenv
- JWT (jsonwebtoken)
- Bcrypt

## Como rodar localmente
1. Clone o repositório
2. Instale as dependências:
```bash
3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=pessoa
JWT_SECRET=seu_segredo
JWT_EXPIRATION=300
```
4. Inicie o servidor:
```bash
node src/Server.js
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
| POST | /Users | Cadastra um novo usuário (senha criptografada com Bcrypt) |
| POST | /token/ponto/entrada | Bater o ponto na entrada com o token gerado no login |
| POST | /token/ponto/saida | Bater o ponto na saida com o token gerado no login |
| POST | /Users/login | Realizar Login e receber token JWT |
| PUT | /Users/:id | Atualiza os dados de um usuário |
| DELETE | /Users/:id | Deleta um usuário |

## Autenticação
As rotas de ponto utilizam autenticação via **JWT**. Após realizar login, utilize o token retornado no header das requisições:

## Segurança
- Senhas armazenadas com hash via **Bcrypt**
- Rotas de ponto protegidas por token **JWT** com expiração configurável

## Observações
O arquivo `.env` não está incluído no repositório por conter dados sensíveis. Crie o seu localmente seguindo o exemplo acima.
