import db from"../database/Conexao.js"

const InserirUser=async(dados)=>{
    console.log(dados)
    const { nome, sobrenome, email, senha, cidade, Estado } = dados
    console.log(senha)
    const sql="INSERT INTO pessoas(nome,sobrenome,email,senha,cidade,Estado) VALUES( ?, ?, ?, ?, ?, ?)"
    const result = await db.query(sql, [nome, sobrenome, email, senha, cidade, Estado])
    return result
}
const verificarEmail=async(email)=>{
    const sql="SELECT*FROM pessoas WHERE email=?"
    const [result]=await db.query(sql,[email])
    return result
}
const logar=async(dados)=>{
    const sql="SELECT idUser,email,senha FROM pessoas WHERE email=?"
    const [rows]=await db.query(sql,[dados.email])
    const result=rows[0]
    return result
}
const inserirLogin=async(dados)=>{
    const sql="INSERT INTO loginUser(idUser) SELECT idUser FROM pessoas WHERE email=?"
    const result= await db.query(sql,[dados.email])
    console.log("olá"+result)
    return result

}
const ExibirLogin=async()=>{
    const sql="SELECT idLogin,idUSer,DATE_FORMAT(horario, '%d/%m/%Y %H:%i:%s') AS horarioFormatado FROM loginUser"
    const [result]=await db.query(sql)
    return result

}
const buscarLogin=async(email)=>{
    const sql="SELECT pessoas.email,DATE_FORMAT(horario, '%d/%m/%Y %H:%i:%s') AS horarioLogin  FROM pessoas join loginUser on loginUser.idUser=pessoas.idUser WHERE pessoas.email=? "
    const [result]= await db.query(sql,[email])
    console.log(result)
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
const buscarUser=async(email)=>{
    const sql="SELECT nome,sobrenome,cidade,Estado FROM pessoas WHERE email=?"
    const [result]=await db.query(sql,[email])
    console.log(result)
    return result
}
const pontoEntrada=async(id)=>{
    const sql="INSERT INTO registrarPonto(idUser)  VALUES(?)"
    const result= await db.query(sql,[id])
    return result
}
const pontoSaida=async(horario,id)=>{
   const sql="UPDATE registrarPonto SET horarioSaida=? where idUser=? and horarioSaida IS NULL"
   const result=await db.query(sql,[horario,id])
   return result
}
const registroPonto=async()=>{
    const sql="SELECT*FROM registrarPonto"
    const [result]=await db.query(sql)
    return result
}



export default {pontoSaida,registroPonto,pontoEntrada,buscarLogin,ExibirLogin, buscarUser,InserirUser,DeletarUser,ExibirDados,updateUser,verificarEmail,logar,inserirLogin}