import model from"../model/Consultas.js"

const validacoes=async(dados)=>{
    const result=model.InserirUser(dados)
    return result
}
const validarEmail=async(email,dados)=>{
    const r=await model.verificarEmail(email)
    if(r.length>=1){
        throw new Error("Email já cadastrado");
    }
    return validacoes(dados)
}

const delUser=async(id)=>{
    const result=await model.DeletarUser(id)
    if(result.affectedRows===0){
        throw new Error("Id não encontrado");
    }
    console.log(result.affectedRows)
    return result
}
const ExibirUser=async()=>{
    const result=await model.ExibirDados()
    console.log(result)
    return result
}
const atualizarUser=(id,dados)=>{
    const result=model.updateUser(id,dados)
    return result

}
export default {validacoes,delUser,ExibirUser,atualizarUser
,
   validarEmail
}