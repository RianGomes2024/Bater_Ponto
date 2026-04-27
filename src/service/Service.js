import model from"../model/Consultas.js"
import bcrypt, { compare } from"bcrypt"

const emailExiste=async(email,dados)=>{
    const result=await model.verificarEmail(email)
    if(result.length>=1){
        throw new Error("Email já cadastrado");
    }
    dados.senha=await bcrypt.hash(dados.senha,1)
    console.log(dados.senha)
    const inserir=model.InserirUser(dados)
    return inserir
}
const logar=async(dados)=>{
    const bucEmail=await model.logar(dados)
    const valida=await model.inserirLogin(dados)

    console.log(bucEmail)
     if(bucEmail){
         const {email,senha}=bucEmail
        const verLogin=await compare(dados.senha,senha)
        if(!verLogin){
            throw new Error("Email ou senha Incorreto!");
        }
        const agora=new Date()
      
        return bucEmail
   }
   throw new Error("Email não encontrado");
}
const exibirLogin=async()=>{
    const result=await model.ExibirLogin()
    return result
    
}
const idToken=async(id)=>{
    const result=await model.pontoEntrada(id)
    return result
}
const buscarLogin=async(email)=>{
    const result=await model.buscarLogin(email)
    if(result.length===0){
        throw new Error("Email não encontrado!");
    }
    return result
}
const bucarUser=async(email)=>{
    const result= await model.buscarUser(email)
    if(result.length===0){
        throw new Error("Email não encontrado");
    }

    return result
}

const delUser=async(id)=>{
    const result=await model.DeletarUser(id)
    if(result.affectedRows===0){
        throw new Error("Id não encontrado");
    }
    return result
}
const ExibirUser=async()=>{
    const result=await model.ExibirDados()
    return result
}
const atualizarUser=(id,dados)=>{
    const result=model.updateUser(id,dados)
    return result
}
const registroPonto=async()=>{
    const result=await model.registroPonto()
    return result
}
const pontoSaida=async(horario,id)=>{
  const result=model.pontoSaida(horario,id)
  return result
}
export default {pontoSaida, registroPonto, idToken,buscarLogin,exibirLogin,delUser,bucarUser,ExibirUser,atualizarUser,emailExiste,logar}