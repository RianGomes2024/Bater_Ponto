import service from"../service/Service.js"
import jwt from "jsonwebtoken"
import "dotenv-safe/config.js"
const verificarEmail=async(req,res)=>{
   try {
    const email=req.body.email
    const dados=req.body
    await service.emailExiste(email,dados)
    res.status(201).json({ msg: "Usuário criado" })

  } catch (error) {
    res.status(400).json({ erro: error.message })
}
}
const buscarUser=async(req,res)=>{
  try{
    const email=req.body.email
  const resultado=await service.bucarUser(email)
  console.log(email)
    res.status(200).json(resultado)
  }catch(error){
    res.status(400).json({erro:error.message})
  }
}
const pontoEntrada=async(req,res)=>{
   const id=req.id
   const result=await service.idToken(id)
   console.log(id)
   return res.status(200).json({message:"Ponto batido"})
}

const inserirLogin=async(req,res)=>{
  try{  
    const dados=req.body
    const result=await service.logar(dados)
    console.log(result)
    const id=result.idUser
    const token=jwt.sign({id},process.env.jwt_secret,{
    expiresIn:parseInt(process.env.jwt_expiration)
    })
    
    return  res.status(201).json({message:"Logado"+" seu token é : " + token})
  }catch(error){

      res.status(400).json({erro:error.message})
  }
  
}
const buscarLogin=async(req,res)=>{
 try{
  const email=req.body.email
  const result=await service.buscarLogin(email)
  res.status(200).json(result)
 }catch(error){
   res.status(400).json({erro:error.message})
 }
}
const exibirLogin=async(req,res)=>{
  const result=await service.exibirLogin()
  res.status(200).json({result})
}


const DeletarUser=async(req,res)=>{
   try{
    const id=parseInt(req.params.id)
    const result=await service.delUser(id)
   res.status(200).json({message:"User Deletado"})
   }catch(error){
     res.status(200).json({erro: error.message})
   }
}
const ExibirUsers=async(req,res)=>{
   const result=await service.ExibirUser()
   res.status(200).json(result)

}
const alterar=(req,res)=>{
    const id=parseInt(req.params.id)
    const dados=req.body
    const result=service.atualizarUser(id,dados)
    res.status(200).json({message:"User Alterado"})
}

const registroPonto=async(req,res)=>{
  const result=await service.registroPonto()
  res.status(200).json({result})
}

const pontoSaida=async(req,res)=>{
  const id=req.id
  const hora = new Date().toLocaleString('sv-SE', { timeZone: 'America/Sao_Paulo' }).replace('T', ' ')
  const result=await service.pontoSaida(hora,id)
  res.status(200).json({message:"Ponto de saida batido"})
}

export default {pontoSaida, registroPonto,pontoEntrada,buscarLogin,exibirLogin,buscarUser,DeletarUser,ExibirUsers,alterar,verificarEmail,inserirLogin}