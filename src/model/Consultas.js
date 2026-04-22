import db from"../database/Conexao.js"

const InserirUser=async(dados)=>{
    console.log(dados)
    const { nome, sobrenome, email, senha, cidade, Estado } = dados
    const sql="INSERT INTO pessoas(nome,sobrenome,email,senha,cidade,Estado) VALUES( ?, ?, ?, ?, ?, ?)"
    const result = await db.query(sql, [nome, sobrenome, email, senha, cidade, Estado])
    return result
}
const verificarEmail=async(email)=>{
    const sql="SELECT*FROM pessoas WHERE email=?"
    const [result]=await db.query(sql,[email])
    return result
}
const DeletarUser=async(id)=>{
    const sql="DELETE FROM pessoas WHERE idUser=?"
    const [result]=await db.query(sql,[id])
    return result
}
const ExibirDados=async()=>{
    const sql="SELECT*FROM pessoas"
    const [result]=await db.query(sql)
    return result
}
const updateUser=async(id,dados)=>{
const arrayKey=[]
const arrayVal=[]
for(let dado in dados){
    arrayKey.push(`${dado}=?`)
    arrayVal.push(dados[dado])
}
   const parseString=arrayKey.join(",")
   const sql=`UPDATE pessoas SET ${parseString} where idUser=?`
   const result= await db.query(sql,[...arrayVal,id])
   return result


}
export default {InserirUser,DeletarUser,ExibirDados,updateUser,verificarEmail}