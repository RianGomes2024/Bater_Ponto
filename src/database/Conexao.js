import dotenv from "dotenv"
dotenv.config({ path: "C:/Users/Usuário/Documents/Api_pessoa/Backend/.env" })
import mysql from"mysql2/promise"

console.log("USER:", process.env.DB_USER)
console.log("HOST:", process.env.DB_HOST)

const conexao=mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
})
export default conexao